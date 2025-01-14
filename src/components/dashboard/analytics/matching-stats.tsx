"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    month: "Jan",
    matches: 45,
    highMatches: 28,
  },
  {
    month: "Feb",
    matches: 52,
    highMatches: 35,
  },
  {
    month: "Mar",
    matches: 61,
    highMatches: 42,
  },
  {
    month: "Apr",
    matches: 58,
    highMatches: 38,
  },
  {
    month: "May",
    matches: 68,
    highMatches: 45,
  },
  {
    month: "Jun",
    matches: 72,
    highMatches: 50,
  },
]

export function MatchingStats() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium">Total Matches</p>
          <p className="text-2xl font-bold">356</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium">High Match Rate</p>
          <p className="text-2xl font-bold">67%</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="month"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip />
          <Bar
            dataKey="matches"
            fill="#006FEE"
            radius={[4, 4, 0, 0]}
            name="Total Matches"
          />
          <Bar
            dataKey="highMatches"
            fill="#17C964"
            radius={[4, 4, 0, 0]}
            name="High Quality Matches"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 