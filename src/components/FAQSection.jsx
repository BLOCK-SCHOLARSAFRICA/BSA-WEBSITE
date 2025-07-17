import { Check } from "lucide-react";
import React, { useState } from "react";

const helpAndFAQs = [
  {
    title: "What is Block-Scholars Africa?",
    description:
      "Block-Scholars Africa is a transformative initiative empowering young Africans through blockchain and emerging tech education, career mentorship, and real-world industry opportunities.",
    list: [],
  },
  {
    title: "Who can become a BLOCKChampion?",
    description:
      "BLOCKChampions welcomes individuals and organizations passionate about Africa’s future in tech, including:",
    list: [
      "Alumni of Block–Scholars Africa",
      "Tech & non-tech professionals",
      "Philanthropists & social impact advocates",
      "Organizations with strong CSR goals",
      "Mentors, coaches & community builders",
      "African diaspora communities",
      "Youth empowerment enthusiasts",
      "Foundations & mission-aligned NGOs",
      "Anyone passionate about emerging technologies",
    ],
  },
  {
    title: "Why should I become a BLOCKChampion?",
    description:
      "Joining BLOCKChampions is more than sponsorship – It’s about empowering Africa’s next generation of tech leaders with the skills, guidance, and opportunities to thrive in emerging technologies.",
    list: [],
  },
  {
    title: "What are the BLOCKChampion membership tiers?",
    description:
      "BLOCKChampions offers three tiers of sponsorship, allowing supporters to contribute at different levels:",
    list: [
      "Starter Champion ₦8,000/$5 per month",
      "Core Champion ₦24,000/$15 per month",
      "Elite Champion ₦40,000/$25 per month",
    ],
  },
  {
    title: "What benefits do BLOCKChampions receive?",
    description:
      "Each tier comes with unique perks such as social media recognition, certificates, project discounts, exclusive events, impact reports, and personalized thank-you messages from sponsored scholars.",
    list: [],
  },
  {
    title: "How are scholars selected for sponsorship?",
    description:
      "Scholars are chosen based on their passion for blockchain and emerging technologies, dedication to learning, and potential to create impact within their communities.",
    list: [],
  },
  {
    title: "Can businesses or organizations become BLOCKChampions?",
    description:
      "Absolutely! Organizations with strong Corporate Social Responsibility (CSR) goals are encouraged to participate and support African youth in tech.",
    list: [],
  },
  {
    title: "How does my sponsorship help young Africans?",
    description:
      "Your contribution provides scholars with tech education, career mentorship, networking, and real-world exposure to opportunities in blockchain and emerging technologies.",
    list: [],
  },
  {
    title: "How can I track my impact as a BLOCKChampion?",
    description:
      "BLOCKChampions receive quarterly impact reports, monthly email updates, and stories showcasing how their support is changing lives.",
    list: [],
  },
  {
    title: "Are there networking opportunities for BLOCKChampions?",
    description:
      "Yes! Elite champions gain access to a private community of tech changemakers, VIP events, industry retreats, and conferences.",
    list: [],
  },
  {
    title: "How do I become a BLOCKChampion?",
    description: "You can join today by clicking on the get involved button.",
    list: [],
  },
  {
    title: "Where can I follow BLOCKChampions online?",
    description:
      "Stay connected via our website and social media pages for updates, events, and impact stories.",
    list: [],
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white opacity-0 animate-fadeIn">
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
            className={`text-left w-full mb-3  ${
              expandedIndex === index ? "" : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer py-3 md:py-4 bg-white   transition-all duration-300 px-5 border border-customBrown"
              onClick={() => toggleExpand(index)}
            >
              <h2
                className={`font-medium text-sm md:text-lg ${
                  expandedIndex === index
                    ? "text-[#242424]"
                    : "text-customBrown"
                }`}
              >
                {term.title}
              </h2>
              <span
                className={`text-lg font-bold transition-transform duration-300 ${
                  expandedIndex === index
                    ? "text-[#242424]"
                    : "text-customBrown"
                }`}
              >
                {expandedIndex === index ? "-" : "+"}
              </span>
            </div>

            {/* Smooth Expand/Collapse Animation */}
            <div
              className={`${
                expandedIndex === index
                  ? "max-h-96 bg-[#F2F2F2] text-[#242424] pb-8"
                  : "max-h-0"
              } overflow-hidden transition-all duration-500 ease-in-out px-5`}
            >
              <div className="mt-3 md:mt-4 text-[#242424] font-medium text-sm md:text-base">
                <p className="mb-2">{term.description}</p>
                {term.list.length > 0 && (
                  <ul className="space-y-3">
                    {term.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0"
                          style={{ color: "var(--custom-brown, #8B4513)" }}
                        />
                        <span className="text-[#242424] text-sm sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
