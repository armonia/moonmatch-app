import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatInterface } from "@/components/dashboard/messages/chat-interface"

type Props = {
  params: { type: "startup" | "sme" }
}

export const metadata = ({ params }: Props): Metadata => ({
  title: `Messages | ${params.type.toUpperCase()} Dashboard`,
  description: "Chat with your matches",
})

export default function MessagesPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <ChatInterface />
        </CardContent>
      </Card>
    </div>
  )
} 