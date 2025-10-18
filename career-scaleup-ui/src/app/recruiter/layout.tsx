export default function RecruiterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-padding mx-auto py-8">
      {children}
    </div>
  );
}
