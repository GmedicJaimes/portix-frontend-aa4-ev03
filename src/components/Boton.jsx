// Botón reutilizable con tres estilos.
// Props:
//   - texto: texto que muestra el botón.
//   - tipo: 'primario' | 'secundario' | 'peligro' (define el color).
//   - tipoHtml: 'button' o 'submit' (por defecto 'button').
//   - pequeno: si es true, usa un tamaño reducido (útil en tablas).
//   - onClick: función que se ejecuta al hacer clic.

function Boton({
  texto,
  tipo = "primario",
  tipoHtml = "button",
  pequeno = false,
  onClick,
}) {
  const clases = `btn btn-${tipo} ${pequeno ? "btn-sm" : ""}`;

  return (
    <button type={tipoHtml} className={clases} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;
