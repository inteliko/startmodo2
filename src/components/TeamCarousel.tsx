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
  image: string;
}

const TeamMembers: TeamMember[] = [
  { id: 1, name: "Fahima Afreen", role: "Project Manager", color: "bg-lime-400", image: "/team/moon_executive.jpg" },
  { id: 2, name: "Lamia Islam", role: "Graphic Designer", color: "bg-white", image: "public/team/lamia.jpeg" },
  { id: 3, name: "Raton Kumar", role: "Developer", color: "bg-blue-500", image: "public/team/ratan_dev.jpeg" },
  { id: 4, name: "Md Yaikub Hossain Razon", role: "SEO & Content Team Lead", color: "bg-white", image: "public/team/seo.jpeg" },
  { id: 5, name: "Mou Shermin", role: "UI/UX Designer", color: "bg-blue-500", image: "/team/mou.jpg" },
  { id: 6, name: "Md. Jakaria Hossain", role: "Webflow Developer", color: "bg-white", image: "public/team/sweet.jpeg" },
  { id: 7, name: "Russel W.", role: "Graphic Designer", color: "bg-teal-400", image: "/team/russel.jpg" },
  { id: 8, name: "Kristian L.", role: "Wordpress Developer", color: "bg-lime-400", image: "/team/kristian.jpg" },
  { id: 9, name: "Aira L.", role: "Shopify Developer", color: "bg-white", image: "/team/aira.jpg" },
  { id: 10, name: "Aiden M.", role: "Developer", color: "bg-blue-500", image: "/team/aiden.jpg" },
  { id: 11, name: "Mel R.", role: "Creative Director", color: "bg-white", image: "/team/mel.jpg" },
  { id: 12, name: "Joshua B.", role: "UI/UX Designer", color: "bg-blue-500", image: "/team/joshua.jpg" },
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
    const duration = 30000; // 30 seconds
    let scrollAmount = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const progress = (elapsed % duration) / duration;
      const contentWidth = content.scrollWidth - carousel.clientWidth;
      const newScrollPos = progress * contentWidth;
      
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
                    src={member.image} 
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
