import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const API_BASE = import.meta.env.VITE_API_BASE || ''

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    setError(null)
    try{
      const res = await fetch(`${API_BASE}/api/users/login`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.message || 'Login failed')
      localStorage.setItem('authToken', data.token)
      navigate('/')
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <div>
      <Header />
      <main className="auth-page">
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <div className="error">{error}</div>}
          <label>Email
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
          </label>
          <label>Password
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
          </label>
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  )
}
