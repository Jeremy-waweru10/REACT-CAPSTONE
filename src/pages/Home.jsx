import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Snippets array (your flashcard content)
const snippets = [
  { id: 1, title: "Physics - Newton's Laws", content: "1. Objects stay at rest or in motion unless acted upon by an external force...\n2. Force equals mass times acceleration (F = ma)...\n3. For every action, there's an equal and opposite reaction...\n4. The laws apply to all objects, whether small or large..." },
  { id: 2, title: "History - World War II", content: "1. Started in 1939...\n2. Key battles: D-Day, Stalingrad...\n3. Ended with the atomic bomb...\n4. The war reshaped the political landscape globally..." },
  { id: 3, title: "Programming - JavaScript Basics", content: "1. JavaScript powers dynamic web apps...\n2. Variables can be declared using let, const, or var...\n3. Functions help reuse code effectively...\n4. Loops allow us to automate repetitive tasks..." },
  { id: 4, title: "Mathematics - Calculus Derivatives", content: "1. Derivatives measure function changes...\n2. Basic formula: d/dx [x^n] = n*x^(n-1)...\n3. Chain rule helps differentiate composite functions...\n4. The derivative of sin(x) is cos(x)...\n5. The power rule is one of the most important tools..." }, // Already has extra content
  { id: 5, title: "Chemistry - Periodic Table Trends", content: "1. Atomic radius decreases across a period...\n2. Ionization energy increases across a period...\n3. Electronegativity follows similar trends...\n4. Elements in the same group share similar chemical properties..." },
  { id: 6, title: "Biology - Photosynthesis Process", content: "1. Photosynthesis occurs in chloroplasts...\n2. Uses sunlight to convert CO₂ and water into glucose...\n3. Produces oxygen as a byproduct...\n4. The process is essential for life on Earth..." },
  { id: 7, title: "Business - Marketing Strategies", content: "1. Digital marketing enhances brand awareness...\n2. SEO increases organic search visibility...\n3. Content marketing drives engagement...\n4. Social media ads are a powerful tool for reaching customers..." },
  { id: 8, title: "Psychology - Cognitive Biases", content: "1. Confirmation bias makes us seek info supporting beliefs...\n2. Anchoring bias affects decision-making...\n3. Recency bias influences memory retention...\n4. The availability heuristic distorts our judgment based on recent experiences..." },
  { id: 9, title: "Literature - Shakespearean Plays", content: "1. Romeo & Juliet explores love and fate...\n2. Hamlet delves into revenge and morality...\n3. Macbeth examines ambition and downfall...\n4. Much Ado About Nothing explores love, deception, and mistaken identities..." }
];

export default function Home() {
  const { user } = useAuth();
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="home-container">
      {/* Hero */}
      <div className="hero">
        <h1>Welcome to FlashLearn</h1>
        <p>Master your subjects with curated flashcards and snippets.</p>
        <Link to="/flashcards">
          <button className="start-btn">Get Started</button>
        </Link>
      </div>

      {/* Snippets */}
      <div className="snippet-section">
        <h2>Explore Learning Snippets</h2>
        <div className="snippet-grid">
          {snippets.map((snippet) => {
            const isExpanded = expandedId === snippet.id;
            const content = user
              ? (isExpanded ? snippet.content : snippet.content.split('\n').slice(0, 3).join('\n') + '...')
              : snippet.content.split('\n').slice(0, 3).join('\n') + '...';

            return (
              <div key={snippet.id} className="snippet-card">
                <h3>{snippet.title}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{content}</p>

                {user && (
                  <button
                    className="read-more-btn"
                    onClick={() =>
                      setExpandedId(isExpanded ? null : snippet.id)
                    }
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                  </button>
                )}

                {!user && (
                  <p className="login-prompt">
                    <Link to="/login">Log in</Link> to read full content or create your own.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
