import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { load, save } from '../utils/storage';

//create Context
const FlashcardContext = createContext();
const initial = load('flashcards', []);//loads previously saved Flashcards from local Storage

//reducer-controls how your data (state) should change based on different actions.
function reducer(state, action) {
  switch (action.type) {
    case 'ADD'://Adds a new flashcard to the list.
      return [...state, action.payload];
    case 'UPDATE':
      return state.map((f) =>
        f.id === action.payload.id ? action.payload : f//replace the flashcard id with the id of new one if it matches
      );
    case 'DELETE': //Removes a flashcard by ID.
      return state.filter((f) => f.id !== action.payload);
    default:
      return state;
  }
}

export function FlashcardProvider({ children }) {//wraps around components and provides data (flashcards) to them.
    //Reducer hook
  const [flashcards, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    save('flashcards', flashcards);//
  }, [flashcards]);

  return (
    <FlashcardContext.Provider value={{ flashcards, dispatch }}>
      {children}
    </FlashcardContext.Provider>
  );
}

export const useFlashcards = () => useContext(FlashcardContext);
