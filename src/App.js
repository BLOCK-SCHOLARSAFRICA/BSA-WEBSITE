import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Team from "./pages/Team"; // Import the Team page
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Main sections */}
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        {/* Team page */}
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
