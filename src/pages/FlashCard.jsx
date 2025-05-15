import { useState } from 'react';
import { useFlashcards } from '../context/FlashcardContext';
import FlashcardForm from '../components/FlashcardForm';
import FlashcardList from '../components/FlashcardList';

export default function Flashcards() {
  const { flashcards, dispatch } = useFlashcards();
  const [editing, setEditing] = useState(null);

  
  const handleSave = (card) => {
    dispatch({ type: editing ? 'UPDATE' : 'ADD', payload: card });
    setEditing(null);
  };

  

  return (
    <div className="container">
      <h2>Your Flashcards</h2>
      <FlashcardForm
        onSave={handleSave}
        editing={editing}
        cancelEdit={() => setEditing(null)}
      />
      <FlashcardList
        flashcards={flashcards}
        onEdit={setEditing}
        onDelete={(id) => dispatch({ type: 'DELETE', payload: id })}
      />
    </div>
  );
}
