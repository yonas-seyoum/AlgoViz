"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function MessageChat() {
  const [messages, setMessages] = useState<Array<{ id: number; from: 'me' | 'them'; text: string }>>([
    { id: 1, from: 'them', text: 'Hi, thanks for applying!' },
    { id: 2, from: 'me', text: 'Thanks for the update.' },
  ]);
  const [text, setText] = useState('');

  return (
    <div className="flex h-[400px] flex-col border border-border">
      <div className="flex-1 space-y-2 overflow-y-auto p-3">
        {messages.map((m) => (
          <div key={m.id} className={m.from === 'me' ? 'text-right' : 'text-left'}>
            <span className="inline-block max-w-[70%] rounded-none border border-border bg-muted px-3 py-2 text-sm">
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-border p-2">
        <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" />
        <Button
          onClick={() => {
            if (!text.trim()) return;
            setMessages((prev) => [...prev, { id: Date.now(), from: 'me', text }]);
            setText('');
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
