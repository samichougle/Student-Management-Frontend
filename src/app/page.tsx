import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}
