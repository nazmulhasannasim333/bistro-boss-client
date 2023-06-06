import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignin()
      .then((result) => {
        const loggedUser = result.user;

        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };

        fetch(`https://bistro-boss-server-nazmulhasannasim333.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Saved.",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="h-[1px] w-3/4 mx-auto bg-black "></div>
      <div className="text-center my-6">
        <button onClick={handleGoogleLogin} className="btn bg-white btn-circle">
          <FaGoogle className="text-green-600 font-semibold text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
