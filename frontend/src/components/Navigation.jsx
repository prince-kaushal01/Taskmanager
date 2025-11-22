import { useAuth } from '../hooks/useAuth'
import { LogOut, CheckSquare } from 'lucide-react'

export default function Navigation() {
  const { user, logout } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-muted border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <CheckSquare size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">TaskManager</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right space-y-1">
              <p className="text-sm hidden text-start lg:block text-foreground font-medium">{user.name}</p>
              <p className="text-xs hidden lg:block text-secondary">{user.email}</p>
            </div>
            <button
              onClick={logout}
              className="hidden lg:block md:flex items-center gap-2 bg-danger/10 hover:bg-danger/20 text-danger px-3 py-2 rounded-lg transition-colors"
            >
              <div className='flex gap-2'>
              <LogOut size={18} />
              <span className="text-sm font-medium">Logout</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
