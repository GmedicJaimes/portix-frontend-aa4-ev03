// Componente raíz: define las rutas (pantallas) del sistema Portix.

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Empleados from "./pages/Empleados";
import EnConstruccion from "./pages/EnConstruccion";
import MainLayout from "./layout/MainLayout";
import RutaProtegida from "./components/RutaProtegida";

function App() {
  return (
    <Routes>
      {/* Ruta pública: pantalla de inicio de sesión */}
      <Route path="/" element={<Login />} />

      {/* Rutas privadas: solo accesibles después de iniciar sesión.
          MainLayout aporta el menú lateral y la barra superior. */}
      <Route
        element={
          <RutaProtegida>
            <MainLayout />
          </RutaProtegida>
        }
      >
        <Route path="/dashboard" element={<Inicio />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route
          path="/horas"
          element={<EnConstruccion titulo="Registro de horas" />}
        />
        <Route
          path="/nomina"
          element={<EnConstruccion titulo="Gestión de nómina" />}
        />
        <Route
          path="/disponibilidad"
          element={<EnConstruccion titulo="Disponibilidad de personal" />}
        />
        <Route
          path="/reportes"
          element={<EnConstruccion titulo="Reportes" />}
        />
        <Route
          path="/configuracion"
          element={<EnConstruccion titulo="Configuración" />}
        />
      </Route>

      {/* Cualquier ruta desconocida regresa al login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
