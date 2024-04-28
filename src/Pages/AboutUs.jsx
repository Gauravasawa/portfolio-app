// AboutMe.js
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import Experience from "../Components/Experience/Experience";
import Marquee from "react-fast-marquee";
import { RiSvelteFill } from "react-icons/ri";

const AboutMe = () => {
  const resumeExperience = [
    {
      title: "Frontend Developer",
      company: "ABC Company",
      years: "June 2020 - Present",
      mainTech: ["React"],
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Full Stack Developer",
      company: "XYZ Inc.",
      years: "January 2018 - May 2020",
      mainTech: ["Svelte", "Node.js"],
      technologies: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
    },
    // Add more experiences as needed
  ];

  const resumeBasicInfo = {
    section_name: {
      experience: "Experience",
    },
  };

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-purple-600 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-100">
            I'm a passionate software developer with experience in building web
            applications. I love learning new technologies and solving complex
            problems.
          </p>
        </div>
        {/* Languages */}
        <div className="bg-gray-800 shadow-md rounded-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Languages I Know
          </h3>

          <Marquee
            pauseOnHover={true}
            speed={30}
            gradient={true}
            gradientColor="#c770f0"
            gradientWidth={15}
          >
            <div className="flex flex-wrap gap-4">
              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300">
                <FaReact size={50} />
              </div>
              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300">
                <FaNode size={50} />
              </div>
              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300">
                <RiSvelteFill size={50} />
              </div>
              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300">
                <SiNextdotjs size={50} />
              </div>
              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300">
                <SiTypescript size={50} />
              </div>
              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300">
                <TbBrandRedux size={50} />
              </div>
              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300">
                <FaNodeJs size={50} />
              </div>

              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300">
                <FaBootstrap size={50} />
              </div>
              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300">
                <FaHtml5 size={50} />
              </div>
              <div className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center w-24 h-24 transition duration-300 ">
                <FaCss3 size={50} />
              </div>

              {/* Add more languages */}
            </div>
          </Marquee>
        </div>
        {/* Experience */}
        {/* <div className="bg-gray-800  shadow-md rounded-md p-6">
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
        {/* </div>
        </div>  */}
        <div>
          <Experience
            resumeExperience={resumeExperience}
            resumeBasicInfo={resumeBasicInfo}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
