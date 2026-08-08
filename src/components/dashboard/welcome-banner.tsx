export function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-primary p-6 text-primary-foreground sm:p-8">
      <div className="relative z-10 max-w-2xl">
        <p className="text-sm font-medium opacity-80">
          Student Management System
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Welcome back 👋
        </h2>

        <p className="mt-2 max-w-xl text-sm opacity-80 sm:text-base">
          Manage students, track admissions, and monitor your institution from
          one place.
        </p>
      </div>

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-20 right-20 h-48 w-48 rounded-full bg-white/5" />
    </section>
  );
}
