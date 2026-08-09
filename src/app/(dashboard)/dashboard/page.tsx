"use client";

import { useEffect, useState } from "react";
import { Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react";

import { StatsCard } from "@/components/dashboard/stats-card";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import { AdmissionsChart } from "@/components/dashboard/admissions-chart";
import { SemesterChart } from "@/components/dashboard/semester-chart";

import {
  getDashboardStats,
  type DashboardStats,
} from "@/services/dashboard.service";

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardStats();

        setStats(data);
      } catch (error) {
        console.error("Failed to load dashboard:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>

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
          value={isLoading ? "..." : String(stats?.totalStudents ?? 0)}
          icon={Users}
          description={
            isLoading ? "Loading..." : `+${stats?.currentMonth ?? 0} this month`
          }
        />

        <StatsCard
          title="Courses"
          value={isLoading ? "..." : String(stats?.totalCourses ?? 0)}
          icon={BookOpen}
          description="Active programs"
        />

        <StatsCard
          title="Semesters"
          value={isLoading ? "..." : String(stats?.semesters?.length ?? 0)}
          icon={GraduationCap}
          description="Available semesters"
        />

        <StatsCard
          title="Growth"
          value={
            isLoading
              ? "..."
              : `${(stats?.growth ?? 0) >= 0 ? "+" : ""}${stats?.growth ?? 0}%`
          }
          icon={TrendingUp}
          description="Compared to last month"
        />
      </div>

      {/* Analytics */}
      <div className="grid min-w-0 gap-6 lg:grid-cols-2">
        <AdmissionsChart data={stats?.admissions ?? []} />

        <SemesterChart data={stats?.semesters ?? []} />
      </div>
    </div>
  );
}
