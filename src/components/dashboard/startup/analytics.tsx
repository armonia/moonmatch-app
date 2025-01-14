"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart as BarChartIcon, LineChart as LineChartIcon, PieChart as PieChartIcon, Activity } from "lucide-react"
import { ResponsiveContainer, LineChart, BarChart, XAxis, YAxis, Tooltip, Line, Pie, Bar } from "recharts"
import { PieChart as RechartsPieChart } from "recharts"

const MOCK_ANALYTICS = {
  matches: [
    { date: "2024-03", count: 15 },
    { date: "2024-02", count: 12 },
    { date: "2024-01", count: 8 },
  ],
  interactions: [
    { type: "Messages", count: 45 },
    { type: "Meetings", count: 12 },
    { type: "Document Views", count: 89 },
  ],
  industries: [
    { name: "Technology", percentage: 40 },
    { name: "Manufacturing", percentage: 30 },
    { name: "Finance", percentage: 20 },
    { name: "Healthcare", percentage: 10 },
  ]
}

export function StartupAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-blue-500" />
            <h3 className="font-medium">Match Rate</h3>
          </div>
          <p className="text-2xl font-bold mt-2">85%</p>
          <p className="text-sm text-gray-500">+5% from last month</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <BarChartIcon className="h-4 w-4 text-green-500" />
            <h3 className="font-medium">Total Matches</h3>
          </div>
          <p className="text-2xl font-bold mt-2">35</p>
          <p className="text-sm text-gray-500">+8 this month</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <LineChartIcon className="h-4 w-4 text-purple-500" />
            <h3 className="font-medium">Active SMEs</h3>
          </div>
          <p className="text-2xl font-bold mt-2">18</p>
          <p className="text-sm text-gray-500">+4 this week</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <PieChartIcon className="h-4 w-4 text-orange-500" />
            <h3 className="font-medium">Response Rate</h3>
          </div>
          <p className="text-2xl font-bold mt-2">94%</p>
          <p className="text-sm text-gray-500">+2% from last month</p>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-4">
              <h3 className="font-medium mb-4">Match Distribution</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={MOCK_ANALYTICS.matches}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-4">Industry Distribution</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Tooltip />
                    <Pie
                      data={MOCK_ANALYTICS.industries}
                      dataKey="percentage"
                      nameKey="name"
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
          </div>
        </TabsContent>

        <TabsContent value="matches" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-4">Match History</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_ANALYTICS.matches}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-4">Interaction Summary</h3>
            <div className="space-y-4">
              {MOCK_ANALYTICS.interactions.map((interaction) => (
                <div key={interaction.type} className="flex justify-between items-center">
                  <span className="font-medium">{interaction.type}</span>
                  <span className="text-sm text-gray-500">{interaction.count} total</span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 