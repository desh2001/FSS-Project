import { Link, useNavigate } from 'react-router-dom'

export default function Header(){
  const navigate = useNavigate()
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null

  function handleLogout(){
    localStorage.removeItem('authToken')
    navigate('/')
  }

  return (
    <header className="site-header">
      <div className="container nav-row">
        <div className="brand">
          <Link to="/">ModernCloth</Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          {!token && <Link to="/login">Login</Link>}
          {!token && <Link to="/register">Register</Link>}
          {token && <button className="link-button" onClick={handleLogout}>Logout</button>}
        </nav>
      </div>
    </header>
  )
}
