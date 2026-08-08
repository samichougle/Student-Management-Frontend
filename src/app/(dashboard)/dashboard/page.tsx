import { Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react";

import { StatsCard } from "@/components/dashboard/stats-card";
import { RecentStudents } from "@/components/dashboard/recent-students";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import { AdmissionsChart } from "@/components/dashboard/admissions-chart";
import { SemesterChart } from "@/components/dashboard/semester-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <p className="mt-1 text-muted-foreground">
          Overview of your student management system.
        </p>
      </div>

      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Students"
          value="120"
          icon={Users}
          description="+12 this month"
        />

        <StatsCard
          title="Courses"
          value="8"
          icon={BookOpen}
          description="Active programs"
        />

        <StatsCard
          title="Semesters"
          value="6"
          icon={GraduationCap}
          description="Current batches"
        />

        <StatsCard
          title="Growth"
          value="+18%"
          icon={TrendingUp}
          description="Compared to last month"
        />
      </div>

      {/* Recent Students & Quick Actions */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentStudents />
        </div>

        <div>
          <QuickActions />
        </div>
      </div>

      {/* Analytics */}
      <div className="grid min-w-0 gap-6 lg:grid-cols-2">
        <AdmissionsChart />
        <SemesterChart />
      </div>
    </div>
  );
}
