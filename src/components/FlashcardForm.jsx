import { useState, useEffect } from 'react';

export default function FlashcardForm({ onSave, editing, cancelEdit }) {
    //state varibles
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [subject, setSubject] = useState('');

  useEffect(() => {
    if (editing) {//when editing
      setFront(editing.front);
      setBack(editing.back);
      setSubject(editing.subject);
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: editing?.id || Date.now(),//se the existing one if editing, or generate a new one
      front,//values from the form
      back,//values from the form
      subject,//values from the form
    };
    //Save the Card and Clear the Form
    onSave(card);
    setFront('');
    setBack('');
    setSubject('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-1">
      <div className="form-group">
        <label>Subject</label>
        <input
          required
          placeholder="e.g. Programming"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Front</label>
        <textarea
          required
          placeholder="Front of card"
          value={front}
          onChange={(e) => setFront(e.target.value)}// updates the state when typing.


        />
      </div>
      <div className="form-group">
        <label>Back</label>
        <textarea
          required
          placeholder="Back of card"
          value={back}
          onChange={(e) => setBack(e.target.value)}// updates the state when typing.


        />
      </div>
      <button type="submit">{editing ? 'Update' : 'Add'} Card</button>
      {editing && (
        <button type="button" onClick={cancelEdit} className="mt-1">
          Cancel
        </button>
      )}
    </form>
  );
}
