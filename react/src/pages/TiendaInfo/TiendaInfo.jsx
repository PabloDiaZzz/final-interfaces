import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TiendaInfo.module.css';

const TiendaInfo = () => {
  return (
    <>
      <section className={styles.tiendaInfo}>
        <h1>Por Qué Elegir Nuestros Productos</h1>
        <article>
          <div className={styles.texto}>
            <h1>Cítricos de Valencia</h1>
            <p>Una selección premium de naranjas, limones y mandarinas cultivadas en la soleada Comunidad Valenciana. Su sabor y frescura son incomparables.
                La información del artículo detalla que se trata de fruta de temporada, recogida a mano para garantizar que llegue a tu casa en el mejor estado. Son perfectas para zumos o consumo directo.</p>
            <img 
              src="/img/naranjas.webp"
              srcSet="/img/naranjas.webp 1000w, /img/naranjas-800.webp 800w" 
              sizes="50vw" 
              alt="Naranjas apiladas"
              loading="lazy" 
              className={styles.imgMovil} 
            />
            <div className={styles.botones}>
              <Link className="button" to="/tienda">Comprar Naranjas</Link>
              <Link className="button-alt" to="/">Ver Recetas</Link>
            </div>
          </div>
          <div className={`${styles.imgWrapper} ${styles.imgDesk}`}>
            <img 
              src="/img/naranjas.webp"
              srcSet="/img/naranjas.webp 1000w, /img/naranjas-800.webp 800w" 
              sizes="50vw" 
              alt="Naranjas apiladas"
              loading="lazy" 
            />
          </div>
        </article>
        <article>
          <div className={`${styles.imgWrapper} ${styles.imgDesk}`}>
            <img 
              src="/img/pina.webp" 
              srcSet="/img/pina.webp 1000w, /img/pina-800.webp 800w"
              sizes="50vw" 
              alt="Piña entera y cortada" 
              loading="lazy" 
            />
          </div>
          <div className={styles.texto}>
            <h1>Piñas y Frutas Exóticas</h1>
            <p>Traemos lo mejor de la fruta tropical directamente a tu hogar. Nuestra piña es conocida por su dulzura y la riqueza de su pulpa, ideal para un postre o un snack refrescante.
                El subtítulo detalla la información del artículo para que el usuario pueda entenderlo. Son frutas cuidadosamente seleccionadas de cultivos sostenibles. ¡No las encontrarás igual!</p>
            <img 
              src="/img/pina.webp" 
              srcSet="/img/pina.webp 1000w, /img/pina-800.webp 800w"
              sizes="50vw" 
              alt="Piña entera y cortada" 
              loading="lazy" 
              className={styles.imgMovil} 
            />
            <div className={styles.botones}>
              <Link className="button" to="/tienda">Comprar Piña</Link>
              <Link className="button-alt" to="/">Saber Más</Link>
            </div>
          </div>
        </article>
      </section>
      <section className={styles.tiendaCompras}>
        <h1>Nuestros Productos Más Vendidos</h1>
        <div className={styles.comprasFlex}>
          <article>
            <div className={styles.imgWrapper}>
              <img 
                src="/img/cerezas.webp"
                srcSet="/img/cerezas.webp 1000w, /img/cerezas-800.webp 800w" 
                sizes="50vw" 
                alt="Cerezas en un cuenco"
                loading="lazy" 
              />
            </div>
            <h3>Cerezas del Jerte</h3>
            <p>Las más dulces y crujientes de la temporada</p>
            <span>10.99€</span>
          </article>
          <div className={styles.articleColumn}>
            <article>
              <div className={styles.imgWrapper}>
                <img 
                  src="/img/naranjas.webp"
                  srcSet="/img/naranjas.webp 1000w, /img/naranjas-800.webp 800w" 
                  sizes="50vw"
                  alt="Naranjas valencianas" 
                  loading="lazy" 
                />
              </div>
              <h3>Naranjas</h3>
              <p>Ideales para zumo o mesa</p>
              <span>10.99€</span>
            </article>
            <article>
              <div className={styles.imgWrapper}>
                <img 
                  src="/img/sandia.webp"
                  srcSet="/img/sandia.webp 1000w, /img/sandia-800.webp 800w" 
                  sizes="50vw" 
                  alt="Sandía abierta"
                  loading="lazy" 
                />
              </div>
              <h3>Sandía</h3>
              <p>Sabor refrescante para el verano</p>
              <span>12.99€</span>
            </article>
          </div>
        </div>
      </section>
      <section className={styles.tiendaValores}>
        <h1>Nuestros Valores Fundamentales</h1>
        <div className={styles.valoresFlex}>
          <div className={styles.valoresColumn}>
            <article>
              <svg>
                <use href="/img/world.svg#icon"></use>
              </svg>
              <h3>Compromiso Local</h3>
              <p>Seleccionamos proveedores de proximidad para garantizar la máxima frescura y reducir la huella de carbono. Apoyamos la economía local.</p>
            </article>
            <article>
              <svg>
                <use href="/img/user.svg#icon"></use>
              </svg>
              <h3>Atención Personalizada</h3>
              <p>Nuestro equipo está disponible para ayudarte con cualquier duda o pedido especial, ofreciendo el mejor servicio al cliente en todo momento.</p>
            </article>
          </div>
          <div className={styles.valoresColumn}>
            <article>
              <svg>
                <use href="/img/lock.svg#icon"></use>
              </svg>
              <h3>Compra Segura</h3>
              <p>Tu privacidad y seguridad son nuestra prioridad. Utilizamos sistemas de pago cifrados para que compres con total tranquilidad y confianza.</p>
            </article>
            <article>
              <svg>
                <use href="/img/calendar.svg#icon"></use>
              </svg>
              <h3>Frescura Garantizada</h3>
              <p>Recogemos la fruta y verdura el mismo día que la enviamos, asegurando que recibas productos recién cosechados y en su punto óptimo.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default TiendaInfo;
