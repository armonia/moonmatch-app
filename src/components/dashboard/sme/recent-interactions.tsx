"use client"

import { Card } from "@/components/ui/card"
import { MessageCircle, Calendar } from "lucide-react"
import { useState, useEffect } from "react"

const MOCK_INTERACTIONS = [
  {
    id: 1,
    startup: "TechFlow AI",
    type: "Message",
    date: "2024-03-15",
    status: "Pending",
    lastMessage: "Discussing potential collaboration on AI implementation",
  },
  {
    id: 2,
    startup: "BlockSecure",
    type: "Meeting",
    date: "2024-03-14",
    status: "Completed",
    lastMessage: "Initial meeting to discuss security solutions",
  },
]

// Helper function for consistent date formatting
function formatDate(date: string) {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

export function RecentInteractions() {
  const [interactions, setInteractions] = useState<typeof MOCK_INTERACTIONS>([])

  useEffect(() => {
    setInteractions(MOCK_INTERACTIONS)
  }, [])

  return (
    <div className="space-y-4">
      {interactions.map((interaction) => (
        <Card key={interaction.id} className="p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h4 className="font-medium">{interaction.startup}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {interaction.type === "Message" ? (
                  <MessageCircle className="h-4 w-4" />
                ) : (
                  <Calendar className="h-4 w-4" />
                )}
                <span>{interaction.type}</span>
                <span>•</span>
                <span>{formatDate(interaction.date)}</span>
              </div>
              <p className="text-sm">{interaction.lastMessage}</p>
            </div>
            <div className="text-right">
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                interaction.status === "Pending" 
                  ? "bg-yellow-100 text-yellow-800" 
                  : "bg-green-100 text-green-800"
              }`}>
                {interaction.status}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 