
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const projectImages = [
  {
    src: "public/projects/crm_screenshot.gif",
    alt: "TMarketing and Sales Automation",
    title: "Marketing and Sales Automation ",
    category: "Dashboard"
  },
  {
    src: "public/projects/trix-rap.gif",
    alt: "Woman using a laptop computer",
    title: "E-Commerce Solution",
    category: "UX/UI Design"
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
    alt: "Modern laptop display",
    title: "SaaS Dashboard",
    category: "Product Design"
  }
];

const SelectedWork = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Selected Work<br />
          From Our Talents
        </h2>
        
        <div className="hidden md:flex gap-4">
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
            &#8592;
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">
            &#8594;
          </button>
        </div>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {projectImages.map((project, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white h-auto">
                <div className="relative h-64">
                  <img 
                    src={project.src} 
                    alt={project.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 md:hidden">
          <CarouselPrevious className="relative mr-4" />
          <CarouselNext className="relative" />
        </div>
      </Carousel>
    </div>
  );
};

export default SelectedWork;
