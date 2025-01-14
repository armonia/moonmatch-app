import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MatchExplorer } from "@/components/dashboard/startup/match-explorer"

export const metadata: Metadata = {
  title: "SME Matches | Startup Dashboard",
  description: "Explore and connect with matching SMEs",
}

export default function MatchesPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>SME Match Explorer</CardTitle>
        </CardHeader>
        <CardContent>
          <MatchExplorer />
        </CardContent>
      </Card>
    </div>
  )
} 