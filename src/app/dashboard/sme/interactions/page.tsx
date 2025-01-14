import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InteractionHistory } from "@/components/dashboard/sme/interaction-history"

export const metadata: Metadata = {
  title: "Interactions | SME Dashboard",
  description: "View and manage your startup interactions",
}

export default function InteractionsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Interaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <InteractionHistory />
        </CardContent>
      </Card>
    </div>
  )
} 