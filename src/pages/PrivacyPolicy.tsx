
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8 flex items-center">
          <Shield className="mr-3 h-8 w-8" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: May 15, 2025
          </p>
          
          <p className="lead">
            At StartModo, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our service.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We may collect personal identification information from users in various ways, including, but not
            limited to, when users visit our site, register on the site, fill out a form, and in connection
            with other activities, services, features or resources we make available.
          </p>
          
          <h3>Personal Information</h3>
          <p>
            We may collect the following types of personal information:
          </p>
          <ul>
            <li>Name and contact details</li>
            <li>Billing and payment information</li>
            <li>Account credentials</li>
            <li>Communication preferences</li>
            <li>Information you provide in communication with us</li>
          </ul>
          
          <h3>Non-Personal Information</h3>
          <p>
            We may collect non-personal identification information about users whenever they interact with
            our service. This may include browser name, type of computer, technical information about users'
            connection to our service, and other similar information.
          </p>
          
          <h2>How We Use Your Information</h2>
          <p>
            We may use the information we collect from you in the following ways:
          </p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To improve customer service</li>
            <li>To personalize user experience</li>
            <li>To process transactions and send related information</li>
            <li>To send periodic emails regarding your account or other products and services</li>
          </ul>
          
          <h2>Protection of Your Information</h2>
          <p>
            We adopt appropriate data collection, storage, processing practices, and security measures to
            protect against unauthorized access, alteration, disclosure, or destruction of your personal
            information, username, password, transaction information, and data stored on our service.
          </p>
          
          <h2>Sharing Your Personal Information</h2>
          <p>
            We do not sell, trade, or rent users' personal identification information to others. We may share
            generic aggregated demographic information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted affiliates, and advertisers.
          </p>
          
          <h2>Third-Party Websites</h2>
          <p>
            Users may find content on our service that links to the sites and services of our partners,
            suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the
            content or links that appear on these sites and are not responsible for the practices employed
            by websites linked to or from our service.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            StartModo has the discretion to update this privacy policy at any time. When we do, we will revise
            the updated date at the top of this page. We encourage users to frequently check this page for any
            changes to stay informed about how we are helping to protect the personal information we collect.
          </p>
          
          <h2>Your Acceptance of These Terms</h2>
          <p>
            By using our service, you signify your acceptance of this policy. If you do not agree to this
            policy, please do not use our service. Your continued use of the service following the posting of
            changes to this policy will be deemed your acceptance of those changes.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@growmodo.com.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
