"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const MOCK_MATCHES = [
  {
    id: 1,
    name: "Tech Solutions Corp",
    industry: "Software Development",
    matchScore: 95,
    description: "Leading software development company looking for AI solutions",
  },
  {
    id: 2,
    name: "Global Innovations Ltd",
    industry: "Manufacturing",
    matchScore: 88,
    description: "Manufacturing company seeking automation solutions",
  },
]

export function SMEMatches() {
  return (
    <div className="space-y-4">
      {MOCK_MATCHES.map((match) => (
        <Card key={match.id} className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{match.name}</h4>
              <p className="text-sm text-gray-500">{match.industry}</p>
              <p className="text-sm mt-2">{match.description}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-600">
                {match.matchScore}% Match
              </div>
              <div className="flex gap-2 mt-2">
                <Link href={`/dashboard/startup/sme/${match.id}`}>
                  <Button size="sm" variant="outline">
                    View Profile
                  </Button>
                </Link>
                <Button size="sm">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 