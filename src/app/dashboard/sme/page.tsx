import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { StartupSearch } from "@/components/dashboard/sme/startup-search"
import { AISuggestions } from "@/components/dashboard/sme/ai-suggestions"
import { DetailedAISuggestions } from "@/components/dashboard/sme/detailed-ai-suggestions"
import { RecentInteractions } from "@/components/dashboard/sme/recent-interactions"
import { SMEAnalytics } from "@/components/dashboard/sme/analytics"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "SME Dashboard | MoonMatch",
  description: "Find and connect with innovative startups",
}

export default function SMEDashboard() {
  return (
    <div className="space-y-6">
      {/* Overview Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Startup Search</CardTitle>
            <CardDescription>Find startups that match your needs using advanced filters</CardDescription>
          </CardHeader>
          <CardContent>
            <StartupSearch />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
            <CardDescription>Personalized startup suggestions based on your preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <AISuggestions />
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="interactions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
        </TabsList>

        <TabsContent value="interactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Interactions</CardTitle>
              <CardDescription>Track your engagement with startups and manage connections</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentInteractions />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Track your startup engagement and matching metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <SMEAnalytics />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions">
          <Card>
            <CardHeader>
              <CardTitle>Detailed AI Suggestions</CardTitle>
              <CardDescription>In-depth analysis of recommended startups and why they match</CardDescription>
            </CardHeader>
            <CardContent>
              <DetailedAISuggestions />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 