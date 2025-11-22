import { useAuth } from '../hooks/useAuth'
import RegisterForm from '../components/RegisterForm'

export default function Register() {
  const { setCurrentPage } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-muted border border-border rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-secondary">Join and start managing your tasks</p>
          </div>

          <RegisterForm />

          <div className="mt-6 text-center">
            <p className="text-secondary text-sm">
              Already have an account?{' '}
              <button
                onClick={() => setCurrentPage('login')}
                className="text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
