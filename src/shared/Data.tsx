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
    description: "Real-time financial metrics tracking with automated reporting for a multinational corporation.",
    cta: "View Project",
    image: dataAnalytics // Financial KPI → Data Analytics image
  },
  {
    tool: "Tableau",
    department: "Sales",
    project: "Sales Analytics Platform",
    description: "Comprehensive sales tracking dashboard with predictive analytics and trend visualization.",
    cta: "View Project",
    image: businessIntelligence // Tableau → Business Intelligence image
  },
  {
    tool: "AI/ML",
    department: "Automation",
    project: "AI-Driven Financial Forecasting",
    description: "Machine learning models for predictive financial analysis and risk assessment.",
    cta: "View Project",
    image: aiSolutions // AI/ML → AI Solutions image
  },
  {
    tool: "Power BI",
    department: "Operations",
    project: "Operations Analytics Hub",
    description: "Centralized operations dashboard tracking KPIs across multiple departments.",
    cta: "View Project",
    image: businessIntelligence // Operations → Business Intelligence image
  },
  {
    tool: "Data Automation",
    department: "Marketing",
    project: "Automated Marketing Analytics",
    description: "AI-powered marketing automation with real-time campaign performance tracking.",
    cta: "View Project",
    image: automationImage // Marketing automation → Automation image
  },
  {
    tool: "Python",
    department: "Analytics",
    project: "Customer Behavior Analysis",
    description: "Deep-dive customer segmentation and behavior analysis using advanced analytics.",
    cta: "View Project",
    image: corporateTraining // Analytics → Corporate Training image
  }
];