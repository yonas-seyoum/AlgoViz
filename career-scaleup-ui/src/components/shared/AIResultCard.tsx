import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export function AIResultCard({ score, explanation }: { score: number; explanation: string }) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <h3 className="text-lg">Match Score</h3>
        <span className="text-xl font-bold text-accent">{score}%</span>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">{explanation}</p>
      </CardContent>
    </Card>
  );
}
