'use client';

import { useState } from 'react';
import { Task } from './dashboard-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface TaskCardProps {
  task: Task;
  token: string | null;
  onTaskUpdated: (task: Task) => void;
  onTaskDeleted: (taskId: string) => void;
}

const priorityColors = {
  low: 'text-blue-400',
  medium: 'text-yellow-400',
  high: 'text-red-400'
};

export function TaskCard({ task, token, onTaskUpdated, onTaskDeleted }: TaskCardProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleToggleComplete = async () => {
    setIsUpdating(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${task._id}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ completed: !task.completed })
        }
      );

      if (!response.ok) throw new Error('Failed to update task');

      const data = await response.json();
      onTaskUpdated(data.data);
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${task._id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (!response.ok) throw new Error('Failed to delete task');

      onTaskDeleted(task._id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : null;

  return (
    <Card className={`p-4 border-border bg-card transition-opacity ${task.completed ? 'opacity-60' : ''}`}>
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          disabled={isUpdating}
          className="mt-1 w-5 h-5 rounded border-border cursor-pointer"
        />

        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-foreground ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
            {task.title}
          </h3>

          {task.description && (
            <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
          )}

          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <span className={`text-xs font-medium ${priorityColors[task.priority]}`}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>

            {dueDate && (
              <span className="text-xs text-muted-foreground">
                Due: {dueDate}
              </span>
            )}
          </div>
        </div>

        <Button
          onClick={handleDelete}
          variant="ghost"
          size="sm"
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
