'use client';

import { useEffect } from 'react';

export default function TabTitleHook() {
  useEffect(() => {
    const original = document.title;
    const away = '🚀 Komm zurück! 🚀';

    const handleVisibility = () => {
      document.title = document.hidden ? away : original;
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return null;
}
