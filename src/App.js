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
  Footer,
} from "./components/Section";
import Team from "./pages/TeamPage"; 
import Register from "./pages/RegisterPage";
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
              <Footer />
            </>
          }
        />
        {/* Team page */}
        <Route path="/team" element={<Team />} />
        {/* Register page */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
