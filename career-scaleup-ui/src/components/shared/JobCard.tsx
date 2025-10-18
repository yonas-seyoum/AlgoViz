import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { MapPin, Building2, ExternalLink } from 'lucide-react';

export type JobCardProps = {
  title: string;
  company: string;
  location: string;
  salary?: string;
  jobType?: string;
  external?: boolean;
  onSave?: () => void;
  onApply?: () => void;
};

export function JobCard({ title, company, location, salary, jobType, external, onSave, onApply }: JobCardProps) {
  return (
    <Card>
      <CardHeader className="flex items-start justify-between">
        <div>
          <h3 className="text-lg">{title}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4" /> {company}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {location}</span>
            {jobType && <Badge>{jobType}</Badge>}
            {external && (
              <span className="inline-flex items-center gap-1 text-accent"><ExternalLink className="h-4 w-4" /> External</span>
            )}
          </div>
        </div>
        {salary && <div className="text-sm font-medium">{salary}</div>}
      </CardHeader>
      <CardContent className="flex items-center justify-end gap-2">
        {onSave && <Button variant="outline" onClick={onSave}>Save</Button>}
        {onApply && <Button onClick={onApply}>Apply</Button>}
      </CardContent>
    </Card>
  );
}
