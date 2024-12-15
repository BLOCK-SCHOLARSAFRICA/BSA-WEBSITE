import React, { useState } from "react";

const helpAndFAQs = [
  {
    title: "What is Block-Scholars Africa?",
    description:
      "Block-Scholars Africa is a blockchain education and training program designed for African students and young professionals. The program aims to equip participants with the knowledge and skills needed to build a successful career in blockchain technology.",
  },
  {
    title: "Who is eligible to apply for Block-Scholars Africa programs?",
    description:
      "Students and young professionals interested in blockchain technology can apply for the Block-Scholars Africa program. This includes university students, recent graduates, and young professionals looking to transition into a blockchain career.",
  },
  {
    title: "Can I participate in the program remotely?",
    description:
      "Yes, our program is designed to be flexible and can be completed remotely.",
  },
  {
    title: "Do I need prior knowledge to join Block-Scholars Africa?",
    description:
      "No, prior knowledge of blockchain technology is not required to join Block-Scholars Africa. The program is designed to take participants from beginner to advanced levels, covering the fundamentals of blockchain technology and its applications.",
  },
  {
    title:
      "What kind of support does Block-Scholars Africa provide after the training?",
    description: [
      "Block-Scholars Africa provides ongoing support to alumni, including:",
      "Access to resources and tools",
      "Mentorship and coaching",
      "Networking opportunities with industry professionals",
      "Job placement assistance",
      "Community engagement and support",
    ],
  },
  {
    title: "Is there certification after the program?",
    description:
      "Yes, participants who complete the program will receive a certificate.",
  },
  {
    title: "How long does the program take?",
    description:
      "The duration of the Block-Scholars Africa program varies depending on the specific program. However, most programs typically last 4 weeks or 6 months.",
  },
  {
    title: "How do I apply for Block-Scholars Africa program?",
    description: "You can apply through our website.",
  },
  {
    title: "How do the bootcamps work and who can attend?",
    description:
      "The bootcamps are intensive training programs that cover various aspects of blockchain technology, including development, architecture, and innovation. The bootcamps are open to selected applicants who have gone through the application process.",
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
        <h1 className="text-3xl md:text-4xl text-[#720034] font-bold mb-2">
          FAQ's
        </h1>
        <p className="text-base md:text-lg text-[#720034]">
          Common questions you may want to ask.
        </p>
      </div>
      <div className="flex flex-col items-center mx-auto w-full md:w-3/4 lg:w-1/2">
        {helpAndFAQs.map((term, index) => (
          <div
            key={index}
            className={`text-left w-full mb-3 px-5 border rounded-lg transition-all duration-300 ${
              expandedIndex === index
                ? "bg-[#720034] text-[#fcf9f9] py-5 border-[#720034]"
                : "bg-white text-[#720034] border-gray-300"
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer py-3 md:py-4"
              onClick={() => toggleExpand(index)}
            >
              <h2
                className={`font-medium text-sm md:text-lg ${
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
              <div className="mt-3 md:mt-4 text-lightGray font-normal text-sm md:text-base">
                {Array.isArray(term.description) ? (
                  <>
                    <p className="mb-3">{term.description[0]}</p>
                    <ul className="list-disc ml-5">
                      {term.description.slice(1).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>{term.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
