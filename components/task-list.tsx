'use client';

import { Task } from './dashboard-layout';
import { TaskCard } from './task-card';
import { Card } from '@/components/ui/card';

interface TaskListProps {
  tasks: Task[];
  token: string | null;
  onTaskUpdated: (task: Task) => void;
  onTaskDeleted: (taskId: string) => void;
}

export function TaskList({ tasks, token, onTaskUpdated, onTaskDeleted }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <Card className="p-12 border-border bg-card text-center">
        <p className="text-muted-foreground text-lg">No tasks yet. Create your first task to get started!</p>
      </Card>
    );
  }

  // Separate tasks by completion status
  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="space-y-8">
      {/* Active Tasks */}
      {activeTasks.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Active Tasks</h2>
          <div className="space-y-3">
            {activeTasks.map(task => (
              <TaskCard
                key={task._id}
                task={task}
                token={token}
                onTaskUpdated={onTaskUpdated}
                onTaskDeleted={onTaskDeleted}
              />
            ))}
          </div>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Completed Tasks</h2>
          <div className="space-y-3">
            {completedTasks.map(task => (
              <TaskCard
                key={task._id}
                task={task}
                token={token}
                onTaskUpdated={onTaskUpdated}
                onTaskDeleted={onTaskDeleted}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
