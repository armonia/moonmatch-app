"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Clock } from "lucide-react"

const MOCK_INTERACTIONS = [
  {
    id: 1,
    startup: "CloudSecure",
    type: "message",
    date: "2024-03-15T10:30:00",
    status: "pending",
    summary: "Initial discussion about security implementation",
    lastAction: "Awaiting response",
    contact: "Sarah Johnson",
    nextStep: "Schedule follow-up call"
  },
  {
    id: 2,
    startup: "DataViz Pro",
    type: "meeting",
    date: "2024-03-14T15:00:00",
    status: "completed",
    summary: "Technical deep dive into visualization capabilities",
    lastAction: "Meeting completed",
    contact: "Michael Chen",
    nextStep: "Review proposal"
  }
]

// Helper function for consistent date formatting
function formatDate(date: Date | string) {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function InteractionHistory() {
  const [interactions, setInteractions] = useState<typeof MOCK_INTERACTIONS>([])

  useEffect(() => {
    setInteractions(MOCK_INTERACTIONS)
  }, [])

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Interactions</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          {interactions.map((interaction) => (
            <Card key={interaction.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{interaction.startup}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {interaction.type === "message" ? (
                      <MessageCircle className="h-4 w-4" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                    <span>{interaction.type}</span>
                    <span>•</span>
                    <span>{formatDate(interaction.date)}</span>
                  </div>
                  <p className="text-sm mt-2">{interaction.summary}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    interaction.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : interaction.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {interaction.status}
                  </span>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-medium">Last Action</p>
                    <p className="text-sm text-gray-500">{interaction.lastAction}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Contact</p>
                    <p className="text-sm text-gray-500">{interaction.contact}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Next Step</p>
                    <p className="text-sm text-gray-500">{interaction.nextStep}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}