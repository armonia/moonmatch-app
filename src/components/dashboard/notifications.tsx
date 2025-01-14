"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: "match",
    title: "New Match",
    message: "Tech Solutions Corp is interested in connecting",
    timestamp: "2024-03-15T10:00:00Z",
    read: false,
    link: "/dashboard/startup/sme/1",
  },
  {
    id: 2,
    type: "message",
    title: "Message Received",
    message: "You have a new message from AI Vision Tech",
    timestamp: "2024-03-15T09:30:00Z",
    read: true,
    link: "/dashboard/startup/messages",
  },
  {
    id: 3,
    type: "match",
    title: "High Match Score",
    message: "95% match found with HealthTech Innovations",
    timestamp: "2024-03-14T15:20:00Z",
    read: false,
    link: "/dashboard/startup/sme/3",
  },
  {
    id: 4,
    type: "profile",
    title: "Profile View",
    message: "Fintech Solutions Co viewed your profile",
    timestamp: "2024-03-14T11:45:00Z",
    read: true,
    link: "/dashboard/startup/analytics",
  },
]

// Helper function for consistent date formatting
function formatDate(date: string) {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor(diff / (1000 * 60))

  if (days > 0) {
    return `${days}d ago`
  } else if (hours > 0) {
    return `${hours}h ago`
  } else if (minutes > 0) {
    return `${minutes}m ago`
  } else {
    return 'Just now'
  }
}

export function Notifications() {
  const [notifications, setNotifications] = useState<typeof MOCK_NOTIFICATIONS>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setNotifications(MOCK_NOTIFICATIONS)
  }, [])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    )
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className="h-8 text-xs"
            >
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="py-4 px-4 text-center text-sm text-gray-500">
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <Link 
                key={notification.id} 
                href={notification.link}
                onClick={() => {
                  markAsRead(notification.id)
                  setIsOpen(false)
                }}
              >
                <DropdownMenuItem className="px-4 py-3 cursor-pointer">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{notification.title}</span>
                      {!notification.read && (
                        <Badge variant="secondary" className="h-5 text-xs">New</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{notification.message}</p>
                    <span className="text-xs text-gray-400">
                      {formatDate(notification.timestamp)}
                    </span>
                  </div>
                </DropdownMenuItem>
              </Link>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 