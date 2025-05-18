
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Info } from "lucide-react";

const Imprint = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8 flex items-center">
          <Info className="mr-3 h-8 w-8" />
          <h1 className="text-4xl font-bold">Imprint</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            In accordance with applicable regulations, we provide the following information
          </p>
          
          <h2>Company Information</h2>
          <p>
            <strong>StartModo, Inc.</strong><br />
            123 Tech Plaza, Suite 500<br />
            San Francisco, CA 94105<br />
            United States
          </p>
          
          <p>
            <strong>Registration:</strong> Delaware Corporation #12345678<br />
            <strong>Tax ID:</strong> US 98-7654321
          </p>
          
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> contact@growmodo.com<br />
            <strong>Phone:</strong> +1 (555) 123-4567<br />
            <strong>Fax:</strong> +1 (555) 765-4321
          </p>
          
          <h2>Legal Representatives</h2>
          <p>
            John Smith, Chief Executive Officer<br />
            Jane Doe, Chief Operating Officer
          </p>
          
          <h2>Regulatory Information</h2>
          <p>
            StartModo is a registered trademark of StartModo, Inc. All content on this website, including
            text, graphics, logos, images, audio clips, and software, is the property of StartModo, Inc.
            and is protected by United States and international copyright laws.
          </p>
          
          <h2>VAT Information</h2>
          <p>
            EU VAT ID: EU1234567890<br />
            UK VAT ID: GB1234567890
          </p>
          
          <h2>Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (OS) which is
            available at http://ec.europa.eu/consumers/odr/. We are not obliged and not willing to
            participate in dispute resolution procedures before a consumer arbitration board.
          </p>
          
          <h2>Professional Regulations</h2>
          <p>
            As a company operating in the creative and tech industry, we adhere to applicable professional
            standards and regulations. Our team members hold various professional certifications in their
            respective fields.
          </p>
          
          <h2>Liability for Content</h2>
          <p>
            As a service provider, we are responsible for our own content on these pages according to general
            laws. However, we are not obliged to monitor transmitted or stored third-party information or to
            investigate circumstances that indicate illegal activity.
          </p>
          
          <h2>Liability for Links</h2>
          <p>
            Our offer contains links to external websites of third parties, on whose contents we have no
            influence. Therefore, we cannot assume any liability for these external contents. The respective
            provider or operator of the linked pages is always responsible for the contents of the linked
            pages.
          </p>
          
          <h2>Copyright</h2>
          <p>
            The content and works created by the site operators on these pages are subject to copyright law.
            Duplication, processing, distribution, and any kind of exploitation outside the limits of
            copyright law require the written consent of the respective author or creator.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Imprint;
