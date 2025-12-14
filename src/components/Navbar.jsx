import { Link } from "react-router-dom";

const Navbar = ({ carritoCantidad }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">ElectroStore</div>

      <div className="navbar__links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/nosotros">Quienes somos</Link>
        <Link to="/contacto">Contactanos</Link>
      </div>

      <Link to="/carrito" className="navbar__carrito">
        Carrito ({carritoCantidad})
      </Link>
    </nav>
  );
};

export default Navbar;
