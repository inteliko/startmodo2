
import { Star } from "lucide-react";
import { Button } from "./ui/button";

const CreativeTalent = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Creative Talent Recruiting<br />
        Made <span className="text-blue-500 relative">Super<sup className="text-xs absolute -top-2 -right-4">*</sup></span> Simple
      </h2>
      
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        We work as an extension of your in-house team and
        assemble the right team members for every task and project.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Fast Hiring in<br />24-48 Hrs</h3>
          <p className="text-gray-600 mb-8">
            Add an additional team member with a click of a button.
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
              <img src="/placeholder.svg" alt="Team member 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
              <img src="/placeholder.svg" alt="Team member 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
              <img src="/placeholder.svg" alt="Team member 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className="bg-blue-500 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Rigorously Vetted<br />Experts</h3>
          <p className="mb-8">
            We find, manage & keep training the best talents we can find.
          </p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden shrink-0">
                  <img src="/placeholder.svg" alt="Designer" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <p className="font-bold">P.A.</p>
                    <p className="text-sm">UI/UX Designer</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="fill-yellow-400 text-yellow-400 w-3 h-3" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTalent;
