// Hero.js
import React from "react";
import TypeWritter from "./TypeWritter";
import HeroImage from "../../assets/hero-image.svg";

const Hero = () => {
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
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 mt-6 rounded-lg">
              View Portfolio
            </button>
          </div>

          {/* Right Column - Image/Video */}
          <div>
            {/* Replace the image URL with your own */}
            <img src={HeroImage} alt="Hero" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
