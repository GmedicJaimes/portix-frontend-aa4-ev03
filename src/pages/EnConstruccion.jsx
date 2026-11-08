// Pantalla genérica para los módulos que se desarrollarán en etapas posteriores.
// Props:
//   - titulo: nombre del módulo.

function EnConstruccion({ titulo }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p className="texto-secundario">
        Este módulo se encuentra en desarrollo y estará disponible próximamente.
      </p>
    </div>
  );
}

export default EnConstruccion;
