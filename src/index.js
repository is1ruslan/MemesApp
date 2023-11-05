import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header.js"
import Meme from "./Meme.js"
import './style.css'

function App() {
  return (
    <div>
        <Header />
        <Meme />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);