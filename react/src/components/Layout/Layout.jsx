import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isTiendaInfo = location.pathname === '/tienda-info';

  return (
    <div className={styles.mainContainer}>
      <Header isHero={isTiendaInfo} />
      <div className={styles.cuerpo}>
        {children}
      </div>
      {!isTiendaInfo && <div className="separador"></div>}
      <Footer />
    </div>
  );
};

export default Layout;
