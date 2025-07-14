import ProgramImage from "../assets/program.png";

const Programs = () => {
  return (
    <section>
      <header
        className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[566px] lg:min-h-[600px] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${ProgramImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-11 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Innovation Lab (Master In-Demand Tech Skills)
          </h2>
          <button className="bg-[#720034] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 rounded-[60px] hover:bg-[#470020] transition-all text-sm sm:text-base md:text-lg lg:text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
            APPLY NOW
          </button>
        </div>
      </header>
    </section>
  );
};

export default Programs;
