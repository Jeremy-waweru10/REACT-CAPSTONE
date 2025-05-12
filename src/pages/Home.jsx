import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h2>Welcome to FlashLearn</h2>
      <p>Create and study flashcards across your favorite subjects.</p>
      <Link to="/flashcards">
        <button className="mt-1">
          Get Started
        </button>
      </Link>
      {!user && (
        <p style={{ marginTop: '1rem', color: '#555' }}>
          You’ll be prompted to log in before accessing your flashcards.
        </p>
      )}
    </div>
  );
}
