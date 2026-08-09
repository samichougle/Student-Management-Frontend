"use client";

import { Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type SemesterStat = {
  semester: string;
  count: number;
};

type SemesterChartProps = {
  data: SemesterStat[];
};

const chartConfig = {
  count: {
    label: "Students",
  },
};

export function SemesterChart({ data }: SemesterChartProps) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Semester Distribution</h2>

        <p className="text-sm text-muted-foreground">
          Students across different semesters.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
        <ChartContainer
          config={chartConfig}
          className="h-65 w-full min-w-0 max-w-65"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />

            <Pie
              data={data}
              dataKey="count"
              nameKey="semester"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
            />
          </PieChart>
        </ChartContainer>

        <div className="w-full max-w-45 space-y-3">
          {data.map((item) => (
            <div
              key={item.semester}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-muted-foreground">{item.semester}</span>

              <span className="font-medium">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
