import { useParams, Link } from "react-router-dom";

const DetalleProducto = ({ productos, onAgregar }) => {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return (
      <div className="container">
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className="btn">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container detalle">
        <div className="detalle__img">
          <img src={producto.img} alt={producto.nombre} />
        </div>

        <div className="detalle__info">
          <h2>{producto.nombre}</h2>
          <p className="detalle__precio">${producto.precio}</p>
          <p>{producto.desc}</p>

          <h4>Características principales</h4>
          <ul className="detalle__lista">
            <li>
              <strong>Procesador:</strong> {producto.procesador}
            </li>
            <li>
              <strong>RAM:</strong> {producto.ram}
            </li>
            <li>
              <strong>Almacenamiento:</strong> {producto.almacenamiento}
            </li>
            <li>
              <strong>Conectividad:</strong> {producto.conectividad}
            </li>
          </ul>

          <button className="btn" onClick={() => onAgregar(producto)}>
            Agregar al carrito
          </button>

          <br />
          <br />
          <Link to="/productos">← Volver al catálogo</Link>
        </div>
      </div>
    </section>
  );
};

export default DetalleProducto;
