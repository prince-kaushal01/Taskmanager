import { useEffect, useState } from 'react'
import { taskApi } from '../services/api'
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react'

export default function TaskStats({ refreshTrigger }) {
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0, high: 0 })

  useEffect(() => {
    fetchStats()
  }, [refreshTrigger])

  const fetchStats = async () => {
    try {
      const response = await taskApi.getTasks()
      const tasks = response.data.data || []

      const completed = tasks.filter(t => t.completed).length
      const pending = tasks.length - completed
      const high = tasks.filter(t => t.priority === 'high' && !t.completed).length

      setStats({
        total: tasks.length,
        completed,
        pending,
        high
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-muted border border-border rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-secondary text-sm">Total Tasks</p>
            <p className="text-3xl font-bold text-foreground mt-1">{stats.total}</p>
          </div>
          <Circle size={32} className="text-primary opacity-20" />
        </div>
      </div>

      <div className="bg-muted border border-border rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-secondary text-sm">Completed</p>
            <p className="text-3xl font-bold text-success mt-1">{stats.completed}</p>
          </div>
          <CheckCircle2 size={32} className="text-success opacity-20" />
        </div>
      </div>

      <div className="bg-muted border border-border rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-secondary text-sm">Pending</p>
            <p className="text-3xl font-bold text-warning mt-1">{stats.pending}</p>
          </div>
          <Circle size={32} className="text-warning opacity-20" />
        </div>
      </div>

      <div className="bg-muted border border-border rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-secondary text-sm">High Priority</p>
            <p className="text-3xl font-bold text-danger mt-1">{stats.high}</p>
          </div>
          <AlertCircle size={32} className="text-danger opacity-20" />
        </div>
      </div>
    </div>
  )
}
