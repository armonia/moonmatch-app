import { Industry } from "./profiles"

// Represents the priority factors for different matching criteria
export interface PriorityFactors {
  industry: number
  technology: number
  stage: number
  location: number
  requirements: number
}

// Represents the preferences for matching
export interface MatchingPreferences {
  minMatchScore: number
  priorityFactors: PriorityFactors
  locationRadius: number
  excludedIndustries?: Industry[]
  requiredTechnologies?: string[]
}

// Represents the individual factor scores for a match
export interface MatchFactors {
  industryFit: number
  technologyFit: number
  stageFit: number
  locationFit: number
  requirementsFit: number
}

// Represents the complete match score including factors and reasons
export interface MatchScore {
  overall: number
  factors: MatchFactors
  reasons: string[]
}

// Represents a complete match result between a startup and an SME
export interface MatchResult {
  startupId: string
  smeId: string
  score: MatchScore
  timestamp: string
}

// Default matching preferences
export const DEFAULT_PREFERENCES: MatchingPreferences = {
  minMatchScore: 70,
  priorityFactors: {
    industry: 0.3,
    technology: 0.25,
    stage: 0.2,
    location: 0.15,
    requirements: 0.1,
  },
  locationRadius: 100,
} 