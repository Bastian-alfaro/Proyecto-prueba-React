import Producto from "../components/Producto";

const Productos = ({ productos, onAgregar }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Catálogo de productos</h2>

        <div className="productos">
          {productos.map((p) => (
            <Producto
              key={p.id}
              id={p.id}
              nombre={p.nombre}
              precio={p.precio}
              desc={p.desc}
              img={p.img}
              onAgregar={() => onAgregar(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;
