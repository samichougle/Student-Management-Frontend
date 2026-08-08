import { z } from "zod";

export const studentSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),

  last_name: z.string().min(2, "Last name must be at least 2 characters"),

  email: z.string().email("Please enter a valid email address"),

  phone_no: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),

  course_title: z.string().min(2, "Course is required"),

  semester: z.enum(
    ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Graduate"],
    {
      error: "Please select a valid semester",
    },
  ),

  enrollment_at: z.string().min(1, "Enrollment date is required"),
});

export type StudentFormValues = z.infer<typeof studentSchema>;
