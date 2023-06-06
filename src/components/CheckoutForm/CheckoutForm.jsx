import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import './CheckoutForm.css';

const CheckoutForm = ({ price, cart }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  console.log(price);

  useEffect(() => {
    if(price > 0){
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (evenet) => {
    evenet.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setTransactionId("");
      console.log("error", error);
    } else {
      console.log("paymentmathod", paymentMethod);
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirmError", confirmError);
    }

    setProcessing(false);
    console.log("paymentIntent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        orderStatus: 'service pending',
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        manuItems: cart.map(item => item.foodId),
        itemName: cart.map((item) => item.name),
      };

      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.inserResult.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment has been successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "gray",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <button
            disabled={!stripe || !clientSecret || processing}
            className="btn btn-wide mt-20 bg-indigo-600 border-0"
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-red-600 mt-12 text-center">{cardError}</p>
      )}
      {transactionId && (
        <p className="text-green-500 mt-12 text-center">
          Payment complete with transaction id: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
