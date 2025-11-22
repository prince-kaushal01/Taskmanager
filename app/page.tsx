'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.push('/dashboard');
      }
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-12">
      <div className="text-center space-y-8 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-balance text-foreground">
            Task Manager
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Stay organized and productive with our modern task management application. Create, track, and complete your tasks efficiently.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/login">Sign In</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary"
          >
            <Link href="/register">Create Account</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors">
            <div className="text-4xl mb-3">✓</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Organize</h3>
            <p className="text-sm text-muted-foreground">Create and organize your tasks by priority and due date</p>
          </div>
          <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Track</h3>
            <p className="text-sm text-muted-foreground">Monitor progress and mark tasks as completed</p>
          </div>
          <div className="p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Achieve</h3>
            <p className="text-sm text-muted-foreground">Stay focused and achieve your goals efficiently</p>
          </div>
        </div>
      </div>
    </main>
  );
}
