import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaCalendarCheck,
  FaFileSignature,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from server
  // const isAdmin = false;

  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  


  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 uppercase">
            <li className="text-center"><Link to="/" className="text-center normal-case text-2xl font-serif my-2">
            BISTRO BOSS <br /> Restaurant
          </Link></li>
       {
        isAdmin ? 
        <>
           <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/dashboard/home">
              <FaHome /> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/dashboard/reservations">
             <FaUtensils /> Add Item
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/dashboard/history">
              <FaBars /> Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/managebookings">
              <FaBook /> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/dashboard/allusers">
              <FaUsers /> All Users
            </NavLink>
          </li>
        </> 
        :
        <>
           <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/dashboard/home">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/dashboard/reservations">
              <FaCalendarAlt></FaCalendarAlt> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/dashboard/history">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart> My Cart
              <span className="badge inl badge-secondary">
                +{cart?.length || 0}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/review">
              <FaFileSignature /> Add Review
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
            isActive ? "font-semibold text-white" : ""
          } to="/booking">
              <FaCalendarCheck /> My Booking
            </NavLink>
          </li>
        </>
       }
          <div className="h-[1px] w-full bg-white my-3"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu"><FaBars /> Our Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad"><FaShoppingBag /> Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
