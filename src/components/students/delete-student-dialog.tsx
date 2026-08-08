"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { deleteStudent } from "@/services/student.service";

type DeleteStudentDailogProps = {
  studentId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function DeleteStudentDialog({
  studentId,
  open,
  onOpenChange,
}: DeleteStudentDailogProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  async function handleDelete() {
    try {
      setIsLoading(true);

      await deleteStudent(studentId);

      onOpenChange(false);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete student.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Student</DialogTitle>

          <DialogDescription>
            Are you sure you want to delete this student?
            <br />
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
