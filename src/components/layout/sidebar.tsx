"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  LayoutDashboard,
  Users,
  UserPlus,
  BarChart3,
  Settings,
  GraduationCap,
} from "lucide-react";

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
    title: "Add Student",
    href: "/students/new",
    icon: UserPlus,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
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
      {/*Logo*/}
      <div className="flex h-15 items-center border-b p-6">
        <Link href="/dashboard" className="flex items-center gap-3"></Link>
        <GraduationCap className="h-7 w-7 text-primary" />
        <div className="m-5">
          <h1 className="text-lg font-bold">Student-MS</h1>
          <p className="text-xs text-muted-foreground">Management System</p>
        </div>
      </div>
      {/*Navigation*/}
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
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/*Profile*/}
      <div className="border-t p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="" alt="User" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Sami Chougle</p>
            <p className="text-xm text-muted-forground">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
