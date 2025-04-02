import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* El comp BR envuelve al comp App (mi aplicacion) 
      lo que permite que toda mi App (subcomponente) tinene
      acceso a las del Router
    */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
