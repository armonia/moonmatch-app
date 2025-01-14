"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart as BarChartIcon, LineChart as LineChartIcon, PieChart as PieChartIcon, Activity } from "lucide-react"
import { ResponsiveContainer, LineChart, BarChart, XAxis, YAxis, Tooltip, Line, Pie, Bar } from "recharts"
import { PieChart as RechartsPieChart } from "recharts"

const MOCK_ANALYTICS = {
  startupEngagement: [
    { date: "2024-03", count: 25 },
    { date: "2024-02", count: 18 },
    { date: "2024-01", count: 15 },
  ],
  interactionTypes: [
    { type: "Initial Contact", count: 35 },
    { type: "Follow-up", count: 22 },
    { type: "Collaboration", count: 8 },
  ],
  matchQuality: [
    { range: "90-100%", count: 15 },
    { range: "80-89%", count: 25 },
    { range: "70-79%", count: 18 },
    { range: "<70%", count: 12 },
  ]
}

export function SMEAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-purple-500" />
            <h3 className="font-medium">Engagement Rate</h3>
          </div>
          <p className="text-2xl font-bold mt-2">78%</p>
          <p className="text-sm text-gray-500">+8% from last month</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <BarChartIcon className="h-4 w-4 text-blue-500" />
            <h3 className="font-medium">Total Startups</h3>
          </div>
          <p className="text-2xl font-bold mt-2">65</p>
          <p className="text-sm text-gray-500">+12 from last month</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <LineChartIcon className="h-4 w-4 text-green-500" />
            <h3 className="font-medium">Active Discussions</h3>
          </div>
          <p className="text-2xl font-bold mt-2">28</p>
          <p className="text-sm text-gray-500">+5 this week</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <PieChartIcon className="h-4 w-4 text-orange-500" />
            <h3 className="font-medium">Success Rate</h3>
          </div>
          <p className="text-2xl font-bold mt-2">92%</p>
          <p className="text-sm text-gray-500">+3% from last quarter</p>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="startups">Startups</TabsTrigger>
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-4">
              <h3 className="font-medium mb-4">Startup Engagement</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={MOCK_ANALYTICS.startupEngagement}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-4">Match Quality Distribution</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={MOCK_ANALYTICS.matchQuality}>
                    <XAxis dataKey="range" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="startups" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-4">Interaction Types</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Tooltip />
                  <Pie
                    data={MOCK_ANALYTICS.interactionTypes}
                    dataKey="count"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="interactions" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-4">Recent Interactions</h3>
            <div className="space-y-4">
              {MOCK_ANALYTICS.interactionTypes.map((interaction) => (
                <div key={interaction.type} className="flex justify-between items-center">
                  <span className="font-medium">{interaction.type}</span>
                  <span className="text-sm text-gray-500">{interaction.count} interactions</span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 