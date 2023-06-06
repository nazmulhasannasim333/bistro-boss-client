import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "../../../components/CheckoutForm/CheckoutForm";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_payment_PK);

const Payment = () => {
  const [cart] = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total .toFixed(2));
  
  return (
    <div className="w-full bg-slate-100 h-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div>
        <SectionTitle heading="Payment Now" subHeading="Proccess to" />
      </div>
      <div className="max-w-3xl mx-auto my-32 bg-white py-10 px-16">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} cart={cart} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
