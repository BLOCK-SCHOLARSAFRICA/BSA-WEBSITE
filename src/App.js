import React from "react";
import Header from "./components/Header";
import {
  HeroSection,
  AboutSection,
  EventSection,
  Community,
  ContactSection,
  Partnership,
  TestimoniesSection,
  SponsorsSection,
  PartnersSection,
  FAQSection,
  RegisterSection,
  Footer,
} from "./components/Section";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <EventSection />
      <Community />
      <ContactSection />
      <Partnership />
      <TestimoniesSection />
      <SponsorsSection />
      <PartnersSection />
      <FAQSection />
      <RegisterSection />
      <Footer />
    </div>
  );
}
export default App;
