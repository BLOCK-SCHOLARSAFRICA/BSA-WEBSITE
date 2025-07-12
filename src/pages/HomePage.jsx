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

const HomePage = () => {
  return (
    <div className="mb-4">
      <HeroSection />
      <AboutSection />
      <OurPrograms />

      <Community />

      <PartnersSection />
      <ContactSection />
      <TestimoniesSection />
      <FAQSection />
      <Newsletter />
    </div>
  );
};

export default HomePage;
