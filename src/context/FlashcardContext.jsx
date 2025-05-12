import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { load, save } from '../utils/storage';

const FlashcardContext = createContext();
const initial = load('flashcards', []);

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map((f) =>
        f.id === action.payload.id ? action.payload : f
      );
    case 'DELETE':
      return state.filter((f) => f.id !== action.payload);
    default:
      return state;
  }
}

export function FlashcardProvider({ children }) {
  const [flashcards, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    save('flashcards', flashcards);
  }, [flashcards]);

  return (
    <FlashcardContext.Provider value={{ flashcards, dispatch }}>
      {children}
    </FlashcardContext.Provider>
  );
}

export const useFlashcards = () => useContext(FlashcardContext);
