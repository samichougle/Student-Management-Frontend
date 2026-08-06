"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { StudentForm } from "./student-form";
import { updateStudent } from "@/services/student.service";

import type { Student } from "@/types/student";
import type { StudentFormValues } from "@/schemas/student.schema";

type EditStudentDialogProps = {
  student: Student;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EditStudentDialog({
  student,
  open,
  onOpenChange,
}: EditStudentDialogProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  async function handleUpdateStudent(data: StudentFormValues) {
    console.log(data);
    try {
      setIsLoading(true);

      await updateStudent(student.id, data);

      onOpenChange(false);

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update student.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Student</DialogTitle>

          <DialogDescription>Update the student information.</DialogDescription>
        </DialogHeader>

        <StudentForm
          onSubmit={handleUpdateStudent}
          isLoading={isLoading}
          defaultValues={{
            first_name: student.first_name,
            last_name: student.last_name,
            email: student.email,
            phone_no: student.phone_no,
            course_title: student.course_title,
            semester: student.semester,
            enrollment_at: student.enrollment_at.split("T")[0],
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
