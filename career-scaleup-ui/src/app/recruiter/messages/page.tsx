import { Sidebar } from '@/components/shared/Sidebar';
import { MessageChat } from '@/components/shared/MessageChat';

const items = [
  { href: '/recruiter/home', label: 'Home' },
  { href: '/recruiter/jobs', label: 'My Jobs' },
  { href: '/recruiter/candidates', label: 'Candidates' },
  { href: '/recruiter/messages', label: 'Messages' },
  { href: '/recruiter/company', label: 'My Company' },
  { href: '/recruiter/settings', label: 'Settings' },
];

export default function RecruiterMessagesPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1"><Sidebar items={items} /></div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">Messages</h1>
        <MessageChat />
      </div>
    </div>
  );
}
