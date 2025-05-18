
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8 flex items-center">
          <FileText className="mr-3 h-8 w-8" />
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: May 15, 2025
          </p>
          
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using StartModo's services, you agree to be bound by these Terms and Conditions.
            If you disagree with any part of the terms, you do not have permission to access our services.
          </p>
          
          <h2>2. Description of Services</h2>
          <p>
            StartModo provides talent recruitment and project management services for digital design
            and development tasks. Our platform connects businesses with creative professionals for 
            various design and development projects.
          </p>
          
          <h2>3. User Accounts</h2>
          <p>
            When you create an account with us, you guarantee that the information you provide is accurate,
            complete, and current at all times. Inaccurate, incomplete, or obsolete information may result
            in the immediate termination of your account.
          </p>
          
          <h2>4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the
            exclusive property of StartModo. Our service is protected by copyright, trademark, and other
            intellectual property laws.
          </p>
          
          <h2>5. User Content</h2>
          <p>
            When you upload content through our service, you retain all your ownership rights. However, by
            uploading, you grant us a license to use, modify, publicly perform, publicly display, and
            distribute your content.
          </p>
          
          <h2>6. Termination</h2>
          <p>
            We may terminate or suspend your account at our sole discretion, without prior notice or liability,
            for any reason, including, without limitation, breach of these Terms and Conditions.
          </p>
          
          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall StartModo be liable for any indirect, incidental, special, consequential or
            punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
            intangible losses.
          </p>
          
          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of [Your Country], and any
            disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts
            of [Your Jurisdiction].
          </p>
          
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. By continuing to access or use our
            Service after any revisions become effective, you agree to be bound by the revised terms.
          </p>
          
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@growmodo.com.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
