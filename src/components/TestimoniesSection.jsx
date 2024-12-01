import React, { useState, useEffect } from "react";

const testimonies = [
  {
    id: 1,
    image: require("../assets/image1.png"),
    name: "Olaniran Samad",
    text: "Block-Scholars Africa is an impactful initiative driving blockchain education across Africa. Their commitment to fostering knowledge and skill-building is invaluable to the growth of Africa's blockchain ecosystem.",
  },
  {
    id: 2,
    image: require("../assets/image2.png"),
    name: "Odion Emmanuel",
    text: "Being a part of this platform is a privilege to me. This institution has given to develop my skills in Community engagements,Marketing and BlockChain technology. There are ups and downs in start-ups but I believe BSA is going to be the next big thing.",
  },
  {
    id: 3,
    image: require("../assets/image3.png"),
    name: "Onyenwe Chinwendu A.",
    text: "BLOCK-SCHOLARS AFRICA has made me to understand what crypto and blockchain is all about. I did not regret joining this AMIABLE school of thought where Blockchain developer are raised through its affiliates",
  },
  {
    id: 4,
    image: require("../assets/testimony.png"),
    name: "Dickson Goodness",
    text: "Working as a graphic design intern at Block-Scholars Africa has been a valuable experience that has expanded my skills and deepened my understanding of the blockchain industry. I’ve had the opportunity to collaborate on innovative projects, creating designs that not only represent complex ideas but also resonate with our audience. This internship has not only strengthened my design abilities but has also inspired me to pursue further growth in the field. Thank you to Mr Raphael and his team for reaching out to me.I'm grateful for the chance to contribute to Block-Scholars Africa's mission and to have been part of such an exciting, forward-thinking company.",
  },
  {
    id: 5,
    image: require("../assets/testimony.png"),
    name: "Haruna Isaac Ayowande",
    text: "My experience as a Blockchain student at Block-scholars Africa has been incredibly rewarding. The curriculum is well-structured, covering everything from blockchain fundamentals to advanced applications like smart contracts and decentralized apps. The supportive faculty and collaborative environment make learning engaging and practical, allowing me to build real-world skills with confidence. Block-scholars Africa has expanded my career horizons and strengthened my belief in the potential of blockchain technology to transform industries. I'm proud to be part of this innovative institution.",
  },
  {
    id: 6,
    image: require("../assets/image6.png"),
    name: "Edem-Essah Emmanuel",
    text: "I want to thank BLOCK-SCHOLARS Africa as a whole for the privilege to be part of this Blockchain scholarship program. I've been impacted greatly and gotten so much knowledge about blockchain technology within these past weeks and I'm looking forward to the great opportunities that awaits me , thank you for this opportunity once again.",
  },
  {
    id: 7,
    image: require("../assets/image7.png"),
    name: "Akinyele Timileyin",
    text: "Block-scholars Africa has truly opened my eyes to the world of blockchain in ways I never expected. Their programs are not just educational, they're empowering. Being part of this community has deepened my knowledge and made me feel like I'm part of something big. I'm excited to keep learning and growing with them.",
  },
  {
    id: 8,
    image: require("../assets/image8.png"),
    name: "Onyeabor Chukwudike Desire",
    text: "It was and will always be a privilege being a student of Block-Scholars Africa. This great institution provided me with an incredible foundation for my academic growth regarding Blockchain studies.I got to learn from the best of the best professionals and teachers. I learnt a whole lot about blockchain technology, crypto and web3 in general. The Block-Scholars Africa community felt like a family, I got to connect with great minds, I got to learn, have fun and even got rewards by participating in quizzes. I never felt like a stranger in their midst. I'm grateful and will always be proud to be a Block-Scholars Africa Alumnus.",
  },
  {
    id: 9,
    image: require("../assets/testimony.png"),
    name: "Muhammad Adediran",
    text: "BLOCK-SCHOLARS AFRICA has provided me with an excellent experience in their Blockchain Studies program. This course was thoroughly focused on necessary subjects such as cryptography and with the help of Professor Armando made topics less complicated. The way the program illustrates blockchain usage with real-world applications was extremely influential on me personally. The learning materials itself was fairly good, they focused on networking and teamwork which are two major keys in this area. A personal highlight was finishing the onboarding on my LMS, which made for a great introduction to an engaging journey. The faculty support was really great, the weekly student support sessions ensured all of us are in track and no one is left behind. I really appreciate every effort of our tutors and moderators that make this this exciting journey easy.",
  },
  {
    id: 10,
    image: require("../assets/testimony.png"),
    name: "Chidi Clinton",
    text: "It's an honor to be part of this academy. I experienced the warmth, friendliness and epitome of an online family. BSA exposed me to opportunities of which I am forever grateful for. As if that's not enough, they went further to assist students through data gifting, reminders for classes, schedules and bonuses held regularly to help students beat their academic goals. The periodic quizzes helped sharpen my inquisitiveness , broaden my knowledge and better my networking and communication skills. I will always be a proud student of Block Scholars Africa. I am Chidi Clinton a proud student of BSA.",
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

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 100); // Re-enable transitions after resetting
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <section id="testimonies" className="py-20   md:px-10 px-0 ">
      <div className="text-center mb-10  bg-[#720034] py-5 w-full ">
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-2">
          Reviews
        </h1>
        <p className="text-lg md:text-lg text-[#fcf5f5] ">
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
              setCurrentIndex(0); // Reset to first testimony
            }
          }}
        >
          {[...testimonies, testimonies[0]].map((testimony, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center px-4"
            >
              <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-[#fcf9f9] border border-[#720034] shadow-lg rounded-[30px] p-6 md:p-8 mx-auto">
                <img
                  src={testimony.image}
                  alt={testimony.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full  border border-[#720034]  mb-4 object-cover "
                />

                <p className="text-sm md:text-base text-gray-700 mb-4">
                  {testimony.text}
                </p>
                <h3 className="text-md md:text-lg font-bold text-[#720034] ">
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