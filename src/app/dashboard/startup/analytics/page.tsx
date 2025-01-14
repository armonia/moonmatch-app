import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StartupAnalytics } from "@/components/dashboard/startup/analytics"

export const metadata: Metadata = {
  title: "Analytics | Startup Dashboard",
  description: "View your startup's performance and engagement metrics",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Performance Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <StartupAnalytics />
        </CardContent>
      </Card>
    </div>
  )
} 