import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    //user-tells  if someone is logged in or not.
  const { user, logout } = useAuth();
  const navigate = useNavigate();//redirect the user after they log out 

  const handleLogout = () => {
    logout();// // Clear user data
    navigate('/login');// Redirect to login page
  };

  return (
    <nav>
      <div className="container">
        <span className="logo">FlashLearn</span>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          {user && (//links only show up if the user is logged in
            <>
              <li>
                <NavLink to="/flashcards">Flashcards</NavLink>
              </li>
              <li>
                <NavLink to="/study">Study</NavLink>
              </li>
            </>
          )}
          {!user ? (//If the user is not logged in (!user), show the Login link.
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <li>
               {/* Logout button that calls handleLogout   */}
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
