// Navbar.js

import { NavLink, useLocation } from "react-router-dom"; // Using NavLink for active links and useLocation to get the current route
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import Logo from "../../assets/Logo.png";
import Resume from "../../assets/Gaurav_Asawa_Resume.pdf";

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
                to="/"
                className={`text-white px-3 py-2 rounded-md text-xl  font-bold hover:text-purple-700 hover:border-purple-600 hover:shadow-md ${
                  location.pathname === "/" ? "!text-purple-500" : ""
                }`}
              >
                GA
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink
                to="/"
                className={`text-white px-3 py-2 rounded-md text-sm font-semibold hover:text-purple-700 hover:border-purple-600 hover:shadow-md ${
                  location.pathname === "/" ? "!text-purple-500" : ""
                }`}
              >
                <span className="flex flex-row flex-wrap items-center">
                  <AiOutlineHome style={{ marginRight: 3 }} size={15} /> Home
                </span>
              </NavLink>
              <NavLink
                to="/about"
                className={`text-white px-3 py-2 rounded-md text-sm font-semibold hover:text-purple-700 hover:border-purple-600 hover:shadow-md ${
                  location.pathname === "/about" ? "!text-purple-500" : ""
                }`}
              >
                <span className="flex flex-row flex-wrap items-center">
                  <AiOutlineUser style={{ marginRight: 3 }} size={15} /> About
                </span>
              </NavLink>
              <NavLink
                to="/projects"
                className={`text-white px-3 py-2 rounded-md text-sm font-semibold hover:text-purple-700 hover:border-purple-600 hover:shadow-md ${
                  location.pathname === "/projects" ? "!text-purple-500" : ""
                }`}
              >
                <span className="flex flex-row flex-wrap items-center">
                  <AiOutlineFundProjectionScreen
                    style={{ marginRight: 3 }}
                    size={15}
                  />{" "}
                  Projects
                </span>
              </NavLink>
              <NavLink
                to="/blog"
                className={`text-white px-3 py-2 rounded-md text-sm font-semibold hover:text-purple-700 hover:border-purple-600 hover:shadow-md ${
                  location.pathname === "/blog" ? "!text-purple-500" : ""
                }`}
              >
                <span className="flex flex-row flex-wrap items-center">
                  <ImBlog style={{ marginRight: 3 }} size={15} /> Blog
                </span>
              </NavLink>

              <a
                href={Resume}
                download="Gaurav_Asawa_Resume.pdf"
                target="_blank"
              >
                <button className="p-5 content-center border-white border-2 drop-shadow-lg shadow-white  hover:border-purple-500 hover:shadow-purple-600 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  <h3 className="text-center font-bold text-white">
                    <FontAwesomeIcon icon={faDownload} /> Resume
                  </h3>
                </button>
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center ">
              <a
                href={Resume}
                download="Gaurav_Asawa_Resume.pdf"
                target="_blank"
              >
                <button className="md:hidden p-5 content-center border-white border-2 drop-shadow-lg hover:border-purple-500 hover:shadow-purple-600 shadow-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                  <h3 className="text-center font-bold text-white ">
                    <FontAwesomeIcon icon={faDownload} /> Resume
                  </h3>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed ml-auto mr-auto bottom-0 left-0 w-full bg-gray-800 z-10">
        <div className="flex justify-around py-2">
          <NavLink
            to="/"
            className={`text-white px-3 py-2 rounded-md text-sm font-semibold flex items-center hover:text-purple-700 hover:border-purple-600 ${
              location.pathname === "/" ? "!text-purple-500" : ""
            }`}
          >
            <span className=" flex flex-row flex-wrap items-center mr-2 justify-center ">
              <AiOutlineHome style={{ marginRight: 3 }} size={15} /> Home
            </span>
          </NavLink>

          <NavLink
            to="/about"
            className={`text-white px-3 py-2 rounded-md text-sm font-semibold flex items-center hover:text-purple-700 hover:border-purple-600 ${
              location.pathname === "/about" ? "!text-purple-500" : ""
            }`}
          >
            <span className="flex flex-row flex-wrap items-center mr-2 justify-center ">
              <AiOutlineUser style={{ marginRight: 3 }} size={15} /> About
            </span>
          </NavLink>
          <NavLink
            to="/projects"
            className={`text-white px-3 py-2 rounded-md text-sm font-semibold flex items-center hover:text-purple-700 hover:border-purple-600 ${
              location.pathname === "/projects" ? "!text-purple-500" : ""
            }`}
          >
            <span className="flex flex-row flex-wrap items-center mr-2 justify-center">
              <AiOutlineFundProjectionScreen
                style={{ marginRight: 3 }}
                size={15}
              />{" "}
              Projects
            </span>
          </NavLink>
          <NavLink
            to="/blog"
            className={`text-white px-3 py-2 rounded-md text-sm font-semibold flex items-center hover:text-purple-700 hover:border-purple-600 ${
              location.pathname === "/blog" ? "!text-purple-500" : ""
            }`}
          >
            <span
              className="flex flex-row flex-wrap items-center mr-2 justify-center
            
            "
            >
              <ImBlog style={{ marginRight: 3 }} size={15} /> Blog
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
