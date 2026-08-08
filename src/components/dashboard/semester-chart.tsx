"use client";

import { Pie, PieChart, Cell } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { semester: "Semester 1", students: 32 },
  { semester: "Semester 2", students: 28 },
  { semester: "Semester 3", students: 24 },
  { semester: "Semester 4", students: 20 },
  { semester: "Graduate", students: 16 },
];

const chartConfig = {
  students: {
    label: "Students",
  },
};

export function SemesterChart() {
  return (
    <div className="min-w-0 rounded-xl border bg-card p-6">
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
              dataKey="students"
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

              <span className="font-medium">{item.students}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
