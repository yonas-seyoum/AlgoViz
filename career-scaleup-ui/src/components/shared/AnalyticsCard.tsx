import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const defaultData = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 20 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 18 },
];

export function AnalyticsCard({ title, data = defaultData }: { title: string; data?: { name: string; value: number }[] }) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg">{title}</h3>
      </CardHeader>
      <CardContent style={{ height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
