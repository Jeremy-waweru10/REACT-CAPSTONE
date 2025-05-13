export default function FlashcardList({ flashcards, onEdit, onDelete }) {
    if (!flashcards.length) return <p>No flashcards yet.</p>;
  
    return (
      <ul className="flashcard-list">
        {flashcards.map((card) => (
            // renders a list item for each one
          <li key={card.id}>
            <div>
              <strong>[{card.subject}]</strong> {card.front}
            </div>
            <div className="actions">
              <button onClick={() => onEdit(card)}>Edit</button>
              <button onClick={() => onDelete(card.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  