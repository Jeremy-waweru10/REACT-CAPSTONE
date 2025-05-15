import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { FlashcardProvider } from './context/FlashcardContext';
import './app.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <FlashcardProvider>
        <App />
      </FlashcardProvider>
    </AuthProvider>
  </BrowserRouter>
);
