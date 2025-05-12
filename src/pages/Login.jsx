import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Login() {
  const { user, login } = useAuth();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  if (user) return <Navigate to="/" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username.trim());
    navigate('/flashcards');
  };

  return (
    <div className="login-container">
      <h2>Login to FlashLearn</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <button type="submit" className="mt-1" style={{ width: '100%' }}>
          Login
        </button>
      </form>
    </div>
  );
}
