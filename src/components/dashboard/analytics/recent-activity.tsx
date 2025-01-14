"use client"

import { MessageSquare, Users, FileText, Calendar } from "lucide-react"

interface Activity {
  id: number
  type: "message" | "match" | "document" | "meeting"
  title: string
  description: string
  timestamp: string
}

const MOCK_ACTIVITIES: Activity[] = [
  {
    id: 1,
    type: "match",
    title: "New Match",
    description: "95% match with Tech Solutions Corp",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "message",
    title: "Message Received",
    description: "AI Vision Tech sent you a message",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    type: "document",
    title: "Document Shared",
    description: "HealthTech Innovations shared a proposal",
    timestamp: "Yesterday",
  },
  {
    id: 4,
    type: "meeting",
    title: "Meeting Scheduled",
    description: "Virtual meeting with Fintech Solutions",
    timestamp: "Yesterday",
  },
  {
    id: 5,
    type: "match",
    title: "New Match",
    description: "88% match with Data Analytics Pro",
    timestamp: "2 days ago",
  },
]

const EXTENDED_ACTIVITIES: Activity[] = [
  ...MOCK_ACTIVITIES,
  {
    id: 6,
    type: "message",
    title: "Message Sent",
    description: "You sent a message to Clean Energy Tech",
    timestamp: "3 days ago",
  },
  {
    id: 7,
    type: "document",
    title: "Document Viewed",
    description: "IoT Solutions viewed your pitch deck",
    timestamp: "4 days ago",
  },
  {
    id: 8,
    type: "meeting",
    title: "Meeting Completed",
    description: "Follow-up meeting with AI Innovations",
    timestamp: "5 days ago",
  },
]

const getActivityIcon = (type: Activity["type"]) => {
  switch (type) {
    case "message":
      return <MessageSquare className="h-4 w-4" />
    case "match":
      return <Users className="h-4 w-4" />
    case "document":
      return <FileText className="h-4 w-4" />
    case "meeting":
      return <Calendar className="h-4 w-4" />
  }
}

const getActivityColor = (type: Activity["type"]) => {
  switch (type) {
    case "message":
      return "text-blue-500 bg-blue-100"
    case "match":
      return "text-green-500 bg-green-100"
    case "document":
      return "text-yellow-500 bg-yellow-100"
    case "meeting":
      return "text-purple-500 bg-purple-100"
  }
}

interface RecentActivityProps {
  extended?: boolean
}

export function RecentActivity({ extended = false }: RecentActivityProps) {
  const activities = extended ? EXTENDED_ACTIVITIES : MOCK_ACTIVITIES

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3">
          <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
            {getActivityIcon(activity.type)}
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">{activity.title}</p>
            <p className="text-sm text-muted-foreground">
              {activity.description}
            </p>
            <p className="text-xs text-muted-foreground">
              {activity.timestamp}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
} 