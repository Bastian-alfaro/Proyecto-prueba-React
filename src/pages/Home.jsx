const Home = ({ topDelDia, onAgregar }) => {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1>Bienvenido a ElectroStore</h1>
          <p>Tecnología, buenos precios y compra segura</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">🔥 Lo más TOP del día</h2>

          <div className="productos">
            {topDelDia.map((p) => (
              <div key={p.id} className="card">
                <img src={p.img} alt={p.nombre} className="card__img" />
                <div className="card__body">
                  <h3>{p.nombre}</h3>
                  <p className="card__price">${p.precio}</p>
                  <button className="btn" onClick={() => onAgregar(p)}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
