// Projects.js

import ProjectCard from "../Components/Card/Card";

const Projects = () => {
  // Sample project data (replace with your actual project data)
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/300",
      githubUrl: "https://github.com/example/project1",
      liveUrl: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/300",
      githubUrl: "https://github.com/example/project2",
      liveUrl: "https://example.com/project2",
    },
    {
      id: 3,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/300",
      githubUrl: "https://github.com/example/project2",
      liveUrl: "https://example.com/project2",
    },
    {
      id: 4,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/300",
      githubUrl: "https://github.com/example/project2",
      liveUrl: "https://example.com/project2",
    },
    {
      id: 5,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/300",
      githubUrl: "https://github.com/example/project2",
      liveUrl: "https://example.com/project2",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-semibold text-purple-600 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
