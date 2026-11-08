// Pantalla de inicio de sesión de Portix.
// Valida los campos y, si son correctos, guarda el usuario y entra al dashboard.
// (Autenticación simulada: no hay backend en esta etapa del proyecto.)

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  // Estados del formulario (formulario controlado)
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errorUsuario, setErrorUsuario] = useState("");
  const [errorContrasena, setErrorContrasena] = useState("");

  const navigate = useNavigate();

  // Se ejecuta al enviar el formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault(); // Evita que la página se recargue

    let esValido = true;
    setErrorUsuario("");
    setErrorContrasena("");

    if (usuario.trim() === "") {
      setErrorUsuario("Ingresa tu usuario o correo institucional.");
      esValido = false;
    }

    if (contrasena.trim() === "") {
      setErrorContrasena("Ingresa tu contraseña.");
      esValido = false;
    }

    if (!esValido) return;

    // Simulación de sesión: se guarda el usuario en el navegador
    localStorage.setItem("portixUsuario", usuario.trim());
    navigate("/dashboard");
  };

  return (
    <main className="login-container">
      {/* Panel izquierdo: información del sistema */}
      <section className="login-left">
        <div className="brand">
          <h1>PORTIX</h1>
          <p className="subtitle">
            Control y seguimiento de trabajadores portuario
          </p>
        </div>

        <ul className="benefits-list">
          <li>Registro de horas en tiempo real</li>
          <li>Gestión de nómina</li>
          <li>Disponibilidad de personal</li>
        </ul>

        <footer className="login-footer">
          Versión web - compatible con app móvil
        </footer>
      </section>

      {/* Panel derecho: formulario */}
      <section className="login-right">
        <div className="login-form-wrapper">
          <h2>Iniciar Sesión</h2>
          <p className="form-subtitle">
            Ingresa tus credenciales institucionales
          </p>

          <form onSubmit={manejarEnvio} noValidate>
            <label htmlFor="usuario">Usuario / correo institucional</label>
            <input
              type="text"
              id="usuario"
              placeholder="usuario@portix.com"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <span className="error-message">{errorUsuario}</span>

            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              placeholder="••••••••••••"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
            <span className="error-message">{errorContrasena}</span>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" /> Recordar sesión
              </label>
              <a href="#" className="link-forgot">
                Olvidé mi contraseña
              </a>
            </div>

            <button type="submit" className="btn-primary">
              INGRESAR A PORTIX
            </button>

            <div className="divider">
              <span>o</span>
            </div>

            <button
              type="button"
              className="btn-secondary"
              onClick={() =>
                alert(
                  "Funcionalidad de ingreso con código de empleado próximamente.",
                )
              }
            >
              Ingresar con código de empleado
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
