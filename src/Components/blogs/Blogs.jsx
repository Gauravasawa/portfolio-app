import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BlogSection = () => {
  // Dummy blog data
  const blogs = [
    {
      id: 1,
      title: "Title of Blog Post 1",
      imageUrl: "https://via.placeholder.com/600x400",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum justo nec velit volutpat, et malesuada nunc tempor.",
      link: "#",
    },
    {
      id: 2,
      title: "Title of Blog Post 2",
      imageUrl: "https://via.placeholder.com/600x400",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum justo nec velit volutpat, et malesuada nunc tempor.",
      link: "#",
    },
    {
      id: 3,
      title: "Title of Blog Post 3",
      imageUrl: "https://via.placeholder.com/600x400",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum justo nec velit volutpat, et malesuada nunc tempor.",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-purple-600 mb-4">
              Blog
            </h2>
            <p className="text-lg text-gray-100">
              Explore my latest blog posts for insights, tutorials, and more.
            </p>
          </div>
          <div className="flex justify-between items-start mb-12 ">
            <div></div> {/* Empty div to push blogs to the center */}
            <a
              href="/blog"
              className="flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
              style={{ marginTop: "-2rem" }} // Adjust the margin-top to move the link up
            >
              <span className="mr-1">See More</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Render blog post cards */}
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={blog.imageUrl}
                alt="Blog Post"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-300">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-purple-600 font-semibold mt-4 inline-block hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
