import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams(); // Access the id parameter from the URL

  // Example project data (replace with actual data fetching logic)
  const project = {
    id: id,
    title: "Sample Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/600x400",
    githubUrl: "https://github.com/example/project",
    liveUrl: "https://example.com/project",
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-gray-900 text-white py-20 mb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Project Details */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl mb-6">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg"
              >
                View on GitHub
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Right Column - Project Image */}
          <div>
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-lg shadow-md"
                />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-lg shadow-md"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
