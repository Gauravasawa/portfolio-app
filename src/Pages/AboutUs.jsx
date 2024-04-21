// AboutMe.js

import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-purple-600 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-800">
            I'm a passionate software developer with experience in building web
            applications. I love learning new technologies and solving complex
            problems.
          </p>
        </div>
        {/* Languages */}
        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-purple-600 mb-4">
            Languages I Know
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-10 h-10 transition duration-300">
              <FaReact size={20} />
            </div>
            <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-10 h-10 transition duration-300">
              <FaNodeJs size={20} />
            </div>
            <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-10 h-10 transition duration-300">
              <FaHtml5 size={20} />
            </div>
            <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-10 h-10 transition duration-300">
              <FaCss3 size={20} />
            </div>
            {/* Add more languages */}
          </div>
        </div>
        {/* Experience */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="text-xl font-semibold text-purple-600 mb-4">
            Experience
          </h3>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white">
                1
              </div>
              <div className="border-l-2 border-gray-300 ml-4 pl-4">
                <h4 className="text-lg font-semibold">ABC Company</h4>
                <p className="text-sm text-gray-600">Frontend Developer</p>
                <p className="text-sm text-gray-600">June 2020 - Present</p>
                <p className="text-gray-700 mt-2">
                  Responsible for developing responsive web applications using
                  React.js, integrating with backend APIs, and collaborating
                  with the design team to create user-friendly interfaces.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white">
                2
              </div>
              <div className="border-l-2 border-gray-300 ml-4 pl-4">
                <h4 className="text-lg font-semibold">XYZ Inc.</h4>
                <p className="text-sm text-gray-600">Full Stack Developer</p>
                <p className="text-sm text-gray-600">January 2018 - May 2020</p>
                <p className="text-gray-700 mt-2">
                  Led a team of developers to build and maintain multiple web
                  applications using a variety of technologies including
                  React.js, Node.js, and MongoDB.
                </p>
              </div>
            </div>
            {/* Add more experiences */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
