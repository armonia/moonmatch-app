import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DetailedAISuggestions } from "@/components/dashboard/sme/detailed-ai-suggestions"

export const metadata: Metadata = {
  title: "AI Suggestions | SME Dashboard",
  description: "View detailed AI-powered startup recommendations",
}

export default function SuggestionsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <DetailedAISuggestions />
        </CardContent>
      </Card>
    </div>
  )
} 