// Campo de formulario reutilizable: etiqueta + campo de entrada + mensaje de error.
// Sirve para campos de texto, fecha, correo, etc., y también para listas
// desplegables (cuando se le pasa el arreglo "opciones").
// Props:
//   - etiqueta: texto de la etiqueta.
//   - nombre: nombre del campo (debe coincidir con la propiedad del objeto de datos).
//   - tipo: tipo de input ('text', 'email', 'date'...). Por defecto 'text'.
//   - valor: valor actual del campo (formulario controlado).
//   - onChange: función que se ejecuta cuando el usuario escribe o selecciona.
//   - error: mensaje de error a mostrar.
//   - opciones: arreglo de textos para crear un <select> (opcional).

import MensajeError from "./MensajeError";

function CampoFormulario({
  etiqueta,
  nombre,
  tipo = "text",
  valor,
  onChange,
  error,
  opciones,
}) {
  return (
    <div className={`campo ${error ? "campo-error" : ""}`}>
      <label htmlFor={nombre}>{etiqueta}</label>

      {opciones ? (
        <select id={nombre} name={nombre} value={valor} onChange={onChange}>
          {opciones.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={nombre}
          name={nombre}
          type={tipo}
          value={valor}
          onChange={onChange}
        />
      )}

      <MensajeError mensaje={error} />
    </div>
  );
}

export default CampoFormulario;
