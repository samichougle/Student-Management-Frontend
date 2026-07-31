import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex h-15 items-center justify-between border-b bg-background px-6">
      {/*Left*/}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      {/*Right*/}
      <div className="flex items-center gap-4">
        {/*Search*/}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input placeholder="Search students..." className="w-72 pl-10" />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>
    </header>
  );
}
