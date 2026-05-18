import React, { useState } from 'react';
import styles from './Tienda.module.css';

const productos = [
  {
    id: 1,
    nombre: 'Piña Tropical',
    subtitulo: 'Directa de Canarias',
    precio: '10.99€',
    desc: 'Una piña dulce y jugosa, perfecta para postres, zumos o para disfrutar sola. Cultivada con mimo y recogida en su punto óptimo de maduración.',
    nota: 'Precio por unidad. Peso aproximado: 1.5kg.',
    img: '/img/pina.webp',
    imgSet: '/img/pina.webp 1000w, /img/pina-800.webp 800w'
  },
  {
    id: 2,
    nombre: 'Cerezas del Jerte',
    subtitulo: 'Temporada de verano',
    precio: '10.99€',
    desc: 'Las auténticas cerezas del Valle del Jerte, dulces y crujientes. Ideales para un tentempié saludable o para acompañar tus postres. Imprescindibles en verano.',
    nota: 'Precio por kilogramo. Origen: Cáceres, España.',
    img: '/img/cerezas.webp',
    imgSet: '/img/cerezas.webp 1000w, /img/cerezas-800.webp 800w'
  },
  {
    id: 3,
    nombre: 'Naranjas de Zumo',
    subtitulo: 'De la huerta valenciana',
    precio: '10.99€',
    desc: 'Naranjas seleccionadas por su alto contenido en zumo y su sabor inigualable. La mejor forma de empezar el día con energía y vitamina C.',
    nota: 'Caja de 5kg. Calibre medio.',
    img: '/img/naranjas.webp',
    imgSet: '/img/naranjas.webp 1000w, /img/naranjas-800.webp 800w'
  },
  {
    id: 4,
    nombre: 'Sandía Rayada',
    subtitulo: 'Refrescante y dulce',
    precio: '12.99€',
    desc: 'La fruta estrella del verano. Gran tamaño, pulpa roja intensa y un dulzor natural. Perfecta para hidratarse y disfrutar en familia o amigos.',
    nota: 'Precio por unidad. Peso aproximado: 6-8kg.',
    img: '/img/sandia.webp',
    imgSet: '/img/sandia.webp 1000w, /img/sandia-800.webp 800w'
  },
  {
    id: 5,
    nombre: 'Limones Ecológicos',
    subtitulo: 'Cítricos de máxima calidad',
    precio: '5.49€',
    desc: 'Limones sin tratar, con una piel gruesa y aromática, perfectos tanto para aderezar platos como para cócteles y repostería. Un básico esencial.',
    nota: 'Malla de 1kg. Piel apta para ralladura.',
    img: '/img/limones.webp',
    imgSet: '/img/limones.webp 1000w, /img/limones-800.webp 800w'
  },
  {
    id: 6,
    nombre: 'Mix de Frutos Rojos',
    subtitulo: 'Arándanos, frambuesas y moras',
    precio: '7.99€',
    desc: 'Una selección de los mejores frutos del bosque, llenos de antioxidantes y sabor. Ideales para desayunos, yogures o batidos. Muy saludable.',
    nota: 'Tarrina de 250g. Consumir en frío.',
    img: '/img/frutos.webp',
    imgSet: '/img/frutos.webp 1000w, /img/frutos-800.webp 800w'
  },
  {
    id: 7,
    nombre: 'Granada Mollar',
    subtitulo: 'Dulce y sabrosa',
    precio: '10.00€',
    desc: 'Granada con pepitas pequeñas y muy dulces. Sus granos son perfectos para ensaladas, postres o para tomar solos. Una fuente de vitaminas y color.',
    nota: 'Pack de 3 unidades. Temporada de otoño.',
    img: '/img/granada.webp',
    imgSet: '/img/granada.webp 1000w, /img/granada-800.webp 800w'
  },
  {
    id: 8,
    nombre: 'Caqui Persimon',
    subtitulo: 'El mejor de la temporada',
    precio: '15.00€',
    desc: 'Caquis de pulpa firme y sabor delicado. Se consumen como una manzana. Una fruta muy versátil y nutritiva para cualquier momento del día.',
    nota: 'Caja de 3kg. Variedad de la Ribera del Xúquer.',
    img: '/img/caquis.webp',
    imgSet: '/img/caquis.webp 1000w, /img/caquis-800.webp 800w'
  },
  {
    id: 9,
    nombre: 'Pomelo Rosado',
    subtitulo: 'Cítrico y ligeramente amargo',
    precio: '10.99€',
    desc: 'Pomelos jugosos con un equilibrio perfecto entre dulce y ácido. Ideal para desayunos o para zumos détox. Muy bajo en calorías y refrescante.',
    nota: 'Malla de 2kg. Calibre grande.',
    img: '/img/pomelo.webp',
    imgSet: '/img/pomelo.webp 1000w, /img/pomelo-800.webp 800w'
  }
];

const Tienda = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className={styles.articuloPrincipal}>
        {selectedProduct ? (
          <>
            <img 
              src={selectedProduct.img} 
              srcSet={selectedProduct.imgSet}
              sizes="50vw" 
              alt={selectedProduct.nombre} 
              loading="lazy" 
            />
            <h3>{selectedProduct.nombre}</h3>
            <p>{selectedProduct.subtitulo}</p>
            <span>{selectedProduct.precio}</span>
            <p className={styles.descArticulo}>{selectedProduct.desc}</p>
            <button className="button">Añadir al carrito</button>
            <p className={styles.letraPequena}>{selectedProduct.nota}</p>
          </>
        ) : (
          <h1>Selecciona un producto para ver los detalles</h1>
        )}
      </section>
      <section className={styles.articulosTotales}>
        <h1>Nuestros Productos Frescos</h1>
        <div className={styles.articulosTotalesFlex}>
          {productos.map((prod) => (
            <article key={prod.id} onClick={() => setSelectedProduct(prod)}>
              <img 
                src={prod.img} 
                srcSet={prod.imgSet}
                sizes="50vw" 
                alt={prod.nombre} 
                loading="lazy" 
              />
              <h3>{prod.nombre}</h3>
              <p>{prod.subtitulo}</p>
              <span>{prod.precio}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tienda;
