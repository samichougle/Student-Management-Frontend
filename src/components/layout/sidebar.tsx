"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LayoutDashboard, Users, Settings, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { AddStudentDialog } from "@/components/students/add-student-dialog";

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

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b px-6">
        <GraduationCap className="h-7 w-7 text-primary" />

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
                <Button className="flex w-full h-9 items-center mt-15 gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
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
            <AvatarImage src="" alt="User" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-medium">Sami Chougle</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
