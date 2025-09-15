import { ArrowLeft, Download, Clock, Award, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import courses from "../data/courses.json";

const CourseDetails = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  console.log("Course Details:", course);

  const backNav = useNavigate();
  const handleBack = () => {
    backNav(-1);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <button onClick={handleBack} className="flex items-center mb-6">
          <ArrowLeft className="w-5 h-5 mr-2 text-gray-600" />
          <span className="text-gray-600 cursor-pointer hover:text-gray-800">
            Go back
          </span>
        </button>

        <div className="flex flex-col gap-y-6 lg:gap-y-8">
          {/* Course Header Section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
            {/* Course Header Text */}
            <div className="w-full lg:w-[48%] order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#242424] mb-4">
                {course.title}
              </h1>
              <p className="text-[#242424] mb-6 text-sm sm:text-base leading-relaxed">
                {course.description}
              </p>

              {/* Rating */}
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current opacity-50" />
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <span className="text-blue-600 font-semibold text-sm sm:text-base">
                    {course.rating} ({course.reviews} Reviews)
                  </span>
                  <p className="text-[#242424] font-medium text-sm sm:text-base">
                    <span className="font-semibold">{course.enrolled}</span> enrolled for this course
                  </p>
                </div>
              </div>
            </div>

            {/* Course Image */}
            <div className="bg-gray-900 rounded-lg overflow-hidden w-full lg:w-1/2 order-1 lg:order-2">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 sm:h-64 lg:h-auto object-cover"
              />
            </div>
          </div>

          {/* Main Content Section */}
          <div className="flex flex-col xl:flex-row gap-6 justify-between">
            {/* Overview and Benefits Section */}
            <div className="w-full xl:w-[55%] flex flex-col gap-y-6">
              {/* Overview Section */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border-2 border-[#A3A3A3]">
                <div className="flex items-center mb-4">
                  <span className="text-gray-400 text-base sm:text-lg font-medium mr-3">
                    01
                  </span>
                  <h2 className="text-lg sm:text-xl font-semibold text-customBrown">
                    OVERVIEW
                  </h2>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#242424] my-6 sm:my-8">
                  What you'll learn
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {course.overview.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <span className="text-[#242424] text-xs sm:text-sm">✓</span>
                      </div>
                      <span className="text-[#242424] text-base sm:text-lg font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center text-[#242424]">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">
                      Download complete curriculum for starter package
                    </span>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border-2 border-[#A3A3A3]">
                <div className="flex items-center mb-4">
                  <span className="text-base sm:text-lg font-medium mr-3">
                    02
                  </span>
                  <h2 className="text-lg sm:text-xl font-semibold text-customBrown">
                    BENEFITS
                  </h2>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#242424] my-6 sm:my-8">
                  What does this learning track offer?
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {course.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#A3A3A3] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-[#242424] text-base sm:text-lg font-medium leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price and Stats Card */}
            <div className="w-full xl:w-[40%] space-y-6">
              {/* Stats Card */}
              <div className="bg-[#F1CBDC] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
                {/* First Stat */}
                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-customBrown mb-2">
                    {course.insight.jobOfferRate}%
                  </div>
                  <p className="text-[#242424] text-base sm:text-lg font-medium leading-relaxed">
                    Students receive job offers upon completing this training
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-[#717171] mb-4"></div>

                {/* Second Stat */}
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-customBrown mb-2">
                    {course.insight.globalDemand}
                  </div>
                  <p className="text-[#242424] font-medium text-base sm:text-lg leading-relaxed">
                    {course.insight.globalDemandDetails}
                  </p>
                </div>
              </div>

              {/* Course Info Card */}
              <div className="bg-[#222222] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">{course.track}</h3>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                    <Star className="w-4 h-4 text-yellow-400 fill-current opacity-50" />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      {course.enrolled} enrolled for this course
                    </span>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{course.duration}</span>
                  </div>

                  <div className="flex items-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      {course.certification &&
                        "Digital certificates after completion"}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-gray-400 flex-shrink-0">🎯</span>
                    <span className="text-xs sm:text-sm">{course.level}</span>
                  </div>
                </div>

                <button className="w-full bg-customBrown hover:bg-customBrown/80 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg transition duration-200 text-sm sm:text-base">
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

// https://www.rocket.new/68c7e37abe1d410014fea6f6#code