import AboutUsImage from "../assets/about-us.png";
import VisionImage from "../assets/vision.png";
import coreValue from "../assets/coreValue.png";
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
  Settings 
} from "lucide-react";

import blockImage2 from "../assets/blockImage2.png";

const AboutUs = () => {
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
      title: 'Web Development',
      description: 'We provide top-notch web development services tailored to your business needs, delivering highly scalable and responsive website'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'We design and develop intuitive mobile apps for Android and iOS platforms, tailored to meet user needs.'
    },
    {
      icon: FileText,
      title: 'Website Hosting and Maintenance',
      description: 'Our hosting and maintenance services ensure your website runs smoothly, stays secure, and remains up-to-date.'
    },
    {
      icon: Brush,
      title: 'Graphics Design & Video Editing',
      description: 'Creative designs and professional video editing to captivate young audience and enhance your brand.'
    },
    {
      icon: PenTool,
      title: 'Copywriting',
      description: 'Engaging and persuasive copy to effectively communicate your message and boost conversions.'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      description: 'Grow your online presence and drive traffic with targeted digital marketing and effective SEO strategies.'
    },
    {
      icon: Monitor,
      title: 'Tech Training Programs',
      description: 'We offer hands-on training programs to upskill your team in modern technologies and practices.'
    },
    {
      icon: Settings,
      title: 'Product Design & Management',
      description: 'End-to-end product design and management to bring your vision to life and ensure successful delivery.'
    }
  ];
  return (
    <section className="flex flex-col gp-y-10 bg-green-500">
      <header
        className="relative h-[495px] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${AboutUsImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-4 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="md:text-lg text-sm">
            Block-Scholars Africa is a leading education and innovation platform
            dedicated to equipping young Africans with knowledge and skills
            needed to excel in blockchain, Web3, and emerging technologies
          </p>
        </div>
      </header>

      {/* card section */}
      <div className="py-20 px-4 md:px-28 bg-white">
        {/* First card */}
        <div className="relative ">
          {/* Top circle */}
          {/* <div className="absolute left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-8 border-customBrown bg-white z-10 hidden md:block" /> */}

          <div className="flex flex-col md:flex-row items-center">
            {/* Left Card */}
            <div className="bg-customBrown text-white px-8 py-10 rounded-2xl w-full md:w-1/2 shadow-lg  flex flex-col ">
              <h3 className="text-xl font-bold mb-8">VISION</h3>
              <p>
                To empower Africa’s future by creating a thriving economy of
                blockchain and tech innovators during sustainable development
                and economic growth.
              </p>
            </div>

            {/* Right Image Box */}
            <div className="w-full md:w-1/2 rounded-2xl bg-[#d8ecff] flex items-center justify-center p-4">
              <img
                src={VisionImage}
                alt="Vision"
                className="object-cover max-h-[400px]"
              />
            </div>
          </div>

          {/* Bottom circle */}
          {/* <div className="absolute bottom-0 right-1/3 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full border-8 border-customBrown bg-white z-10 hidden md:block" /> */}
        </div>

        {/* core value */}
        <div className="my-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Core Values List */}
            <div className="space-y-8">
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
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={coreValue}
                alt="Team collaboration - three professionals working together on a laptop"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* our story */}
        <div>
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
            <div className="w-full lg:w-1/2 order-2">
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
      <div className="bg-customBrown py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl  font-semibold text-white mb-3 leading-tight">
            Our Exceptional Services to Drive
            <br />
            <span className="text-pink-200">Your Success</span>
          </h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
            We offer innovation solutions designed to help you thrive. Our team has created groundbreaking products and provided expert
          
            consulting for businesses, delivering real impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
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

    </section>
  );
};

export default AboutUs;
