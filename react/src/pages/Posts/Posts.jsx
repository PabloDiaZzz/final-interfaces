import React from 'react';
import styles from './Posts.module.css';

const Posts = () => {
  return (
    <>
      <section className={styles.postTitulo}>
        <h1>El Secreto de los Postres Perfectos: Técnicas de Repostería</h1>
        <p>Por Repostero Jefe. Descubre los ingredientes, trucos y métodos esenciales para elevar tus creaciones dulces al siguiente nivel.</p>
      </section>
      <section className={styles.postPrincipal}>
        <img 
          src="/img/post-principal.webp" 
          srcSet="/img/post-principal.webp 1000w, /img/post-principal.webp 800w" 
          sizes="95vw" 
          alt="Postre de chocolate y frutas con crema batida" 
          loading="eager" 
        />
        <p>La repostería es una ciencia precisa y un arte delicado. A diferencia de la cocina tradicional, donde la intuición juega un papel crucial, aquí las medidas exactas y las temperaturas son la clave del éxito. Un buen postre comienza con la calidad de sus ingredientes, desde la mantequilla hasta el chocolate. Además, la técnica correcta de batido y amasado es fundamental para conseguir la textura deseada.</p>
        <p>Dominar el punto de la cocción, ya sea en un horno o al baño María, es esencial. Por ejemplo, un *coulant* de chocolate debe ser firme por fuera y líquido por dentro, lo que requiere un control estricto del tiempo. Para lograr la textura deseada en masas como las de hojaldre o *choux*, es crucial respetar los tiempos de reposo y la temperatura ambiente. La incorporación de aire mediante el batido es también vital para postres como las mousses y los bizcochos esponjosos. Recuerda siempre precalentar el horno y utilizar moldes de la medida correcta para asegurar una cocción uniforme.</p>
        <p>Pero la repostería va más allá del sabor: la presentación es crucial. El uso de glaseados, frutas frescas y elementos decorativos transforma un simple pastel en una pieza central. Recuerda que la decoración debe complementar el sabor, no abrumarlo. La clave está en la sencillez elegante y en el uso de colores naturales. Una buena alternativa es utilizar cacao en polvo o azúcar glasé para acabados rápidos y profesionales, destacando el trabajo artesanal.</p>
      </section>
      <section className={styles.postSecun}>
        <div className={styles.postRow}>
          <img 
            src="/img/post-secun1.webp" 
            srcSet="/img/post-secun1.webp 1000w, /img/post-secun1-800.webp 800w" 
            sizes="50vw" 
            alt="Tarta de queso con base de galleta y coulis de frutos rojos" 
            loading="lazy" 
          />
          <img 
            src="/img/post-secun2.webp" 
            srcSet="/img/post-secun2.webp 1000w, /img/post-secun2-800.webp 800w" 
            sizes="50vw" 
            alt="Galletas de mantequilla recién horneadas" 
            loading="lazy" 
          />
        </div>
        <p>Una de las bases de la repostería es el merengue. Existen tres tipos principales: el francés (el más ligero), el italiano (con jarabe de azúcar caliente para estabilizar) y el suizo (calentado al baño María para conseguir un acabado más denso y brillante). Cada uno tiene un uso específico; el francés es ideal para postres que se hornearán, mientras que el italiano es perfecto para cubrir tartas sin necesidad de cocción, gracias a su estabilidad. Aprender a diferenciar y dominar estas tres técnicas abrirá un mundo de posibilidades en tus postres y creaciones.</p>
        <p>Aprender a hacer una crema pastelera lisa y sin grumos es otro hito fundamental. Esto se logra mezclando las yemas con el azúcar y la maicena antes de añadir la leche caliente. El truco es no dejar de remover hasta que espese y darle un golpe de calor fuerte para que la maicena se cocine correctamente y la crema no sepa a harina. Para evitar que se forme una costra, cúbrela con papel film en contacto directo con la superficie mientras se enfría. Esta crema es la base de muchos postres clásicos, como milhojas, *eclairs* y tartas de frutas.</p>
      </section>
      <section className={styles.postRelacionados}>
        <h1>Artículos o publicaciones relacionadas</h1>
        <div className={styles.postRelacionadosFlex}>
          <article>
            <img 
              src="/img/steak.webp" 
              srcSet="/img/steak.webp 1000w, /img/steak.webp 800w" 
              sizes="50vw" 
              alt="Filete a la parrilla" 
              loading="lazy" 
            />
            <h3>Secretos del Punto de la Carne</h3>
            <p>Por Chef Antonio</p>
          </article>
          <article>
            <img 
              src="/img/frutos.webp" 
              srcSet="/img/frutos.webp 1000w, /img/frutos.webp 800w" 
              sizes="50vw" 
              alt="Frutos rojos" 
              loading="lazy" 
            />
            <h3>Las Frutas de Temporada: Lo Mejor de Otoño</h3>
            <p>Por Equipo Editorial</p>
          </article>
          <article>
            <img 
              src="/img/pasta.webp" 
              srcSet="/img/pasta.webp 1000w, /img/pasta.webp 800w" 
              sizes="50vw" 
              alt="Plato de pasta" 
              loading="lazy" 
            />
            <h3>Dominando la Pasta Casera</h3>
            <p>Por Chef Antonio</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Posts;
