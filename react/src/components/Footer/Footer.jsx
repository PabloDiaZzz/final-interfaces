import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerLogo}>Restaurante</div>
        <div className={styles.footerSocials}>
          <a href="#" aria-label="Facebook">
            <svg className={styles.socialIcon}>
              <use href="/img/fb-ico.svg#icon"></use>
            </svg>
          </a>
          <a href="#" aria-label="Linkedin">
            <svg className={styles.socialIcon}>
              <use href="/img/ln-ico.svg#icon"></use>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg className={styles.socialIcon}>
              <use href="/img/ig-ico.svg#icon"></use>
            </svg>
          </a>
          <a href="#" aria-label="Youtube">
            <svg className={styles.socialIcon}>
              <use href="/img/yt-ico.svg#icon"></use>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.footerRight}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Menú</th>
              <th>Legal</th>
              <th>Soporte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/">Primeros</Link></td>
              <td><Link to="/">Aviso Legal</Link></td>
              <td><Link to="/">Preguntas Frecuentes</Link></td>
            </tr>
            <tr>
              <td><Link to="/">Segundos</Link></td>
              <td><Link to="/">Política de Privacidad</Link></td>
              <td><Link to="/">Horarios y Ubicación</Link></td>
            </tr>
            <tr>
              <td><Link to="/">Postres</Link></td>
              <td><Link to="/">Política de Cookies</Link></td>
              <td><Link to="/">Trabaja con Nosotros</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
};

export default Footer;
