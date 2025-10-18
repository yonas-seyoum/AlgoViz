export default function SeekerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-padding mx-auto grid gap-6 py-8 lg:grid-cols-4">
      <aside className="lg:col-span-1">
        {/* Sidebar placeholder wired in individual pages */}
      </aside>
      <section className="lg:col-span-3">{children}</section>
    </div>
  );
}
