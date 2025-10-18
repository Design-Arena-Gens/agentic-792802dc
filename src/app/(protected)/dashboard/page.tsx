"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '../../../components/Logo';

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
      return;
    }
    try {
      const decoded = atob(token);
      const [userEmail] = decoded.split(':');
      setEmail(userEmail);
    } catch {
      router.replace('/login');
    }
  }, [router]);

  function signOut() {
    localStorage.removeItem('token');
    router.replace('/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-brand-50">
      <header className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Logo />
        <button onClick={signOut} className="btn-primary w-auto px-3 py-1.5">Sign out</button>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-zinc-600 mt-2">Signed in as <span className="font-medium">{email ?? '...'}</span></p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow">
            <h2 className="font-medium mb-2">Quick start</h2>
            <p className="text-sm text-zinc-600">This is a demo protected page. Auth is simulated client-side.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow">
            <h2 className="font-medium mb-2">Next steps</h2>
            <ul className="list-disc list-inside text-sm text-zinc-600">
              <li>Replace with real auth provider</li>
              <li>Move token to httpOnly cookie</li>
              <li>Add API protection and SSR</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
