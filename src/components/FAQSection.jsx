import React, { useState } from "react";

const helpAndFAQs = [
  {
    title: "What is Block-Scholars Africa?",
    description:
      "Block-Scholars Africa is a pioneering organization dedicated to revolutionizing education and innovation in Africa through the power of blockchain, Web3, emerging technologies, and artificial intelligence. We aim to create a continent-wide ecosystem of experts, entrepreneurs, and innovators who can harness these technologies to drive sustainable development, economic growth, and social impact.",
  },
  {
    title: "Who can apply for Block-Scholars Africa programs?",
    description: "abcd.",
  },
  {
    title:
      "Do I need prior blockchain knowledge to join Block-Scholars Africa?",
    description: "abcd.",
  },
  {
    title:
      "What kind of support does Block-Scholars Africa provide after training?",
    description: "abcd.",
  },
  {
    title: "How do the bootcamps work and who can attend?",
    description: "abcd.",
  },
  
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="text-center mb-10 py-5">
        <h1 className="text-4xl md:text-4xl text-[#720034] font-bold mb-2">
          FAQ's
        </h1>
        <p className="text-lg md:text-lg text-[#720034]">
          Common questions you may want to ask.
        </p>
      </div>
      <div className="flex flex-col items-center mx-auto w-1/2">
        {helpAndFAQs.map((term, index) => (
          <div
            key={index}
            className={`text-left w-full mb-3 px-5 border rounded-[40px] ${
              expandedIndex === index
                ? "bg-[#720034] text-[#fcf9f9] text-lg py-5 border rounded-[20px]"
                : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer py-3 md:py-4"
              onClick={() => toggleExpand(index)}
            >
              <h2
                className={`font-medium text-sm md:text-xl lg:text-lg ${
                  expandedIndex === index ? "text-[#fcf9f9]" : "text-[#720034]"
                }`}
              >
                {term.title}
              </h2>
              <span
                className={`text-lg font-bold ${
                  expandedIndex === index ? "text-[#fcf9f9]" : "text-[#720034]"
                }`}
              >
                {expandedIndex === index ? "-" : "+"}
              </span>
            </div>

            {expandedIndex === index && (
              <p className="mt-3 md:mt-5 text-lightGray font-normal text-sm md:text-base">
                {term.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
