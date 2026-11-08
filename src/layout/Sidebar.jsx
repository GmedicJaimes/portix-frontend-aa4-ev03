// Menú lateral de navegación del dashboard.
// Props:
//   - abierto: indica si el menú está desplegado (solo afecta a pantallas móviles).
//   - onCerrar: función que cierra el menú.

import { NavLink, useNavigate } from "react-router-dom";

// Opciones del menú (coinciden con los módulos de Portix)
const opcionesMenu = [
  { ruta: "/dashboard", texto: "Inicio" },
  { ruta: "/horas", texto: "Registro de horas" },
  { ruta: "/nomina", texto: "Gestión de nómina" },
  { ruta: "/disponibilidad", texto: "Disponibilidad de personal" },
  { ruta: "/empleados", texto: "Empleados" },
  { ruta: "/reportes", texto: "Reportes" },
  { ruta: "/configuracion", texto: "Configuración" },
];

function Sidebar({ abierto, onCerrar }) {
  const navigate = useNavigate();

  // Cierra la sesión: elimina el usuario guardado y vuelve al login
  const cerrarSesion = () => {
    localStorage.removeItem("portixUsuario");
    navigate("/");
  };

  return (
    <aside className={`sidebar ${abierto ? "open" : ""}`}>
      <div className="sidebar-brand">
        <h2>PORTIX</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {opcionesMenu.map((opcion) => (
            <li key={opcion.ruta}>
              {/* NavLink marca automáticamente la opción activa */}
              <NavLink
                to={opcion.ruta}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={onCerrar}
              >
                {opcion.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button className="btn-logout" onClick={cerrarSesion}>
        Cerrar sesión
      </button>
    </aside>
  );
}

export default Sidebar;
