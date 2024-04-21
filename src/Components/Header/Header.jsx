// Navbar.js

import { NavLink, useLocation } from "react-router-dom"; // Using NavLink for active links and useLocation to get the current route
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const location = useLocation(); // Get the current route

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
              <NavLink
                exact
                to="/"
                className="ml-2 text-white font-bold"
                activeClassName="text-yellow-500"
              >
                GA
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink
                exact
                to="/"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:border-purple-600 hover:shadow-md ${
                  location.pathname === "/" ? "text-yellow-500" : ""
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:border-purple-600 hover:shadow-md ${
                  location.pathname === "/about" ? "text-yellow-500" : ""
                }`}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:border-purple-600 hover:shadow-md ${
                  location.pathname === "/projects" ? "text-yellow-500" : ""
                }`}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:border-purple-600 hover:shadow-md ${
                  location.pathname === "/contact" ? "text-yellow-500" : ""
                }`}
              >
                Contact
              </NavLink>

              <button className="p-5 content-center border-white border-2 drop-shadow-lg shadow-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                <h3 className="text-center font-bold text-white ">
                  <FontAwesomeIcon icon={faDownload} /> Resume
                </h3>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center ">
              <button className="md:hidden p-5 content-center border-white border-2 drop-shadow-lg shadow-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                <h3 className="text-center font-bold text-white ">
                  <FontAwesomeIcon icon={faDownload} /> Resume
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed ml-auto mr-auto bottom-0 left-0 w-full bg-gray-800">
        <div className="flex justify-around py-2">
          <NavLink
            exact
            to="/"
            className={`text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
              location.pathname === "/" ? "text-yellow-500" : ""
            }`}
          >
            <span className="mr-2">Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={`text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
              location.pathname === "/about" ? "text-yellow-500" : ""
            }`}
          >
            <span className="mr-2">About</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={`text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
              location.pathname === "/projects" ? "text-yellow-500" : ""
            }`}
          >
            <span className="mr-2">Projects</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={`text-white px-3 py-2 rounded-md text-sm font-medium flex items-center ${
              location.pathname === "/contact" ? "text-yellow-500" : ""
            }`}
          >
            <span className="mr-2">Contact</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
