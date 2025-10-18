import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export function KPIWidget({ label, value, subtext }: { label: string; value: string | number; subtext?: string }) {
  return (
    <Card>
      <CardHeader>
        <p className="text-sm text-muted-foreground">{label}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </CardHeader>
      {subtext && (
        <CardContent>
          <p className="text-xs text-muted-foreground">{subtext}</p>
        </CardContent>
      )}
    </Card>
  );
}
