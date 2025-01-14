import { StartupProfile, SMEProfile } from "@/types/profiles"

export const MOCK_STARTUPS: StartupProfile[] = [
  {
    id: "st-001",
    type: "startup",
    name: "AI Vision Tech",
    industry: "AI & Machine Learning",
    description: "Developing cutting-edge computer vision solutions for enterprise",
    location: "London, UK",
    website: "aivisiontech.com",
    foundedYear: 2022,
    size: "10-50",
    contactEmail: "contact@aivisiontech.com",
    stage: "Series A",
    funding: 5000000,
    technologies: ["Python", "TensorFlow", "Computer Vision", "Cloud Computing"],
    team: [
      { name: "Sarah Chen", role: "CEO", linkedin: "linkedin.com/sarahchen" },
      { name: "Alex Kumar", role: "CTO", linkedin: "linkedin.com/alexkumar" }
    ],
    metrics: {
      revenue: 800000,
      growth: 150,
      customers: 12
    },
    developmentFocus: "Our development is focused on creating scalable computer vision solutions using deep learning. Key areas include real-time object detection, facial recognition, and automated quality inspection systems.",
    targetMarket: "Enterprise companies in manufacturing, retail, and security sectors looking to implement computer vision solutions for automation and quality control.",
    businessModel: "B2B SaaS model with custom implementation services. Revenue streams include subscription fees, implementation services, and ongoing support.",
    achievements: [
      "Secured Series A funding of $5M",
      "Deployed solutions with 12 enterprise customers",
      "150% YoY growth in 2023",
      "Filed 2 patents for proprietary AI algorithms"
    ]
  },
  {
    id: "st-002",
    type: "startup",
    name: "FinFlow",
    industry: "Fintech",
    description: "Revolutionizing payment processing with blockchain technology",
    location: "Berlin, Germany",
    website: "finflow.io",
    foundedYear: 2021,
    size: "20-50",
    contactEmail: "hello@finflow.io",
    stage: "Seed",
    funding: 2000000,
    technologies: ["Blockchain", "Node.js", "React", "Solidity"],
    team: [
      { name: "Marcus Weber", role: "CEO", linkedin: "linkedin.com/marcusweber" },
      { name: "Julia Schmidt", role: "CTO", linkedin: "linkedin.com/juliaschmidt" }
    ],
    metrics: {
      revenue: 300000,
      growth: 200,
      customers: 8
    },
    developmentFocus: "Building a next-generation payment processing platform using blockchain technology. Focus on scalability, security, and regulatory compliance.",
    targetMarket: "Small to medium-sized businesses in Europe looking for cost-effective and secure payment processing solutions.",
    businessModel: "Transaction-based pricing model with tiered subscription plans. Additional revenue from integration services and custom solutions.",
    achievements: [
      "Completed seed round of €2M",
      "Launched beta with 8 pilot customers",
      "Achieved regulatory compliance in 3 EU countries",
      "Won FinTech Startup of the Year 2023"
    ]
  }
]

export const MOCK_SMES: SMEProfile[] = [
  {
    id: "sme-001",
    type: "sme",
    name: "Global Manufacturing Solutions",
    industry: "Manufacturing",
    description: "Leading manufacturer seeking digital transformation solutions",
    location: "Birmingham, UK",
    website: "globalmfg.com",
    foundedYear: 1995,
    size: "200-500",
    contactEmail: "partnerships@globalmfg.com",
    established: 1995,
    annualRevenue: 50000000,
    interests: {
      technologies: ["AI", "Automation", "IoT", "Predictive Maintenance"],
      industries: ["Software Development", "AI & Machine Learning"],
      stages: ["Series A", "Growth"]
    },
    requirements: [
      {
        category: "Process Automation",
        description: "Looking for AI-powered solutions to optimize manufacturing processes"
      },
      {
        category: "Quality Control",
        description: "Need computer vision solutions for automated quality inspection"
      }
    ],
    previousCollaborations: [
      {
        startupName: "AutomateAI",
        year: 2023,
        outcome: "Successfully implemented predictive maintenance system"
      }
    ]
  },
  // Add 2-3 more mock SMEs
] 