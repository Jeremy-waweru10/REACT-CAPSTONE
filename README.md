# FlashLearn

A professional, React-powered flashcard app with login, CRUD, study modes, and localStorage persistence—built with Vite for fast HMR and modern tooling.

---

## 🚀 Features

- **User Authentication** (mock)  
  - Login / Logout flow with `AuthContext`
  - Protected “Flashcards” and “Study” routes  
- **Flashcard Management**  
  - Create, Edit, Delete cards via `FlashcardForm` & `FlashcardList`
  - Categorize by subject/topic  
- **Study Modes**  
  - **Sequential**: review in creation order  
  - **Random**: random-shuffled review  
  - Progress indicator (current / total)  
- **Persistence**  
  - All data persisted in `localStorage` via custom `storage` utilities  
- **Responsive UI**  
  - Deep-blue Navbar & Footer, single-file theming (`index.css`)
  - Mobile-friendly navbar wrapping, flexible layout

---

## 🛠 Tech Stack

- **Vite** (React template)  
- **React 18** + **React Router v6**  
- **Context + useReducer** for state  
- **Vanilla CSS** with CSS variables, responsive utilities  
- **localStorage** for data persistence  

---

## 📂 Project Structure

```plain
my-flashcard-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── FlashcardForm.jsx
│   │   └── FlashcardList.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── FlashcardContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Flashcards.jsx
│   │   └── Study.jsx
│   ├── utils/
│   │   └── storage.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── package.json
└── README.md

## Clone the repo
git clone https://github.com/yourusername/my-flashcard-app.git

Change directory
cd my-flashcard-app

Profile
https://github.com/Jeremy-waweru10
