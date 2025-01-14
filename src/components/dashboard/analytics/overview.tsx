"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    date: "Jan 1",
    matches: 12,
    interactions: 8,
  },
  {
    date: "Jan 8",
    matches: 15,
    interactions: 10,
  },
  {
    date: "Jan 15",
    matches: 18,
    interactions: 14,
  },
  {
    date: "Jan 22",
    matches: 24,
    interactions: 16,
  },
  {
    date: "Jan 29",
    matches: 28,
    interactions: 20,
  },
  {
    date: "Feb 5",
    matches: 32,
    interactions: 24,
  },
  {
    date: "Feb 12",
    matches: 35,
    interactions: 28,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
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
        <Line
          type="monotone"
          dataKey="matches"
          stroke="#006FEE"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="interactions"
          stroke="#17C964"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
} 