"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Zap, TrendingUp, Building } from "lucide-react"

const MOCK_SUGGESTIONS = [
  {
    id: 1,
    name: "AI Vision Tech",
    industry: "Computer Vision",
    matchScore: 98,
    strengths: ["Advanced AI Models", "Proven Track Record", "Scalable Solution"],
    reasons: [
      "Technology stack aligns with your needs",
      "Similar successful collaborations",
      "Complementary business model"
    ],
    stage: "Series A",
    location: "London, UK"
  },
  {
    id: 2,
    name: "DataFlow Analytics",
    industry: "Data Analytics",
    matchScore: 95,
    strengths: ["Real-time Processing", "Custom Solutions", "Enterprise Ready"],
    reasons: [
      "Matches your data processing requirements",
      "Experience in your industry",
      "Technical expertise alignment"
    ],
    stage: "Growth",
    location: "Berlin, Germany"
  }
]

export function DetailedAISuggestions() {
  const [suggestions, setSuggestions] = useState<typeof MOCK_SUGGESTIONS>([])

  useEffect(() => {
    setSuggestions(MOCK_SUGGESTIONS)
  }, [])

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Suggestions</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                    <h4 className="font-medium">{suggestion.name}</h4>
                  </div>
                  <p className="text-sm text-gray-500">{suggestion.industry}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">
                    {suggestion.matchScore}% Match
                  </div>
                  <Button size="sm" className="mt-2">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h5 className="text-sm font-medium mb-2">Key Strengths</h5>
                  <ul className="space-y-1">
                    {suggestion.strengths.map((strength, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-2">Match Reasons</h5>
                  <ul className="space-y-1">
                    {suggestion.reasons.map((reason, index) => (
                      <li key={index} className="text-sm flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-blue-500" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  {suggestion.stage}
                </div>
                <div>•</div>
                <div>{suggestion.location}</div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
} 