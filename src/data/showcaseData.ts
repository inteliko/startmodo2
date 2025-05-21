
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
  image: "public/projects/crm_screenshot.gif",
  title: "Marketing and Sales Automation Dashboard",
  category: "Automation, Marketing, Sales",
  description: "A powerful all-in-one dashboard designed to automate marketing workflows, track sales performance in real-time, and optimize customer engagement. The tool integrates CRM data with marketing campaigns to streamline lead nurturing and boost conversion rates by 45%.",
  client: "Fashion Retailer Inc.",
  deliverables: [
    "Marketing Automation Setup",
    "Sales Funnel Optimization",
    "Dashboard Analytics",
    "Email Campaign Management",
    "CRM Integration"
  ],
  technologies: [
    "Shopify",
    "React",
    "Tailwind CSS",
    "Google Analytics",
    "HubSpot API"
  ],
  year: "2023"
}


,
  {
  id: "enterprise-dashboard",
  image: "/projects/pdf-exporter.gif",
  title: "Document Exporter Tool",
  category: "Web App, React",
  description: "A versatile exporter tool that enables users to seamlessly convert and export documents in PDF, image, and Word formats. Designed for enterprise use, it supports high-quality output and batch processing, improving productivity and document management workflows.",
  client: "Global Manufacturing Corp.",
  deliverables: [
    "UX/UI Design",
    "Frontend Development",
    "Export Functionality for PDF, Image, and Word",
    "Integration with Backend Services",
    "User Documentation"
  ],
  technologies: ["React", "TypeScript", "FileSaver.js", "jsPDF", "REST API"],
  year: "2024"
}
,
  {
    id: "mobile-banking",
    image: "public/projects/community-app.gif",
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
    image: "public/projects/trix-rap.gif",
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
    image: "public/projects/fork-lift.gif",
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
