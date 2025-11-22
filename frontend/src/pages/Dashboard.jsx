import { useState } from 'react'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import TaskStats from '../components/TaskStats'

export default function Dashboard() {
  const [refresh, setRefresh] = useState(0)

  const handleTaskCreated = () => {
    setRefresh(refresh + 1)
  }

  return (
    <div className="min-h-screen bg-background pt-24 lg:pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 px-2">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Tasks</h1>
          <p className="text-secondary">Manage and organize your daily tasks</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <TaskForm onTaskCreated={handleTaskCreated} />
          </div>
          <div className="lg:col-span-2">
            <TaskStats refreshTrigger={refresh} />
          </div>
        </div>

        <TaskList refreshTrigger={refresh} />
      </div>
    </div>
  )
}
