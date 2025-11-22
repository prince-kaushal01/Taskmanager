import { AuthProvider } from './context/AuthContext'
import { useAuth } from './hooks/useAuth'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Navigation from './components/Navigation'

function AppContent() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {isAuthenticated && <Navigation />}
      <main>
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <div className="min-h-screen bg-background">
            <Routes />
          </div>
        )}
      </main>
    </>
  )
}

function Routes() {
  const { currentPage } = useAuth()

  if (currentPage === 'login') {
    return <Login />
  }
  if (currentPage === 'register') {
    return <Register />
  }
  return <Login />
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
