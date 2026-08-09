import { api } from "@/lib/axios";

export type SemesterStat = {
  semester: string;
  count: number;
};

export type AdmissionStat = {
  month: string;
  admissions: number;
};

export type DashboardStats = {
  totalStudents: number;
  totalCourses: number;
  currentMonth: number;
  previousMonth: number;
  growth: number;
  semesters: SemesterStat[];
  admissions: AdmissionStat[];
};

export async function getDashboardStats(): Promise<DashboardStats> {
  const response = await api.get("/dashboard/stats");

  return response.data.data;
}
