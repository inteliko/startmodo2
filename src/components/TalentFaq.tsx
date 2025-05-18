
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const TalentFaq = () => {
  const faqItems = [
    {
      id: "01",
      title: "You Want Flexibility. They Want Security",
      content: "It is very convenient to hire freelancers only for one project or even on a task-by-task basis. However, building a steady income stream in this way for them and their families is challenging. AtStartModo, we provide a stable, continuous workflow to our talents while giving you the flexibility to scale up or down as needed.",
      solution: "Monthly Payments"
    },
    {
      id: "02",
      title: "You Want Expertise. They Want to Learn",
      content: "Clients typically want experts who can deliver immediately, while talents need opportunities to grow their skills. Our model bridges this gap by providing ongoing training to our talents while ensuring they have the expertise needed for your projects. We invest in their growth so you don't have to.",
      solution: "Continuous Learning"
    },
    {
      id: "03",
      title: "You Want Quick Dialogue. They Want to Focus",
      content: "Direct client interactions can disrupt a developer's flow state and productivity. Our project management layer ensures you get timely responses while protecting our talents' focused work time. This creates a balanced communication flow that benefits both sides.",
      solution: "Managed Communication"
    },
    {
      id: "04",
      title: "You Want to Pay Less. They Want Appreciation",
      content: "The constant pressure to minimize costs can lead to undervalued work and talent dissatisfaction. We've structured our pricing to ensure fair compensation for our talents while providing excellent value for clients, creating a sustainable relationship built on mutual respect.",
      solution: "Fair Value Exchange"
    },
    {
      id: "05",
      title: "You Want Finished Projects. They Want More Hours",
      content: "The misalignment between hourly billing and project completion can create conflicting incentives. Our subscription model focuses on deliverables rather than hours, ensuring our talents are motivated to complete projects efficiently while you get predictable costs.",
      solution: "Outcome-Based Work"
    },
    {
      id: "06",
      title: "You Want Consistency. They Want Variety",
      content: "While clients need consistent quality and availability, talents crave diverse challenges to stay engaged. We enable our talents to work on various projects across different industries, keeping them motivated while ensuring consistent quality standards for all our clients.",
      solution: "Balanced Workload"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          The Traditional Way of Hiring<br />
          Creative Freelancers is Broken
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Company needs are often not aligned anymore with what their remote contractors want. The misalignment can lead to a bad experience for both parties. It's time to rethink outsourcing.
        </p>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqItems.map((item) => (
            <Accordion type="single" collapsible key={item.id}>
              <AccordionItem value={item.id} className="border-0">
                <div className="grid md:grid-cols-5 gap-4">
                  <div className={`md:col-span-4 ${item.id === "01" ? "bg-black text-white" : "bg-white"} p-6 rounded-lg shadow-sm`}>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xl font-bold">{item.id}</span>
                      <AccordionTrigger className="hover:no-underline">
                        <h3 className="text-xl font-semibold text-left">{item.title}</h3>
                      </AccordionTrigger>
                    </div>
                    <AccordionContent>
                      <p className="mt-2">
                        {item.content}
                      </p>
                    </AccordionContent>
                  </div>
                  <div className="bg-[#ccff00] p-6 rounded-lg flex flex-col items-center justify-center">
                    <Check className="mb-2" size={24} />
                    <p className="text-sm font-semibold text-center">Solution</p>
                    <p className="font-bold text-center">{item.solution}</p>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentFaq;
