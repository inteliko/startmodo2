
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Sample blog posts data - in a real app, this would come from a CMS or API
const blogPostsData = {
  "outdated-website": {
    title: "Do You Have an Outdated Website? 15 Undeniable Signs You Need a Website Makeover",
    image: "/lovable-uploads/b98fd5db-986b-40e3-b197-7209b7455214.png",
    category: "Web Design",
    date: "May 10, 2025",
    author: "Sarah Johnson",
    authorImage: "/placeholder.svg",
    content: [
      "Website designs can make or break an online business. So outdated websites are something no one wants.",
      "There's almost nothing that evolves as quickly as technology. Before you know it, what was once the next big thing is suddenly horribly out of style.",
      "So while you set about trend spotting and identifying design styles that work, you also need to identify the long-dead trends that you may still be using.",
      "Changes are subtle, so it can be hard to recognize them as they occur. This is especially true if you aren't outsourcing your web design or use a website management service.",
      "Because if you manage your own designs you might be limiting yourself to your own perspectives. This may make it difficult to analyze what you've gotten wrong.",
      "## How Did You End Up With an Outdated Website?",
      "Nothing is constant, except change itself.",
      "Maybe it was never really up-to-date, but chances are high you liked it at one point in time.",
      "The way websites are built today is vastly different from 5 years ago. Technology evolved and allows us to create more advanced designs.",
      "At the same time, managing and updating content on a site doesn't require a developer anymore.",
      "## 15 Signs You Need a Website Redesign",
      "1. **You're not generating enough leads and sales** - If your conversion rates are dropping, your website design might be the culprit.",
      "2. **It's not Mobile-Responsive** - More than half of all web traffic comes from mobile devices. If your site isn't optimized for mobile, you're losing visitors.",
      "3. **Updating Your Website Becomes Time-Consuming and Expensive** - Modern websites should be easy to update without technical assistance.",
      "4. **Company Branding Has Changed** - If your company has gone through a rebrand, your website should reflect that.",
      "5. **The Website is Difficult to Navigate** - User experience is paramount. If visitors can't find what they're looking for quickly, they'll leave.",
      "Instead of just accepting your outdated website, accept that your website will always go out of fashion. Sooner or later. The key is to stay ahead of the curve with regular updates and redesigns when necessary."
    ],
    relatedPosts: ["quality-high", "creative-outsourcing", "agency-playbook"]
  },
  "quality-high": {
    title: "How to Keep Quality High When Working With External Specialists",
    image: "/lovable-uploads/15192a7a-e70f-4a00-8173-65d928edccba.png",
    category: "Project Management",
    date: "May 5, 2025",
    author: "Michael Chen",
    authorImage: "/placeholder.svg",
    content: [
      "Working with external specialists can significantly enhance your team's capabilities, but maintaining quality control can be challenging.",
      "In this comprehensive guide, we'll explore proven strategies for ensuring high-quality deliverables when collaborating with external talent.",
      "## Establish Clear Communication Channels",
      "The foundation of any successful collaboration is clear, consistent communication. Set up regular check-ins and use collaborative tools to keep everyone on the same page.",
      "## Define Quality Standards Upfront",
      "Before starting any project, clearly define what success looks like. Create detailed briefs with specific requirements and examples of what you consider high-quality work.",
      "## Implement a Robust Review Process",
      "Develop a structured review process that allows for constructive feedback at multiple stages of the project, not just at the end."
    ],
    relatedPosts: ["outsourcing-website-management", "creative-outsourcing", "agency-playbook"]
  },
  "creative-outsourcing": {
    title: "Exposing the Truth: 5 Creative Outsourcing Myths Debunked",
    image: "/lovable-uploads/08fc85ab-f4f0-4a23-b87d-56baec13dfe1.png",
    category: "Outsourcing",
    date: "April 28, 2025",
    author: "Emily Rodriguez",
    authorImage: "/placeholder.svg",
    content: [
      "There are many misconceptions about creative outsourcing that prevent businesses from leveraging this valuable resource.",
      "Let's debunk some of the most common myths and set the record straight.",
      "## Myth 1: Outsourcing Means Lower Quality",
      "Many believe that outsourcing creative work automatically means compromising on quality. In reality, specialized external talent often produces higher quality work than generalists on in-house teams.",
      "## Myth 2: It's Only About Cost Savings",
      "While cost efficiency is a benefit, outsourcing is also about accessing specialized expertise, scaling quickly, and bringing fresh perspectives to your projects."
    ],
    relatedPosts: ["quality-high", "outsourcing-website-management", "agency-playbook"]
  },
  "agency-playbook": {
    title: "The Agency Playbook: Scale Your Creative Team Without the Hassle of Hiring",
    image: "/lovable-uploads/08fc85ab-f4f0-4a23-b87d-56baec13dfe1.png",
    category: "Agency Growth",
    date: "April 15, 2025",
    author: "David Thompson",
    authorImage: "/placeholder.svg",
    content: [
      "Growing an agency comes with numerous challenges, particularly when it comes to scaling your creative team.",
      "Traditional hiring processes can be time-consuming, expensive, and risky—especially in today's dynamic market.",
      "This playbook offers a strategic approach to scaling your creative capabilities without the traditional hassles of hiring."
    ],
    relatedPosts: ["quality-high", "creative-outsourcing", "marketing-bottlenecks"]
  },
  "marketing-bottlenecks": {
    title: "Marketing Bottlenecks 101: How Growing Teams Lose Time & Money",
    image: "/lovable-uploads/08fc85ab-f4f0-4a23-b87d-56baec13dfe1.png",
    category: "Marketing",
    date: "April 7, 2025",
    author: "Jessica Kim",
    authorImage: "/placeholder.svg",
    content: [
      "As marketing teams grow, they often encounter bottlenecks that impede efficiency and drain resources.",
      "Understanding these common pitfalls is the first step to overcoming them and maximizing your team's potential.",
      "## Common Bottlenecks in Marketing Teams",
      "1. **Approval Processes**: Too many stakeholders and unclear decision-making hierarchies can significantly slow down projects.",
      "2. **Content Creation**: Lack of specialized creative resources often creates backups in the content pipeline."
    ],
    relatedPosts: ["agency-playbook", "quality-high", "creative-outsourcing"]
  },
  "outsourcing-website-management": {
    title: "Outsourcing Website Management: Why & How it's Done [2025]",
    image: "/lovable-uploads/b0f0b843-4223-48bf-b60c-08af797bcbd0.png",
    category: "Outsourcing",
    date: "March 25, 2025",
    author: "Robert Wilson",
    authorImage: "/placeholder.svg",
    content: [
      "Managing a website effectively requires a diverse set of skills—from technical maintenance to content updates and security monitoring.",
      "For many businesses, outsourcing website management is a strategic decision that allows them to focus on core competencies while ensuring their online presence remains optimal.",
      "## Why Outsource Website Management?",
      "- **Access to specialized expertise** across multiple disciplines",
      "- **Cost savings** compared to hiring in-house specialists",
      "- **Consistent maintenance and updates** without diverting internal resources"
    ],
    relatedPosts: ["outdated-website", "quality-high", "creative-outsourcing"]
  }
};

// Type for blog post data
type BlogPostData = typeof blogPostsData[keyof typeof blogPostsData];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the blog post data
  const post = id ? blogPostsData[id as keyof typeof blogPostsData] : undefined;
  
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate("/guides")}>
              Back to Guides
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related posts
  const relatedPosts = post.relatedPosts?.map(relatedId => {
    const relatedPost = blogPostsData[relatedId as keyof typeof blogPostsData];
    return {
      id: relatedId,
      title: relatedPost?.title,
      image: relatedPost?.image,
      category: relatedPost?.category
    };
  }).filter(Boolean) || [];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Article Header */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-6">
            <Button 
              variant="ghost" 
              className="text-white mb-8 hover:bg-white/10"
              onClick={() => navigate("/guides")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all guides
            </Button>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-sm mt-6">
              <span>{post.category}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="container mx-auto px-6 -mt-8">
          <div className="w-full h-96 md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Article Content */}
        <article className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            {post.content.map((paragraph, index) => (
              paragraph.startsWith('##') ? (
                <h2 key={index} className="text-2xl font-bold mt-10 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              ) : paragraph.includes('**') ? (
                <p key={index} className="mb-6 text-lg" 
                   dangerouslySetInnerHTML={{
                     __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                   }} />
              ) : paragraph.includes('- ') ? (
                <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="text-lg">{item.replace('- ', '')}</li>
                  ))}
                </ul>
              ) : (
                <p key={index} className="mb-6 text-lg">{paragraph}</p>
              )
            ))}
          </div>
        </article>
        
        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => navigate(`/guides/${relatedPost.id}`)}
                  >
                    <div className="relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-lg font-medium">{relatedPost.title}</h3>
                    <p className="text-sm text-gray-500">{relatedPost.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
