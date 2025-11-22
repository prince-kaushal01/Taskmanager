import { useState } from 'react'
import { taskApi } from '../services/api'
import { Plus } from 'lucide-react'

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('medium')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await taskApi.createTask({
        title,
        description,
        priority,
        dueDate: null
      })

      setTitle('')
      setDescription('')
      setPriority('medium')
      onTaskCreated()
    } catch (error) {
      console.error('Error creating task:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-muted border border-border rounded-lg p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">Create New Task</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title..."
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description..."
            rows="3"
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          {loading ? 'Creating...' : 'Create Task'}
        </button>
      </div>
    </form>
  )
}
