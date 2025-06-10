import BlockChampionsImage from "../assets/blockchamp.png";

const BLOCKchampions = () => {
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

      <div>
        
      </div>
    </section>
  );
};

export default BLOCKchampions;
