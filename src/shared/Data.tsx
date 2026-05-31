import {
  BarChartOutlined,
  DashboardOutlined,
  RobotOutlined,
  SyncOutlined,
  TeamOutlined,
  SolutionOutlined
} from '@ant-design/icons';
import businessIntelligence from '../assets/BusinessIntelligence.jpg';
import dataAnalytics from '../assets/dataAnalysisImage.jpg';
import aiSolutions from '../assets/AiImage.jpg';
import corporateTraining from '../assets/corporateTrainingImage.jpg';
import automationImage from '../assets/automationImage.jpg'; 

export const servicesData = [
  {
    title: "Data Analytics",
    icon: <BarChartOutlined className='icon-style' />,
    description:
      "Transform raw data into meaningful insights that drive strategic business decisions and growth opportunities.",
    cta: "Learn More"
  },
  {
    title: "Business Intelligence",
    icon: <DashboardOutlined className='icon-style' />,
    description:
      "Build powerful dashboards and reporting systems with Power BI and Tableau that visualize your key metrics.",
    cta: "Learn More"
  },
  {
    title: "AI Solutions",
    icon: <RobotOutlined className='icon-style'/>,
    description:
      "Leverage machine learning and AI to automate processes, predict trends, and gain competitive advantages.",
    cta: "Learn More"
  },
  {
    title: "Process Automation",
    icon: <SyncOutlined className='icon-style' />,
    description:
      "Streamline repetitive tasks and workflows to increase efficiency, reduce errors, and save valuable time.",
    cta: "Learn More"
  },
  {
    title: "Corporate Training",
    icon: <TeamOutlined className='icon-style' />,
    description:
      "Upskill your team with hands-on training in data analytics, BI tools, and AI technologies.",
    cta: "Learn More"
  },
  {
    title: "Consulting Services",
    icon: <SolutionOutlined className='icon-style'/>,
    description:
      "Strategic guidance for your data journey, from roadmap development to implementation support.",
    cta: "Learn More"
  }
];

export const portfolioData = [
  {
    tool: "Power BI",
    department: "Finance",
    project: "Financial KPI Dashboard",
    description:
      "Real-time financial metrics tracking with automated reporting for a multinational corporation.",
    cta: "View Project",
    image: dataAnalytics,
    colors: {
      accent: "#42D4FF",     // Neon Cyan text
      secondary: "#0E7490",  // Deep Cyan bg
      background: "#0F172A", // Slate Dark
      text: "#E2E8F0"        // Soft White
    }
  },

  {
    tool: "Tableau",
    department: "Sales",
    project: "Sales Analytics Platform",
    description:
      "Comprehensive sales tracking dashboard with predictive analytics and trend visualization.",
    cta: "View Project",
    image: businessIntelligence,
    colors: {
      accent: "#FF7A59",     // Modern Orange
      secondary: "#3B1D14",  // Burnt Dark
      background: "#111827", // Charcoal
      text: "#F9FAFB"        // Clean White
    }
  },

  {
    tool: "AI/ML",
    department: "Automation",
    project: "AI-Driven Financial Forecasting",
    description:
      "Machine learning models for predictive financial analysis and risk assessment.",
    cta: "View Project",
    image: aiSolutions,
    colors: {
      accent: "#A855F7",     // Electric Purple
      secondary: "#2E1065",  // Deep Violet
      background: "#0B1120", // Rich Navy
      text: "#F5F3FF"        // Lavender White
    }
  },

  {
    tool: "Power BI",
    department: "Operations",
    project: "Operations Analytics Hub",
    description:
      "Centralized operations dashboard tracking KPIs across multiple departments.",
    cta: "View Project",
    image: businessIntelligence,
    colors: {
      accent: "#22C55E",     // Emerald
      secondary: "#052E16",  // Forest Green
      background: "#0A0F1C", // Deep Dark
      text: "#ECFDF5"        // Mint White
    }
  },

  {
    tool: "Data Automation",
    department: "Marketing",
    project: "Automated Marketing Analytics",
    description:
      "AI-powered marketing automation with real-time campaign performance tracking.",
    cta: "View Project",
    image: automationImage,
    colors: {
      accent: "#F472B6",     // Premium Pink
      secondary: "#4A044E",  // Dark Magenta
      background: "#111827", // Dark Gray
      text: "#FDF2F8"        // Soft Pink White
    }
  },

  {
    tool: "Python",
    department: "Analytics",
    project: "Customer Behavior Analysis",
    description:
      "Deep-dive customer segmentation and behavior analysis using advanced analytics.",
    cta: "View Project",
    image: corporateTraining,
    colors: {
      accent: "#60A5FA",     // Sky Blue
      secondary: "#172554",  // Deep Blue
      background: "#020617", // Near Black
      text: "#EFF6FF"        // Ice White
    }
  }
];


export const trainingFeatures = [
  {
    title: "Hands-On Workshops",
    description:
      "Practical, project-based training sessions tailored to your team's needs"
  },
  {
    title: "Custom Curriculum",
    description:
      "Learning paths designed around your industry and business objectives"
  },
  {
    title: "Ongoing Support",
    description:
      "Post-training mentorship and consulting to ensure implementation success"
  }
];

 export const businessDetails = [
  {
  "email": "seun.ogunsanya@email.com",
  "phone": "+1 (555) 123-4567",
  "business_hours": {
    "days": "Mon - Fri",
    "hours": "9:00 AM - 6:00 PM"
  },
  "time_zone": "GMT/Africa"
}
]


export const blogPosts = [
  // DATA ANALYTICS
  {
    title: "How Modern Data Analytics Is Transforming Business Growth",
    featuredImage: dataAnalytics,
    category: "Data Analytics",
    excerpt: "Businesses leveraging advanced analytics are uncovering hidden opportunities, improving operational efficiency, and making smarter strategic decisions faster than ever before.",
    featured: false,
    readingTime: "6 min read",
    createdAt: "2026-05-26T09:00:00Z"
  },
  {
    title: "5 Data Analytics Trends Driving Business Performance in 2026",
    featuredImage: dataAnalytics,
    category: "Data Analytics",
    excerpt: "From predictive modeling to real-time reporting, modern analytics trends are helping organizations stay competitive and agile.",
    featured: false,
    readingTime: "7 min read",
    createdAt: "2026-05-27T09:00:00Z"
  },
  {
    title: "How Predictive Analytics Helps Organizations Reduce Risk",
    featuredImage: dataAnalytics,
    category: "Data Analytics",
    excerpt: "Predictive analytics enables businesses to anticipate market shifts, optimize resources, and proactively address operational challenges.",
    featured: false,
    readingTime: "5 min read",
    createdAt: "2026-05-28T09:00:00Z"
  },

  // AI SOLUTIONS
  {
    title: "How AI Intelligence Is Reshaping Enterprise Decision-Making in 2026",
    featuredImage: aiSolutions,
    category: "AI Solutions",
    excerpt: "Organizations embedding AI into strategic workflows are outperforming competitors through predictive insights and intelligent automation.",
    featured: false,
    readingTime: "8 min read",
    createdAt: "2026-05-26T10:00:00Z"
  },
  {
    title: "Practical AI Applications Delivering Immediate Business Value",
    featuredImage: aiSolutions,
    category: "AI Solutions",
    excerpt: "AI is transforming customer service, forecasting, and operations by helping organizations make faster and smarter decisions.",
    featured: false,
    readingTime: "6 min read",
    createdAt: "2026-05-27T10:00:00Z"
  },
  {
    title: "Building an AI-Ready Organization for Sustainable Growth",
    featuredImage: aiSolutions,
    category: "AI Solutions",
    excerpt: "Successful AI adoption requires strong data foundations, governance frameworks, and workforce readiness.",
    featured: false,
    readingTime: "9 min read",
    createdAt: "2026-05-28T10:00:00Z"
  },

  // PROCESS AUTOMATION
  {
    title: "Why Process Automation Has Become a Competitive Necessity",
    featuredImage: automationImage,
    category: "Process Automation",
    excerpt: "Companies are automating repetitive workflows to reduce costs, eliminate bottlenecks, and improve overall productivity.",
    featured: false,
    readingTime: "5 min read",
    createdAt: "2026-05-26T11:00:00Z"
  },
  {
    title: "Workflow Automation Strategies for Growing Businesses",
    featuredImage: automationImage,
    category: "Process Automation",
    excerpt: "Smart workflow automation helps organizations increase efficiency while reducing operational complexity.",
    featured: false,
    readingTime: "6 min read",
    createdAt: "2026-05-27T11:00:00Z"
  },
  {
    title: "How Intelligent Automation Improves Operational Efficiency",
    featuredImage: automationImage,
    category: "Process Automation",
    excerpt: "Combining automation and AI enables businesses to streamline processes and improve service delivery.",
    featured: false,
    readingTime: "7 min read",
    createdAt: "2026-05-28T11:00:00Z"
  },

  // BUSINESS INTELLIGENCE
  {
    title: "Business Intelligence Strategies Every Executive Should Know",
    featuredImage: businessIntelligence,
    category: "Business Intelligence",
    excerpt: "Modern BI platforms help leadership teams visualize performance metrics and make informed operational decisions.",
    featured: false,
    readingTime: "7 min read",
    createdAt: "2026-05-26T12:00:00Z"
  },
  {
    title: "Creating Executive Dashboards That Drive Better Decisions",
    featuredImage: businessIntelligence,
    category: "Business Intelligence",
    excerpt: "Effective dashboards transform raw data into actionable insights that support strategic decision-making.",
    featured: false,
    readingTime: "6 min read",
    createdAt: "2026-05-27T12:00:00Z"
  },
  {
    title: "The Evolution of Business Intelligence in the Age of AI",
    featuredImage: businessIntelligence,
    category: "Business Intelligence",
    excerpt: "AI-powered BI tools are helping organizations uncover deeper insights and accelerate reporting processes.",
    featured: false,
    readingTime: "8 min read",
    createdAt: "2026-05-28T12:00:00Z"
  },

  // DIGITAL TRANSFORMATION
  {
    title: "Digital Transformation Beyond Technology: Building Adaptive Enterprises",
    featuredImage: businessIntelligence,
    category: "Digital Transformation",
    excerpt: "Successful digital transformation requires cultural change, agile leadership, and a long-term innovation mindset.",
    featured: false,
    readingTime: "9 min read",
    createdAt: "2026-05-26T13:00:00Z"
  },
  {
    title: "Leading Successful Digital Transformation Initiatives",
    featuredImage: businessIntelligence,
    category: "Digital Transformation",
    excerpt: "Organizations that align technology investments with business objectives achieve stronger transformation outcomes.",
    featured: false,
    readingTime: "8 min read",
    createdAt: "2026-05-27T13:00:00Z"
  },
  {
    title: "Overcoming Resistance to Change During Digital Transformation",
    featuredImage: businessIntelligence,
    category: "Digital Transformation",
    excerpt: "People and processes remain the most important factors in achieving lasting transformation success.",
    featured: false,
    readingTime: "7 min read",
    createdAt: "2026-05-28T13:00:00Z"
  },

  // CORPORATE TRAINING
  {
    title: "Why Corporate Training Is Critical for Future-Ready Organizations",
    featuredImage: corporateTraining,
    category: "Corporate Training",
    excerpt: "Organizations investing in workforce development are creating stronger teams and improving retention.",
    featured: false,
    readingTime: "4 min read",
    createdAt: "2026-05-26T14:00:00Z"
  },
  {
    title: "Building High-Performance Teams Through Continuous Learning",
    featuredImage: corporateTraining,
    category: "Corporate Training",
    excerpt: "Continuous learning programs empower employees to adapt quickly and contribute greater value.",
    featured: false,
    readingTime: "5 min read",
    createdAt: "2026-05-27T14:00:00Z"
  },
  {
    title: "Why Data Literacy Training Matters in Modern Organizations",
    featuredImage: corporateTraining,
    category: "Corporate Training",
    excerpt: "Data-literate teams make better decisions, communicate insights effectively, and drive innovation.",
    featured: false,
    readingTime: "6 min read",
    createdAt: "2026-05-28T14:00:00Z"
  }
];