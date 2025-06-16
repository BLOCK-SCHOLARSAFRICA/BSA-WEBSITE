import AboutUsImage from "../assets/about-us.png";
import VisionImage from "../assets/vision.png";

const AboutUs = () => {
  return (
    <section id="about-us" className="flex flex-col gp-y-10 bg-green-500">
      <header
        className="relative h-[495px] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${AboutUsImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-4 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="md:text-lg text-sm">
            Block-Scholars Africa is a leading education and innovation platform
            dedicated to equipping young Africans with knowledge and skills
            needed to excel in blockchain, Web3, and emerging technologies
          </p>
        </div>
      </header>

      <section>
        {/* First card */}
        <div className="relative py-20 px-4 md:px-28 bg-white">
          {/* Top circle */}
          <div className="absolute left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-8 border-customBrown bg-white z-10 hidden md:block" />

          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Left Card */}
            <div className="bg-customBrown text-white px-8 py-10 rounded-2xl w-full md:w-1/2 shadow-lg  flex flex-col ">
              <h3 className="text-xl font-bold mb-8">VISION</h3>
              <p>
                To empower Africa’s future by creating a thriving economy of
                blockchain and tech innovators during sustainable development
                and economic growth.
              </p>
            </div>

            {/* Right Image Box */}
            <div className="w-full md:w-1/2 rounded-2xl bg-[#d8ecff] flex items-center justify-center p-4">
              <img
                src={VisionImage}
                alt="Vision"
                className="object-cover max-h-[400px]"
              />
            </div>
          </div>

          {/* Bottom circle */}
          <div className="absolute bottom-0 right-1/3 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-8 border-customBrown bg-white z-10 hidden md:block" />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
