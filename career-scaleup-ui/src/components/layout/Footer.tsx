export function Footer() {
  return (
    <footer className="border-t border-border bg-white dark:bg-zinc-900">
      <div className="container-padding mx-auto flex flex-col gap-2 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Career Scaleup. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" aria-label="Privacy Policy" className="hover:underline">Privacy</a>
          <a href="#" aria-label="Terms of Service" className="hover:underline">Terms</a>
          <a href="#" aria-label="Contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
