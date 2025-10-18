export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-muted">
      {children}
    </div>
  );
}
