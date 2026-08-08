"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  studentSchema,
  type StudentFormValues,
} from "@/schemas/student.schema";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type StudentFormProps = {
  onSubmit: (data: StudentFormValues) => void | Promise<void>;
  defaultValues?: Partial<StudentFormValues>;
  isLoading?: boolean;
};

export function StudentForm({
  onSubmit,
  defaultValues,
  isLoading = false,
}: StudentFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormValues>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_no: "",
      course_title: "",
      semester: undefined,
      enrollment_at: "",
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="first_name">First Name</Label>

          <Input
            id="first_name"
            placeholder="John"
            {...register("first_name")}
          />

          {errors.first_name && (
            <p className="text-sm text-red-500">{errors.first_name.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="last_name">Last Name</Label>

          <Input id="last_name" placeholder="Doe" {...register("last_name")} />

          {errors.last_name && (
            <p className="text-sm text-red-500">{errors.last_name.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          type="email"
          placeholder="john@gmail.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone_no">Phone Number</Label>

        <Input
          id="phone_no"
          placeholder="9876543210"
          {...register("phone_no")}
        />

        {errors.phone_no && (
          <p className="text-sm text-red-500">{errors.phone_no.message}</p>
        )}
      </div>

      {/* Course & Semester */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Course */}
        <div className="space-y-2">
          <Label htmlFor="course_title">Course</Label>

          <Input
            id="course_title"
            placeholder="Computer Science"
            {...register("course_title")}
          />

          {errors.course_title && (
            <p className="text-sm text-red-500">
              {errors.course_title.message}
            </p>
          )}
        </div>

        {/* Semester */}
        <div className="space-y-2">
          <Label htmlFor="semester">Semester</Label>

          <Controller
            control={control}
            name="semester"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="semester">
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Semester 1">Semester 1</SelectItem>

                  <SelectItem value="Semester 2">Semester 2</SelectItem>

                  <SelectItem value="Semester 3">Semester 3</SelectItem>

                  <SelectItem value="Semester 4">Semester 4</SelectItem>

                  <SelectItem value="Graduate">Graduate</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {errors.semester && (
            <p className="text-sm text-red-500">{errors.semester.message}</p>
          )}
        </div>
      </div>

      {/* Enrollment Date */}
      <div className="space-y-2">
        <Label htmlFor="enrollment_at">Enrollment Date</Label>

        <Input id="enrollment_at" type="date" {...register("enrollment_at")} />

        {errors.enrollment_at && (
          <p className="text-sm text-red-500">{errors.enrollment_at.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" disabled={isLoading} className="mt-2">
        {isLoading ? "Saving..." : "Save Student"}
      </Button>
    </form>
  );
}
