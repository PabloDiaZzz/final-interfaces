import React from 'react';
import styles from './Contacto.module.css';

const Contacto = () => {
  return (
    <section className={styles.about}>
      <div className={styles.info}>
        <h1>Nuestra Historia y Filosofía</h1>
        <h3>Conoce al equipo que da vida a los sabores más auténticos de la ciudad.</h3>
        <p>Somos un restaurante familiar fundado en 2005, con la misión de honrar la cocina tradicional con un toque moderno. Nos especializamos en el uso de ingredientes de temporada y de origen local, asegurando la máxima calidad en cada plato.
            Repellat ipsa aliquid qui doloribus reprehenderit recusandae ut nam pariatur atque repellendus cum nemo totam corrupti porro ducimus asperiores, eius non fuga! Saepe architecto at ducimus consectetur ex ut alias.</p>
        <p>Detrás de cada receta hay una pasión por el buen hacer y el respeto por el producto. Creemos que la mejor comida es aquella que cuenta una historia, desde la huerta hasta la mesa. Adipisci quaerat libero quis sed atque neque, nisi doloremque. Tempore possimus neque praesentium sint ipsum sunt placeat.
            Facere, amet repudiandae, aperiam non molestias sequi voluptates sunt omnis nihil hic accusantium expedita. Nuestro chef, un galardonado experto en cocina mediterránea, supervisa personalmente la selección de cada ingrediente. Ducimus cumque corporis tenetur soluta doloremque magnam velit, aspernatur odit inventore distinctio nihil perspiciatis ex neque.
            Enim dolorem perspiciatis minus odit quod, aliquam tenetur eligendi, alias id eaque animi omnis sunt. Odio maxime iusto maiores perferendis rerum aut cupiditate nisi illo magni? Te invitamos a formar parte de nuestra historia y a disfrutar de una experiencia gastronómica inolvidable.
            Sint iste autem debitis iusto consectetur quibusdam voluptates sunt nihil quis minima dolorem vero deleniti nobis voluptas rem iure alias, vitae vel hic incidunt modi harum asperiores. Rerum, optio architecto?</p>
      </div>
      <img 
        src="/img/retrato.webp" 
        srcSet="/img/retrato.webp 1000w, /img/retrato.webp 800w" 
        sizes="50vw"
        alt="Retrato del chef principal" 
        loading="eager" 
      />
      <form action="" method="post" className={styles.form}>
        <h2>Ponte en contacto con nosotros</h2>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name-input">Nombre</label>
            <input type="text" name="name-input" id="name-input" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="surname-input">Apellidos</label>
            <input type="text" name="surname-input" id="surname-input" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email-input">Email</label>
          <input type="email" name="email-input" id="email-input" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message-input">Mensaje</label>
          <textarea name="message" id="message-input" placeholder="Escribe aquí tu consulta o comentario"></textarea>
        </div>
        <button type="submit">Enviar Solicitud</button>
      </form>
    </section>
  );
};

export default Contacto;
