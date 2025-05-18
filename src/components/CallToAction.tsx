
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <div className="bg-blue-500 text-white py-16 px-6 md:px-12 lg:px-24 text-center">
      <div className="flex justify-center mb-6">
        <div className="flex -space-x-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-12 h-12 bg-white rounded-full overflow-hidden border-2 border-blue-500">
              <img src="/placeholder.svg" alt={`Person ${i+1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Scale Your Design & Dev Operations<br />
        Without The Complexity
      </h2>
      
      <p className="max-w-3xl mx-auto mb-8">
        Why would you chase random freelancers if you could have your own creative dream team today?
      </p>
      
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Button className="bg-black text-white hover:bg-black/90">
          Book a Discovery Call
        </Button>
        <Button className="bg-white text-black hover:bg-white/90">
          Pricing Plans
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
