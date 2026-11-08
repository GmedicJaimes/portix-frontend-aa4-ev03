// Pantalla de inicio del dashboard: bienvenida y resumen de empleados.

import empleados from "../data/empleados";

function Inicio() {
  // Cálculo de las cifras del resumen a partir de los datos
  const total = empleados.length;
  const activos = empleados.filter((e) => e.estado === "Activo").length;
  const inactivos = total - activos;

  return (
    <div>
      <h2>Bienvenido a Portix</h2>
      <p className="texto-secundario">
        Selecciona una opción del menú lateral para comenzar.
      </p>

      <div className="tarjetas">
        <div className="tarjeta">
          <span className="tarjeta-numero">{total}</span>
          <span className="tarjeta-texto">Empleados registrados</span>
        </div>
        <div className="tarjeta">
          <span className="tarjeta-numero">{activos}</span>
          <span className="tarjeta-texto">Empleados activos</span>
        </div>
        <div className="tarjeta">
          <span className="tarjeta-numero">{inactivos}</span>
          <span className="tarjeta-texto">Empleados inactivos</span>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
