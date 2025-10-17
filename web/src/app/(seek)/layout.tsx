import { ReactNode } from "react";

export default function SeekLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh grid grid-cols-[240px_1fr]">
      <aside className="border-r p-4 space-y-2">
        <h2 className="text-lg font-semibold">Job Seeker</h2>
        <nav className="grid gap-1">
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/seek/home">Home</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/seek/explore">Explore Jobs</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/seek/match">AI Job Matching</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/seek/applications">My Applications</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/seek/resume">Create Resume</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/seek/interview">AI Interview</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/seek/saved">Saved Jobs</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/seek/settings">Settings</a>
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
