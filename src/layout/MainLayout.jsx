// Estructura base del dashboard: menú lateral + barra superior + contenido.
// Outlet es el lugar donde React Router muestra la pantalla de cada ruta.

import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../styles/dashboard.css";

// Título que se muestra en la barra superior según la ruta actual
const titulosPorRuta = {
  "/dashboard": "Inicio",
  "/horas": "Registro de horas",
  "/nomina": "Gestión de nómina",
  "/disponibilidad": "Disponibilidad de personal",
  "/empleados": "Empleados",
  "/reportes": "Reportes",
  "/configuracion": "Configuración",
};

function MainLayout() {
  // Estado que controla si el menú móvil está abierto
  const [menuAbierto, setMenuAbierto] = useState(false);
  const ubicacion = useLocation();

  const usuario = localStorage.getItem("portixUsuario");
  const titulo = titulosPorRuta[ubicacion.pathname] || "Portix";

  return (
    <div className="dashboard-container">
      <Sidebar abierto={menuAbierto} onCerrar={() => setMenuAbierto(false)} />

      <main className="main-content">
        <Topbar
          titulo={titulo}
          usuario={usuario}
          onAlternarMenu={() => setMenuAbierto(!menuAbierto)}
        />
        <section className="content-area">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default MainLayout;
