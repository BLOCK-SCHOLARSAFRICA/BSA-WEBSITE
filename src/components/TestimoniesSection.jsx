import  { useState, useEffect } from "react";

const testimonies = [
  {
    id: 1,
    image: "../assets/image1.png",
    name: "Olaniran Samad",
    text: "Block-Scholars Africa is an impactful initiative driving blockchain education across Africa. Their commitment to fostering knowledge and skill-building is invaluable to the growth of Africa's blockchain ecosystem.",
  },
  {
    id: 2,
    image: "../assets/image2.png",
    name: "Odion Emmanuel",
    text: "Being a part of this platform is a privilege to me. This institution has given to develop my skills in Community engagements, Marketing and BlockChain technology. There are ups and downs in start-ups but I believe BSA is going to be the next big thing.",
  },
  {
    id: 3,
    image: "../assets/image3.png",
    name: "Onyenwe Chinwendu A.",
    text: "BLOCK-SCHOLARS AFRICA has made me to understand what crypto and blockchain is all about. I did not regret joining this AMIABLE school of thought where Blockchain developer are raised through its affiliates",
  },
  {
    id: 4,
    image:  "../assets/testimony.png",
    name: "Dickson Goodness",
    text: "Working as a graphic design intern at Block-Scholars Africa has been a valuable experience that has expanded my skills and deepened my understanding of the blockchain industry...",
  },
  {
    id: 5,
    image: "../assets/testimony.png",
    name: "Haruna Isaac Ayowande",
    text: "My experience as a Blockchain student at Block-scholars Africa has been incredibly rewarding. The curriculum is well-structured, covering everything from blockchain fundamentals to advanced applications like smart contracts...",
  },
  {
    id: 6,
    image: "../assets/image6.png",
    name: "Edem-Essah Emmanuel",
    text: "I want to thank BLOCK-SCHOLARS Africa as a whole for the privilege to be part of this Blockchain scholarship program...",
  },
  {
    id: 7,
    image: "../assets/image7.png",
    name: "Akinyele Timileyin",
    text: "Block-scholars Africa has truly opened my eyes to the world of blockchain in ways I never expected. Their programs are not just educational, they're empowering...",
  },
  {
    id: 8,
    image: "../assets/image8.png",
    name: "Onyeabor Chukwudike Desire",
    text: "It was and will always be a privilege being a student of Block-Scholars Africa. This great institution provided me with an incredible foundation for my academic growth...",
  },
  {
    id: 9,
    image: "../assets/testimony.png",
    name: "Muhammad Adediran",
    text: "BLOCK-SCHOLARS AFRICA has provided me with an excellent experience in their Blockchain Studies program...",
  },
  {
    id: 10,
    image: "../assets/testimony.png",
    name: "Chidi Clinton",
    text: "It's an honor to be part of this academy. I experienced the warmth, friendliness and epitome of an online family...",
  },
];

const TestimoniesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
      setIsTransitioning(true);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <section id="testimonies" className="py-20 md:px-10 px-0">
      <div className="text-center mb-10 bg-[#720034] py-5 w-full">
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-2">
          Reviews
        </h1>
        <p className="text-lg md:text-lg text-[#fcf5f5]">
          What People Say About Us
        </p>
      </div>

      <div className="relative w-full h-auto overflow-hidden">
        <div
          className={`flex transition-transform ${
            isTransitioning ? "duration-1000 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          onTransitionEnd={() => {
            if (currentIndex === testimonies.length) {
              setIsTransitioning(false);
              setCurrentIndex(0);
            }
          }}
        >
          {[...testimonies, testimonies[0]].map((testimony, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center px-4"
            >
              <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-[#fcf9f9] border border-[#720034] shadow-lg rounded-[30px] p-6 md:p-8 mx-auto transition-all transform hover:scale-90 hover:shadow-xl">
                <img
                  src={testimony.image}
                  alt={testimony.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#720034] mb-4 object-cover"
                />
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  {testimony.text}
                </p>
                <h3 className="text-md md:text-lg font-bold text-[#720034]">
                  {testimony.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniesSection;
