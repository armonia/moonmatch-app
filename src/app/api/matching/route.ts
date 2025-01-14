import { NextRequest, NextResponse } from "next/server"
import { findMatches } from "@/lib/matching"
import { DEFAULT_PREFERENCES } from "@/types/matching"
import { MOCK_STARTUPS } from "@/data/mock-profiles"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// GET /api/matching
export async function GET(req: NextRequest) {
  try {
    // Get authenticated user session
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      )
    }

    // Get query parameters
    const searchParams = req.nextUrl.searchParams
    const minScore = parseInt(searchParams.get("minScore") || "70")
    const excludedIndustries = searchParams.get("excludedIndustries")?.split(",") || []
    const requiredTechnologies = searchParams.get("requiredTechnologies")?.split(",") || []

    // Get user profile from database (using mock data for now)
    const userProfile = MOCK_STARTUPS.find(s => s.id === session.user.id)
    if (!userProfile) {
      return NextResponse.json(
        { error: "User profile not found" },
        { status: 404 }
      )
    }

    // Create matching preferences
    const preferences = {
      ...DEFAULT_PREFERENCES,
      minMatchScore: minScore,
      excludedIndustries,
      requiredTechnologies,
    }

    // Find matches
    const matches = await findMatches(userProfile, MOCK_STARTUPS, preferences)

    return NextResponse.json({ matches })
  } catch (error) {
    console.error("Error in matching API:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// POST /api/matching
export async function POST(req: NextRequest) {
  try {
    // Get authenticated user session
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      )
    }

    // Get request body
    const body = await req.json()
    const {
      minScore = 70,
      excludedIndustries = [],
      requiredTechnologies = [],
      priorityFactors,
      locationRadius,
    } = body

    // Get user profile from database (using mock data for now)
    const userProfile = MOCK_STARTUPS.find(s => s.id === session.user.id)
    if (!userProfile) {
      return NextResponse.json(
        { error: "User profile not found" },
        { status: 404 }
      )
    }

    // Create matching preferences
    const preferences = {
      ...DEFAULT_PREFERENCES,
      minMatchScore: minScore,
      excludedIndustries,
      requiredTechnologies,
      ...(priorityFactors && { priorityFactors }),
      ...(locationRadius && { locationRadius }),
    }

    // Find matches
    const matches = await findMatches(userProfile, MOCK_STARTUPS, preferences)

    return NextResponse.json({ matches })
  } catch (error) {
    console.error("Error in matching API:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 