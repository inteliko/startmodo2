
import { Users, PenTool, Cpu, Clock, MessageSquare, Coins, ShieldCheck } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Scalable Workforce",
    description: "Add a new team member to your projects whenever you need more hands. We make sure the additional designer or developer will be briefed on your brand and work preferences upfront."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Fully-Managed Team",
    description: "With more team members, there come more responsibilities that can make your working day more complex. We take care of replacing staff dropouts, skill training, team happiness, and health benefits."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Dedicated Project Manager",
    description: "To move projects to completion faster, you will need a person who knows your business and project requirements. Your PM briefs the talent and delivers the work."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Skill-Matching",
    description: "Your projects and your needs for specific skills will change, but it takes too long to hire or train your in-house team members if you need to get things done fast."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Quick Communication",
    description: "Send feedback or questions via text messages or screen-recording videos in a few minutes, so you don't get stuck writing essay-long briefings."
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Predictable Pricing",
    description: "Forget salary negotiations and paid vacations. We even skip the setup and recruiting fees for you. You pay a fixed monthly rate for every additional talent without any long-term commitment."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "IP & Data Security",
    description: "Working with a global workforce requires an extra layer of protection. We use the necessary tools in the background to make sure your sites are safe against hackers and spam."
  }
];

const WhatYouGet = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        What You Get From StartModo
      </h2>
      
      <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Meet your new team members minus the Recruiting, HR, Operations, and Admin work.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-4 text-blue-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouGet;
