"use client";

import { useState } from "react";
import { DeleteStudentDialog } from "./delete-student-dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { Student } from "@/types/student";
import { formatDate } from "@/lib/date";
import { EditStudentDialog } from "./edit-student-dialog";

type StudentTableProps = {
  students: Student[];
  startIndex: number;
};

export function StudentTable({ students, startIndex }: StudentTableProps) {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null,
  );

  return (
    <>
      <div className="overflow-hidden rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Semester</TableHead>
              <TableHead>Enrollment Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium text-muted-foreground">
                  {startIndex + index + 1}
                </TableCell>

                <TableCell className="font-medium">
                  {student.first_name} {student.last_name}
                </TableCell>

                <TableCell>{student.email}</TableCell>

                <TableCell>{student.phone_no}</TableCell>

                <TableCell>{student.course_title}</TableCell>

                <TableCell>{student.semester}</TableCell>

                <TableCell>{formatDate(student.enrollment_at)}</TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => setSelectedStudent(student)}
                      >
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onClick={() => setSelectedStudentId(student.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedStudent && (
        <EditStudentDialog
          student={selectedStudent}
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedStudent(null);
            }
          }}
        />
      )}
      {selectedStudentId && (
        <DeleteStudentDialog
          studentId={selectedStudentId}
          open={true}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedStudentId(null);
            }
          }}
        />
      )}
    </>
  );
}
