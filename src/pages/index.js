import * as React from "react";
import AboutSection from "../components/hero/AboutSection";
import BenefitSection from "../components/hero/BenefitSection";
import ClientsBusiness from "../components/hero/ClientsBusiness";
import ContactSection from "../components/hero/ContactSection";
import HomeSection from "../components/hero/HomeSection";
import ServicesSection from "../components/hero/ServicesSection";
import TeamSection from "../components/hero/TeamSection";
import Testimonials from "../components/hero/Testimonials";
import MetaData from "../components/MetaData";
import "../styles/global.css";
import CallToAction from "../ui/CallToAction";

export default function Home() {
  return <div className="mt-[140px] sm:mt-[120px]">
    <MetaData title="Innovazy - Home" description="We offer innovative, creative and advanced IT solutions to Businesses and Industries around the Globe" keywords="Innovazy, IT Solutions" />
    <HomeSection />
    <AboutSection />
    <ClientsBusiness />
    <ServicesSection />
    <CallToAction />
    <TeamSection />
    <BenefitSection />
    <Testimonials />
    <ContactSection />
  </div>;
}
