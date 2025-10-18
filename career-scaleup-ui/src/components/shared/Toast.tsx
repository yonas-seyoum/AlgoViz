"use client";

import { useEffect, useState } from 'react';

export function Toast({ message, open, onClose }: { message: string; open: boolean; onClose: () => void }) {
  const [visible, setVisible] = useState(open);
  useEffect(() => {
    setVisible(open);
    if (open) {
      const id = setTimeout(() => onClose(), 2500);
      return () => clearTimeout(id);
    }
  }, [open, onClose]);

  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-none border border-border bg-white px-4 py-2 text-sm shadow-sm dark:bg-zinc-900">
      {message}
    </div>
  );
}
