import { useAuth } from '../hooks/useAuth'
import LoginForm from '../components/LoginForm'

export default function Login() {
  const { setCurrentPage } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-muted border border-border rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome</h1>
            <p className="text-secondary">Sign in to your task manager account</p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-secondary text-sm">
              Don't have an account?{' '}
              <button
                onClick={() => setCurrentPage('register')}
                className="text-primary hover:text-primary-dark hover:underline font-semibold transition-colors"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
