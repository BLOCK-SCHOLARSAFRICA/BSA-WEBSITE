import AboutUsImage from "../assets/about-us.png";
import VisionImage from "../assets/vision.png";
import coreValue from "../assets/coreValue.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team6 from "../assets/team6.png";
import team8 from "../assets/team8.png";
import team9 from "../assets/team9.png";
import team10 from "../assets/team10.png";
import team11 from "../assets/team11.png";
import team12 from "../assets/team12.png";
import team13 from "../assets/team13.png";
import team17 from "../assets/team17.png";
import team18 from "../assets/team18.png";
import team19 from "../assets/team19.png";
import board4 from "../assets/board4.png";
import board5 from "../assets/board5.png";
import board1 from "../assets/board1.png";
import board6 from "../assets/board6.png";
import board2 from "../assets/board2.png";
import board8 from "../assets/board8.png";
import {
  Star,
  Users,
  Shield,
  HandHeart,
  BookOpen,
  Unlock,
  Target,
  Code,
  Smartphone,
  FileText,
  Brush,
  PenTool,
  TrendingUp,
  Monitor,
  Settings,
  Linkedin,
} from "lucide-react";
import mission from "../assets/mission.png";
import blockImage2 from "../assets/blockimage2.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamCard from "../components/TeamCard";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const values = [
    {
      icon: Star,
      title: "Excellence - Striving for brilliance and innovation",
    },
    {
      icon: Users,
      title: "Leadership - Driving change and inspiring the future",
    },
    {
      icon: Shield,
      title: "Integrity - Upholding trust, resilience, and accountability",
    },
    {
      icon: HandHeart,
      title: "Collaboration - Growing stronger through partnerships",
    },
    {
      icon: BookOpen,
      title: "Knowledge - Empowering lives through lifelong learning",
    },
    {
      icon: Unlock,
      title: "Opportunity - Creating access and inclusion for all",
    },
    {
      icon: Target,
      title: "Impact - Building a legacy of transformation",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "We provide top-notch web development services tailored to your business needs, delivering highly scalable and responsive website",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description:
        "We design and develop intuitive mobile apps for Android and iOS platforms, tailored to meet user needs.",
    },
    {
      icon: FileText,
      title: "Website Hosting and Maintenance",
      description:
        "Our hosting and maintenance services ensure your website runs smoothly, stays secure, and remains up-to-date.",
    },
    {
      icon: Brush,
      title: "Graphics Design & Video Editing",
      description:
        "Creative designs and professional video editing to captivate young audience and enhance your brand.",
    },
    {
      icon: PenTool,
      title: "Copywriting",
      description:
        "Engaging and persuasive copy to effectively communicate your message and boost conversions.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & SEO",
      description:
        "Grow your online presence and drive traffic with targeted digital marketing and effective SEO strategies.",
    },
    {
      icon: Monitor,
      title: "Tech Training Programs",
      description:
        "We offer hands-on training programs to upskill your team in modern technologies and practices.",
    },
    {
      icon: Settings,
      title: "Product Design & Management",
      description:
        "End-to-end product design and management to bring your vision to life and ensure successful delivery.",
    },
  ];

  const teamMembers = [
    {
      name: "Raphael Omochor",
      title: "Founder, Executive Board",
      subtitle: "Chairman & CEO",
      image: team1,
      hasLinkedIn: true,
    },
    {
      name: "Christopher Enyeribe",
      title: "Co-founder & COO",
      image: team12,
      hasLinkedIn: true,
    },
    {
      name: "Babatunde Maryam F.",
      title: "Co-founder & CTO",
      subtitle: "Co-founder & CTIO",
      image: team2,
      hasLinkedIn: true,
    },
    {
      name: "Kabiru Sunkanmi",
      title: "Kabirat",
      image: team17,
      hasLinkedIn: true,
    },
    {
      name: "Favour I. Peter",
      title: "Chief Marketing Officer (CMO)",
      image: team6,
      hasLinkedIn: true,
    },
    {
      name: "Dickson Goodness",
      title: "Executive Secretary & Graphic Designer",
      image: team10,
      hasLinkedIn: true,
    },
    {
      name: "Rashidat Ayobami",
      title: "Deputy",
      subtitle: "Secretary & Director of BluesTalk & Future Tech Education",
      image: team19,
      hasLinkedIn: true,
    },
    {
      name: "Olawatosin Adesoro A.",
      title: "UI/UX & Mobile App Designer",
      image: team18,
      hasLinkedIn: true,
    },
    {
      name: "Osawaru Josephine O.",
      title: "Head of Creativity & design",
      image: team9,
      hasLinkedIn: true,
    },
    {
      name: "Suleiman Attahiru",
      title: "Graphic Designer",
      image: team13,
      hasLinkedIn: true,
    },
    {
      name: "Ufere Stephen U.",
      title: "Graphic Designer",
      image: team8,
      hasLinkedIn: true,
    },
    {
      name: "Timothy O. Olaniyan",
      title: "Content/Copywriter",
      image: team11,
      hasLinkedIn: true,
    },
    {
      name: "Olaniran Samuel B.",
      title: "Blockchain Developer",
      image: team3,
      hasLinkedIn: true,
    },
  ];

  const advisoryBoard = [
    {
      name: "Osinakachi Akum Kalu",
      title: "(PhD)",
      role: "Strategic Partnership Advisor",
      image: board1,
      hasLinkedIn: true,
    },
    {
      name: "Dr. Tammy Francis",
      role: "Education & Capacity Building Advisor",
      image: board4,
      hasLinkedIn: true,
    },
    {
      name: "Dr. Sindhu Bhaskar",
      role: "Economic Development Advisor",
      image: board6,
      hasLinkedIn: true,
    },
    {
      name: "Fredrick Nonde Jr.",
      role: "Innovation & Technology Advisor",
      image: board2,
      hasLinkedIn: true,
    },
    {
      name: "Dr. Bethel Nwakaku",
      role: "Community Development Advisor",
      image: board5,
      hasLinkedIn: true,
    },
    {
      name: "Okemgbo S. Deborah Esq.",
      role: "Regulatory & Compliance Advisor",
      image: board8,
      hasLinkedIn: true,
    },
  ];

  return (
    <section className="flex flex-col">
      <header
        className="relative h-[495px] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${AboutUsImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div
          className="relative z-10 text-white px-4 max-w-6xl"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="md:text-lg text-sm">
            Block-Scholars Africa is a leading education and innovation platform
            dedicated to equipping young Africans with knowledge and skills
            needed to excel in blockchain, Web3, and emerging technologies
          </p>
        </div>
      </header>

      {/* card section */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 bg-white">
        <div className="flex flex-col gap-y-9">
          {/* First card */}
          <div
            className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
            data-aos="fade-right"
          >
            {/* Left Card */}
            <div className="bg-customBrown text-white px-6 sm:px-8 py-10 rounded-2xl w-full md:w-1/2 shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                VISION
              </h3>
              <p className="text-base leading-relaxed text-white/90">
                To empower Africa’s future by creating a thriving economy of
                blockchain and tech innovators during sustainable development
                and economic growth.
              </p>
            </div>

            {/* Right Image Box */}
            <div
              className="hidden md:flex w-full md:w-1/2 rounded-2xl bg-[#d8ecff]  items-center justify-center p-6"
              data-aos="fade-left"
            >
              <img
                src={VisionImage}
                alt="Vision"
                className="object-contain max-h-[350px] w-full rounded-xl"
              />
            </div>
          </div>
          {/* second card */}
          <div
            className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10"
            data-aos="fade-left"
          >
            {/* Left Card */}
            <div className="bg-customBrown text-white px-6 sm:px-8 py-10 rounded-2xl w-full md:w-1/2 shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                MISSION
              </h3>
              <p className="text-base leading-relaxed text-white/90">
                To educate, inspire, and connect young Africans through
                cutting-edge blockchain and emerging tech programs, fostering
                innovation and real-world impact.
              </p>
            </div>

            {/* Right Image Box */}
            <div
              className="hidden md:flex w-full md:w-1/2 rounded-2xl items-center justify-center"
              data-aos="fade-right"
            >
              <img
                src={mission}
                alt="mission"
                className="object-contain max-h-[350px] w-full rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* core value */}
        <div className="py-10 md:mt-20 mt-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Core Values List */}
            <div className="space-y-8" data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-customBrown">
                Core Values
              </h2>

              <div className="space-y-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-customBrown" />

                      <div className="flex-1">
                        <h3 className="font-medium text-lg text-[#242424] mb-1">
                          {value.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Section */}
            <div
              className="rounded-2xl overflow-hidden shadow-lg"
              data-aos="zoom-in"
            >
              <img
                src={coreValue}
                alt="Team collaboration - three professionals working together on a laptop"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* our story */}
        <div data-aos="fade-up">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-center text-customBrown mb-6 sm:mb-8">
            Our Story
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
            <div className="w-full lg:w-1/2 order-2" data-aos="fade-left">
              <p className="text-base md:text-lg font-medium text-[#242424] text-center lg:text-left leading-relaxed">
                BLOCK-SCHOLARS AFRICA was founded on August 11, 2024, to bridge
                the gap in blockchain and emerging tech education for young
                Africans. We saw the need for accessible, high-quality learning
                and created a dynamic ecosystem that equips students,
                professionals, and innovators with the skills to thrive in the
                digital economy. From campus communities to industry
                partnerships, we are building Africa’s future by empowering the
                next generation of tech leaders- one scholar at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our expetional service */}
      <div className="bg-customBrown py-20  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-2xl md:text-4xl  font-semibold text-white mb-3 leading-tight">
              Our Exceptional Services to Drive
              <br />
              <span className="text-pink-200">Your Success</span>
            </h1>
            <p className="text-lg md:text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              We offer innovation solutions designed to help you thrive. Our
              team has created groundbreaking products and provided expert
              consulting for businesses, delivering real impact.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  data-aos="zoom-in"
                  key={index}
                  className="bg-white bg-opacity-95 flex flex-col gap-y-3  rounded-2xl p-6 hover:bg-opacity-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-9 h-9 text-customBrown" />
                    </div>
                    <h3 className="text-xl font-semibold text-customBrown group-hover:text-customBrown/80 text-center transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#242424] leading-relaxed text-sm font-medium text-center">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom decorative elements */}
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-purple-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Meet Exceptional Team Members */}
      <section className="bg-[#FFF6FA] py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header Section */}
          <div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            data-aos="fade-up"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-customBrown mb-2">
              Meet The Exceptional Team Members
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#242424] font-medium">
              Core Executives, Management & Staff
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            {teamMembers.map((member, index) => (
              <TeamCard member={member} index={index} animation={"fade-up"} />
            ))}
          </div>

          {/* Advisory Board Section */}
          <div
            className="border-t border-customBrown pt-8 sm:pt-12 md:pt-16 flex flex-col gap-y-6 sm:gap-y-8"
            data-aos="fade-up"
          >
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-customBrown mb-2">
                Advisory Board
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-customBrown font-medium">
                Our board of Advisors
              </p>
            </div>

            {/* Advisory Board Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {advisoryBoard.map((member, index) => (
                <TeamCard
                  key={index}
                  member={member}
                  index={index}
                  animation="zoom-in-up"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
