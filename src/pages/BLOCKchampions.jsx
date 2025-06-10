import BlockChampionsImage from "../assets/blockchamp.png";
import blockHandImage from "../assets/blockhand.png";
import polygon from "../assets/polygon.png";

const BLOCKchampions = () => {
  const championsList = [
    "Alumni of Block-Scholars Africa",
    "Tech & non-tech professionals",
    "Philanthropists & social impact advocates",
    "Organizations with strong CSR goals",
    "Mentors, coaches & community builders",
    "African diaspora communities",
    "Youth empowerment enthusiasts",
    "Foundations & mission-aligned NGOs",
    "Anyone passionate about emerging technologies",
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center h-[825px] bg-customBrown">
        {/* Text Section */}
        <div className="w-full md:w-[639px] flex justify-center items-center">
          <div className="text-white flex flex-col gap-y-8">
            <h1 className="text-4xl md:text-5xl font-semibold">
              BLOCKChampions
            </h1>
            <p className="text-lg  max-w-md font-medium">
              BLOCKChampions, is an initiative by Block-Scholars Africa, that
              connects individuals, professionals, and organizations with the
              opportunity to sponsor and support young Africans in gaining
              access to blockchain and emerging tech education, career
              mentorship, and real-world opportunities.
            </p>
            <button className="bg-white text-customBrown py-2 px-6 font-medium text-lg rounded-[60px] w-fit hover:bg-gray-200 transition">
              Become BLOCKChampions
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[639px] flex justify-center items-center">
          <img
            src={BlockChampionsImage}
            alt="BLOCKChampions"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>

      <div className="flex justify-center items-center bg-white py-12 px-4 md:px-8">
        <div>
          {/* Title */}
          <h2 className="text-2xl font-medium text-center text-black mb-4">
            Who is BLOCKChampions For?
          </h2>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl w-full">
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-4">
              <p className="text-lg font-medium text-[#242424] mb-4">
                BLOCKChampions is for anyone who believes in the power of
                technology, education, and Africa’s potential, including:
              </p>
              <ul className="list-none font-medium space-y-2 pl-6">
                {championsList.map((item, index) => (
                  <li
                    key={index}
                    className="relative before:content-['✓'] before:absolute before:left-[-1.2em] before:text-customBrown before:text-lg"
                  >
                    <span className="text-text-[#242424]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 relative p-4">
              <div className="relative w-96 h-96 mx-auto">
                <img
                  src={blockHandImage}
                  alt="BLOCKChampions"
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Maroon Arrow Overlay */}
                <div className="absolute bottom-4 right-4 w-32 h-32">
                  <img
                    src={polygon}
                    alt="Polygon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLOCKchampions;
