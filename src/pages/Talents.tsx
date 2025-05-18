
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Clock, Users, Heart, DollarSign, Smile } from "lucide-react";
import TalentProcess from "@/components/TalentProcess";
import TalentFaq from "@/components/TalentFaq";
import DynamicBackground from "@/components/DynamicBackground";
import { useRef } from "react";

const Talents = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  // Define color sections for the talents page
  const talentsColorSections = [
    { 
      sectionId: "hero", 
      backgroundColor: "#000000", 
      textColor: "#ffffff", 
      startPercentage: 0, 
      endPercentage: 10 
    },
    { 
      sectionId: "stats", 
      backgroundColor: "#ffffff", 
      textColor: "#0f1729", 
      startPercentage: 10, 
      endPercentage: 20 
    },
    { 
      sectionId: "process", 
      backgroundColor: "#f7f9fc", 
      textColor: "#0f1729", 
      startPercentage: 20, 
      endPercentage: 40 
    },
    { 
      sectionId: "skills", 
      backgroundColor: "#000000", 
      textColor: "#ffffff", 
      startPercentage: 40, 
      endPercentage: 60 
    },
    { 
      sectionId: "growth", 
      backgroundColor: "#ffffff", 
      textColor: "#0f1729", 
      startPercentage: 60, 
      endPercentage: 75 
    },
    { 
      sectionId: "faq", 
      backgroundColor: "#f7f9fc", 
      textColor: "#0f1729", 
      startPercentage: 75, 
      endPercentage: 85 
    },
    { 
      sectionId: "sustainable", 
      backgroundColor: "#ffffff", 
      textColor: "#0f1729", 
      startPercentage: 85, 
      endPercentage: 95 
    },
    { 
      sectionId: "cta", 
      backgroundColor: "#0066ff", 
      textColor: "#ffffff", 
      startPercentage: 95, 
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
    <DynamicBackground colorSections={talentsColorSections}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Section indicators */}
        <div className="section-indicator hidden md:flex">
          {talentsColorSections.map((section, index) => (
            <div 
              key={section.sectionId}
              className={`section-dot ${index === 0 ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
            />
          ))}
        </div>
        
        <main>
          {/* Hero Section */}
          <section 
            ref={el => sectionRefs.current[0] = el as HTMLDivElement}
            className="dynamic-section py-20"
          >
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Great Designers & Developers<br />
                  Don't Grow on Trees.<br />
                  <span className="text-[#9b87f5]">They Grow at StartModo.</span>
                </h1>
                <p className="text-lg mb-10">
                  StartModo uses a community-first approach to find & manage great talents
                  and keep investing in their skill development to help them accelerate their
                  career while working with progressive brands.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section 
            ref={el => sectionRefs.current[1] = el as HTMLDivElement}
            className="dynamic-section py-16"
          >
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h2 className="text-5xl font-bold mb-2">1,000+</h2>
                  <p className="text-gray-600">Professionals in<br />Talent Pool</p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold mb-2">155+</h2>
                  <p className="text-gray-600">Design & Tech<br />Skill Categories</p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold mb-2">1</h2>
                  <p className="text-gray-600">All-In-One<br />Subscription</p>
                </div>
              </div>
            </div>
          </section>

          {/* Talent Development Process */}
          <div 
            ref={el => sectionRefs.current[2] = el as HTMLDivElement}
            className="dynamic-section"
          >
            <TalentProcess />
          </div>

          {/* Skills Section */}
          <section 
            ref={el => sectionRefs.current[3] = el as HTMLDivElement}
            className="dynamic-section py-16"
          >
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cherry-Pick Skills On-Demand</h2>
              <p className="text-lg mb-12 max-w-3xl mx-auto">
                Your PM delegates work on a task-by-task basis and ensures a qualified expert gets the job done, even if you need these skills only for one day.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm my-8">
                <span className="px-3 py-1 bg-gray-800 rounded-full">Landing Pages</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Custom CSS</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Shopify Development</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Vue.JS</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Presentation Design</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">No-Code Apps</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">WordPress</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">UI/UX Design</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Logo Design</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Motion Graphics</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Email Templates</span>
                <span className="px-3 py-1 bg-gray-800 rounded-full">Figma</span>
              </div>
            </div>
          </section>

          {/* Growth Development */}
          <section 
            ref={el => sectionRefs.current[4] = el as HTMLDivElement}
            className="dynamic-section py-16"
          >
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <img src="/placeholder.svg" alt="Growth chart" className="rounded-lg shadow-md" />
                    <img src="/placeholder.svg" alt="Design review" className="rounded-lg shadow-md" />
                    <img src="/placeholder.svg" alt="Growth metrics" className="rounded-lg shadow-md" />
                    <img src="/placeholder.svg" alt="Design dashboard" className="rounded-lg shadow-md" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    We Develop Growth Maps Instead of Believing the Talent Myth
                  </h2>
                  <p className="mb-6">
                    In a fast-moving industry like ours, recruiting great talent is not enough anymore. We have to invest in the development of new skills and give our designers & developers a clear path for their careers.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1" size={18} />
                      <p>Monthly tracked skill and work quality improvements</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1" size={18} />
                      <p>Weekly peer-to-peer coaching sessions</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1" size={18} />
                      <p>Access to the latest online courses to learn new tech and trends</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Traditional Hiring Section - Now using the new TalentFaq component */}
          <div 
            ref={el => sectionRefs.current[5] = el as HTMLDivElement}
            className="dynamic-section"
          >
            <TalentFaq />
          </div>
          
          {/* Sustainable Outsourcing */}
          <section 
            ref={el => sectionRefs.current[6] = el as HTMLDivElement}
            className="dynamic-section py-16"
          >
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Outsource <span className="text-blue-500">Sustainably</span><br />
                Without the Bad Taste
              </h2>
              <p className="text-center mb-16 max-w-3xl mx-auto">
                StartModo aims to connect fast-growing companies with ambitious remote talent while creating win-win situations and a great work experience for both parties.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <div className="mb-4">
                    <Clock className="text-blue-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Long-Term Engagement</h3>
                  <p className="text-gray-600">
                    We don't work with random freelancers who we pull in for a project and then let go. We believe that people work best when they have a stable work environment with a clear path for their careers.
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    <DollarSign className="text-blue-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fair Wages</h3>
                  <p className="text-gray-600">
                    Most of our talents live in countries with lower living costs than the US or Europe. However, we also make sure that they get paid fairly and have the opportunity to increase their rates with improved performance.
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    <Heart className="text-blue-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Health Benefits</h3>
                  <p className="text-gray-600">
                    Taking care of our talents is as important as providing excellent service to our customers. Therefore, we give long-term contractors the chance to receive health benefits and ensure their well-being.
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    <Users className="text-blue-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Remote Social Events</h3>
                  <p className="text-gray-600">
                    Working from home has a lot of benefits but also apparent drawbacks, like loneliness. For us, we make it a priority that our talents feel part of a community where they can reach out for support and fun interactions.
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    <Smile className="text-blue-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">8.6 eNPS Score</h3>
                  <p className="text-gray-600">
                    A big part of our talent community growth happened thanks to referrals from our current team members. It turns out that A-players tend to attract more A-players, and our monthly team surveys reflect that.
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    <Clock className="text-blue-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{"<1% Turnover"}</h3>
                  <p className="text-gray-600">
                    Our applicant screening and skill development process, as well as the community platform, helped us to build strong relationships with talents that used to jump from one client to the next.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section 
            ref={el => sectionRefs.current[7] = el as HTMLDivElement}
            className="dynamic-section py-16"
          >
            <div className="container mx-auto px-6 text-center">
              <div className="mb-8">
                <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Your New Team<br />
                Member Today
              </h2>
              <p className="mb-10 max-w-xl mx-auto">
                Finally, you can hire vetted designers & developers on a budget without sacrificing quality.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-black hover:bg-gray-900">
                  See Plans & Pricing
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100">
                  Join Talent Community
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </DynamicBackground>
  );
};

export default Talents;
