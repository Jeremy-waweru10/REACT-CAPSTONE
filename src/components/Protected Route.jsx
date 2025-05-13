import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {//content inside is passed in as children
  const { user } = useAuth();//tells whether the user is logged in
  return user ? children : <Navigate to="/login" replace />;
}
