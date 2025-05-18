
import { useParams, useNavigate } from "react-router-dom";
import { showcaseItems } from "@/data/showcaseData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const ShowcaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = showcaseItems.find(item => item.id === id);
  
  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate("/showcase")}>
              Back to Showcase
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Project Hero */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <Button 
              variant="ghost" 
              className="text-white mb-8 hover:bg-white/10"
              onClick={() => navigate("/showcase")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all projects
            </Button>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg mb-6">{project.category}</p>
          </div>
        </div>
        
        {/* Project Image */}
        <div className="container mx-auto px-6 py-12">
          <div className="w-full h-96 md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Project Details */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-8">{project.description}</p>
              
              <h2 className="text-2xl font-bold mb-6">Deliverables</h2>
              <ul className="list-disc list-inside space-y-2 mb-8">
                {project.deliverables.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-500">Client</h3>
                      <p>{project.client}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Year</h3>
                      <p>{project.year}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-500">Technologies</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* More Projects */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">More Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {showcaseItems
                .filter(item => item.id !== id)
                .slice(0, 3)
                .map((item, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => navigate(`/showcase/${item.id}`)}
                  >
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShowcaseDetail;
