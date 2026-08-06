import { api } from "@/lib/axios";
import type { Student } from "@/types/student";

type GetStudentParams = {
  page?: number;
  limit?: number;
  search?: string;
};

export type StudentPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  course_title: string;
  semester: string;
  enrollment_at: string;
};
import type { StudentFormValues } from "@/schemas/student.schema";

export async function getStudents({
  page = 1,
  limit = 10,
  search = "",
}: GetStudentParams = {}) {
  const response = await api.get("/students", {
    params: {
      page,
      limit,
      search,
    },
  });

  return response.data;
}

export async function createStudent(data: StudentPayload) {
  const response = await api.post("/students", data);

  return response.data;
}

export async function updateStudent(id: number, data: StudentFormValues) {
  const response = await api.put(`/students/${id}`, data);

  return response.data;
}

export async function deleteStudent(id: number) {
  const response = await api.delete(`/students/${id}`);

  return response.data;
}

export async function getStudent(id: number) {
  const response = await api.get(`/students/${id}`);

  return response.data.data as Student;
}
