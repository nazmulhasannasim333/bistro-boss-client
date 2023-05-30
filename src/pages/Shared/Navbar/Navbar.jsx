import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  console.log(cart);

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }
  const menuOption = (
    <>
      <li className="font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-yellow-600" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "font-bold text-yellow-600" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/order/salad"
          className={({ isActive }) =>
            isActive ? "font-bold text-yellow-600" : ""
          }
        >
          Order Food
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          to="/dashboard/mycart"
          className={({ isActive }) =>
            isActive ? "font-bold text-yellow-600" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-slate-800 bg-opacity-60 text-white fixed z-30 py-4 lg:px-32">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52"
            >
              {menuOption}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-serif">
            BISTRO BOSS <br /> Restaurant
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuOption}</ul>
        </div>
        <div className="navbar-end">

        <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cart?.length || 0}</span>
        </div>
      </label>

          {user ? (
            <>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar mx-3"
              >
                <div className="w-10 rounded-full">
                  <img title={user && user.displayName} src={user && user.photoURL} />
                </div>
              </label>
              <li className="font-bold list-none">
                <Link to="/login">
                  <button onClick={handleLogOut} className="py-3 px-6 rounded-md btn-warning">
                    Logout
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <li className="font-bold list-none">
              <Link to="/login">
                <button className="py-3 px-6 rounded-md btn-warning">
                  Login
                </button>
              </Link>
            </li>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
