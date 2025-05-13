import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Flashcards from './pages/FlashCard';
import Study from './pages/Study';
import ProtectedRoute from './components/Protected Route';

export default function App() {
  return (
    <div
      className="flex"
      style={{ flexDirection: 'column', minHeight: '100vh' }}  // ensure full viewport height
    >
      <Navbar />
      <main className="container" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/flashcards"
            element={
              <ProtectedRoute>
                <Flashcards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/study"
            element={
              <ProtectedRoute>
                <Study />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
