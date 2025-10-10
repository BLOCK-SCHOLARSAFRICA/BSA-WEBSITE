import { Calendar, Clock, MapPin } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const EventHero = () => {
  const reserveLink = () => {
    // window.location.href ="https://luma.com/tdrxynqv"
    window.open("https://luma.com/tdrxynqv", "_blank");
  }
  return (
    <section id="Home" className="px-6 pt-20 text-white md:pt-18">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
              ABIA <span className="text-[#791EEB]">WEB3 & </span>DIGITAL
            </h1>
            <h2 className="text-4xl md:text-6xl font-semibold text-white">
              ECONOMY Conference
            </h2>
          </div>

          {/* Hashtag */}
          <div className="text-2xl md:text-4xl font-medium text-[#00DEEF]">
            #AWDEC2025
          </div>

          {/* Event details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/90 text-lg font-medium">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6  text-[#00DEEF]" />
              <span>November 27, 2025</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#00DEEF]" />
              <span>9 am WAT</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#00DEEF]" />
              <span>ABA TOWN HALL (EXECUTIVE CHAMBER)</span>
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-white/90 italic leading-relaxed font-medium">
              "Africa is shaping the future of digital innovation, driving
              solutions that leapfrog growth and development"
            </blockquote>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/80 leading-relaxed">
              Be part of the conversation at AWDEC 2025 - a one-day conference
              on collaboration, innovation, and opportunities in Web3 and the
              digital economy
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={reserveLink}
              className=" px-16 py-3 rounded-full bg-[#791EEB] text-white font-semibold shadow-lg 
             
             transition-all duration-300 
             hover:bg-[#00DEEF] "
            >
              Reserve a seat
            </button>
          </div>
        </div>
      </div>

      {/* <CountdownTimer /> */}
    </section>
  );
};

export default EventHero;
