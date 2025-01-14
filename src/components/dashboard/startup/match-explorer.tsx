"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, MapPin, Building } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

// Extended mock data with more fields
const MOCK_MATCHES = [
  {
    id: 1,
    name: "Global Tech Solutions",
    industry: "Software Development",
    matchScore: 95,
    location: "London, UK",
    interests: ["AI", "Machine Learning", "Cloud Computing"],
    description: "Leading technology solutions provider seeking innovative startups",
    stage: "Growth",
    teamSize: 50,
    fundingRaised: 5000000,
  },
  {
    id: 2,
    name: "Innovation Labs",
    industry: "Research & Development",
    matchScore: 88,
    location: "Berlin, Germany",
    interests: ["Biotechnology", "Data Analytics"],
    description: "R&D focused company looking for cutting-edge solutions",
    stage: "Series A",
    teamSize: 25,
    fundingRaised: 2000000,
  },
  {
    id: 3,
    name: "HealthTech Innovations",
    industry: "Healthcare",
    matchScore: 92,
    location: "Stockholm, Sweden",
    interests: ["Digital Health", "AI", "IoT"],
    description: "Healthcare technology company focused on patient care solutions",
    stage: "Series B",
    teamSize: 75,
    fundingRaised: 10000000,
  },
  {
    id: 4,
    name: "Fintech Solutions Co",
    industry: "Fintech",
    matchScore: 85,
    location: "Singapore",
    interests: ["Blockchain", "AI", "Payment Systems"],
    description: "Innovative financial technology solutions provider",
    stage: "Growth",
    teamSize: 100,
    fundingRaised: 15000000,
  },
]

const INDUSTRIES = [
  "Software Development",
  "Research & Development",
  "Healthcare",
  "Fintech",
  "AI & Machine Learning",
  "Cybersecurity",
  "Clean Energy",
  "Biotechnology",
] as const

const STAGES = ["Seed", "Series A", "Series B", "Growth"] as const

const TECHNOLOGIES = [
  "AI",
  "Machine Learning",
  "Cloud Computing",
  "Blockchain",
  "IoT",
  "Data Analytics",
  "Digital Health",
  "Payment Systems",
] as const

interface Filters {
  industries: string[]
  stages: string[]
  technologies: string[]
  minMatchScore: number
  maxFunding: number | null
  minTeamSize: number | null
}

export function MatchExplorer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [matches, setMatches] = useState<typeof MOCK_MATCHES>([])
  const [filters, setFilters] = useState<Filters>({
    industries: [],
    stages: [],
    technologies: [],
    minMatchScore: 0,
    maxFunding: null,
    minTeamSize: null,
  })
  
  // const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  useEffect(() => {
    // Apply filters and search
    let filteredMatches = [...MOCK_MATCHES]

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filteredMatches = filteredMatches.filter(
        match =>
          match.name.toLowerCase().includes(query) ||
          match.description.toLowerCase().includes(query) ||
          match.industry.toLowerCase().includes(query) ||
          match.interests.some(interest => interest.toLowerCase().includes(query))
      )
    }

    // Apply filters
    if (filters.industries.length > 0) {
      filteredMatches = filteredMatches.filter(match =>
        filters.industries.includes(match.industry)
      )
    }

    if (filters.stages.length > 0) {
      filteredMatches = filteredMatches.filter(match =>
        filters.stages.includes(match.stage)
      )
    }

    if (filters.technologies.length > 0) {
      filteredMatches = filteredMatches.filter(match =>
        match.interests.some(interest => filters.technologies.includes(interest))
      )
    }

    if (filters.minMatchScore > 0) {
      filteredMatches = filteredMatches.filter(
        match => match.matchScore >= filters.minMatchScore
      )
    }

    const maxFunding = filters.maxFunding
    if (maxFunding !== null) {
      filteredMatches = filteredMatches.filter(
        match => match.fundingRaised <= maxFunding
      )
    }

    const minTeamSize = filters.minTeamSize
    if (minTeamSize !== null) {
      filteredMatches = filteredMatches.filter(
        match => match.teamSize >= minTeamSize
      )
    }

    setMatches(filteredMatches)
  }, [searchQuery, filters])

  const clearFilters = () => {
    setFilters({
      industries: [],
      stages: [],
      technologies: [],
      minMatchScore: 0,
      maxFunding: null,
      minTeamSize: null,
    })
  }

  const toggleFilter = (type: keyof Filters, value: string) => {
    setFilters(prev => {
      const current = prev[type] as string[]
      return {
        ...prev,
        [type]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value],
      }
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search matches..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {Object.values(filters).some(f => 
                Array.isArray(f) ? f.length > 0 : f !== null && f > 0
              ) && (
                <Badge variant="secondary" className="ml-2">
                  Active
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent title="Filters">
            <SheetHeader>
              <SheetTitle className="flex justify-between items-center">
                Filters
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="h-8"
                >
                  Clear All
                </Button>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              {/* Industries */}
              <div className="space-y-4">
                <Label>Industries</Label>
                <div className="grid grid-cols-2 gap-2">
                  {INDUSTRIES.map((industry) => (
                    <div key={industry} className="flex items-center space-x-2">
                      <Checkbox
                        id={industry}
                        checked={filters.industries.includes(industry)}
                        onCheckedChange={() => toggleFilter("industries", industry)}
                      />
                      <label
                        htmlFor={industry}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {industry}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stages */}
              <div className="space-y-4">
                <Label>Stages</Label>
                <div className="grid grid-cols-2 gap-2">
                  {STAGES.map((stage) => (
                    <div key={stage} className="flex items-center space-x-2">
                      <Checkbox
                        id={stage}
                        checked={filters.stages.includes(stage)}
                        onCheckedChange={() => toggleFilter("stages", stage)}
                      />
                      <label
                        htmlFor={stage}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {stage}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <Label>Technologies</Label>
                <div className="grid grid-cols-2 gap-2">
                  {TECHNOLOGIES.map((tech) => (
                    <div key={tech} className="flex items-center space-x-2">
                      <Checkbox
                        id={tech}
                        checked={filters.technologies.includes(tech)}
                        onCheckedChange={() => toggleFilter("technologies", tech)}
                      />
                      <label
                        htmlFor={tech}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {tech}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Match Score */}
              <div className="space-y-4">
                <Label>Minimum Match Score</Label>
                <Slider
                  value={[filters.minMatchScore]}
                  onValueChange={([value]) =>
                    setFilters(prev => ({ ...prev, minMatchScore: value }))
                  }
                  max={100}
                  step={5}
                />
                <div className="text-sm text-gray-500">
                  {filters.minMatchScore}% or higher
                </div>
              </div>

              {/* Team Size */}
              <div className="space-y-4">
                <Label>Minimum Team Size</Label>
                <Select
                  value={filters.minTeamSize?.toString() ?? "none"}
                  onValueChange={(value) =>
                    setFilters(prev => ({
                      ...prev,
                      minTeamSize: value === "none" ? null : parseInt(value),
                    }))
                  }
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Any size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Any size</SelectItem>
                    <SelectItem value="10">10+ employees</SelectItem>
                    <SelectItem value="50">50+ employees</SelectItem>
                    <SelectItem value="100">100+ employees</SelectItem>
                    <SelectItem value="500">500+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Funding */}
              <div className="space-y-4">
                <Label>Maximum Funding Raised</Label>
                <Select
                  value={filters.maxFunding?.toString() ?? "none"}
                  onValueChange={(value) =>
                    setFilters(prev => ({
                      ...prev,
                      maxFunding: value === "none" ? null : parseInt(value),
                    }))
                  }
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Any amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Any amount</SelectItem>
                    <SelectItem value="1000000">Up to $1M</SelectItem>
                    <SelectItem value="5000000">Up to $5M</SelectItem>
                    <SelectItem value="10000000">Up to $10M</SelectItem>
                    <SelectItem value="50000000">Up to $50M</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Matches</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="connected">Connected</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          {matches.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No matches found. Try adjusting your filters.
            </div>
          ) : (
            matches.map((match) => (
              <Card key={match.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{match.name}</h4>
                    <p className="text-sm text-gray-500">{match.industry}</p>
                    <p className="text-sm mt-2">{match.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {match.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {match.teamSize} employees
                      </span>
                      <span>
                        ${(match.fundingRaised / 1000000).toFixed(1)}M raised
                      </span>
                      <Badge variant="outline">{match.stage}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      {match.matchScore}% Match
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin className="h-4 w-4" />
                      {match.location}
                    </div>
                    <Link href={`/dashboard/startup/sme/${match.id}`}>
                      <Button size="sm" className="mt-2">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="new">
          <p className="text-center text-gray-500 py-8">No new matches yet</p>
        </TabsContent>

        <TabsContent value="connected">
          <p className="text-center text-gray-500 py-8">No connected matches yet</p>
        </TabsContent>
      </Tabs>
    </div>
  )
} 