const Education = () => {
  return (
    <section id="education" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Item 1 */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Bachelor's Degree
            </h3>
            <p className="text-gray-800">University Name</p>
            <p className="text-gray-600">Major: Computer Science</p>
            <p className="text-gray-600">Graduation Year: 20XX</p>
          </div>
          {/* Education Item 2 */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Certification
            </h3>
            <p className="text-gray-800">Certification Name</p>
            <p className="text-gray-600">Issuing Organization</p>
            <p className="text-gray-600">Completion Year: 20XX</p>
          </div>
          {/* Add more Education items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Education;
