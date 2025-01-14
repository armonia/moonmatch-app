import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SMEAnalytics } from "@/components/dashboard/sme/analytics"

export const metadata: Metadata = {
  title: "Analytics | SME Dashboard",
  description: "Track your startup engagement and matching metrics",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Engagement Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <SMEAnalytics />
        </CardContent>
      </Card>
    </div>
  )
} 