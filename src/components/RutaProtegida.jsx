// Componente que protege las pantallas privadas.
// Si no hay un usuario guardado (sesión iniciada), redirige al login.

import { Navigate } from "react-router-dom";

function RutaProtegida({ children }) {
  const usuario = localStorage.getItem("portixUsuario");

  // Renderizado condicional: muestra el contenido o redirige
  return usuario ? children : <Navigate to="/" replace />;
}

export default RutaProtegida;
