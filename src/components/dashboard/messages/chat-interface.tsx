"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send } from "lucide-react"

interface Message {
  id: string
  sender: string
  content: string
  timestamp: string
}

const MOCK_MESSAGES: Message[] = [
  {
    id: "1",
    sender: "AI Vision Tech",
    content: "Hi, we're interested in discussing potential collaboration opportunities.",
    timestamp: "2024-03-15T10:30:00Z"
  },
  {
    id: "2",
    sender: "Global Manufacturing Solutions",
    content: "Great to hear from you! We'd love to learn more about your AI solutions.",
    timestamp: "2024-03-15T10:35:00Z"
  }
]

// Helper function for consistent date formatting
function formatDate(date: string) {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function ChatInterface() {
  const [messages, setMessages] = useState(MOCK_MESSAGES)
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      sender: "Global Manufacturing Solutions",
      content: newMessage,
      timestamp: new Date().toISOString()
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map((message) => (
          <Card key={message.id} className="p-3">
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{message.sender}</span>
                <span className="text-xs text-gray-500">
                  {formatDate(message.timestamp)}
                </span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button onClick={sendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
} 