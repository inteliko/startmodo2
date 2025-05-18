
import { useState, useEffect } from "react";

type ColorSection = {
  sectionId: string;
  backgroundColor: string;
  textColor: string;
  startPercentage: number;
  endPercentage: number;
};

export const useScrollColor = (colorSections: ColorSection[]) => {
  const [activeSection, setActiveSection] = useState<ColorSection | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
      const currentSection = colorSections.find(
        section => 
          scrollPercentage >= section.startPercentage && 
          scrollPercentage <= section.endPercentage
      );
      
      if (currentSection && (!activeSection || activeSection.sectionId !== currentSection.sectionId)) {
        setActiveSection(currentSection);
        document.documentElement.style.setProperty('--dynamic-bg', currentSection.backgroundColor);
        document.documentElement.style.setProperty('--dynamic-text', currentSection.textColor);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initialize with the first section
    if (colorSections.length > 0 && !activeSection) {
      setActiveSection(colorSections[0]);
      document.documentElement.style.setProperty('--dynamic-bg', colorSections[0].backgroundColor);
      document.documentElement.style.setProperty('--dynamic-text', colorSections[0].textColor);
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [colorSections, activeSection]);
  
  return activeSection;
};
