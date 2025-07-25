import ProgramImage from "../assets/program.png";
import courses from "../data/courses"; 
import {
  Code,
  Users,
  Briefcase,
  Award,
  FileText,
  MessageSquare,
  TrendingUp,
  Shield,
  Palette,
  Image,
  BarChart3,
  Database,
  PenTool,
} from "lucide-react";
import FAQSection from "../components/FAQSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Programs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Hands-on Training",
      description: "Gain practical experience in cutting-edge technologies",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Learn from industry professionals and innovators.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Project-Based Learning",
      description: "Work on real-world solutions and innovations.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Internship Opportunities",
      description: "Secure placements in top tech companies.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Certification & Recognition",
      description: "Earn globally recognized certifications.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Collaborative Environment",
      description: "Engage with like-minded tech enthusiasts.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Advancement",
      description: "Build skills for high-demand tech roles.",
    },
  ];

  const iconMap = {
    Code,
    Shield,
    Palette,
    Image,
    BarChart3,
    Briefcase,
    Database,
    PenTool,
    TrendingUp,
  };

  return (
    <section>
      <header
        className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[566px] lg:min-h-[600px] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${ProgramImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div
          className="relative z-10 text-white px-4 sm:px-6 lg:px-8 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-11 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Innovation Lab (Master In-Demand Tech Skills)
          </h2>
          <button className="bg-[#720034] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 rounded-[60px] hover:bg-[#470020] transition-all text-sm sm:text-base md:text-lg lg:text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
            APPLY NOW
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto pt-16 px-4 md:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-2xl sm:text-3xl  font-bold text-[#242424] mb-6">
            Innovation Lab (Master In-Demand Tech Skills)
          </h2>
          <p className="text-sm sm:text-xl text-[#242424] max-w-4xl mx-auto leading-relaxed">
            A 3-month immersive program, featuring three bootcamps – Beginners,
            Growth, and Mastery. Participants work on startup projects, earn
            certificates, and secure internships, with ongoing support from
            partners.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="group bg-[#FAD1E4] rounded-tr-[50px] rounded-bl-[50px] p-6 sm:p-8 border border-gray-200 shadow-sm transition duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="min-w-[56px] min-h-[56px] w-5 h-5 bg-[#720034] rounded-full flex items-center justify-center text-white md:text-xl">
                  {feature.icon}
                </div>

                {/* Text content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#720034] transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Courses */}
        <div className="mt-16" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              Explore{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#720034] to-[#470020]">
                Our Courses
              </span>
            </h2>
            <p className="text-lg text-[#242424] max-w-3xl mx-auto leading-relaxed">
              Unlock Your Future and Take Your Tech Career to the Next Level
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => {
              const Icon = iconMap[course.icon]; 
              return (
                <div
                  data-aos="fade-up"
                  key={index}
                  className={`group bg-gradient-to-r from-[#720034] to-[#470020] rounded-2xl p-8 shadow overflow-hidden`}
                >
                  {/* Content */}
                  <div>
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                    >
                      {Icon && <Icon className="w-8 h-8" />}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-4 transition-colors duration-300">
                      {course.title}
                    </h3>

                    {/* Learn More Link */}
                    <Link  to={`/courses/${course.slug}`} className="flex items-center text-white group-hover:text-blue-700 font-semibold transition-colors duration-300">
                      <span className="mr-2">Learn More</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center" data-aos="zoom-in">
            <button className="group relative inline-flex items-center justify-center px-12 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#720034] to-[#470020] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-100 overflow-hidden">
              <span className="relative z-10">APPLY NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#470020] to-[#720034] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* FAQ */}
        <div className="mt-16 mb-8" data-aos="fade-up">
          <FAQSection />
        </div>
      </div>
    </section>
  );
};

export default Programs;
