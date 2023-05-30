import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import OrderItem from "../../Shared/OrderItem/OrderItem";

const Recommended = () => {
  const [menu] = useMenu()
  const popular = menu.filter(items => items.category === "popular")
  return (
    <div className="max-w-7xl mx-auto my-20 px-6 lg:px-0">
        <SectionTitle
                heading="CHEF RECOMMENDS"
                subHeading="Should Try"
            ></SectionTitle>
      <div className="lg:grid grid-cols-3 gap-5">
      {
        popular.map(item => <OrderItem key={item._id} item={item} />)
      }
        
      </div>
    </div>
  );
};

export default Recommended;
