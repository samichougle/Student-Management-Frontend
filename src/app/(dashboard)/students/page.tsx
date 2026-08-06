import { getStudents } from "@/services/student.service";
import { StudentsView } from "@/components/students/students-view";
import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

type StudentsPageProps = {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};

export default async function StudentsPage({
  searchParams,
}: StudentsPageProps) {
  const params = await searchParams;

  const search = params.search ?? "";
  const page = Number(params.page ?? "1");

  const response = await getStudents({
    page,
    limit: 10,
    search,
  });

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <Link href="/dashboard">
        <Button variant="secondary" className="mt-5 h-11 w-full sm:w-auto px-5">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
      </Link>

      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <GraduationCap className="h-7 w-7 text-primary" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight">Students</h1>

        <p className="mt-2 text-muted-foreground">
          {response.total} students found.
        </p>
      </div>

      <StudentsView
        students={response.students}
        search={search}
        page={response.page}
        totalPages={response.totalPages}
        total={response.total}
      />
    </div>
  );
}
