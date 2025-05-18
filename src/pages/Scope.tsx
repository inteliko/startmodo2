
import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";

const Scope = () => {
  const [activeCategory, setActiveCategory] = useState<string>("UX Design");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Task Categories Data
  const taskCategories = [
    "UX Design",
    "UI Design",
    "Graphic Design",
    "Video & Animation",
    "Development",
    "Maintenance",
    "SEO",
    "Hosting",
    "Automation",
    "No Code",
    "Conversion Optimization",
    "Advice"
  ];

  // Project Categories Data
  const projectCategories = [
    "Websites",
    "Funnels",
    "Marketplace",
    "Portal",
    "Directory Site"
  ];

  // Services Data
  const services = {
    "UX Design": [
      {
        title: "Sitemap / Information Architecture",
        description: "Give me a 10,000-foot view of my website and map out the content sections for each page of my website or funnel to create a clear and intuitive user flow.",
        turnaround: "1 DAY AVG. TURNAROUND",
        platforms: ["Octopus", "Figma"]
      },
      {
        title: "Website Wireframe",
        description: "Create a conversion-optimized wireframe for my landing page or website.",
        turnaround: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Adobe XD", "Figma"]
      },
      {
        title: "Web App Wireframe",
        description: "Create a schematic representation outlining webpage structure and functionalities, assisting in design and development by visualizing layout and user interactions.",
        turnaround: "1 DAY AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      },
      {
        title: "Mobile App Wireframe",
        description: "Create a blueprint sketch that outlines app layout and features, aiding design and development by visualizing structure and user interactions.",
        turnaround: "1 DAY AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      }
    ],
    "UI Design": [
      {
        title: "Homepage UI Design",
        description: "Create a pixel-perfect design concept for my new homepage that impresses my customers.",
        turnaround: "1-3 DAYS AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      },
      {
        title: "Internal Web Page UI Design",
        description: "Design my internal web pages based on your pre-defined design guidelines or homepage concept.",
        turnaround: "1-3 DAYS AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      },
      {
        title: "Landing Page UI Design",
        description: "Design a high-converting landing page concept for my product or service.",
        turnaround: "1-3 DAYS AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      },
      {
        title: "Web App UI Design",
        description: "Design a new user interface for my web app based on my current version or new wireframes.",
        turnaround: "1-4 DAYS AVG. TURNAROUND",
        platforms: ["Figma", "Adobe XD"]
      }
    ],
    "Graphic Design": [
      {
        title: "Brand Identity",
        description: "Create new brand guidelines for my product or company.",
        turnaround: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Canva", "Figma", "Adobe XD", "PowerPoint", "Google Slides"]
      },
      {
        title: "Logo Design",
        description: "Design a new logo for my brand or product.",
        turnaround: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Adobe Photoshop", "Figma"]
      },
      {
        title: "Flyer & Brochure Design",
        description: "Create a creative flyer or brochure design for my product, service, or event.",
        turnaround: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Canva", "Figma", "Adobe XD", "Adobe Photoshop", "Illustrator", "Adobe InDesign"]
      },
      {
        title: "Book Cover & Page Design",
        description: "Design a cover for my paperback book or ebook that gets attention.",
        turnaround: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Canva", "Figma", "Adobe XD", "Adobe Photoshop", "Illustrator", "Adobe InDesign"]
      }
    ],
    "Development": [
      {
        title: "Landing Page Development",
        description: "Build a landing page based on a design concept or template that is optimized for performance.",
        turnaround: "1 DAY AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Oxygen", "Avada", "Divi", "ClickFunnels", "SwipePages", "Unbounce", "Shopify", "Hubspot CMS"]
      },
      {
        title: "Mega Menu Development",
        description: "Enhance navigation with feature-rich mega menus for improved engagement on websites and apps.",
        turnaround: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Oxygen", "Avada", "Divi"]
      },
      {
        title: "Product Page Development",
        description: "Craft captivating product pages that drive conversions and enhance customer satisfaction in digital storefronts.",
        turnaround: "1 DAY AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Oxygen", "Avada", "Divi", "Shopify", "WooCommerce"]
      },
      {
        title: "Collection/Shop Page Development",
        description: "Create seamless shop pages featuring intuitive layouts for enhanced product visibility, engagement, and smooth shopping.",
        turnaround: "1-2 DAYS AVG. TURNAROUND",
        platforms: ["Elementor", "Webflow", "PageFly", "Oxygen", "Avada", "Divi", "Shopify", "WooCommerce"]
      }
    ]
  };

  // Filter services based on search query
  const filteredServices = Object.entries(services).reduce((acc, [category, categoryServices]) => {
    if (searchQuery) {
      const filtered = categoryServices.filter(
        service => 
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.platforms.some(platform => platform.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
    } else {
      acc[category] = categoryServices;
    }
    return acc;
  }, {} as Record<string, typeof services[keyof typeof services]>);

  // Get services to display based on active category and search query
  const displayServices = searchQuery ? filteredServices : { [activeCategory]: services[activeCategory as keyof typeof services] };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-blue-500 text-white py-16 px-6 text-center">
          <div className="mx-auto max-w-3xl mb-4">
            <img src="/placeholder.svg" alt="Candy Icon" className="inline-block h-16 w-16 mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to The Candy Store of Design & Dev Work
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            StartModo is sweeter than your grandma's cookies. Choose from our menu of tasks and projects, and let us bake your ideas into reality.
          </p>
        </div>

        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar / Categories Section */}
            <div className="w-full md:w-64 shrink-0">
              {/* Search */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full pl-9 pr-3 py-2 border rounded-md text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {taskCategories.map((category) => (
                    <div
                      key={category}
                      className={`flex items-center cursor-pointer py-1.5 ${
                        category === activeCategory ? "font-medium" : ""
                      }`}
                      onClick={() => {
                        setActiveCategory(category);
                        setSearchQuery("");
                      }}
                    >
                      <div className={`w-3 h-3 rounded-full ${
                        category === activeCategory ? "bg-blue-500" : "bg-gray-300"
                      } mr-2`} />
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow pb-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  {searchQuery ? "Search Results" : activeCategory}
                </h2>

                {/* Services Grid */}
                <div className="space-y-10">
                  {Object.entries(displayServices).map(([category, categoryServices]) => (
                    <div key={category} className="mb-8">
                      {searchQuery && <h3 className="text-xl font-semibold mb-4">{category}</h3>}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categoryServices?.map((service, index) => (
                          <Card key={`${category}-${index}`} className="overflow-hidden border hover:shadow-md transition-shadow">
                            <div className="p-6">
                              <div className="text-sm text-gray-500 mb-2">{service.turnaround}</div>
                              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                              <p className="text-gray-600 mb-4">{service.description}</p>
                              
                              <div className="mb-4">
                                <div className="text-sm font-medium mb-2">Platform</div>
                                <div className="flex flex-wrap gap-2">
                                  {service.platforms.map(platform => (
                                    <div key={platform} className="px-2 py-1 bg-gray-100 rounded text-sm">
                                      {platform}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Display message when no services match search */}
                  {searchQuery && Object.keys(displayServices).length === 0 && (
                    <div className="py-10 text-center">
                      <p className="text-lg text-gray-500">No services found matching "{searchQuery}"</p>
                      <button 
                        className="mt-3 text-blue-500 hover:underline"
                        onClick={() => setSearchQuery("")}
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Project Categories Section */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Project Categories</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {projectCategories.map(category => (
                      <Card key={category} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <h4 className="font-medium">{category}</h4>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Help Section */}
                <div className="mt-12 p-6 border rounded-md max-w-md mx-auto">
                  <h3 className="font-medium text-xl mb-4 text-center">Need Help?</h3>
                  <button className="w-full bg-black text-white py-3 rounded hover:bg-black/90">
                    Chat With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Scope;
