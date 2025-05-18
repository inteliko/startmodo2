
export interface ShowcaseItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  client: string;
  deliverables: string[];
  technologies: string[];
  year: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "ecommerce-redesign",
    image: "/placeholder.svg",
    title: "E-commerce Website Redesign",
    category: "Shopify, UI/UX",
    description: "A complete redesign of an e-commerce platform that increased conversion rates by 45% and improved user engagement. The project focused on streamlining the checkout process and enhancing product discovery.",
    client: "Fashion Retailer Inc.",
    deliverables: ["UX Research", "UI Design", "Shopify Development", "SEO Optimization"],
    technologies: ["Shopify", "React", "Tailwind CSS", "Google Analytics"],
    year: "2023"
  },
  {
    id: "enterprise-dashboard",
    image: "/placeholder.svg",
    title: "Enterprise Dashboard",
    category: "Web App, React",
    description: "A comprehensive dashboard solution for enterprise resource management that centralizes data from multiple sources and provides actionable insights through intuitive visualizations.",
    client: "Global Manufacturing Corp.",
    deliverables: ["UX/UI Design", "Frontend Development", "Data Integration", "Documentation"],
    technologies: ["React", "TypeScript", "D3.js", "REST API"],
    year: "2024"
  },
  {
    id: "mobile-banking",
    image: "/placeholder.svg",
    title: "Mobile Banking Experience",
    category: "Mobile App, Fintech",
    description: "A secure and user-friendly mobile banking application that simplifies financial management with features like biometric authentication, real-time transactions, and personalized insights.",
    client: "Digital Banking Solutions",
    deliverables: ["App Design", "React Native Development", "Security Implementation", "User Testing"],
    technologies: ["React Native", "Node.js", "Firebase", "Plaid API"],
    year: "2023"
  },
  {
    id: "marketing-landing",
    image: "/placeholder.svg",
    title: "Marketing Landing Page",
    category: "Website, Conversion",
    description: "A high-converting landing page designed for a product launch campaign that achieved a 32% conversion rate through strategic messaging and optimized user flow.",
    client: "Tech Startup Inc.",
    deliverables: ["Landing Page Design", "Copywriting", "Development", "A/B Testing"],
    technologies: ["HTML/CSS", "JavaScript", "Google Tag Manager", "Hotjar"],
    year: "2024"
  },
  {
    id: "brand-identity",
    image: "/placeholder.svg",
    title: "Brand Identity System",
    category: "Branding, Design System",
    description: "A comprehensive brand identity system including logo design, typography, color palette, and design guidelines that established a consistent visual language across all touchpoints.",
    client: "Wellness Company",
    deliverables: ["Logo Design", "Brand Guidelines", "Asset Library", "Website Implementation"],
    technologies: ["Adobe Creative Suite", "Figma", "Web Components"],
    year: "2022"
  },
  {
    id: "digital-marketing",
    image: "/placeholder.svg",
    title: "Digital Marketing Campaign",
    category: "Marketing, Digital",
    description: "An integrated digital marketing campaign across multiple channels that generated 250% ROI through targeted content strategy, social media engagement, and performance optimization.",
    client: "Education Platform",
    deliverables: ["Campaign Strategy", "Content Creation", "Social Media Management", "Analytics & Reporting"],
    technologies: ["Meta Ads", "Google Ads", "Mailchimp", "Google Analytics"],
    year: "2023"
  }
];
