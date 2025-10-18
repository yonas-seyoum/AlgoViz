import { ReactNode } from "react";

export default function RecruiterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh grid grid-cols-[240px_1fr]">
      <aside className="border-r p-4 space-y-2">
        <h2 className="text-lg font-semibold">Recruiter</h2>
        <nav className="grid gap-1">
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/recruiter/home">Home</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/recruiter/jobs">My Jobs</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/recruiter/candidates">Candidates</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/recruiter/messages">Messages</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/recruiter/company">My Company</a>
          <a className="rounded-md px-3 py-2 hover:bg-muted" href="/recruiter/settings">Settings</a>
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
