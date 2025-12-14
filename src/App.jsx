import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";

import "./index.css";

// IMAGENES
import audifonosImg from "./assets/img/audifonos.webp";
import mouseImg from "./assets/img/mouse.webp";
import tecladoImg from "./assets/img/teclado.webp";
import parlanteImg from "./assets/img/parlante.webp";
import webcamImg from "./assets/img/webcam.webp";

function App() {
  const productos = [
    {
      id: 1,
      nombre: "Audífonos Bluetooth",
      precio: 29990,
      desc: "Audífonos inalámbricos con cancelación de ruido",
      img: audifonosImg,
      procesador: "Chip Bluetooth 5.2",
      ram: "No aplica",
      almacenamiento: "No aplica",
      conectividad: "Bluetooth",
    },
    {
      id: 2,
      nombre: "Mouse Gamer",
      precio: 15990,
      desc: "Mouse gamer RGB de alta precisión",
      img: mouseImg,
      procesador: "Sensor óptico PixArt",
      ram: "No aplica",
      almacenamiento: "No aplica",
      conectividad: "USB",
    },
    {
      id: 3,
      nombre: "Teclado Mecánico",
      precio: 45990,
      desc: "Teclado mecánico retroiluminado",
      img: tecladoImg,
      procesador: "Controlador integrado",
      ram: "No aplica",
      almacenamiento: "No aplica",
      conectividad: "USB",
    },
  ];

  const topDelDia = [
    {
      id: 101,
      nombre: "Parlante Bluetooth",
      precio: 19990,
      img: parlanteImg,
    },
    {
      id: 102,
      nombre: "Webcam HD",
      precio: 24990,
      img: webcamImg,
    },
  ];

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  return (
    <BrowserRouter>
      <Navbar carritoCantidad={carrito.reduce((a, p) => a + p.cantidad, 0)} />

      <Routes>
        <Route
          path="/"
          element={<Home topDelDia={topDelDia} onAgregar={agregarAlCarrito} />}
        />
        <Route
          path="/productos"
          element={
            <Productos productos={productos} onAgregar={agregarAlCarrito} />
          }
        />
        <Route
          path="/producto/:id"
          element={
            <DetalleProducto
              productos={productos}
              onAgregar={agregarAlCarrito}
            />
          }
        />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
