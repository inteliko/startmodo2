
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Sample blog posts data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: "outdated-website",
    title: "Do You Have an Outdated Website? 15 Undeniable Signs You Need a Website Makeover",
    excerpt: "Website designs can make or break an online business. Learn the key signs that indicate your website needs a refresh.",
    image: "/lovable-uploads/b98fd5db-986b-40e3-b197-7209b7455214.png",
    category: "Web Design",
    date: "May 10, 2025"
  },
  {
    id: "quality-high",
    title: "How to Keep Quality High When Working With External Specialists",
    excerpt: "Discover proven strategies for maintaining quality standards when collaborating with external team members.",
    image: "/lovable-uploads/15192a7a-e70f-4a00-8173-65d928edccba.png",
    category: "Project Management",
    date: "May 5, 2025"
  },
  {
    id: "creative-outsourcing",
    title: "Exposing the Truth: 5 Creative Outsourcing Myths Debunked",
    excerpt: "Separate fact from fiction when it comes to creative outsourcing with this comprehensive guide.",
    image: "/lovable-uploads/08fc85ab-f4f0-4a23-b87d-56baec13dfe1.png",
    category: "Outsourcing",
    date: "April 28, 2025"
  },
  {
    id: "agency-playbook",
    title: "The Agency Playbook: Scale Your Creative Team Without the Hassle of Hiring",
    excerpt: "Learn how to effectively scale your creative operations without the traditional hiring challenges.",
    image: "/lovable-uploads/08fc85ab-f4f0-4a23-b87d-56baec13dfe1.png",
    category: "Agency Growth",
    date: "April 15, 2025"
  },
  {
    id: "marketing-bottlenecks",
    title: "Marketing Bottlenecks 101: How Growing Teams Lose Time & Money",
    excerpt: "Identify and eliminate the common bottlenecks that slow down marketing teams and waste resources.",
    image: "/lovable-uploads/08fc85ab-f4f0-4a23-b87d-56baec13dfe1.png",
    category: "Marketing",
    date: "April 7, 2025"
  },
  {
    id: "outsourcing-website-management",
    title: "Outsourcing Website Management: Why & How it's Done [2025]",
    excerpt: "The complete guide to successfully outsourcing your website management in 2025.",
    image: "/lovable-uploads/b0f0b843-4223-48bf-b60c-08af797bcbd0.png",
    category: "Outsourcing",
    date: "March 25, 2025"
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <Link to={`/guides/${post.id}`} className="group">
    <div className="overflow-hidden rounded-lg bg-gray-100 mb-4">
      <img 
        src={post.image} 
        alt={post.title} 
        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
    <div className="space-y-2">
      <div className="flex items-center text-sm text-gray-500 mb-1">
        <span>{post.category}</span>
        <span className="mx-2">•</span>
        <span>{post.date}</span>
      </div>
      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{post.title}</h3>
      <p className="text-gray-600">{post.excerpt}</p>
    </div>
  </Link>
);

const Guides = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Growmodo Guides</h1>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Expert insights, strategies, and tips to help you grow your business with effective design and development practices.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-black hover:bg-gray-900">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Guides;
