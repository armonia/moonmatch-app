export type Industry = 
  | "Software Development"
  | "AI & Machine Learning"
  | "Manufacturing"
  | "Healthcare"
  | "Fintech"
  | "Cybersecurity"
  | "Clean Energy"
  | "Biotechnology"
  | "E-commerce"

export interface BaseProfile {
  id: string
  name: string
  industry: Industry
  description: string
  location: string
  website: string
  foundedYear: number
  size: string
  contactEmail: string
}

export interface StartupProfile extends BaseProfile {
  type: "startup"
  stage: "Seed" | "Series A" | "Series B" | "Growth" | "Scale-up"
  funding: number
  technologies: string[]
  pitchDeck?: string
  team: {
    name: string
    role: string
    linkedin?: string
  }[]
  metrics: {
    revenue?: number
    growth?: number
    customers?: number
  }
  developmentFocus: string
  targetMarket: string
  businessModel: string
  achievements: string[]
}

export interface SMEProfile extends BaseProfile {
  type: "sme"
  established: number
  annualRevenue: number
  interests: {
    technologies: string[]
    industries: Industry[]
    stages: StartupProfile["stage"][]
  }
  requirements: {
    category: string
    description: string
  }[]
  previousCollaborations?: {
    startupName: string
    year: number
    outcome: string
  }[]
} 