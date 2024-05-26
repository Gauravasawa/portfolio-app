const Introduction = () => {
  return (
    <div className="max-w-3xl mx-auto text-center py-10">
      <h2
        className="text-3xl text-white mb-7 "
        style={{
          fontSize: "2.6em",
          fontWeight: 500,
          lineHeight: 1.2,
          fontFamily: "sans-serif",
        }}
      >
        Let Me <span className="text-purple-600">Introduce</span> Myself
      </h2>
      <p
        className="text-gray-100 font-semibold "
        style={{ fontSize: " 1.2em", fontFamily: "sans-serif" }}
      >
        I'm passionate about programming and always eager to learn new
        technologies.
      </p>
      <p
        className="text-gray-100 mt-4 font-semibold "
        style={{ fontSize: " 1.2em", fontFamily: "sans-serif" }}
      >
        While my expertise lies in modern web technologies like{" "}
        <span className="text-purple-600">JavaScript</span> &{" "}
        <span className="text-purple-600">NodeJs</span>, I'm always exploring
        and expanding my skills.
      </p>
      <p
        className="text-gray-100 mt-4 font-semibold "
        style={{ fontSize: " 1.2em", fontFamily: "sans-serif" }}
      >
        Currently, I enjoy working with frameworks like{" "}
        <span className="text-purple-600">React.js</span>,{" "}
        <span className="text-purple-600">Next.js</span>,{" "}
        <span className="text-purple-600">React Native</span> and{" "}
        <span className="text-purple-600">Svelte</span> to build innovative web
        applications.
      </p>
    </div>
  );
};

export default Introduction;
