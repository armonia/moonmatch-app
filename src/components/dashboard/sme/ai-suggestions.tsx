"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const MOCK_SUGGESTIONS = [
  {
    id: 1,
    name: "DataViz Pro",
    match: 98,
    reason: "Matches your need for data visualization solutions",
  },
  {
    id: 2,
    name: "SecureChain",
    match: 92,
    reason: "Aligns with your blockchain security requirements",
  },
]

export function AISuggestions() {
  return (
    <div className="space-y-4">
      {MOCK_SUGGESTIONS.map((suggestion) => (
        <Card key={suggestion.id} className="p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-yellow-500 mt-1" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{suggestion.name}</h4>
                <span className="text-green-600 font-bold">{suggestion.match}%</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{suggestion.reason}</p>
              <Button size="sm" variant="outline" className="mt-2">
                Learn More
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 