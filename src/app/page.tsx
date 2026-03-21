import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Companies from "@/components/Companies";
import HealthcareProjects from "@/components/HealthcareProjects";
import IndustrialProjects from "@/components/IndustrialProjects";
import EnterpriseProjects from "@/components/EnterpriseProjects";
import MoreProjects from "@/components/MoreProjects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Companies />
        <div className="section-divider" />
        <HealthcareProjects />
        <div className="section-divider" />
        <IndustrialProjects />
        <div className="section-divider" />
        <EnterpriseProjects />
        <div className="section-divider" />
        <MoreProjects />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
