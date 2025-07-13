import React from "react";
import Slider from "react-slick";
import testimony from "../assets/testimony.png";
import testimonial1 from "../assets/image8.png"
import testimonial2 from "../assets/image9.png"
import testimonial3 from "../assets/image6.png"
import testimonial4 from "../assets/BSA-Logo.png"
import testimonial5 from "../assets/image1.png"

const TestimoniesSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Linda Chikwe",
      role: "Frontend Developer",
      image: testimonial1,
      testimonial:
        "Block-Scholars Africa gave me the confidence to transition into frontend development. Their curriculum is practical, beginner-friendly, and empowering.",
    },
    {
      id: 2,
      name: "David Okoro",
      role: "UI Designer",
      image: testimonial2,
      testimonial:
        "From wireframes to polished interfaces, the design track helped me build a solid portfolio that got me noticed by top recruiters.",
    },
    {
      id: 3,
      name: "Grace Mbatha",
      role: "UX Intern",
      image: testimonial3,
      testimonial:
        "The hands-on design projects and feedback sessions made me a more thoughtful and user-focused designer.",
    },
    {
      id: 4,
      name: "Samuel Adegoke",
      role: "Web3 Developer",
      image: testimonial4,
      testimonial:
        "I learned how to build smart contracts and integrate blockchain into modern web apps. Block-Scholars Africa is where theory meets real-world Web3 skills.",
    },
    {
      id: 5,
      name: "Amina Yusuf",
      role: "Frontend Engineer",
      image: testimonial5,
      testimonial:
        "The frontend development track was top-notch. React, Tailwind, and real projects—everything I needed to level up fast.",
    },
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
    <div className="bg-slate-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#242424] mb-2 tracking-tight">
            What People{" "}
            <span className="inline text-[#720034]">Say <br /> About Us</span>
          </h1>
          
        </div>

        {/* Testimonials Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="flex flex-col h-full transform transition-all duration-500 ease-in-out">
                {/* Testimonial Card */}
                <div
                  className={`flex-1 relative rounded-2xl p-8 border-2 border-[#720034]  transition-all duration-300 group min-h-[180px]`}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-6xl text-[#720034] font-serif opacity-50">
                    <img src={testimony} alt="" />
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative z-10 mb-8">
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
