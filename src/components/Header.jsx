const Header = ({ cantidad }) => {
  return (
    <header className="header">
      <h2>Tienda Electronica</h2>
      <span>Carrito: {cantidad}</span>
    </header>
  );
};

export default Header;
