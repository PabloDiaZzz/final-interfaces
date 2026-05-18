import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Inicio from './pages/Inicio/Inicio';
import Contacto from './pages/Contacto/Contacto';
import Posts from './pages/Posts/Posts';
import Tienda from './pages/Tienda/Tienda';
import TiendaInfo from './pages/TiendaInfo/TiendaInfo';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/tienda-info" element={<TiendaInfo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
