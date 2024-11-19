import React from 'react';
import Header from "./components/Header";
import {
  HeroSection,
  AboutSection,
  EventSection,
  ContactSection,
  TestimoniesSection,
  SponsorsSection,
  FAQSection,
  PartnersSection,
  RegisterSection,
} from "./components/Section";

import './App.css';

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
      <FAQSection />
      <PartnersSection />
      <RegisterSection />
    </div>
  );
}
export default App;
