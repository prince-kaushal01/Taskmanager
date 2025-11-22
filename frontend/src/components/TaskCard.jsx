import { useState } from 'react'
import { taskApi } from '../services/api'
import { Trash2, CheckCircle2, Circle } from 'lucide-react'

export default function TaskCard({ task, onTaskUpdate }) {
  const [loading, setLoading] = useState(false)

  const handleToggleComplete = async () => {
    setLoading(true)
    try {
      await taskApi.updateTask(task._id, { completed: !task.completed })
      onTaskUpdate()
    } catch (error) {
      console.error('Error updating task:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setLoading(true)
      try {
        await taskApi.deleteTask(task._id)
        onTaskUpdate()
      } catch (error) {
        console.error('Error deleting task:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const priorityColor = {
    low: 'text-success',
    medium: 'text-warning',
    high: 'text-danger'
  }

  const priorityBg = {
    low: 'bg-success/10',
    medium: 'bg-warning/10',
    high: 'bg-danger/10'
  }

  return (
    <div className={`bg-muted border border-border rounded-lg p-4 transition-all ${task.completed ? 'opacity-75' : ''}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={handleToggleComplete}
          disabled={loading}
          className="mt-1 flex-shrink-0 focus:outline-none"
        >
          {task.completed ? (
            <CheckCircle2 size={24} className="text-success" />
          ) : (
            <Circle size={24} className="text-secondary hover:text-primary transition-colors" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className={`font-semibold text-foreground ${task.completed ? 'line-through text-secondary' : ''}`}>
              {task.title}
            </h3>
            <span className={`text-xs font-medium px-2 py-1 rounded ${priorityBg[task.priority]}`}>
              <span className={priorityColor[task.priority]}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
            </span>
          </div>

          {task.description && (
            <p className="text-sm text-secondary mb-2 line-clamp-2">{task.description}</p>
          )}

          <div className="flex items-center justify-between">
            <span className="text-xs text-secondary">
              Created {new Date(task.createdAt).toLocaleDateString()}
            </span>
            <button
              onClick={handleDelete}
              disabled={loading}
              className="text-danger hover:text-danger/80 disabled:opacity-50 transition-colors p-1"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
