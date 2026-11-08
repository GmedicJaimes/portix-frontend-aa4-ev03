// Pantalla del módulo Empleados: listado con buscador.

import { useState } from "react";
import empleados from "../data/empleados";
import TablaEmpleados from "../components/TablaEmpleados";

function Empleados() {
  // Estado con el texto escrito en el buscador
  const [busqueda, setBusqueda] = useState("");

  // Filtra los empleados por nombre, documento o cargo
  const textoBusqueda = busqueda.toLowerCase();
  const empleadosFiltrados = empleados.filter(
    (empleado) =>
      empleado.nombre.toLowerCase().includes(textoBusqueda) ||
      empleado.documento.includes(textoBusqueda) ||
      empleado.cargo.toLowerCase().includes(textoBusqueda),
  );

  return (
    <div>
      <h2>Listado de empleados</h2>
      <p className="texto-secundario">
        {empleadosFiltrados.length} empleado(s) encontrado(s)
      </p>

      <input
        type="search"
        className="buscador"
        placeholder="Buscar por nombre, documento o cargo..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <TablaEmpleados empleados={empleadosFiltrados} />
    </div>
  );
}

export default Empleados;
