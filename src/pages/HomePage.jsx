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
    <>
      <HeroSection />
      <AboutSection />
      <OurPrograms />

      <Community />

      <PartnersSection />
      <ContactSection />
      <TestimoniesSection />
      <FAQSection />
      <Newsletter />
    </>
  );
};

export default HomePage;
