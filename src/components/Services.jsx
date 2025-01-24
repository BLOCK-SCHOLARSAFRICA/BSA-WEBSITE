import React from "react";
import {
  FaCode,
  FaChalkboardTeacher,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaPen,
  FaChartLine,
  FaCogs,
  FaWhatsapp,
} from "react-icons/fa";
import BSAServices from "../assets/BSA services.png";

const Service = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-[#720034]" />,
      title: "Website Development",
      description:
        "We provide top-notch web development services tailored to your business needs, delivering highly scalable and responsive websites.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#720034]" />,
      title: "Mobile Application Development",
      description:
        "We design and develop intuitive mobile apps for Android and iOS platforms, tailored to meet user needs.",
    },
    {
      icon: <FaServer className="text-4xl text-[#720034]" />,
      title: "Website Hosting and Maintenance",
      description:
        "Our hosting and maintenance services ensure your website runs smoothly, stays secure, and remains up-to-date.",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-[#720034]" />,
      title: "Graphic Design & Video Editing",
      description:
        "Creative designs and professional video editing to captivate your audience and enhance your brand.",
    },
    {
      icon: <FaPen className="text-4xl text-[#720034]" />,
      title: "Copywriting",
      description:
        "Engaging and persuasive copy to effectively communicate your message and boost conversions.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#720034]" />,
      title: "Digital Marketing & SEO",
      description:
        "Grow your online presence and drive traffic with targeted digital marketing and effective SEO strategies.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-[#720034]" />,
      title: "Tech Training Programs",
      description:
        "We offer hands-on training programs to upskill your team in modern technologies and best practices.",
    },
    {
      icon: <FaCogs className="text-4xl text-[#720034]" />,
      title: "Product Design & Management",
      description:
        "End-to-end product design and management to bring your vision to life and ensure successful delivery.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#720034]">
      <div className="container mx-auto px-6">
        {/* image and WhatsApp Section */}
        <div className="flex justify-between items-center mb-10">
          <img src={BSAServices} alt="BSA Services" className="animate-pulse h-96 mx-auto  " />
          <a
            href="https://wa.me/8107865121"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-4xl animate-bounce hover:text-white transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#720034] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Service;
