"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  LayoutDashboard,
  Users,
  Settings,
  GraduationCap,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AddStudentDialog } from "@/components/students/add-student-dialog";

import { useCurrentUser } from "@/hooks/use-current-user";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    href: "/students",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  const { user, isLoading } = useCurrentUser();

  const getInitials = (name?: string) => {
    if (!name) return "U";

    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const formatRole = (role?: string) => {
    if (!role) return "User";

    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b px-4 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <GraduationCap className="h-5 w-5" />
        </div>

        <div>
          <h1 className="text-lg font-bold">Student-MS</h1>
          <p className="text-xs text-muted-foreground">Management System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />

                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}

          {/* Add Student Dialog */}
          <li>
            <AddStudentDialog
              trigger={
                <Button className="mt-15 flex h-9 w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                  <Plus className="h-5 w-5" />

                  <span>Add Student</span>
                </Button>
              }
            />
          </li>
        </ul>
      </nav>

      {/* Profile */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="" alt={user?.name ?? "User"} />

            <AvatarFallback>
              {isLoading ? "..." : getInitials(user?.name)}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium">
              {isLoading ? "Loading..." : (user?.name ?? "User")}
            </p>

            <p className="truncate text-xs text-muted-foreground">
              {isLoading
                ? "Loading..."
                : (user?.email ?? formatRole(user?.role))}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
