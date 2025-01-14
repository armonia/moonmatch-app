"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    date: "Mon",
    messages: 12,
    meetings: 2,
    documents: 4,
  },
  {
    date: "Tue",
    messages: 18,
    meetings: 3,
    documents: 5,
  },
  {
    date: "Wed",
    messages: 15,
    meetings: 4,
    documents: 3,
  },
  {
    date: "Thu",
    messages: 22,
    meetings: 2,
    documents: 6,
  },
  {
    date: "Fri",
    messages: 20,
    meetings: 5,
    documents: 4,
  },
  {
    date: "Sat",
    messages: 8,
    meetings: 1,
    documents: 2,
  },
  {
    date: "Sun",
    messages: 5,
    meetings: 0,
    documents: 1,
  },
]

export function InteractionMetrics() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">Messages</p>
          <p className="text-2xl font-bold">100</p>
          <p className="text-xs text-muted-foreground">+15% from last week</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">Meetings</p>
          <p className="text-2xl font-bold">17</p>
          <p className="text-xs text-muted-foreground">+3 from last week</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">Documents</p>
          <p className="text-2xl font-bold">25</p>
          <p className="text-xs text-muted-foreground">+8 from last week</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <XAxis
            dataKey="date"
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
          <Area
            type="monotone"
            dataKey="messages"
            stroke="#006FEE"
            fill="#006FEE"
            fillOpacity={0.2}
            stackId="1"
            name="Messages"
          />
          <Area
            type="monotone"
            dataKey="meetings"
            stroke="#17C964"
            fill="#17C964"
            fillOpacity={0.2}
            stackId="1"
            name="Meetings"
          />
          <Area
            type="monotone"
            dataKey="documents"
            stroke="#F5A524"
            fill="#F5A524"
            fillOpacity={0.2}
            stackId="1"
            name="Documents"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
} 