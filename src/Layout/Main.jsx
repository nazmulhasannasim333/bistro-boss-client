import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();

  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {isLogin || <Navbar />}
      <Outlet />
      {isLogin || <Footer />}
      <ScrollRestoration />
    </div>
  );
};

export default Main;
