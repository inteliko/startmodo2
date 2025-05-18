
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-center py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        The Quickest Way To Onboard<br />
        Talent To Your Team
      </h1>
      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
        Start Modo is a design & development subscription that
        takes the pain out of hiring creatives for your business.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-16">
        <Button className="bg-black text-white hover:bg-black/90">
          Book a Discovery Call
        </Button>
        <Button variant="outline">
          See Previous Work
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex items-center">
          <Check className="text-blue-500 mr-2" size={18} />
          <span>Unlimited design & dev requests</span>
        </div>
        <div className="flex items-center">
          <Check className="text-blue-500 mr-2" size={18} />
          <span>Monthly flat-rate</span>
        </div>
        <div className="flex items-center">
          <Check className="text-blue-500 mr-2" size={18} />
          <span>No Contract. Cancel anytime</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
