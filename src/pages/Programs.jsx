import ProgramImage from "../assets/program.png";
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

const Programs = () => {
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

  const courses = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Master frontend and backend technologies",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Cyber Security/Ethical Hacking",
      description: "Protect systems and networks from threats",
      color: "from-red-500 to-orange-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Product Design",
      description: "Create user-centered digital experiences",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: "Graphics Design",
      description: "Visual communication and branding",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Data Analysis",
      description: "Transform data into actionable insights",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Product Management",
      description: "Lead product strategy and development",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Science",
      description: "Machine learning and predictive analytics",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Content & Copywriting",
      description: "Craft compelling content strategies",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Digital Marketing",
      description: "Grow brands through digital channels",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

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
        <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-11 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Innovation Lab (Master In-Demand Tech Skills)
          </h2>
          <button className="bg-[#720034] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 rounded-[60px] hover:bg-[#470020] transition-all text-sm sm:text-base md:text-lg lg:text-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
            APPLY NOW
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="text-center mb-16">
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
              className="group bg-[#FAD1E4] rounded-tr-[50px] rounded-bl-[50px] p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition duration-300"
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

        <div className="text-center my-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#720034] to-[#470020]">
              Our Courses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock Your Future and Take Your Tech Career to the Next Level
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow overflow-hidden`}
            >
           

              {/* Content */}
              <div>
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#720034] transition-colors duration-300">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-[#720034] font-semibold group-hover:text-[#470020] transition-colors duration-300">
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
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#720034] to-[#470020] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
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
    </section>
  );
};

export default Programs;
