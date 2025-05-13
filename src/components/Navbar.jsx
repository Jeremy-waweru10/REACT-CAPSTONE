import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function Navbar() {
  // Destructuring the `user` and `logout` functions from the Auth context
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // For navigation after logout

  // Handle user logout
  const handleLogout = () => {
    logout(); // Clear user data (assuming logout clears the user context or token)
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <nav>
      <div className="container">
        {/* FlashLearn logo */}
        <span className="logo">FlashLearn</span>
        <ul>
          {/* Home link always visible */}
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          
          {/* Links visible only if user is logged in */}
          {user && (
            <>
              <li>
                <NavLink to="/flashcards">Flashcards</NavLink>
              </li>
              <li>
                <NavLink to="/study">Study</NavLink>
              </li>
            </>
          )}

          {/* Login link if user is not logged in, otherwise logout button */}
          {!user ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <li>
              {/* Logout button */}
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
