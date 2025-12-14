import { Link } from "react-router-dom";

const Producto = ({ id, nombre, precio, desc, img, onAgregar }) => {
  return (
    <div className="card">
      <Link to={`/producto/${id}`}>
        <img src={img} alt={nombre} className="card__img" />
      </Link>

      <div className="card__body">
        <Link to={`/producto/${id}`}>
          <h3>{nombre}</h3>
        </Link>

        <p className="card__desc">{desc}</p>
        <p className="card__price">${precio}</p>

        <button className="btn" onClick={onAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Producto;
