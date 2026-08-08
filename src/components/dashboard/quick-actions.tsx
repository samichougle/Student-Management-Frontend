import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <Button className="w-full">
          <Link href="/students">View Students</Link>
        </Button>

        <Button variant="outline" className="w-full">
          Export Data
        </Button>

        <Button variant="outline" className="w-full">
          Analytics
        </Button>
      </CardContent>
    </Card>
  );
}
