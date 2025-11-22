import { createContext, useState, useCallback, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const API_URL = 'http://localhost:5000/api'

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('login')
  const [error, setError] = useState(null)

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
      const userData = localStorage.getItem('user')
      if (userData) {
        setUser(JSON.parse(userData))
      }
    }
    setLoading(false)
  }, [])

  const register = useCallback(async (name, email, password) => {
    try {
      setError(null)
      const response = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password
      })

      const { token, user: userData } = response.data

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      setIsAuthenticated(true)

      return { success: true }
    } catch (err) {
      const message = err.response?.data?.message || 'Registration failed'
      setError(message)
      return { success: false, error: message }
    }
  }, [])

  const login = useCallback(async (email, password) => {
    try {
      setError(null)
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password
      })

      const { token, user: userData } = response.data

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      setIsAuthenticated(true)

      return { success: true }
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed'
      setError(message)
      return { success: false, error: message }
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setIsAuthenticated(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        currentPage,
        setCurrentPage,
        register,
        login,
        logout,
        error,
        setError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
