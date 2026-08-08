import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecentStudents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Students</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-sm">
          Recently added students will appear here.
        </p>
      </CardContent>
    </Card>
  );
}
