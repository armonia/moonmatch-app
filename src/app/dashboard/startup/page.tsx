import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { StartupProfile } from "@/components/dashboard/startup/profile"
import { DocumentUpload } from "@/components/dashboard/startup/document-upload"
import { DocumentManager } from "@/components/dashboard/startup/document-manager"
import { MatchExplorer } from "@/components/dashboard/startup/match-explorer"
import { StartupAnalytics } from "@/components/dashboard/startup/analytics"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Startup Dashboard | MoonMatch",
  description: "Manage your startup profile and connections",
}

export default function StartupDashboard() {
  return (
    <div className="space-y-6">
      {/* Overview Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Profile Overview</CardTitle>
            <CardDescription>Manage your startup's profile and key information</CardDescription>
          </CardHeader>
          <CardContent>
            <StartupProfile />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Upload</CardTitle>
            <CardDescription>Upload pitch decks and documents for AI analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <DocumentUpload />
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="matches" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="matches">SME Matches</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="matches">
          <Card>
            <CardHeader>
              <CardTitle>Potential SME Matches</CardTitle>
              <CardDescription>Discover and connect with SMEs that match your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <MatchExplorer />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Document Management</CardTitle>
              <CardDescription>Manage your uploaded documents and track AI analysis progress</CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentManager />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Track your matching performance and engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <StartupAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 