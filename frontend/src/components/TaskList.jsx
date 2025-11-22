import { useState, useEffect } from 'react'
import { taskApi } from '../services/api'
import TaskCard from './TaskCard'

export default function TaskList({ refreshTrigger }) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchTasks()
  }, [refreshTrigger])

  const fetchTasks = async () => {
    try {
      setLoading(true)
      const response = await taskApi.getTasks()
      setTasks(response.data.data || [])
    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleTaskUpdate = () => {
    fetchTasks()
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })

  return (
    <div>
      <div className="mb-6 flex gap-2">
        {['all', 'pending', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === f
                ? 'bg-primary text-white'
                : 'bg-muted text-secondary hover:text-foreground'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-secondary">Loading tasks...</p>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="text-center py-12 bg-muted border border-border rounded-lg">
          <p className="text-secondary text-lg">No tasks found</p>
          <p className="text-secondary text-sm">Create a new task to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTasks.map(task => (
            <TaskCard
              key={task._id}
              task={task}
              onTaskUpdate={handleTaskUpdate}
            />
          ))}
        </div>
      )}
    </div>
  )
}
