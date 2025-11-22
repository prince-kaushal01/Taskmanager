import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { User, Mail, Lock, AlertCircle } from 'lucide-react'

export default function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { register, setError, error } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const result = await register(name, email, password)

    if (!result.success) {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="flex items-center gap-2 bg-danger/10 border border-danger/30 rounded-lg p-3 text-danger text-sm">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
        <div className="relative">
          <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
        <div className="relative">
          <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Password</label>
        <div className="relative">
          <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            required
            minLength="6"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors mt-6"
      >
        {loading ? 'Creating account...' : 'Sign Up'}
      </button>
    </form>
  )
}
