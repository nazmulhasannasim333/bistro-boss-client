import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";

const OrderItem = ({ item }) => {
  const {user} = useContext(AuthContext);
  const [, refetch] = useCart()
  const {name, image, _id, price} = item;
  const navigate = useNavigate()
  const location = useLocation()


  const handleAddToCart = (item) => {
    if(user && user?.email){
      const cartItem = {foodId: _id, name, image, price, email: user.email}
      fetch(`http://localhost:5000/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your product has been added to the cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please Login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate("/login", {state: {from: location}})
        }
      })
    }
  }


  return (
    <div className="card  bg-base-200 shadow-sm my-6 lg:my-0">
      <img src={image} alt="Food" className="rounded-xl h-72 w-full" />
      <p className="bg-slate-800 absolute right-5 top-5 text-xl font-semibold px-6 text-white">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <div className="card-actions">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-yellow-600 border-b-yellow-600 mt-4 hover:text-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
