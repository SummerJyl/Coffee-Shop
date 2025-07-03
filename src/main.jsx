import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './pages/_app.js'; // ✅ Fixed path
// import './styles/globals.css';


// const root = createRoot(document.getElementById('root'));
// root.render(<App />);