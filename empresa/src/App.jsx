import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Header from './components/Header.jsx';
import Contacto from './Pages/Contacto.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* Header */}
      <Header />

      {/* Fondo galaxia */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        {/* Gradiente radial tipo galaxia */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#1f1f2e,_#0d0d1a)]"></div>
        {/* Estrellas animadas */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-star bg-repeat"></div>
      </div>

      {/* Contenido principal encima del fondo */}
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route path='/Inicio' element={<Home />} />
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;