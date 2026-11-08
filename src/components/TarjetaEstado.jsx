// Tarjeta que muestra la disponibilidad de un trabajador.
// Props:
//   - nombre: nombre del trabajador.
//   - cargo: cargo del trabajador.
//   - estado: 'Activo' o 'Inactivo' (un empleado activo se considera disponible).

function TarjetaEstado({ nombre, cargo, estado }) {
  const disponible = estado === "Activo";

  return (
    <div
      className={`tarjeta-estado ${disponible ? "disponible" : "no-disponible"}`}
    >
      <h3>{nombre}</h3>
      <p>{cargo}</p>
      <span
        className={`estado ${disponible ? "estado-activo" : "estado-inactivo"}`}
      >
        {disponible ? "Disponible" : "No disponible"}
      </span>
    </div>
  );
}

export default TarjetaEstado;
