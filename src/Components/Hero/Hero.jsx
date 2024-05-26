// Hero.js
import { useNavigate } from "react-router-dom"; // Using NavLink for active links and useLocation to get the current route
import TypeWritter from "./TypeWritter";
import HeroImage from "../../assets/hero-image.svg";
import { Tilt } from "react-tilt";

const Hero = () => {
  const navigate = useNavigate();
  const navigatePortfolio = () => {
    // Navigate to /projects
    navigate("/projects");
  };

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">
              Gaurav Asawa <br />
              <br />
              <span className="text-lg md:text-xl  text-purple-600">
                <TypeWritter />
              </span>
            </h1>
            <p className="text-lg md:text-xl">
              I design and build beautiful websites to help businesses grow
              online.
            </p>
            <button
              onClick={navigatePortfolio}
              className="bg-purple-500 hover:bg-purple-600 drop-shadow-2xl shadow-white text-white font-semibold px-6 py-3 mt-6 rounded-lg btn "
            >
              View Portfolio
            </button>
          </div>

          {/* Right Column - Image/Video */}
          <div>
            <Tilt options={defaultOptions}>
              <img
                src={HeroImage}
                alt="Gaurav Asawa Hero"
                className="rounded-lg shadow-md"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
