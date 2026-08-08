"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Navbar } from "@/components/layout/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

type DashbordLayoutProps = {
  children: ReactNode;
};

export default function DashbordLayout({ children }: DashbordLayoutProps) {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:block h-full">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto p-6 lg:p-8">
        {/* <Navbar /> */}

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
