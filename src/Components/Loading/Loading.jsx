const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div
          className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-600"
          style={{ height: "200px", width: "200px" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col">
          <span className="text-purple-600 font-bold text-5xl mb-2">GA</span>
          <p className="text-purple-600 font-bold text-2xl">Gaurav Asawa</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
