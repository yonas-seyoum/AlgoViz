import { ProfileCard } from '@/components/shared/ProfileCard';

export default function PublicProfilePage() {
  return (
    <div className="container-padding mx-auto space-y-6 py-10">
      <ProfileCard
        name="Alex Johnson"
        title="Senior Frontend Engineer"
        bio="Frontend specialist with a passion for accessible interfaces and clean architectures."
        skills={["React", "TypeScript", "Next.js", "Tailwind"]}
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card-base p-4">
          <h2 className="mb-2 text-xl">Experience</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Lead Developer at Example Corp</li>
            <li>Frontend Engineer at Startup Labs</li>
          </ul>
        </div>
        <div className="card-base p-4">
          <h2 className="mb-2 text-xl">Education</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>B.S. in Computer Science</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
