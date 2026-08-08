"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Jan", admissions: 12 },
  { month: "Feb", admissions: 18 },
  { month: "Mar", admissions: 14 },
  { month: "Apr", admissions: 22 },
  { month: "May", admissions: 28 },
  { month: "Jun", admissions: 24 },
  { month: "Jul", admissions: 32 },
];

const chartConfig = {
  admissions: {
    label: "Admissions",
  },
};

export function AdmissionsChart() {
  return (
    <div className="min-w-0 rounded-xl border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Admissions Overview</h2>

        <p className="text-sm text-muted-foreground">
          Student admissions over the last 7 months.
        </p>
      </div>

      <ChartContainer config={chartConfig} className="h-75 w-full min-w-0">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -10,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />

          <YAxis tickLine={false} axisLine={false} tickMargin={8} />

          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

          <Bar dataKey="admissions" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
