import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth(); // Destructure loading along with user

  if (loading) {
    // You can return a loading spinner or some indication that the authentication state is being checked
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/login" replace />;
}
