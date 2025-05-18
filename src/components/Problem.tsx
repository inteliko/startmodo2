
import { Button } from "./ui/button";

const Problem = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Frustrated with Unreliable<br />
          Freelancers, But Don't Have the<br />
          Budget for an In-House
        </h2>
        
        <div className="mb-8">
          <p className="text-gray-300 mb-4">
            There are more than enough places to find remote
            or in-house staff these days. However, finding the
            good ones is often time-consuming, nerve-racking,
            and expensive, especially when you need them now!
          </p>
          <p className="text-gray-300">
            Lucky you, we can fix that.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex items-center">
            <div className="bg-lime-400 rounded-full p-1 mr-2">
              <div className="bg-black rounded-full w-5 h-5 flex items-center justify-center">
                <span className="text-lime-400">✓</span>
              </div>
            </div>
            <span>No Endless Profile Scrolling</span>
          </div>
          
          <div className="flex items-center">
            <div className="bg-lime-400 rounded-full p-1 mr-2">
              <div className="bg-black rounded-full w-5 h-5 flex items-center justify-center">
                <span className="text-lime-400">✓</span>
              </div>
            </div>
            <span>No Draining Interviews</span>
          </div>
          
          <div className="flex items-center">
            <div className="bg-lime-400 rounded-full p-1 mr-2">
              <div className="bg-black rounded-full w-5 h-5 flex items-center justify-center">
                <span className="text-lime-400">✓</span>
              </div>
            </div>
            <span>No Recruiting Fees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
