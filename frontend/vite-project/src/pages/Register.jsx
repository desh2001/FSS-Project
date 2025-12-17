import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const API_BASE = import.meta.env.VITE_API_BASE || ''

export default function Register(){
  const [form, setForm] = useState({ email: '', password: '', firstName: '', lastName: '' })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  function update(e){
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e){
    e.preventDefault();
    setError(null)
    try{
      const res = await fetch(`${API_BASE}/api/users`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.message || 'Registration failed')
      navigate('/login')
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <div>
      <Header />
      <main className="auth-page">
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>Create account</h2>
          {error && <div className="error">{error}</div>}
          <label>First name
            <input name="firstName" value={form.firstName} onChange={update} required />
          </label>
          <label>Last name
            <input name="lastName" value={form.lastName} onChange={update} required />
          </label>
          <label>Email
            <input name="email" type="email" value={form.email} onChange={update} required />
          </label>
          <label>Password
            <input name="password" type="password" value={form.password} onChange={update} required />
          </label>
          <button type="submit">Register</button>
        </form>
      </main>
    </div>
  )
}
