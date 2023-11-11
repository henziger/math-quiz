import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import QuizApp from './components/QuizApp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>,
);
