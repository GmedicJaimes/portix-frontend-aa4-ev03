// Barra superior del dashboard.
// Props:
//   - titulo: título de la sección actual.
//   - usuario: nombre del usuario autenticado.
//   - onAlternarMenu: función que abre/cierra el menú lateral en móvil.

function Topbar({ titulo, usuario, onAlternarMenu }) {
  return (
    <header className="topbar">
      <button
        className="btn-toggle-sidebar"
        onClick={onAlternarMenu}
        aria-label="Abrir menú"
      >
        ☰
      </button>
      <h1>{titulo}</h1>
      <span className="user-info">{usuario}</span>
    </header>
  );
}

export default Topbar;
