"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const MOCK_STARTUPS = [
  {
    id: 1,
    name: "AI Analytics Pro",
    industry: "Artificial Intelligence",
    description: "AI-powered analytics platform for business intelligence",
    stage: "Series A",
  },
  {
    id: 2,
    name: "CloudSecure",
    industry: "Cybersecurity",
    description: "Next-generation cloud security solutions",
    stage: "Seed",
  },
]

export function StartupSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [startups, setStartups] = useState<typeof MOCK_STARTUPS>([])

  useEffect(() => {
    setStartups(MOCK_STARTUPS)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search startups by name, industry, or technology..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>Search</Button>
      </div>

      <div className="space-y-4">
        {startups.map((startup) => (
          <div key={startup.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">{startup.name}</h3>
              <p className="text-sm text-gray-500">{startup.description}</p>
              <div className="flex gap-2 mt-2">
                <Badge>{startup.industry}</Badge>
                <Badge variant="outline">{startup.stage}</Badge>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/dashboard/sme/startup/${startup.id}`}>
                <Button>View Profile</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 