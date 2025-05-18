
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "I have been working with StartModo for nearly two years now. With their keen eye for design, development skills, and expert project management, I have managed to serve a lot more clients than I would without them.",
    author: "Gaute Remen",
    role: "Tech Lead",
    company: "Synlignet"
  },
  {
    id: 2,
    content: "The StartModo team is always on top of things with replies and communicating how things are going.",
    author: "Lauren Gilmore",
    role: "VP Media",
    company: "Hyperfocal"
  },
  {
    id: 3,
    content: "StartModo really helped us keep accurate control over our budget and get a fantastically designed website in the process. I highly recommend not just their talents, but this model.",
    author: "Sean Boyce",
    role: "Founder",
    company: "StaffGeek"
  },
  {
    id: 4,
    content: "Working with StartModo has been a game-changer for our agency. Their team's responsiveness and quality of work allow us to deliver better results to our clients.",
    author: "Michael Johnson",
    role: "Creative Director",
    company: "Digital Minds"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 20000); // Auto scroll every 20 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Testimonials</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6 mb-8"
                >
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-40 h-40 bg-gray-200 rounded-md overflow-hidden">
                      <img src="/placeholder.svg" alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-lg mb-4">"{testimonial.content}"</p>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />
                      ))}
                    </div>
                    <h3 className="font-bold">{testimonial.author}</h3>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={handlePrev} 
              className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext} 
              className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
