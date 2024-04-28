import {
  FaAssistiveListeningSystems,
  FaHourglassHalf,
  FaReact,
} from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = ({ resumeExperience, resumeBasicInfo }) => {
  if (resumeExperience && resumeBasicInfo) {
    var sectionName = resumeBasicInfo.section_name.experience;
    var work = resumeExperience.map((work, i) => {
      const technologies = work.technologies;
      const mainTechnologies = work.mainTech;

      var mainTech = mainTechnologies.map((technology, i) => {
        return (
          <span
            className="badge mr-2 mb-2 font-bold text-white"
            key={i}
            style={{ backgroundColor: "#c770f0" }}
          >
            {technology}
          </span>
        );
      });
      var tech = technologies.map((technology, i) => {
        // Render different icons based on the technology
        let icon;
        if (technology === "React") {
          icon = <FaReact className="experience-icon" />;
        } else if (technology === "Svelte") {
          icon = <FaAssistiveListeningSystems className="experience-icon" />;
        } else {
          // You can add more conditions for other technologies
          icon = null; // Or provide a default icon
        }
        return (
          <span
            className="badge mr-2 mb-2 font-bold text-white"
            key={i}
            style={{ backgroundColor: "#c770f0" }}
          >
            {icon}
            {technology}
          </span>
        );
      });
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-white"
          date={work.years}
          iconStyle={{
            background: "#c770f0", // Matching with the AboutMe component's color scheme
            color: "#fff",
            textAlign: "center",
          }}
          icon={
            mainTechnologies.includes("React") ? (
              <FaReact className="experience-icon" />
            ) : (
              <RiSvelteFill className="experience-icon" />
            )
          }
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTech}
          </div>

          <h3
            className="vertical-timeline-element-title font-semibold text-white"
            style={{ textAlign: "left" }} // Matching with the AboutMe component's color scheme
          >
            {work.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle font-semibold text-white"
            style={{ textAlign: "left" }} // Matching with the AboutMe component's color scheme
          >
            {work.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });
  }

  return (
    <section id="resume" className="pb-5 bg-gray-800">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "#c770f0" }}>
            <span
              className="text-white ml-2 font-bold"
              style={{ textAlign: "center" }}
            >
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#c770f0",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<FaHourglassHalf className="experience-icon" />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
