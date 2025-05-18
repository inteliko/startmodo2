
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Settings } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "sonner";

const DataPreferences = () => {
  const [preferences, setPreferences] = useState({
    essentialCookies: true, // Always true, can't be changed
    performanceCookies: true,
    functionalCookies: true,
    targetingCookies: false,
    analytics: true,
    thirdPartyData: false,
  });

  const handleSave = () => {
    // In a real application, you would save these preferences
    toast.success("Data preferences saved successfully!");
    console.log("Data preferences saved:", preferences);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8 flex items-center">
          <Settings className="mr-3 h-8 w-8" />
          <h1 className="text-4xl font-bold">Data Preferences</h1>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Control how StartModo processes your data and which cookies we can use. These settings allow
            you to customize your experience and the information we collect about you.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Cookie Preferences</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="essentialCookies" 
                  checked={preferences.essentialCookies} 
                  disabled
                />
                <div className="space-y-1">
                  <label 
                    htmlFor="essentialCookies" 
                    className="font-medium text-lg cursor-not-allowed"
                  >
                    Essential Cookies
                  </label>
                  <p className="text-gray-600">
                    These cookies are necessary for the website to function and cannot be disabled.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="performanceCookies" 
                  checked={preferences.performanceCookies}
                  onCheckedChange={(checked) => 
                    setPreferences({...preferences, performanceCookies: checked === true})}
                />
                <div className="space-y-1">
                  <label htmlFor="performanceCookies" className="font-medium text-lg">
                    Performance Cookies
                  </label>
                  <p className="text-gray-600">
                    These cookies allow us to count visits and traffic sources so we can measure and improve
                    the performance of our site.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="functionalCookies" 
                  checked={preferences.functionalCookies}
                  onCheckedChange={(checked) => 
                    setPreferences({...preferences, functionalCookies: checked === true})}
                />
                <div className="space-y-1">
                  <label htmlFor="functionalCookies" className="font-medium text-lg">
                    Functional Cookies
                  </label>
                  <p className="text-gray-600">
                    These cookies enable the website to provide enhanced functionality and personalization.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="targetingCookies" 
                  checked={preferences.targetingCookies}
                  onCheckedChange={(checked) => 
                    setPreferences({...preferences, targetingCookies: checked === true})}
                />
                <div className="space-y-1">
                  <label htmlFor="targetingCookies" className="font-medium text-lg">
                    Targeting Cookies
                  </label>
                  <p className="text-gray-600">
                    These cookies may be set through our site by our advertising partners to build a profile
                    of your interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Data Processing</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="analytics" 
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => 
                    setPreferences({...preferences, analytics: checked === true})}
                />
                <div className="space-y-1">
                  <label htmlFor="analytics" className="font-medium text-lg">
                    Analytics
                  </label>
                  <p className="text-gray-600">
                    Allow us to analyze how you use our website to improve functionality and user experience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="thirdPartyData" 
                  checked={preferences.thirdPartyData}
                  onCheckedChange={(checked) => 
                    setPreferences({...preferences, thirdPartyData: checked === true})}
                />
                <div className="space-y-1">
                  <label htmlFor="thirdPartyData" className="font-medium text-lg">
                    Third-party Data Sharing
                  </label>
                  <p className="text-gray-600">
                    Allow us to share your anonymous usage data with third-party analytics providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Collapsible className="bg-gray-50 p-6 rounded-lg border">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Additional Information</h2>
              <CollapsibleTrigger asChild>
                <Button variant="outline">Show More</Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="mt-4">
              <div className="space-y-4 text-gray-700">
                <p>
                  At StartModo, we take your data privacy seriously. Here's additional information about how
                  we process your data:
                </p>
                
                <h3 className="font-semibold">Data Retention</h3>
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes for
                  which it was collected, including legal, accounting, or reporting requirements.
                </p>
                
                <h3 className="font-semibold">Data Security</h3>
                <p>
                  We have implemented appropriate technical and organizational measures to protect your
                  personal data against unauthorized or unlawful processing, accidental loss, destruction,
                  or damage.
                </p>
                
                <h3 className="font-semibold">Your Rights</h3>
                <p>
                  Depending on your location, you may have certain rights regarding your personal data,
                  including the right to access, rectify, port, delete, or restrict processing of your data.
                </p>
                
                <h3 className="font-semibold">Updates to Preferences</h3>
                <p>
                  You can update your data preferences at any time by visiting this page or contacting us
                  directly.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="flex justify-end">
            <Button onClick={handleSave} className="px-8">
              Save Preferences
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DataPreferences;
