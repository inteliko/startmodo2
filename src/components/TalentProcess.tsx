
import { 
  SquareCheck, 
  PhoneCall, 
  TestTube, 
  Users, 
  Award
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const TalentProcess = () => {
  // Process steps data
  const processSteps = [
    {
      title: "Skill Review",
      icon: <SquareCheck className="h-6 w-6 text-purple-600" />,
      description: "Every applicant completes a questionnaire, rates their skills in various design or coding disciplines, and provides a link to previous projects that our team checks before moving forward.",
      iconBg: "bg-purple-100"
    },
    {
      title: "Intro Call",
      icon: <PhoneCall className="h-6 w-6 text-green-600" />,
      description: "Our recruitment manager schedules a first intro call to get to know the applicant, dive deeper into technical knowledge, and evaluates communication skills and a culture fit.",
      iconBg: "bg-green-100"
    },
    {
      title: "Trial Project",
      icon: <TestTube className="h-6 w-6 text-teal-600" />,
      description: "We give the applicant a first test project to complete under time pressure in a similar format as they would experience working with Growmodo customers. This is when we see their actual skill level.",
      iconBg: "bg-teal-100"
    },
    {
      title: "Expert Panel",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      description: "Collaboration is a crucial part of our talent community at Growmodo. Therefore, we also believe that other core team members should have a say in the hiring process.",
      iconBg: "bg-blue-100"
    },
    {
      title: "5-Day Bootcamp",
      icon: <Award className="h-6 w-6 text-gray-800" />,
      description: "Before letting a talent work on customer projects, the new hire goes through interactive onboarding training and completes online courses and 1-to-1 coaching with our quality manager.",
      iconBg: "bg-gray-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="sticky top-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Screening &<br />
              Talent Development<br />
              Process
            </h2>
            <p className="text-gray-600 mb-6">
              We have a rigorous vetting process to ensure we only work with the best talent.
              Our comprehensive approach helps us find dedicated professionals who excel in their craft.
            </p>
            <Button className="bg-white text-black border border-black hover:bg-gray-100 mt-4">
              Join Talent Community
            </Button>
          </div>
          
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-sm overflow-hidden">
                <div className="p-6 flex gap-4 items-start">
                  <div className={`${step.iconBg} p-3 rounded-lg shrink-0`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentProcess;
