import BlockChampionsImage from "../assets/blockchamp.png";

const BLOCKchampions = () => {
  return (
    <section>
      <div className="flex  justify-center h-[825px] bg-customBrown">
        <div className="flex ">
          {/* Text Section */}
          <div className="w-[639px] text-center md:text-left flex items-center justify-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                BLOCKChampions
              </h1>
              <p className="text-lg mb-6">
                BLOCKChampions is an initiative by Block-Scholars Africa that
                connects individuals, professionals, and organizations with the
                opportunity to sponsor and support young Africans in gaining
                access to blockchain and emerging tech education, career
                mentorship, and real-world opportunities.
              </p>
              <button className="bg-white text-maroon-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
                Become BLOCKChampions
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-[639px] flex items-center justify-center">
            <img
              src={BlockChampionsImage}
              alt="BLOCKChampions"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLOCKchampions;
