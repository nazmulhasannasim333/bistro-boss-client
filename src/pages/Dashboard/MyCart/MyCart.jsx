import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const price = cart.reduce((total, item) => item.price + total, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full  bg-slate-100">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div>
        <SectionTitle heading="WANNA ADD MORE?" subHeading="My Cart" />
      </div>
      <div className="mx-28 bg-white px-10 py-5 mb-24">
        <div className="uppercase text-2xl font-bold flex justify-evenly py-5">
          <h3>Total Orders: {cart.length}</h3>
          <h3>Total Price: ${price}</h3>
          <button className="btn btn-sm bg-[#D1A054] border-none  px-5">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Food" />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="">${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
