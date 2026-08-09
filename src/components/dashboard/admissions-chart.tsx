"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type AdmissionStat = {
  month: string;
  admissions: number;
};

type AdmissionsChartProps = {
  data: AdmissionStat[];
};

const chartConfig = {
  admissions: {
    label: "Admissions",
  },
};

export function AdmissionsChart({ data }: AdmissionsChartProps) {
  return (
    <div className="min-w-0 rounded-xl border bg-card p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Admissions Overview</h3>

        <p className="text-sm text-muted-foreground">
          Student admissions over the last 7 months.
        </p>
      </div>

      {/* Chart */}
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

          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            allowDecimals={false}
          />

          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

          <Bar dataKey="admissions" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
