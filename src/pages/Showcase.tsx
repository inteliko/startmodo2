
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { showcaseItems } from "@/data/showcaseData";

const ShowcaseItem = ({ 
  id, 
  image, 
  title, 
  category 
}: { 
  id: string; 
  image: string; 
  title: string; 
  category: string 
}) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="group cursor-pointer" 
      onClick={() => navigate(`/showcase/${id}`)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
        <img 
          src={image} 
          alt={title} 
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{category}</p>
    </div>
  );
};

const Showcase = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Explore our portfolio of projects across various industries and services,
              showcasing our creative approach and technical expertise.
            </p>
          </div>
        </section>

        {/* Showcase Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcaseItems.map((item, index) => (
                <ShowcaseItem
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  category={item.category}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-black hover:bg-gray-900">
                View More Projects
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Showcase;
