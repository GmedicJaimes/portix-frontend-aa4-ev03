// Mensaje de validación que se muestra debajo de un campo.
// Props:
//   - mensaje: texto del error (si está vacío, no muestra nada).

function MensajeError({ mensaje }) {
  // Renderizado condicional: solo aparece si hay un error
  if (!mensaje) return null;

  return <span className="error-message">{mensaje}</span>;
}

export default MensajeError;
