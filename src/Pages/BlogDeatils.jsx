import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams(); // Access the id parameter from the URL

  // Example blog data (replace with actual data fetching logic)
  const blog = {
    id: id,
    title: "Sample Blog Title",
    category: "Technical",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla diam et ligula dignissim fermentum.
      Donec scelerisque turpis in metus fermentum eleifend. Sed consequat volutpat dolor eget elementum.
      Fusce vitae neque nec urna tempor tempus ut nec justo. Donec eu semper ligula. Phasellus commodo,
      metus nec gravida efficitur, lectus odio lacinia nisl, ut luctus diam ex in elit. Mauris nec lobortis turpis.
    `,
    codeSnippet: `
      function greet(name) {
        console.log("Hello, " + name + "!");
      }
      
      greet("World");
    `,
    screenshotUrl: "https://via.placeholder.com/600x400",
  };

  return (
    <div className="container mx-auto py-10 p-2">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 uppercase mr-2">
            {blog.category}
          </span>
          <span className="text-sm text-gray-600">
            Published on March 20, 2024
          </span>
        </div>
        <p className="text-lg mb-8">{blog.content}</p>
        <div className="bg-gray-900 rounded-lg p-4 mb-8">
          <pre className="text-sm text-gray-300 overflow-auto">
            {blog.codeSnippet}
          </pre>
        </div>
        <img
          src={blog.screenshotUrl}
          alt={blog.title}
          className="rounded-lg shadow-md mb-8"
        />
      </div>
    </div>
  );
};

export default BlogDetail;
