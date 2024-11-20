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
  RegisterSection,
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
      <RegisterSection />
    </div>
  );
}
export default App;
