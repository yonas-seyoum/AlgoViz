import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ResumeCard({ title, date }: { title: string; date: string }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">Updated {date}</p>
      </CardHeader>
      <CardContent />
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Edit</Button>
        <Button variant="secondary">Delete</Button>
      </CardFooter>
    </Card>
  );
}
