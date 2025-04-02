
import './App.css'
import { useState } from 'react';
import Navbar from './components/www/site/Navbar';
import AppRoutes from './routes/AppRoutes';
import { Header } from './components/www/site/Header';
import Footer  from './components/www/site/Footer';

function App() {
  //controlador
  //useState --> hook de React , Añade un estado de la variable contador
  //a nuestro componente funcional App = +.tsx -- codigo + return (vista)
  //componentes -- Inicio.ts
  //contador = 0
  

  return (
      //vista
      <div className='container-full'>
        <Header />
        <main className='container'>
          <AppRoutes />
        </main>
        <div className='flex flex-col min-h-screen'>
        <Footer/>
        </div>
      </div>
  )
}

//exportamos el componente
export default App
