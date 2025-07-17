import React from "react";
import Slider from "react-slick";
import testimony from "../assets/testimony.png";
import testimonial1 from "../assets/image8.png";
import testimonial2 from "../assets/image9.png";
import testimonial3 from "../assets/image6.png";
import testimonial4 from "../assets/BSA-Logo.png";
import testimonial5 from "../assets/image1.png";
import testimonial6 from "../assets/image2.png";
import testimonial7 from "../assets/image3.png";
import testimonial8 from "../assets/image7.png";
import testimonial9 from "../assets/image10.png";
import testimonial10 from "../assets/image11.png";
import testimonial11 from "../assets/image12.png";

const TestimoniesSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Noah Johnson",
      role: "Frontend Developer",
      image: testimonial2,
      testimonial:
        "Thanks to the amazing instructors, I can now create stunning designs I never thought possible. This program has truly made my dream of becoming a graphics designer a reality",
    },
    {
      id: 2,
      name: "Olaniran Samad",
      role: "Web3 Synergy",
      image: testimonial5,
      testimonial:
        "Block-scholars Africa is an impactful initiative driving blockchain education across Africa . Their commitment to fostering knowledge and skill-building is invaluable to the growth of Africa’s blockchain ecosystem.",
    },
    {
      id: 3,
      name: "Odion Emmanuel",
      role: "Community Manager",
      image: testimonial6,
      testimonial:
        "Being a part of this platform is a privilege to me. This institution has given to develop my skills in Community engagements,  Marketing and BlockChain technology. There are ups and downs in start-ups but I believe BSA is going to be the next big thing.",
    },
    {
      id: 4,
      name: "Onyenwe Chiwendu A.",
      role: "Student",
      image: testimonial7,
      testimonial:
        "BLOCK-SCHOLARS AFRICA has made me to understand what crypto and blockchain is all about. I did not regret joining this AMIABLE school of thought where Blockchain developer are raised through its affiliates",
    },
    {
      id: 5,
      name: "Dickson Goodness",
      role: "Graphic Designer",
      image: testimonial4,
      testimonial:
        "Working as a graphic design intern at Block-Scholars Africa has been a valuable experience that has expanded my skills and deepened my understanding of the blockchain industry. I’ve had the opportunity to collaborate on innovative projects, creating designs that not only represent complex ideas but also resonate with our audience. This internship has not only strengthened my design abilities but has also inspired me to pursue further growth in the field. Thank you to Mr Raphael and his team for reaching out to me.",
    },
    {
      id: 6,
      name: "Edem Essah Emmanuel",
      role: "",
      image: testimonial3,
      testimonial:
        "I want to thank BLOCK-SCHOLARS Africa as a whole for the privilege to be part of this Blockchain scholarship program. I’ve been impacted greatly and gotten so much knowledge about blockchain technology within these past weeks and I’m looking forward to the great opportunities that awaits me , thank you for this opportunity once again.",
    },
    {
      id: 7,
      name: "Akinyele Timilehin",
      role: "Student",
      image: testimonial8,
      testimonial:
        "Block-scholars Africa has truly opened my eyes to the world of blockchain in ways I never expected. Their programs are not just educational, they’re empowering. Being part of this community has deepened my knowledge and made me feel like I’m part of something big. I’m excited to keep learning and growing with them.",
    },
    {
      id: 8,
      name: "Onyeabor Chukwudike Desire",
      role: "",
      image: testimonial1,
      testimonial:
        "It was and will always be a privilege being a student of Block-Scholars Africa. This great institution provided me with an incredible foundation for my academic growth regarding Blockchain studies.I got to learn from the best of the best professionals and teachers. I learnt a whole lot about blockchain technology, crypto and web3 in generals",
    },
    {
      id: 9,
      name: "Chidi Clinton",
      role: "Student",
      image: testimonial10,
      testimonial: "It's an honor to be part of this academy. I experienced the warmth, friendliness and epitome of an online family. BSA exposed me to opportunities of which I am forever grateful for.As if that's not enough, they went further to assist students through data gifting, reminders for classes, schedules and bonuses held regularly to help students beat their academic goals.",
    },
    {
      id: 10,
      name: "Muhammed Adeniran",
      role: "Student",
      image: testimonial4,
      testimonial: "BLOCK-SCHOLARS AFRICA has provided me with an excellent experience in their Blockchain Studies program. This course was thoroughly focused on necessary subjects such as cryptography and with the help of Professor Armando made topics less complicated. The way the program illustrates blockchain usage with real-world applications was extremely influential on me personally. The learning materials itself was fairly good, they focused on networking and teamwork which are two major keys in this area.",
    },
    {
      id: 11,
      name: "Haruna Isaac Ayowande",
      role: "Student",
      image: testimonial4,
      testimonial: "My experience as a Blockchain student at Block-scholars Africa has been incredibly rewarding. The curriculum is well-structured, covering everything from blockchain fundamentals to advanced applications like smart contracts and decentralized apps. The supportive faculty and collaborative environment make learning engaging and practical, allowing me to build real-world skills with confidence.",
    },
    {
      id: 12,
      name: "Abdoul Salam SORE",
      role: "Student, Burkina Faso",
      image: testimonial9,
      testimonial: "As a proud student of Block-Scholars Africa, I want to express my heartfelt gratitude to this remarkable institution and its dedicated team. Through their programs, I ‘ve gained valuable skills in areas like web development and blockchain technology - skills that are essential in today’s fast-paced digital world Block-Scholars Africa provides incredible opportunities for learning and growth, making it possible to stay informed and ahead in an ever-evolving tech landscape. Whether you are just starting out or already experienced, I highly encourage you to join the upcoming INNOVATION Lab Cohort. It’s a journey worth taking.",
    },
    {
      id: 13,
      name: "Olasupo Mary Olamide",
      role: "",
      image: testimonial11,
      testimonial: "Being part of the Block-Scholars Africa has been a transformative experience for me. The platform didn’t just teach me about blockchain and emerging technologies. It helped me build real-world skills, grow my confidence, and connect with a vibrant community of innovators across the continent. Every session, project, and mentorship moment has added value to my personal and professional journey. I’m truly grateful for the opportunity and proud to be part of this movement shaping Africa’s tech future.",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // eslint-disable-next-line no-unused-vars
    customPaging: (i) => (
      <button className="w-3 h-3 rounded-full transition-all duration-300" />
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-3 mt-12"> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="bg-slate-50 py-16  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#242424] mb-2 tracking-tight">
            What People{" "}
            <span className="inline text-[#720034]">
              Say <br /> About Us
            </span>
          </h1>
        </div>

        {/* Testimonials Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="flex flex-col h-full transform transition-all duration-500 ease-in-out">
                {/* Testimonial Card */}
                <div
                  className={`flex-1 relative rounded-2xl p-8 border-2 border-[#720034]  transition-all duration-300 group min-h-[350px]`}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-6xl text-[#720034] font-serif opacity-50">
                    <img src={testimony} alt="" />
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative z-10 mb-8 text-center">
                    <p className="text-[#242424] leading-relaxed text-base font-medium">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-center mt-8">
                  <div className="mb-4">
                    <div className="w-20 h-20 rounded-full p-1">
                      <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-2xl">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#242424] mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#242424] font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimoniesSection;
