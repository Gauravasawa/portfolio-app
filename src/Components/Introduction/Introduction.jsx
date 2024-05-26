// const Introduction = () => {
//   return (
//     <div className="max-w-3xl mx-auto text-center py-10">
//       <h2
//         className="text-3xl text-white mb-7 "
//         style={{
//           fontSize: "2.6em",
//           fontWeight: 500,
//           lineHeight: 1.2,
//           fontFamily: "sans-serif",
//         }}
//       >
//         Let Me <span className="text-purple-600">Introduce</span> Myself
//       </h2>
//       <p
//         className="text-gray-100 font-semibold "
//         style={{ fontSize: " 1.2em", fontFamily: "sans-serif" }}
//       >
//         I'm passionate about programming and always eager to learn new
//         technologies.
//       </p>
//       <p
//         className="text-gray-100 mt-4 font-semibold "
//         style={{ fontSize: " 1.2em", fontFamily: "sans-serif" }}
//       >
//         While my expertise lies in modern web technologies like{" "}
//         <span className="text-purple-600">JavaScript</span> &{" "}
//         <span className="text-purple-600">NodeJs</span>, I'm always exploring
//         and expanding my skills.
//       </p>
//       <p
//         className="text-gray-100 mt-4 font-semibold "
//         style={{ fontSize: " 1.2em", fontFamily: "sans-serif" }}
//       >
//         Currently, I enjoy working with frameworks like{" "}
//         <span className="text-purple-600">React.js</span>,{" "}
//         <span className="text-purple-600">Next.js</span>,{" "}
//         <span className="text-purple-600">React Native</span> and{" "}
//         <span className="text-purple-600">Svelte</span> to build innovative web
//         applications.
//       </p>
//     </div>
//   );
// };

// export default Introduction;

import { Tilt } from "react-tilt";
import ProfileSVG from "../../assets/avatar.svg";

const Introduction = () => {
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
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 items-center">
      {/* Introduction Text */}
      <div className="md:w-1/2 text-left md:text-left mb-6 md:mb-0">
        <h2
          className="text-3xl text-white mb-7"
          style={{
            fontSize: "2.6em",
            fontWeight: 500,
            lineHeight: 1.2,
            fontFamily: "sans-serif",
          }}
        >
          Let Me <span className="text-purple-600">Introduce</span> Myself
        </h2>
        <p
          className="text-gray-100 font-semibold"
          style={{ fontSize: " 1.2em", fontFamily: "sans-serif" }}
        >
          I'm passionate about programming and always eager to learn new
          technologies.
        </p>
        <p
          className="text-gray-100 mt-4 font-semibold"
          style={{ fontSize: " 1.2em", fontFamily: "sans-serif" }}
        >
          While my expertise lies in modern web technologies like{" "}
          <span className="text-purple-600">JavaScript</span> &{" "}
          <span className="text-purple-600">NodeJs</span>, I'm always exploring
          and expanding my skills.
        </p>
        <p
          className="text-gray-100 mt-4 font-semibold"
          style={{ fontSize: " 1.2em", fontFamily: "sans-serif" }}
        >
          Currently, I enjoy working with frameworks like{" "}
          <span className="text-purple-600">React.js</span>,{" "}
          <span className="text-purple-600">Next.js</span>,{" "}
          <span className="text-purple-600">React Native</span> and{" "}
          <span className="text-purple-600">Svelte</span> to build innovative
          web applications.
        </p>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div>
          <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
            <img
              src={ProfileSVG}
              alt="Profile"
              className="rounded-lg shadow-lg max-w-xs"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
