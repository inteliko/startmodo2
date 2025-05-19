
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8 flex items-center">
          <Cookie className="mr-3 h-8 w-8" />
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: May 15, 2025
          </p>
          
          <p className="lead">
            This Cookie Policy explains how Growmodo uses cookies and similar technologies to recognize you 
            when you visit our website. It explains what these technologies are and why we use them, as well 
            as your rights to control our use of them.
          </p>
          
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a 
            website. Cookies are widely used by website owners in order to make their websites work, or to 
            work more efficiently, as well as to provide reporting information.
          </p>
          
          <p>
            Cookies set by the website owner (in this case, Growmodo) are called "first-party cookies." 
            Cookies set by parties other than the website owner are called "third-party cookies." Third-party 
            cookies enable third-party features or functionality to be provided on or through the website 
            (e.g., advertising, interactive content, and analytics).
          </p>
          
          <h2>Why Do We Use Cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for 
            technical reasons in order for our website to operate, and we refer to these as "essential" or 
            "strictly necessary" cookies. Other cookies also enable us to track and target the interests of 
            our users to enhance the experience on our website. Third parties serve cookies through our 
            website for advertising, analytics, and other purposes.
          </p>
          
          <h2>Types of Cookies We Use</h2>
          <p>
            The specific types of first and third-party cookies served through our website and the purposes 
            they perform include:
          </p>
          
          <h3>Essential Website Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our website 
            and to use some of its features, such as access to secure areas.
          </p>
          
          <h3>Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our website but are 
            non-essential to their use. However, without these cookies, certain functionality may become 
            unavailable.
          </p>
          
          <h3>Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand 
            how our website is being used or how effective our marketing campaigns are, or to help us 
            customize our website for you.
          </p>
          
          <h3>Advertising Cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions 
            like preventing the same ad from continuously reappearing, ensuring that ads are properly 
            displayed for advertisers, and in some cases selecting advertisements that are based on your 
            interests.
          </p>
          
          <h2>How Can You Control Cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie 
            preferences by clicking on the appropriate opt-out links provided in the cookie banner on our 
            website.
          </p>
          
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose 
            to reject cookies, you may still use our website though your access to some functionality and 
            areas of our website may be restricted.
          </p>
          
          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to 
            the cookies we use or for other operational, legal, or regulatory reasons. Please therefore 
            re-visit this Cookie Policy regularly to stay informed about our use of cookies and related 
            technologies.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please contact us at 
            cookies@StartModo.com
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
