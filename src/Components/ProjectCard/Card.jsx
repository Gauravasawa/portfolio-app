// ProjectCard.js
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  projectId,
  alt,
}) => {
  return (
    <div className=" bg-gray-900 max-w-xs rounded overflow-hidden shadow-lg mt-3">
      {/* <Link to={`/projects/${projectId}`}> */}
      <div className="relative">
        <img
          className="w-full"
          src={imageUrl}
          alt={alt}
          style={{ height: "320px", width: "320px", objectFit: "cover" }}
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-700 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center text-white px-6 py-4">
          <div>
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-200">{description}</p>
          </div>
        </div>
      </div>
      {/* </Link> */}
      <div className="px-6 py-4">
        <a
          href={githubUrl}
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2"
        >
          Github
        </a>
        {liveUrl.length > 0 ? (
          <a
            href={liveUrl}
            target="__blank"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white rounded-full px-3 py-1 text-sm font-semibold"
          >
            Live Demo
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
