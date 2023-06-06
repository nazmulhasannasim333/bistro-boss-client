import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Signup from "../pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "userhome",
        element: <UserHome />
      },
      {
        path: "mycart",
        element: <MyCart />
      },
      {
        path: "payment",
        element: <Payment />
      },
      // admin routes
      {
        path: "adminhome",
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: "allusers",
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: "additem",
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path: "manageitems",
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
    ]
  },
]);
