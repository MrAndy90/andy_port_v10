import React from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ReferencesSection from "../components/ReferencesSection";
import ContactBanner from "../components/ContactBanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ReferencesSection />
      <ContactBanner />
    </div>
  );
}
