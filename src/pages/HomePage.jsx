import {
  HeroSection,
  AboutSection,
  OurPrograms,
  Community,
  ContactSection,
  TestimoniesSection,
  FAQSection,
  PartnersSection,
  Newsletter,
} from "../components/Section";
import AboutUsSection from "../components/AboutUsSection";

const HomePage = () => {
  return (
    <>
      <div className="mb-4 max-w-7xl mx-auto px-6 md:px-10">
        <HeroSection />
        <AboutSection />
        <OurPrograms />
        <AboutUsSection />
      </div>
      <Community />
      <PartnersSection />
      <div className="px-4 py-8">
        <ContactSection />
      </div>
        <TestimoniesSection />
        <FAQSection />
        <Newsletter />
    </>
  );
};

export default HomePage;
