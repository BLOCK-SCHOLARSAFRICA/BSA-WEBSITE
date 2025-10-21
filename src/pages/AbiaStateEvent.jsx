import banner from "../assets/abia.png";
import EventNav from "../components/EventNav";
import EventHero from "../components/EventHero";
import CountdownTimer from "../components/CountdownTimer";
import EventMainContent from "../components/EventMainContent";
import EventDetails from "../components/conference/EventDetails";
import Features from "../components/conference/Features";
import Speakers from "../components/conference/Speakers";
import Statistics from "../components/conference/Statistics";
import Sponsors from "../components/conference/Sponsors";
import CallToAction from "../components/conference/CallToAction";
import Footer from "../components/conference/Footer";
import HeroSection from "../components/conference/Hero";
import SponsorPartners from "../components/conference/SponsorPartners";


const AbiaStateEvent = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section with overlay */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Overlay only for hero + nav */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <EventNav />
          {/* <EventHero /> */}
          <HeroSection />
        </div>
      </div>

      {/* Main content without overlay */}
      <div className="relative  bg-white text-gray-900">
        {/* <EventMainContent /> */}
        <EventDetails />
        {/* speakers */}
        <Statistics />
        {/* Statistics */}

        {/* CountdownTimer */}
        <CountdownTimer />

        <Speakers />
        {/* features */}
        <Features />
        {/* <Sponsors /> */}
        <SponsorPartners/>
        
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default AbiaStateEvent;
