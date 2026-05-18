import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ isHero }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Close menu when route changes
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Manage body scroll based on menu open state
    if (menuOpen) {
      document.body.classList.add(styles.bodyMenuOpen);
    } else {
      document.body.classList.remove(styles.bodyMenuOpen);
    }
    return () => {
      document.body.classList.remove(styles.bodyMenuOpen);
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${isHero ? styles.hero : ''} ${menuOpen ? styles.menuOpen : ''}`}>
      {isHero ? (
        <>
          <div className={styles.heroRow}>
            <div className={styles.logoMenu}>
              <Link to="/">Restaurante</Link>
              <div 
                className={`${styles.menuMovilLabel} ${menuOpen ? styles.open : ''}`} 
                onClick={toggleMenu}
                role="button"
                tabIndex={0}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); }}
              >
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div>
            </div>
            <nav className={styles.nav}>
              <Link to="/tienda">Tienda</Link>
              <Link to="/posts">Posts</Link>
              <Link to="/contacto">Sobre nosotros</Link>
              <Link className="button" to="/">Inicio</Link>
            </nav>
          </div>
          <div className={styles.heroInfo}>
            <h1>Nuestra Tienda Online: Productos de Proximidad</h1>
            <h3>La calidad del campo a solo un clic. Descubre nuestra selección de frutas y verduras frescas.</h3>
            <Link className="button" to="/tienda">Explorar Productos</Link>
          </div>
          <img 
            src="/img/hero-header.webp" 
            srcSet="/img/hero-header.webp 1000w, /img/hero-header-800.webp 800w"
            sizes="100vw" 
            alt="Cesta de frutas frescas sobre una mesa" 
            loading="eager" 
            className={styles.heroBg} 
          />
        </>
      ) : (
        <>
          <div className={styles.logoMenu}>
            <Link to="/">Restaurante</Link>
            <div 
              className={`${styles.menuMovilLabel} ${menuOpen ? styles.open : ''}`} 
              onClick={toggleMenu}
              role="button"
              tabIndex={0}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); }}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </div>
          <nav className={styles.nav}>
            <Link to="/tienda">Tienda</Link>
            <Link to="/tienda-info">Información tienda</Link>
            <Link to="/contacto">Sobre nosotros</Link>
            <Link className="button" to="/">Inicio</Link>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
