import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={orderImg}
        height="650px"
        title="Order Food"
        subtitle="Would you like to try a dish?"
      ></Cover>
      <div className="text-center mt-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={`border-b-0`}>
            <Tab>
              <span
                className={`font-bold ${
                  tabIndex === 0 ? "text-yellow-500" : "text-black"
                }`}
              >
                Salad
              </span>
            </Tab>
            <Tab>
              <span
                className={`font-bold ${
                  tabIndex === 1 ? "text-yellow-500" : "text-black"
                }`}
              >
                Pizza
              </span>
            </Tab>
            <Tab>
              <span
                className={`font-bold ${
                  tabIndex === 2 ? "text-yellow-500" : "text-black"
                }`}
              >
                Soups
              </span>
            </Tab>
            <Tab>
              <span
                className={`font-bold ${
                  tabIndex === 3 ? "text-yellow-500" : "text-black"
                }`}
              >
                Desserts
              </span>
            </Tab>
            <Tab>
              <span
                className={`font-bold ${
                  tabIndex === 4 ? "text-yellow-500" : "text-black"
                }`}
              >
                Drinks
              </span>
            </Tab>
          </TabList>
          <TabPanel>
            <OrderTab item={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab item={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab item={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab item={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab item={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
