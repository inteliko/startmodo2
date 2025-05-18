
import { Card, CardContent } from "./ui/card";

const Process = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        The Quickest Way To Onboard<br />
        Talent To Your Team
      </h2>
      
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        StartModo is a design & development subscription that
        takes the pain out of hiring creatives for your business.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-2 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-2">
              to a plan & request your first project or task.
            </p>
            <div className="mt-6 h-24 flex items-center justify-center">
              <div className="text-6xl">📝</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-2 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Get matched</h3>
            <p className="text-gray-600 mb-2">
              with a vetted designer or developer.
            </p>
            <div className="mt-6 h-24 flex items-center justify-center">
              <div className="text-6xl">🤝</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-2 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4">Receive</h3>
            <p className="text-gray-600 mb-2">
              a project update or finished task within 24-48 hrs.
            </p>
            <div className="mt-6 h-24 flex items-center justify-center">
              <div className="text-6xl">✅</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Process;
