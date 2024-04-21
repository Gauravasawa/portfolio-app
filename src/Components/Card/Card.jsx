// ProjectCard.js

import React from "react";

const ProjectCard = ({ title, description, imageUrl, githubUrl, liveUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-700 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center text-white px-6 py-4">
          <div>
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-200">{description}</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <a
          href={githubUrl}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2"
        >
          Github
        </a>
        <a
          href={liveUrl}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white rounded-full px-3 py-1 text-sm font-semibold"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
