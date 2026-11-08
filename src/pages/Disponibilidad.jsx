// Pantalla del módulo Disponibilidad de personal.
// Muestra una tarjeta por trabajador indicando si está disponible o no,
// con un filtro por estado. Usa los mismos datos que el módulo Empleados.

import { useState } from "react";
import { useEmpleados } from "../context/EmpleadosContext";
import TarjetaEstado from "../components/TarjetaEstado";

function Disponibilidad() {
  const { empleados } = useEmpleados();

  // Estado del filtro seleccionado: 'Todos', 'Activo' o 'Inactivo'
  const [filtro, setFiltro] = useState("Todos");

  // Aplica el filtro a la lista
  const empleadosFiltrados = empleados.filter(
    (empleado) => filtro === "Todos" || empleado.estado === filtro,
  );

  return (
    <div>
      <h2>Disponibilidad de personal</h2>
      <p className="texto-secundario">
        {empleadosFiltrados.length} trabajador(es) mostrado(s)
      </p>

      <div className="barra-herramientas">
        <select
          className="buscador"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Activo">Disponibles</option>
          <option value="Inactivo">No disponibles</option>
        </select>
      </div>

      <div className="tarjetas-estado">
        {empleadosFiltrados.map((empleado) => (
          <TarjetaEstado
            key={empleado.id}
            nombre={empleado.nombre}
            cargo={empleado.cargo}
            estado={empleado.estado}
          />
        ))}
      </div>
    </div>
  );
}

export default Disponibilidad;
