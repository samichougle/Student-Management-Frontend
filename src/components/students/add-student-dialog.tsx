import { useState } from "react";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { createStudent } from "@/services/student.service";
import type { StudentFormValues } from "@/schemas/student.schema";

import { Button } from "@/components/ui/button";
import { StudentForm } from "./student-form";
import { fa } from "zod/v4/locales";
import { Student } from "@/types/student";

export function AddStudentDialog() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  async function handleCreateStudent(data: StudentFormValues) {
    try {
      setIsLoading(true);

      await createStudent(data);

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to create student.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="h-11 w-full px-5 sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        }
      />
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
          <DialogDescription>Fill the details below.</DialogDescription>
        </DialogHeader>
        <StudentForm onSubmit={handleCreateStudent} isLoading={isLoading} />
      </DialogContent>
    </Dialog>
  );
}
