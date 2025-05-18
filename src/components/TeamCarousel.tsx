
import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  color: string;
}

const TeamMembers: TeamMember[] = [
  { id: 1, name: "Kristian L.", role: "Wordpress Developer", color: "bg-lime-400" },
  { id: 2, name: "Aira L.", role: "Shopify Developer", color: "bg-white" },
  { id: 3, name: "Aiden M.", role: "Developer", color: "bg-blue-500" },
  { id: 4, name: "Mel R.", role: "Creative Director", color: "bg-white" },
  { id: 5, name: "Joshua B.", role: "UI/UX Designer", color: "bg-blue-500" },
  { id: 6, name: "Zeke S.", role: "Webflow Developer", color: "bg-white" },
  { id: 7, name: "Russel W.", role: "Graphic Designer", color: "bg-teal-400" },
  // Duplicate members for infinite scrolling effect
  { id: 8, name: "Kristian L.", role: "Wordpress Developer", color: "bg-lime-400" },
  { id: 9, name: "Aira L.", role: "Shopify Developer", color: "bg-white" },
  { id: 10, name: "Aiden M.", role: "Developer", color: "bg-blue-500" },
  { id: 11, name: "Mel R.", role: "Creative Director", color: "bg-white" },
  { id: 12, name: "Joshua B.", role: "UI/UX Designer", color: "bg-blue-500" },
];

const TeamCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const content = contentRef.current;
    
    if (!carousel || !content) return;
    
    let animationId: number;
    let startTime: number;
    const duration = 30000; // 30 seconds for one full scroll cycle
    let scrollAmount = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate the scroll position based on elapsed time
      const progress = (elapsed % duration) / duration;
      const contentWidth = content.scrollWidth - carousel.clientWidth;
      const newScrollPos = progress * contentWidth;
      
      // Check if we need to reset
      if (newScrollPos < scrollAmount) {
        scrollAmount = 0;
        carousel.scrollLeft = 0;
      } else {
        scrollAmount = newScrollPos;
        carousel.scrollLeft = scrollAmount;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-12" ref={carouselRef}>
      <div className="w-full" ref={contentRef}>
        <div className="flex">
          {TeamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pl-4"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="h-64 bg-gray-200">
                  <img 
                    src="/placeholder.svg" 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className={`absolute bottom-0 left-0 right-0 p-4 ${member.color} text-black`}>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
