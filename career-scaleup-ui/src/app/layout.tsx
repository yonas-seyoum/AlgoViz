import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Career Scaleup',
  description: 'UI-only professional job and recruitment platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
