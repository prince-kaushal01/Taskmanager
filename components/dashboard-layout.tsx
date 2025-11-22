'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { TaskForm } from './task-form';
import { TaskList } from './task-list';
import { Card } from '@/components/ui/card';

export interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export function DashboardLayout() {
  const { user, logout, token } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const data = await response.json();
      setTasks(data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTaskAdded = (newTask: Task) => {
    setTasks([newTask, ...tasks]);
    setShowForm(false);
  };

  const handleTaskUpdated = (updatedTask: Task) => {
    setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
  };

  const handleTaskDeleted = (taskId: string) => {
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Task Manager</h1>
            <p className="text-muted-foreground">Welcome, {user?.name}</p>
          </div>
          <Button
            variant="outline"
            onClick={logout}
            className="border-border text-foreground hover:bg-secondary"
          >
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 border-border bg-card">
            <p className="text-sm text-muted-foreground mb-1">Total Tasks</p>
            <p className="text-3xl font-bold text-primary">{totalCount}</p>
          </Card>
          <Card className="p-6 border-border bg-card">
            <p className="text-sm text-muted-foreground mb-1">Completed</p>
            <p className="text-3xl font-bold text-accent">{completedCount}</p>
          </Card>
          <Card className="p-6 border-border bg-card">
            <p className="text-sm text-muted-foreground mb-1">In Progress</p>
            <p className="text-3xl font-bold text-primary">{totalCount - completedCount}</p>
          </Card>
        </div>

        {/* Add Task Button */}
        {!showForm && (
          <Button
            onClick={() => setShowForm(true)}
            className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            + New Task
          </Button>
        )}

        {/* Task Form */}
        {showForm && (
          <TaskForm
            token={token}
            onTaskAdded={handleTaskAdded}
            onCancel={() => setShowForm(false)}
          />
        )}

        {/* Error Message */}
        {error && (
          <Card className="p-4 border-destructive bg-destructive/10 mb-6">
            <p className="text-destructive">{error}</p>
          </Card>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Task List */}
        {!isLoading && (
          <TaskList
            tasks={tasks}
            token={token}
            onTaskUpdated={handleTaskUpdated}
            onTaskDeleted={handleTaskDeleted}
          />
        )}
      </main>
    </div>
  );
}
