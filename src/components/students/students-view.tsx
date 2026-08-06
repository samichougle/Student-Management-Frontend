"use client";

import { StudentTable } from "@/components/students/student-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import type { Student } from "@/types/student";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { AddStudentDialog } from "./add-student-dialog";

type StudentsViewProps = {
  students: Student[];
  search: string;
  page: number;
  totalPages: number;
  total: number;
};

export function StudentsView({
  students,
  search,
  page,
  totalPages,
  total,
}: StudentsViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(search);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchValue === search) return;

      const params = new URLSearchParams(searchParams.toString());

      if (searchValue.trim()) {
        params.set("search", searchValue.trim());
      } else {
        params.delete("search");
      }

      params.set("page", "1");

      router.push(`/students?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchValue, search, router]);

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="space-y-6 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search students..."
              className="pl-10"
            />
          </div>

          <AddStudentDialog />
        </div>

        <StudentTable students={students} startIndex={(page - 1) * 10} />
        <div className="flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {(page - 1) * 10 + 1}–{Math.min(page * 10, total)} of{" "}
            {total} students
          </p>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  size="default"
                  href={
                    page > 1
                      ? `/students?page=${page - 1}${
                          search ? `&search=${encodeURIComponent(search)}` : ""
                        }`
                      : "#"
                  }
                  className={page === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;

                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      size="default"
                      href={`/students?page=${pageNumber}${
                        search ? `&search=${encodeURIComponent(search)}` : ""
                      }`}
                      isActive={page === pageNumber}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  size="default"
                  href={
                    page < totalPages
                      ? `/students?page=${page + 1}${
                          search ? `&search=${encodeURIComponent(search)}` : ""
                        }`
                      : "#"
                  }
                  className={
                    page === totalPages ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
}
