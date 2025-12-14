import { Link } from "react-router-dom";
import { useState } from "react";

const Carrito = ({ carrito, onSumar, onRestar, onEliminar }) => {
  const [pago, setPago] = useState("tarjeta");

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Carrito de compras</h2>

        {carrito.length === 0 ? (
          <>
            <p className="texto">Tu carrito esta vacio.</p>
            <Link to="/productos" className="btn">
              Explorar productos
            </Link>
          </>
        ) : (
          <>
            {carrito.map((p) => (
              <div key={p.id} className="carritoItem">
                <div>
                  <strong>{p.nombre}</strong>
                  <p>${p.precio}</p>
                </div>

                <div className="carritoControles">
                  <button onClick={() => onRestar(p.id)}>-</button>
                  <span>{p.cantidad}</span>
                  <button onClick={() => onSumar(p.id)}>+</button>
                </div>

                <button
                  className="btnEliminar"
                  onClick={() => onEliminar(p.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}

            <h3>Total a pagar: ${total}</h3>

            <h4>Metodo de pago</h4>
            <select value={pago} onChange={(e) => setPago(e.target.value)}>
              <option value="tarjeta">Tarjeta credito / debito</option>
              <option value="transferencia">Transferencia bancaria</option>
              <option value="efectivo">Efectivo</option>
            </select>

            <div style={{ marginTop: "15px" }}>
              <Link to="/productos" className="btn">
                Seguir comprando
              </Link>
              <button className="btn" style={{ marginLeft: "10px" }}>
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Carrito;
