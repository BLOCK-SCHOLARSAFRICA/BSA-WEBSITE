import { ArrowRight } from "lucide-react";
import BlockChampionsImage from "../assets/blockchamp.png";
import blockHandImage from "../assets/blockHand.png";
import blockImage2 from "../assets/blockimage2.png";
import PricingCard from "../components/PricingCard";
import { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";
import FAQSection from "../components/FAQSection";
const BLOCKchampions = () => {
  const [highlightedCard, setHighlightedCard] = useState("core");
  

  const championsList = [
    "Alumni of Block-Scholars Africa",
    "Tech & non-tech professionals",
    "Philanthropists & social impact advocates",
    "Organizations with strong CSR goals",
    "Mentors, coaches & community builders",
    "African diaspora communities",
    "Youth empowerment enthusiasts",
    "Foundations & mission-aligned NGOs",
    "Anyone passionate about emerging technologies",
  ];
  const features = {
    starter: [
      "Media recognition",
      "Discounts on projects (websites, logos, etc.)",
      "Certificates & digital thank-you badge",
      'Quarterly "Impact Highlights" newsletter',
      "Monthly email updates & community stories",
    ],
    core: [
      "Media recognition",
      "Discounts on projects (websites, logos, etc.)",
      "Certificates & digital thank-you badge",
      'Quarterly "Impact Highlights" newsletter',
      "Monthly email updates & community stories",
      "Sponsor 2 scholars for FREE every cohort",
      "Early bird invites to exclusive events & Webinars",
      "Digital swag pack (branded wallpapers, social frames)",
      "Personalized thank-you video from a sponsored scholar",
    ],
    elite: [
      "Media recognition",
      "Discounts on projects (websites, logos, etc.)",
      "Certificates & digital thank-you badge",
      'Quarterly "Impact Highlights" newsletter',
      "Monthly email updates & community stories",
      "Sponsor 4 scholars for FREE every cohort",
      "Early bird invites to exclusive events & Webinars",
      "Digital swag pack (branded wallpapers, social frames)",
      "Personalized thank-you video from a sponsored scholar",
      "Monthly recognition on social media",
      "Access to a private impact community of tech changemakers",
      "Quarterly personalized impact report",
      "VIP access to future programs, retreats, & conferences",
    ],
  };



  return (
    <section>
      {/* Hero Section */}
      <div className="h-[550px] sm:min-h-screen bg-customBrown flex flex-row justify-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6 sm:p-8 lg:p-12">
          <div className="text-white flex flex-col gap-y-6 sm:gap-y-8 max-w-lg lg:max-w-md xl:max-w-lg text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
              BLOCKChampions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              BLOCKChampions, is an initiative by Block-Scholars Africa, that
              connects individuals, professionals, and organizations with the
              opportunity to sponsor and support young Africans in gaining
              access to blockchain and emerging tech education, career
              mentorship, and real-world opportunities.
            </p>
            <button className="bg-white text-[#242424] py-3 px-6 sm:py-4 sm:px-8 font-medium text-base sm:text-lg rounded-full w-fit mx-auto lg:mx-0 hover:bg-gray-200 transition-colors duration-300 shadow-lg">
              Become BLOCKChampions
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 justify-center items-center p-6 sm:p-8 lg:p-12 hidden lg:flex">
          <div className="w-full max-w-lg lg:max-w-md xl:max-w-lg">
            <img src={BlockChampionsImage} alt="" />
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="flex justify-center items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl flex flex-col gap-y-12 sm:gap-y-16 lg:gap-y-20">
          {/* Who is BLOCKChampions For? Section */}
          <div>
            {/* Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-center text-black mb-6 sm:mb-8">
              Who is BLOCKChampions For?
            </h2>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 lg:gap-8">
              {/* Text Section */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <p className="text-base sm:text-lg font-medium text-[#242424] mb-4 sm:mb-6 text-center lg:text-left">
                  BLOCKChampions is for anyone who believes in the power of
                  technology, education, and Africa's potential, including:
                </p>
                <ul className="list-none font-medium space-y-2 sm:space-y-3">
                  {championsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
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
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] xl:w-[473px] xl:h-[473px]">
                  <img
                    src={blockHandImage}
                    alt="BLOCKChampions"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Why Become a BLOCKChampion? Section */}
          <div>
            {/* Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-center text-black mb-6 sm:mb-8">
              Why Become a BLOCKChampion?
            </h2>

            {/* Content Container */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 lg:gap-8">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 order-1 flex justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] xl:w-[473px] xl:h-[473px]">
                  <img
                    src={blockImage2}
                    alt="BLOCKChampions"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-1/2 order-2">
                <p className="text-base sm:text-lg font-medium text-[#242424] text-center lg:text-left leading-relaxed">
                  Joining BLOCKChampions isn't just about sponsorship education
                  - It's about shaping Africa's future in tech. Your support
                  empowers young Africans gain in-demand skills, life-changing
                  opportunities, and the chance to shape the future as industry
                  leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* core champions section */}
      <div className="min-h-screen bg-[#212020] text-white lg:p-8 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Starter Champion */}
            <PricingCard
              title="Starter Champion"
              price="5"
              nairaPrice="₦8000"
              features={features.starter}
              cardId="starter"
              isHighlighted={highlightedCard === "starter"}
              setHighlightedCard={setHighlightedCard}
            />

            {/* Core Champion - Highlighted */}
            <PricingCard
              title="Core Champion"
              price="15"
              nairaPrice="₦24000"
              features={features.core}
              cardId="core"
              isHighlighted={highlightedCard === "core"}
              setHighlightedCard={setHighlightedCard}
            />

            {/* Elite Champion */}
            <PricingCard
              title="Elite Champion"
              price="25"
              nairaPrice="₦40,000"
              features={features.elite}
              cardId="elite"
              isHighlighted={highlightedCard === "elite"}
              setHighlightedCard={setHighlightedCard}
            />
          </div>

          {/* Bottom CTA */}
          <div className="px-4 flex flex-col items-start justify-start">
            <p className="text-lg text-gray-300 mb-8">
              Become a BLOCKChampion today and be part of Africa's next wave of
              innovation. Your legacy starts now
            </p>
            <button className="bg-customBrown hover:bg-customBrown/80 text-white font-medium text-lg py-4 px-8 transition-colors duration-200 flex items-center justify-start space-x-2 rounded-[80px]">
              <span>GET INVOLVED</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-8">
        <FAQSection />
      </div>
    </section>
  );
};

export default BLOCKchampions;
