import React from "react";
import { Element } from "react-scroll";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  HeroSection,
  AboutSection,
  EventSection,
  Community,
  ContactSection,
  Partnership,
  TestimoniesSection,
  SponsorsSection,
  FAQSection,
  PartnersSection,
  RegisterSection,
} from "../components/Section";

const HomePage = () => {
  // Array of sections to render
  const sections = [
    { name: "home", component: <HeroSection /> },
    { name: "about-us", component: <AboutSection /> },
    { name: "events", component: <EventSection /> },
    { name: "community", component: <Community /> },
    { name: "contact-us", component: <ContactSection /> },
    { name: "partnership", component: <Partnership /> },
    { name: "testimonies", component: <TestimoniesSection /> },
    { name: "sponsors", component: <SponsorsSection /> },
    { name: "faq", component: <FAQSection /> },
    { name: "partners", component: <PartnersSection /> },
    { name: "register", component: <RegisterSection /> },
  ];

  return (
    <div>
      <Header />
      <main>
        {sections.map(({ name, component }) => (
          <Element name={name} key={name} className="section">
            {component}
          </Element>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
