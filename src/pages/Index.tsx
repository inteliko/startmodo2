
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TeamCarousel from "../components/TeamCarousel";
import TrustedBy from "../components/TrustedBy";
import Problem from "../components/Problem";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CreativeTalent from "../components/CreativeTalent";
import BuildWithTools from "../components/BuildWithTools";
import WhatYouGet from "../components/WhatYouGet";
import SelectedWork from "../components/SelectedWork";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import DynamicBackground from "../components/DynamicBackground";
import { useRef, useEffect } from "react";

const Index = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  // Define color sections for the homepage
  const homeColorSections = [
    { 
      sectionId: "hero", 
      backgroundColor: "#ffffff", 
      textColor: "#0f1729", 
      startPercentage: 0, 
      endPercentage: 15 
    },
    { 
      sectionId: "teamCarousel", 
      backgroundColor: "#f7f9fc", 
      textColor: "#0f1729", 
      startPercentage: 15, 
      endPercentage: 30 
    },
    { 
      sectionId: "problem", 
      backgroundColor: "#000000", 
      textColor: "#ffffff", 
      startPercentage: 30, 
      endPercentage: 45 
    },
    { 
      sectionId: "process", 
      backgroundColor: "#ffffff", 
      textColor: "#0f1729", 
      startPercentage: 45, 
      endPercentage: 60 
    },
    { 
      sectionId: "testimonials", 
      backgroundColor: "#f0f7ff", 
      textColor: "#0f1729", 
      startPercentage: 60, 
      endPercentage: 75 
    },
    { 
      sectionId: "creativeTalent", 
      backgroundColor: "#ffffff", 
      textColor: "#0f1729", 
      startPercentage: 75, 
      endPercentage: 90 
    },
    { 
      sectionId: "buildWithTools", 
      backgroundColor: "#000000", 
      textColor: "#ffffff", 
      startPercentage: 90, 
      endPercentage: 100 
    }
  ];

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <DynamicBackground colorSections={homeColorSections}>
      <div className="min-h-screen">
        <Navbar />
        
        {/* Section indicators */}
        <div className="section-indicator hidden md:flex">
          {homeColorSections.map((section, index) => (
            <div 
              key={section.sectionId}
              className={`section-dot ${index === 0 ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
            />
          ))}
        </div>
        
        <div className="bg-transparent pt-24">
          <div 
            ref={el => sectionRefs.current[0] = el as HTMLDivElement} 
            className="dynamic-section"
          >
            <Hero />
          </div>
          
          <div 
            ref={el => sectionRefs.current[1] = el as HTMLDivElement} 
            className="dynamic-section"
          >
            <TeamCarousel />
            <TrustedBy />
          </div>
          
          <div 
            ref={el => sectionRefs.current[2] = el as HTMLDivElement} 
            className="dynamic-section"
          >
            <Problem />
          </div>
          
          <div 
            ref={el => sectionRefs.current[3] = el as HTMLDivElement} 
            className="dynamic-section"
          >
            <Process />
          </div>
          
          <div 
            ref={el => sectionRefs.current[4] = el as HTMLDivElement} 
            className="dynamic-section"
          >
            <Testimonials />
          </div>
          
          <div 
            ref={el => sectionRefs.current[5] = el as HTMLDivElement} 
            className="dynamic-section"
          >
            <CreativeTalent />
            <WhatYouGet />
            <SelectedWork />
          </div>
          
          <div 
            ref={el => sectionRefs.current[6] = el as HTMLDivElement} 
            className="dynamic-section"
          >
            <BuildWithTools />
            <CallToAction />
          </div>
          
          <Footer />
        </div>
      </div>
    </DynamicBackground>
  );
};

export default Index;
