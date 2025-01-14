import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { StartupSearch } from "@/components/dashboard/sme/startup-search"

export const metadata: Metadata = {
  title: "Search Startups | MoonMatch",
  description: "Find and connect with innovative startups",
}

export default function SearchPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Startup Search</CardTitle>
          <CardDescription>Find startups that match your needs using advanced filters</CardDescription>
        </CardHeader>
        <CardContent>
          <StartupSearch />
        </CardContent>
      </Card>
    </div>
  )
} 