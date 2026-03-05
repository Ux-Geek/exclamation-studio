import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  autoRaf: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
