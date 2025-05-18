
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarCheck, Mail, CalendarClock, CirclePlus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import CalendlyWidget from "../components/CalendlyWidget";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

const BookCall = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [userData, setUserData] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      website: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    toast.success("Your information has been submitted!");
    setUserData(data);
    setShowCalendly(true);
  };

  const handleEventScheduled = () => {
    setIsSubmitted(true);
  };

  // Create Calendly URL with prefilled user data
  const getCalendlyUrl = () => {
    if (!userData) return "https://calendly.com/rmaksusbinislam/30min";
    
    // Add user data as URL parameters for prefilling Calendly form
    const baseUrl = "https://calendly.com/rmaksusbinislam/30min";
    const params = new URLSearchParams({
      name: `${userData.firstName} ${userData.lastName}`,
      email: userData.email,
      a1: userData.company, // Custom answer field 1
      a2: userData.phone,   // Custom answer field 2
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 px-6 md:px-0">
        {isSubmitted ? (
          <ConfirmationView />
        ) : !showCalendly ? (
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left side - Form header and description */}
            <div className="md:w-1/2">
              <div className="mb-8">
                <img src="/placeholder.svg" alt="Growmodo" className="h-8 mb-8" />
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Are You Held Back by the Lack of Design & Dev Talent?
                </h1>
                <p className="text-gray-600 mb-8">
                  Schedule a 15-min discovery call with one of our outsourcing experts and learn how StartModo can help you scale your agency or marketing team today.
                </p>
                
                <div className="mb-8">
                  <p className="text-gray-700 mb-4">As seen on:</p>
                  <div className="flex flex-wrap gap-6 items-center">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <img src="/placeholder.svg" alt="Product Hunt" className="h-6" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md">
                      <img src="/placeholder.svg" alt="Zest" className="h-6" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md">
                      <img src="/placeholder.svg" alt="Beta List" className="h-6" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md">
                      <img src="/placeholder.svg" alt="Land-book" className="h-6" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md">
                      <img src="/placeholder.svg" alt="UPlabs" className="h-6" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md">
                      <img src="/placeholder.svg" alt="DesignMunk" className="h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="md:w-1/2 bg-white rounded-lg border border-gray-100 shadow-sm p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="w-full bg-gray-200 h-1 rounded">
                  <div className="bg-black h-1 rounded w-1/2"></div>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          First Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Last Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Work Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="you@company.com" 
                            {...field}
                            className="pl-10" 
                          />
                        </FormControl>
                        <div className="relative">
                          <Mail className="absolute -top-8 left-3 h-4 w-4 text-gray-500" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Phone Number <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Company Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">
                          Company Website <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://yourcompany.com" 
                            {...field} 
                            className="pl-10"
                          />
                        </FormControl>
                        <div className="relative">
                          <CirclePlus className="absolute -top-8 left-3 h-4 w-4 text-gray-500" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <p className="mb-2 text-gray-700">
                      Please verify yourself via CAPTCHA <span className="text-red-500">*</span>
                    </p>
                    <div className="border border-gray-300 p-4 rounded-md bg-gray-50">
                      <div className="flex items-center">
                        <div className="h-5 w-5 border border-gray-400 rounded mr-2 flex items-center justify-center">
                          <svg className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">I'm not a robot</span>
                        <img src="/placeholder.svg" alt="reCAPTCHA" className="h-10 ml-auto" />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-black hover:bg-gray-800 text-white rounded-md"
                  >
                    Continue to Schedule Call →
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        ) : (
          <div className="container mx-auto max-w-5xl p-8 bg-white rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Schedule Your Discovery Call</h2>
              <p className="text-gray-600 mt-2">Select a time that works for you</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg shadow-sm">
              <CalendlyWidget 
                url={getCalendlyUrl()} 
                onEventScheduled={handleEventScheduled} 
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

// Confirmation view component that shows after form submission
const ConfirmationView = () => {
  return (
    <div className="container mx-auto max-w-3xl p-8 bg-white rounded-lg">
      <div className="text-center mb-8">
        <img src="/placeholder.svg" alt="Growmodo" className="h-8 mx-auto mb-6" />
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Thanks for booking a discovery call with us!</h2>
        <h1 className="text-4xl font-bold mb-6">One Last Step Before You Go</h1>
      </div>
      
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">
          Note: This is not a sales call, but an opportunity to see for both of us if we are a good match. 
          We will tell you this upfront if we are not the best solution for your problems.
        </p>
        
        <p className="text-gray-600 mb-8">
          To get the most out of our meeting, please keep a few things in mind:
        </p>
      </div>
      
      <div className="space-y-6 max-w-2xl mx-auto mb-8">
        <div className="flex gap-4">
          <div className="bg-blue-500 rounded-full p-3 text-white">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-gray-700">
              Check if you received an event invitation via email. If not, feel free to send us a note to{" "}
              <a href="mailto:hello@growmodo.com" className="text-blue-500 hover:underline">
                hello@StartModo.com
              </a>.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-blue-500 rounded-full p-3 text-white">
            <CalendarClock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-gray-700">
              If not done automatically, please mark the event in your calendar to block the time.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-blue-500 rounded-full p-3 text-white">
            <CalendarCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-gray-700">
              Please prepare all of your questions upfront.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-blue-500 rounded-full p-3 text-white">
            <CalendarCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-gray-700">
              Ideally, try to be in front of your computer during the call, so you have the option to share your screen.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-blue-500 rounded-full p-3 text-white">
            <CalendarCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-gray-700">
              At the time of our meeting, click the meeting link in your event registration email to join the call.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <p className="text-gray-700 mb-1">Until then, have a fantastic day!</p>
        <p className="text-gray-700 font-medium">Your StartModo Team</p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="https://calendar.google.com/calendar" target="_blank" rel="noopener noreferrer">
          <Button className="bg-black hover:bg-gray-800 flex items-center gap-2 w-full">
            <CalendarCheck className="h-4 w-4" />
            Open Google Calendar
          </Button>
        </a>
        <a href="https://outlook.office.com/calendar" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-gray-300 flex items-center gap-2 w-full">
            <CalendarCheck className="h-4 w-4" />
            Open Outlook Calendar
          </Button>
        </a>
      </div>
    </div>
  );
};

export default BookCall;
