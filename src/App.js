import React from "react";
import Header from "./components/Header";
import {
  HeroSection,
  AboutSection,
  EventSection,
  ContactSection,
  TestimoniesSection,
  SponsorsSection,
  PartnersSection,
  FAQSection,
  CommunitySection,
  Footer
} from "./components/Section";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <EventSection />
      <ContactSection />
      <TestimoniesSection />
      <SponsorsSection />
      <PartnersSection />
      <FAQSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
export default App;
