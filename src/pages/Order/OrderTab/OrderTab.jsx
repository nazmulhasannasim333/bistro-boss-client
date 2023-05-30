import React, { useState } from "react";
import OrderItem from "../../Shared/OrderItem/OrderItem";

const OrderTab = ({ item }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [foodPerPage, setfoodPerPage] = useState(6);
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(item.length / foodPerPage); i++) {
    pageNumber.push(i);
  }

  const lastPage = currentPage * foodPerPage;
  const firstPage = lastPage - foodPerPage;
  const pageItem = item.slice(firstPage, lastPage);

  return (
    <>
      <div className="max-w-7xl mx-auto my-10">
        <div className="lg:grid grid-cols-3 gap-5 my-20">
          {pageItem.map((item) => (
            <OrderItem key={item._id} item={item} />
          ))}
        </div>
        {pageNumber.map((page, i) => (
        <button
          className={`bg-slate-800 px-3 py-1  mx-2 rounded-md font-semibold text-md text-white ${page == currentPage ? "bg-yellow-600" : ""}`}
          onClick={() => setCurrentPage(page)}
          key={i}
        >
          {page}
        </button>
      ))}
      </div>
      
    </>
  );
};

export default OrderTab;
