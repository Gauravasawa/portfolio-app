import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "../Components/ProjectCard/Card";
import Hero from "../Components/Hero/Hero";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BlogSection from "../Components/blogs/Blogs";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Projects section */}
      <div>
        {/* Heading "Projects" with See More link */}
        <div className="flex justify-between items-center mb-4 mt-2">
          <h2 className="text-3xl md:text-2xl font-semibold text-purple-600 ml-6">
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
            projectId={1}
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="https://image.tmdb.org/t/p/original/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg"
            githubUrl="https://github.com/example/project1"
            liveUrl="https://example.com/project1"
          />
          <ProjectCard
            projectId={2}
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="https://image.tmdb.org/t/p/original/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg"
            githubUrl="https://github.com/example/project2"
            liveUrl="https://example.com/project2"
          />
          <ProjectCard
            projectId={3}
            title="Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="https://image.tmdb.org/t/p/original/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg"
            githubUrl="https://github.com/example/project2"
            liveUrl="https://example.com/project2"
          />
        </div>

        {/* Blog Section */}
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
