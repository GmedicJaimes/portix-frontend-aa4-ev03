// Componente reutilizable que muestra una tabla de empleados.
// Props:
//   - empleados: arreglo de objetos con los datos a mostrar.
//   - onEditar: función que se ejecuta al presionar "Editar" (recibe el empleado).
//   - onEliminar: función que se ejecuta al presionar "Eliminar" (recibe el empleado).

import Boton from "./Boton";

function TablaEmpleados({ empleados, onEditar, onEliminar }) {
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
            <th>Acciones</th>
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
              <td>
                <div className="acciones-tabla">
                  <Boton
                    texto="Editar"
                    tipo="secundario"
                    pequeno
                    onClick={() => onEditar(empleado)}
                  />
                  <Boton
                    texto="Eliminar"
                    tipo="peligro"
                    pequeno
                    onClick={() => onEliminar(empleado)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaEmpleados;
