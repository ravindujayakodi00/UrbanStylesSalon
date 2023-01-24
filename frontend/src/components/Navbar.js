import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";
import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

function MainNavbar() {
  const [Active, setActive] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  }


  const onToggleMenu = () => {
    setActive(!Active);

    // nav-links lg:static absolute lg:min-h-fit min-h-[60vh] left-0 top-[9%] lg:w-auto w-full flex items-center px-0

    if (!Active) {
      document.querySelector(".nav-links").classList.remove("top-[-200%]");
      document.querySelector(".nav-links").classList.add("top-[15%]");
      document.querySelector(".nav-links").classList.add("bg-violet-50");
    } else {
      document.querySelector(".nav-links").classList.remove("top-[15%]");
      document.querySelector(".nav-links").classList.add("top-[-200%]");
      document.querySelector(".nav-links").classList.remove("bg-white");
    }
  };

  return (
    <nav className=" flex justify-between items-center">
      <div className="nav-links lg:static absolute lg:min-h-fit min-h-[35vh] left-0 top-[-200%] lg:w-auto w-full flex items-center px-0">
        <ul className="flex lg:flex-row flex-col lg:items-center md:mt-0 sm:mt-20 lg:gap-[4vm]  lg:mt-0  gap-8">
          <li className=" hover:bg-white lg:hover:bg-transparent">
            <Link
              className="text-gray-800 hover:text-gray-500  lg:ml-10 ml-8"
              to="/"
            >
              Home
            </Link>
          </li>
          {/* <li className="md:hidden">
            <Link
              className="text-gray-800 hover:text-gray-500 lg:ml-10 ml-8"
              to="/"
            >
              Make an Appointment
            </Link>
          </li> */}
          <li>
            <Link
              className="text-gray-800 hover:text-gray-500 lg:ml-10 ml-8"
              to="/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-800 hover:text-gray-500 lg:ml-10 ml-8"
              to="/"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-800 hover:text-gray-500 lg:ml-10 ml-8 lg:mr-[-400px]"
              to="/"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo sm:ml-10 lg:ml-[-100px]">
        <img
          className="w-24"
          src="https://i.ibb.co/BTqXdM4/logo.png"
          alt="Logo"
        />
      </div>
      <div>
        <ul className="flex items-center gap-4">
          {!user && (
            <div className="flex gap-4">
            <li>
              <Link
                className="text-gray-800 hover:text-gray-500 lg:mr-8 mr-2 py-2"
                to="login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:text-gray-500 bg-white lg:mr-20 mr-0 px-2 py-2 rounded-full "
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
            </div>
          )}
          {user && (
          <div className="flex my-0 py-0">
          <li className="sm:block hidden"> 
            <Link
                className="btn btn-dark text-gray-800 mr-6 px-3 py-2"
                to="/">
                Make an Appointment
            </Link>
          </li>
          <li>
              <Link onClick={handleLogout}
                className="btn btn-outline-dark text-gray-800 lg:mr-20 mr-0 px-3 py-2"
                to="/"
              >
                Logout
              </Link>
            </li>
          </div>
          )}

          <button
            onClick={onToggleMenu}
            className="mr-5 text-3xl cursor-pointer lg:hidden"
          >
            {Active ? <FaRegTimesCircle /> : <BiMenu />}
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
