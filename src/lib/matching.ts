import { StartupProfile, SMEProfile, Industry } from "@/types/profiles"
import { MatchScore, MatchResult, MatchingPreferences } from "@/types/matching"

// Calculate match score between a startup and an SME
export function calculateMatchScore(
  startup: StartupProfile,
  sme: SMEProfile,
  preferences: MatchingPreferences
): MatchScore {
  // Calculate individual factor scores
  const industryFit = calculateIndustryFit(startup, sme)
  const technologyFit = calculateTechnologyFit(startup, sme)
  const stageFit = calculateStageFit(startup, sme)
  const locationFit = calculateLocationFit(startup, sme, preferences.locationRadius)
  const requirementsFit = calculateRequirementsFit(startup, sme)

  // Apply preference weights
  const weightedScores = {
    industryFit: industryFit * preferences.priorityFactors.industry,
    technologyFit: technologyFit * preferences.priorityFactors.technology,
    stageFit: stageFit * preferences.priorityFactors.stage,
    locationFit: locationFit * preferences.priorityFactors.location,
    requirementsFit: requirementsFit * preferences.priorityFactors.requirements,
  }

  // Calculate overall score
  const totalWeight = Object.values(preferences.priorityFactors).reduce((a, b) => a + b, 0)
  const overallScore = Math.round(
    Object.values(weightedScores).reduce((a, b) => a + b, 0) / totalWeight
  )

  // Generate match reasons
  const reasons = generateMatchReasons(startup, sme, weightedScores)

  return {
    overall: overallScore,
    factors: {
      industryFit,
      technologyFit,
      stageFit,
      locationFit,
      requirementsFit,
    },
    reasons,
  }
}

// Calculate industry fit score
function calculateIndustryFit(startup: StartupProfile, sme: SMEProfile): number {
  if (sme.interests.industries.includes(startup.industry)) {
    return 100
  }

  // Check for related industries
  const relatedIndustries = getRelatedIndustries(startup.industry)
  const hasRelatedIndustry = sme.interests.industries.some(
    industry => relatedIndustries.includes(industry)
  )

  return hasRelatedIndustry ? 70 : 30
}

// Calculate technology fit score
function calculateTechnologyFit(startup: StartupProfile, sme: SMEProfile): number {
  const startupTechSet = new Set(startup.technologies.map(t => t.toLowerCase()))
  const smeTechInterests = new Set(sme.interests.technologies.map(t => t.toLowerCase()))

  const matchingTech = [...startupTechSet].filter(tech => smeTechInterests.has(tech))
  const matchPercentage = (matchingTech.length / smeTechInterests.size) * 100

  return Math.round(matchPercentage)
}

// Calculate stage fit score
function calculateStageFit(startup: StartupProfile, sme: SMEProfile): number {
  if (sme.interests.stages.includes(startup.stage)) {
    return 100
  }

  // Calculate distance between preferred and actual stage
  const stageOrder = ["Seed", "Series A", "Series B", "Growth", "Scale-up"]
  const startupStageIndex = stageOrder.indexOf(startup.stage)
  const preferredStageIndexes = sme.interests.stages.map(s => stageOrder.indexOf(s))

  const minDistance = Math.min(
    ...preferredStageIndexes.map(i => Math.abs(i - startupStageIndex))
  )

  return Math.max(0, 100 - minDistance * 25)
}

// Calculate location fit score
function calculateLocationFit(
  startup: StartupProfile,
  sme: SMEProfile,
  radiusKm: number
): number {
  // Simplified location matching - in real app, use geocoding and distance calculation
  if (startup.location === sme.location) {
    return 100
  }

  // Basic country matching
  const startupCountry = startup.location.split(", ")[1]
  const smeCountry = sme.location.split(", ")[1]

  return startupCountry === smeCountry ? 70 : 40
}

// Calculate requirements fit score
function calculateRequirementsFit(startup: StartupProfile, sme: SMEProfile): number {
  let totalScore = 0

  for (const requirement of sme.requirements) {
    // Check if startup's description or technologies match the requirement
    const matchesDescription = startup.description.toLowerCase()
      .includes(requirement.description.toLowerCase())

    const matchesTechnology = startup.technologies.some(tech =>
      requirement.description.toLowerCase().includes(tech.toLowerCase())
    )

    if (matchesDescription || matchesTechnology) {
      totalScore += 100
    }
  }

  return Math.round(totalScore / sme.requirements.length)
}

// Generate match reasons based on scores
function generateMatchReasons(
  startup: StartupProfile,
  sme: SMEProfile,
  scores: Record<string, number>
): string[] {
  const reasons: string[] = []

  if (scores.industryFit > 80) {
    reasons.push(`Strong industry alignment in ${startup.industry}`)
  }

  if (scores.technologyFit > 80) {
    const matchingTech = startup.technologies.filter(tech =>
      sme.interests.technologies.includes(tech)
    )
    reasons.push(`Matching technology stack: ${matchingTech.join(", ")}`)
  }

  if (scores.stageFit > 80) {
    reasons.push(`Ideal development stage (${startup.stage})`)
  }

  if (scores.locationFit > 80) {
    reasons.push(`Convenient location in ${startup.location}`)
  }

  if (scores.requirementsFit > 80) {
    reasons.push("Meets specific business requirements")
  }

  return reasons
}

// Get related industries for better matching
function getRelatedIndustries(industry: Industry): Industry[] {
  const relatedIndustries: Record<Industry, Industry[]> = {
    "Software Development": ["AI & Machine Learning", "Cybersecurity"],
    "AI & Machine Learning": ["Software Development"],
    "Manufacturing": ["Clean Energy"],
    "Healthcare": ["Biotechnology"],
    "Fintech": ["Software Development", "Cybersecurity"],
    "Cybersecurity": ["Software Development", "Fintech"],
    "Clean Energy": ["Manufacturing"],
    "Biotechnology": ["Healthcare"],
    "E-commerce": ["Software Development", "Fintech"],
  }

  return relatedIndustries[industry] || []
}

// Find matches for an SME
export async function findMatches(
  sme: SMEProfile,
  startups: StartupProfile[],
  preferences: MatchingPreferences
): Promise<MatchResult[]> {
  const matches: MatchResult[] = []

  for (const startup of startups) {
    // Skip if startup is in excluded industries
    if (preferences.excludedIndustries?.includes(startup.industry)) {
      continue
    }

    // Skip if startup doesn't have required technologies
    if (preferences.requiredTechnologies) {
      const hasRequiredTech = preferences.requiredTechnologies.every(tech =>
        startup.technologies.includes(tech)
      )
      if (!hasRequiredTech) {
        continue
      }
    }

    const score = calculateMatchScore(startup, sme, preferences)

    // Only include matches above minimum score
    if (score.overall >= preferences.minMatchScore) {
      matches.push({
        startupId: startup.id,
        smeId: sme.id,
        score,
        timestamp: new Date().toISOString(),
      })
    }
  }

  // Sort matches by score
  return matches.sort((a, b) => b.score.overall - a.score.overall)
} 