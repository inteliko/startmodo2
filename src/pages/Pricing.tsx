
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Slider } from "@/components/ui/slider";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger, 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Infinity } from "lucide-react";

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState(0);
  const tiers = [1, 2, 4, 5, "More"];
  const prices = ["$1995", "$3990", "$7980", "$9975", "Custom"];
  const buttonText = selectedTier === 4 ? "Contact Us" : "Subscribe Now";

  const handleTierChange = (value: number[]) => {
    setSelectedTier(value[0]);
  };

  const faqItems = [
    {
      question: "What is StartModo?",
      answer: "StartModo is a design & development subscription service for growing agencies, marketing teams, and scale-ups that allows you to access various design and coding skills and a dedicated project manager at a flat monthly rate. We allow you to scale your design & dev operations fast without the hassle of traditional employment (recruiting, HR, Admin & talent development) or individual freelancers from marketplaces."
    },
    {
      question: "How do I request a new task or project?",
      answer: "During your onboarding, we will send you a link to your unique request form connected to your Asana board. Every time you have a task or project to delegate, you can fill out the form, and your project manager gets a notification. Ideally, you fill-up the task queue with multiple tasks with different priority statuses so we can grab the next request when we are done or stuck with another one to avoid wasting time. You will see all requests on your task board in Asana."
    },
    {
      question: "Do I communicate directly with the designer and developer?",
      answer: "Yes, you'll have direct communication with our design and development team through your dedicated project management tools."
    },
    {
      question: "Can we communicate via Slack or MS Teams?",
      answer: "Yes, we integrate with both Slack and Microsoft Teams for seamless communication between your team and ours."
    },
    {
      question: "How does your pricing work?",
      answer: "Our pricing is based on the number of active talents working on your requests at the same time. You can scale up or down as your needs change, with predictable monthly pricing and no hidden fees."
    },
    {
      question: "What do you mean by 'Requests'?",
      answer: "Requests are tasks or projects that you submit to our team. These can range from simple design tweaks to complex development projects."
    },
    {
      question: "What's the difference between Tasks and Projects?",
      answer: "Tasks are smaller, well-defined pieces of work that can typically be completed in a few hours to a few days. Projects are larger initiatives that may require planning, multiple team members, and several weeks or months to complete."
    },
    {
      question: "What does your 100% Satisfaction Guarantee include?",
      answer: "Our satisfaction guarantee ensures that we'll continue working on your requests until you're completely satisfied with the results. If for any reason you're not happy, we'll work to make it right or provide a refund according to our terms."
    },
    {
      question: "How long does it take to build a 'simple' website?",
      answer: "Depending on the complexity and your requirements, a simple website typically takes 2-4 weeks from concept to launch. Our project manager will provide you with a more accurate timeline based on your specific needs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Predictable Pricing.
            <br />
            No Surprises.
          </h1>
          <p className="text-lg mb-8">
            Choose the number of active talents working
            <br />
            on your requests at the same time:
          </p>
          
          {/* Slider */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="text-blue-500 text-left mb-2 flex items-center">
              <span>Scale up<br />and down</span>
              <svg className="w-16 h-10 text-blue-500 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Slider 
              defaultValue={[0]} 
              max={4} 
              step={1} 
              onValueChange={handleTierChange}
              className="mb-6"
            />
            <div className="flex justify-between">
              {tiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`text-sm ${selectedTier === index ? 'font-bold' : ''}`}
                >
                  {tier}
                </div>
              ))}
            </div>
          </div>
          
          {/* Pricing Card */}
          <div className="max-w-4xl mx-auto bg-amber-50 rounded-lg p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">All Inclusive</h2>
                <p className="text-left max-w-md">
                  For fast-moving agencies, marketing teams & scale-ups who need 
                  access to reliable on-demand design & dev talents to move even faster.
                </p>
              </div>
              <div className="hidden md:block">
                <svg className="w-12 h-12 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-blue-500 mr-2">
                    <Infinity className="h-5 w-5" />
                  </span>
                  <span>Unlimited Design Requests</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-blue-500 mr-2">
                    <Infinity className="h-5 w-5" />
                  </span>
                  <span>Unlimited Development Requests</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-blue-500 mr-2">
                    <Infinity className="h-5 w-5" />
                  </span>
                  <span>Unlimited Revisions</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-blue-500 mr-2">
                    <Infinity className="h-5 w-5" />
                  </span>
                  <span>Unlimited Brands</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-blue-500 mr-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <span>Dedicated Project Manager</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-blue-500 mr-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  <span>Daily Updates & Progress Reports</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-blue-500 mr-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span>Pause or Cancel Anytime</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-blue-500 mr-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                    </svg>
                  </span>
                  <span>Upgrade or Downgrade Anytime</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
              <div className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
                {prices[selectedTier]}/m
              </div>
              <div className="flex flex-col items-center">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md mb-2">
                  {buttonText}
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
                <span className="text-sm">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats section */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h2 className="text-4xl font-bold mb-2">7x</h2>
              <p className="text-gray-600">
                Faster Than Hiring<br />
                In-House
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">66%</h2>
              <p className="text-gray-600">
                Less Employment<br />
                Cost per Month
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">9.4</h2>
              <p className="text-gray-600">
                Average<br />
                Customer Rating
              </p>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              We Help You Grow Your Business<br />
              Without Growing Your Team
            </h2>
            <p className="text-center mb-12 text-lg">
              StartModo makes outsourcing design and development tasks a no-brainer by<br />
              eliminating the most common pain points of the industry.
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Scalable Remote Workforce</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No Long Hiring Process</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Top 3% Designers & Developers</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No Disappearing Remote Workers</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>You Own 100% of Everything We Do</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No Dependency on Your Agency for Updates</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated Project Manager</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No Big Lump-sum Payment</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Daily Updates (Monday to Friday)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No Long-Term Commitment</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No Contract. Cancel Anytime.</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>No Endless Waiting for a Response by Your Web Designer</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-md">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="bg-blue-500 py-16 px-6 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <svg className="w-12 h-12 mx-auto text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-6 6-3-3"></path>
                <path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                <path d="M19 19l-7-4 7-4z"></path>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg">
              Book a call with our experts and find out if we <br />
              are a great match for each other.
            </p>
            <Button className="bg-black hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-md">
              Book a Discovery Call
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
