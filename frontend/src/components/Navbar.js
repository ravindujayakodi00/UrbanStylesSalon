import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'


const CollapsibleNavbar = () => {

  const { logout } = useLogout()

  const handleClick = () => {
    logout();
  }

  return (
    <header>
      <div className="container">
        
        <nav>
          <div>
            <button onClick= {handleClick}>Log Out</button>
          </div>
          <div>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default CollapsibleNavbar