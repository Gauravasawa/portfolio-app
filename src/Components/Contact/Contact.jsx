import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-purple-600 mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-gray-100">
            Feel free to reach out to me through the following channels.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center mr-8">
            <FaEnvelope className="text-purple-600 text-3xl mr-2" />
            <a
              href="mailto:your-email@example.com"
              className="text-lg font-semibold hover:text-purple-400 transition duration-300"
            >
              your-email@example.com
            </a>
          </div>
          <div className="flex items-center mr-8">
            <FaLinkedin className="text-purple-600 text-3xl mr-2" />
            <a
              href="https://www.linkedin.com/in/your-profile"
              className="text-lg font-semibold hover:text-purple-400 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center">
            <FaGithub className="text-purple-600 text-3xl mr-2" />
            <a
              href="https://github.com/your-username"
              className="text-lg font-semibold hover:text-purple-400 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
