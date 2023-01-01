import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="absolute">
        <ul className="flex md:flex-row flex-col items-center gap-4">
          <li>
            <Link className="text-gray-800 hover:text-gray-500 ml-10" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 ml-10" to="/">
              Services
            </Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 ml-10" to="/">
              Our Team
            </Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 ml-10 mr-0" to="/">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img
          className="w-24"
          src="https://i.ibb.co/BTqXdM4/logo.png"
          alt="Logo"
        />
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <Link className="text-gray-800 hover:text-gray-500 mr-8" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="text-gray-800 hover:text-gray-500 bg-white mr-12 px-4 py-2 rounded-full " to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
