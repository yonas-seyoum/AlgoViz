import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Image from 'next/image';

export function ProfileCard({ name, title, bio, skills }: { name: string; title: string; bio: string; skills: string[] }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16">
            <Image src="/avatar-placeholder.svg" alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-relaxed">{bio}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="rounded-none border border-border bg-muted px-2 py-0.5 text-xs">{s}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
