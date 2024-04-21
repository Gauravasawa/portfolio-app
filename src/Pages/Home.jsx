import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "../Components/Card/Card";
import Hero from "../Components/Hero/Hero";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <Hero />

      <div>
        {/* Heading "Projects" with See More link */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-purple-600 ml-6">
            Projects
          </h2>
          <a
            href="/projects"
            className="flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300 ml-6 mr-5"
          >
            <span className="mr-1">See More </span>{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        {/* Project Cards */}
        <div className="flex mt-5 mb-5 justify-around flex-wrap">
          <ProjectCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="https://image.tmdb.org/t/p/original/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg"
            githubUrl="https://github.com/example/project1"
            liveUrl="https://example.com/project1"
          />
          <ProjectCard
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="https://image.tmdb.org/t/p/original/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg"
            githubUrl="https://github.com/example/project2"
            liveUrl="https://example.com/project2"
          />
          {/* Add more ProjectCard components for additional projects */}
        </div>
      </div>
    </div>
  );
};

export default Home;
