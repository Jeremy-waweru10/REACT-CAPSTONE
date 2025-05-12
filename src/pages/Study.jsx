import { useState } from 'react';
import { useFlashcards } from '../context/FlashcardContext';

export default function Study() {
  const { flashcards } = useFlashcards();
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [mode, setMode] = useState('sequential');

  const cards =
    mode === 'random'
      ? [...flashcards].sort(() => Math.random() - 0.5)
      : flashcards;

  const next = () => {
    setShowBack(false);
    setIndex((i) => (i + 1) % cards.length);
  };

  if (!cards.length)
    return (
      <div className="container">
        <p>Create some flashcards first.</p>
      </div>
    );

  return (
    <div className="container">
      <h2>Study Mode</h2>
      <div className="mode-switch form-inline mt-1">
        <label>
          <input
            type="radio"
            checked={mode === 'sequential'}
            onChange={() => setMode('sequential')}
          />{' '}
          Sequential
        </label>
        <label>
          <input
            type="radio"
            checked={mode === 'random'}
            onChange={() => setMode('random')}
          />{' '}
          Random
        </label>
      </div>

      <div className="card mt-2">
        <p>{showBack ? cards[index].back : cards[index].front}</p>
        <div className="mt-1 flex space-between">
          <button onClick={() => setShowBack(!showBack)}>
            {showBack ? 'Show Front' : 'Show Back'}
          </button>
          <button onClick={next}>Next</button>
        </div>
      </div>

      <p className="mt-1">
        Progress: {index + 1}/{cards.length}
      </p>
    </div>
  );
}
