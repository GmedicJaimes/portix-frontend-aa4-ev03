// Componente reutilizable que muestra una tabla de empleados.
// Props:
//   - empleados: arreglo de objetos con los datos a mostrar.

function TablaEmpleados({ empleados }) {
  // Renderizado condicional: mensaje si no hay resultados
  if (empleados.length === 0) {
    return <p className="mensaje-vacio">No se encontraron empleados.</p>;
  }

  return (
    <div className="tabla-contenedor">
      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Cargo</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Fecha de ingreso</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {/* Se genera una fila por cada empleado del arreglo */}
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.id}</td>
              <td>{empleado.nombre}</td>
              <td>{empleado.documento}</td>
              <td>{empleado.cargo}</td>
              <td>{empleado.correo}</td>
              <td>{empleado.telefono}</td>
              <td>{empleado.fechaIngreso}</td>
              <td>
                <span
                  className={`estado ${empleado.estado === "Activo" ? "estado-activo" : "estado-inactivo"}`}
                >
                  {empleado.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaEmpleados;
