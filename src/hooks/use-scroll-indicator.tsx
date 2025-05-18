
import { useEffect } from "react";

export const useScrollIndicator = (
  sections: string[], 
  indicatorClass: string = "section-dot"
) => {
  useEffect(() => {
    const handleScroll = () => {
      // Find the current section based on scroll position
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const indicators = document.querySelectorAll(`.${indicatorClass}`);
      
      sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        const sectionTop = section.offsetTop - windowHeight / 3;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          indicators.forEach((indicator, i) => {
            if (i === index) {
              indicator.classList.add("active");
            } else {
              indicator.classList.remove("active");
            }
          });
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, indicatorClass]);
};
