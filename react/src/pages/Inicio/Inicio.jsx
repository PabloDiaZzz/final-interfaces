import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Inicio.module.css';

const Inicio = () => {
  return (
    <>
      <div className={styles.portada}>
        <h1>Sabores Tradicionales, Experiencias Memorables</h1>
        <p>El lugar donde la cocina local se encuentra con la pasión. Descubre nuestros platos hechos con ingredientes frescos y de temporada.</p>
        <a href="#articulos" className="button">Ver Menú Principal</a>
        <img 
          src="/img/portada.webp" 
          srcSet="/img/portada.webp 1000w, /img/portada-800.webp 800w"
          sizes="70vw" 
          alt="Mesa de restaurante con platos de alta cocina" 
          loading="eager" 
        />
      </div>
      
      <section className={styles.articulos} id="articulos">
        <h1>Nuestros Platos Estacionales Destacados</h1>
        <div className={styles.fotos}>
          <article className={styles.foto}>
            <img 
              src="/img/steak.webp" 
              srcSet="/img/steak.webp 1000w, /img/steak-800.webp 800w"
              sizes="50vw" 
              alt="Filete a la parrilla con guarnición" 
              loading="lazy" 
            />
            <h3>Solomillo de Ternera al Vino Tinto</h3>
            <p>El corte más selecto, cocinado a la perfección con una reducción de vino tinto y especias.</p>
          </article>
          <article className={styles.foto}>
            <img 
              src="/img/pasta.webp" 
              srcSet="/img/pasta.webp 1000w, /img/pasta-800.webp 800w"
              sizes="50vw" 
              alt="Plato de pasta fresca con tomate" 
              loading="lazy" 
            />
            <h3>Pasta Fresca Casera con Ragú</h3>
            <p>Pasta hecha a mano diariamente, acompañada de nuestra salsa ragú tradicional a fuego lento.</p>
          </article>
          <article className={styles.foto}>
            <img 
              src="/img/chipis.webp" 
              srcSet="/img/chipis-800.webp 800w, /img/chipis.webp 1000w"
              sizes="50vw" 
              alt="Chipirones fritos con limón" 
              loading="lazy" 
            />
            <h3>Chipirones Fritos a la Andaluza</h3>
            <p>Una tapa clásica: calamares pequeños rebozados y fritos, servidos con limón fresco.</p>
          </article>
        </div>
      </section>

      <section className={styles.informacion}>
        <div className={styles.texto}>
          <h1>Ingredientes Frescos, Calidad Garantizada</h1>
          <div className={styles.parrafo}>
            <h3>De la Huerta a tu Mesa</h3>
            <p>Trabajamos directamente con agricultores locales para asegurar la máxima frescura y apoyar a nuestra comunidad. Proporcionamos detalles, explicaciones y contexto.</p>
          </div>
          <div className={styles.parrafo}>
            <h3>Recetas con Historia Familiar</h3>
            <p>Nuestros platos se basan en recetas transmitidas por generaciones, manteniendo la esencia de la cocina de nuestra abuela. Proporcionamos detalles, explicaciones y contexto.</p>
          </div>
          <div className={styles.parrafo}>
            <h3>Un Ambiente Acogedor</h3>
            <p>Disfruta de tu comida en un entorno cálido y familiar, ideal para cualquier celebración o una cena tranquila. Proporcionamos detalles, explicaciones y contexto.</p>
          </div>
          <img 
            className={styles.imgMovil} 
            src="/img/pure.webp"
            srcSet="/img/pure.webp 1000w, /img/pure-800.webp 800w" 
            sizes="50vw" 
            alt="Puré de patatas cremoso" 
            loading="lazy" 
          />
          <div className={styles.botones}>
            <Link to="/contacto" className="button">Contactar / Reservar</Link>
            <Link to="/tienda" className="button-alt">Visita Nuestra Tienda</Link>
          </div>
        </div>
        <img 
          className={styles.imgDesk} 
          src="/img/pure.webp" 
          srcSet="/img/pure.webp 1000w, /img/pure-800.webp 800w"
          sizes="50vw" 
          alt="Puré de patatas cremoso" 
          loading="lazy" 
        />
      </section>

      <section className={styles.resenas}>
        <h1>Lo Que Dicen Nuestros Clientes</h1>
        <div className={styles.opiniones}>
          <article className={styles.opinion}>
            <p className={styles.titulo}>¡Una experiencia gastronómica increíble!</p>
            <div className={styles.mensaje}>
              <img src="/img/profile.svg" alt="Icono de perfil" className={styles.perfil} />
              <p className={styles.nombre}>Laura M.</p>
              <p className={styles.descripcion}>
                El ambiente es perfecto y el trato del personal inmejorable. Probamos el solomillo y la tarta de queso, ¡ambos sublimes! Definitivamente volveremos para seguir probando el resto del menú.
                Recomiendo encarecidamente este lugar a cualquiera que busque cocina auténtica y de calidad. Sin duda, es el mejor restaurante de la zona.
              </p>
            </div>
          </article>
          <article className={styles.opinion}>
            <p className={styles.titulo}>La mejor pasta fresca que he probado</p>
            <div className={styles.mensaje}>
              <img src="/img/profile.svg" alt="Icono de perfil" className={styles.perfil} />
              <p className={styles.nombre}>Javier R.</p>
              <p className={styles.descripcion}>
                La pasta fresca casera con ragú es un espectáculo. Se nota que cada ingrediente ha sido seleccionado con sumo cuidado. Tienen un servicio rápido y muy atento.
                Me encantó que también ofrezcan productos frescos para llevar a casa. Volveré pronto a por más limones y naranjas!
              </p>
            </div>
          </article>
          <article className={styles.opinion}>
            <p className={styles.titulo}>Un servicio fantástico y platos deliciosos</p>
            <div className={styles.mensaje}>
              <img src="/img/profile.svg" alt="Icono de perfil" className={styles.perfil} />
              <p className={styles.nombre}>María P.</p>
              <p className={styles.descripcion}>¡Súper recomendado! El personal es muy amable y los platos son de diez.</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.contacto} id="reserva">
        <h1>¿Listo para Probar Nuestros Sabores?</h1>
        <div className={styles.botones}>
          <Link to="/contacto" className="button">Contáctanos</Link>
          <a href="#articulos" className="button-alt">Ver el Menú</a>
        </div>
      </section>
    </>
  );
};

export default Inicio;
