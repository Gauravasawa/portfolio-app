import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  // Function to open email client
  const handleEmailClick = () => {
    window.location.href = "mailto:asawagaurav3@gmail.com";
  };

  // Function to open phone dialer
  const handlePhoneClick = () => {
    window.location.href = "tel:+918087907260";
  };

  return (
    <footer className="bg-gray-900 text-white py-8 mb-7 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {/* Contact Form Section */}
          {/* <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-purple-600">
              Contact Me
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-gray-800 text-purple-600 font-semibold placeholder-purple-600 focus:border-purple-600  caret-purple-600 !border-purple-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-800 text-purple-600 font-semibold placeholder-purple-600 focus:border-purple-600 caret-purple-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-bold" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 rounded bg-gray-800 text-purple-600 font-semibold placeholder-purple-600 focus:border-purple-600 caret-purple-600"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 drop-shadow-2xl shadow-white text-white font-semibold px-6 py-3 mt-6 rounded-lg btn"
              >
                Send Message
              </button>
            </form>
          </div> */}

          {/* Contact Info Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-purple-600">
              Contact Info
            </h2>
            <div className="flex items-center text-sm">
              <AiOutlineMail
                size={30}
                className="text-purple-600 shadow-2xl mr-2"
              />
              <p
                onClick={handleEmailClick}
                className="font-bold cursor-pointer xl:text-xl lg:text-xl hover:text-purple-600"
              >
                asawagaurav3@gmail.com
              </p>
            </div>
            <div className="flex items-center text-sm">
              <FaPhoneAlt
                size={30}
                className="text-purple-600 shadow-2xl mr-2"
              />

              <p
                onClick={handlePhoneClick}
                className="font-bold cursor-pointer xl:text-xl lg:text-xl hover:text-purple-600"
              >
                +91 8087907260
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-purple-600">
              FIND ME ON
            </h2>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/gaurav.asawa.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 relative"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full !border-purple-600 border-2 bg-white shadow-md transition duration-300 hover:shadow-[0px_9px_30px_9px_rgba(212,0,255,1)]">
                    <FaFacebookF className="text-2xl text-purple-600" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Gaurav_asawa4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 relative"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full !border-purple-600 border-2 bg-white shadow-md transition duration-300 hover:shadow-[0px_9px_30px_9px_rgba(212,0,255,1)]">
                    <FaTwitter className="text-2xl text-purple-600" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/in/gaurav-asawa-84a93314a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 relative"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full !border-purple-600 border-2 bg-white shadow-md transition duration-300 hover:shadow-[0px_9px_30px_9px_rgba(212,0,255,1)]">
                    <FaLinkedinIn className="text-2xl text-purple-600" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Gauravasawa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 relative"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full !border-purple-600 border-2 bg-white shadow-2xl transition duration-300  hover:shadow-[0px_9px_30px_9px_rgba(212,0,255,1)]">
                    <FaGithub className="text-2xl text-purple-600" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gauravasawa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 relative"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full !border-purple-600 border-2 bg-white shadow-2xl transition duration-300  hover:shadow-[0px_9px_30px_9px_rgba(212,0,255,1)]">
                    <FaInstagram className="text-2xl text-purple-600" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-center xl:text-xl lg:text-xl text-sm font-semibold">
          <p>&copy; 2024 GA.</p>
          <p>
            Designed & Developed with Love by
            <span className="text-purple-600 ml-2" onClick={handleEmailClick}>
              Gaurav Asawa.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
