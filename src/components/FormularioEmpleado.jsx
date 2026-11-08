// Formulario para registrar o editar un empleado, con validaciones.
// Props:
//   - empleadoInicial: datos del empleado a editar (null si es un registro nuevo).
//   - empleados: lista actual de empleados (para validar documentos repetidos).
//   - onGuardar: función que recibe los datos cuando el formulario es válido.
//   - onCancelar: función que se ejecuta al cancelar.

import { useState } from "react";
import CampoFormulario from "./CampoFormulario";
import Boton from "./Boton";

// Valores por defecto de un empleado nuevo (campos del diagrama de clases)
const datosVacios = {
  nombre: "",
  documento: "",
  cargo: "",
  correo: "",
  telefono: "",
  fechaIngreso: "",
  estado: "Activo",
};

function FormularioEmpleado({
  empleadoInicial,
  empleados,
  onGuardar,
  onCancelar,
}) {
  // Estado con los datos del formulario (formulario controlado)
  const [datos, setDatos] = useState(empleadoInicial || datosVacios);
  // Estado con los mensajes de error de cada campo
  const [errores, setErrores] = useState({});

  const esEdicion = Boolean(empleadoInicial);

  // Actualiza el campo que el usuario está modificando
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  };

  // Revisa cada campo y devuelve un objeto con los errores encontrados
  const validar = () => {
    const nuevosErrores = {};

    if (datos.nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!/^\d{5,15}$/.test(datos.documento)) {
      nuevosErrores.documento = "El documento debe tener entre 5 y 15 números.";
    } else {
      // Un documento no puede repetirse en otro empleado
      const repetido = empleados.some(
        (e) => e.documento === datos.documento && e.id !== datos.id,
      );
      if (repetido) {
        nuevosErrores.documento = "Ya existe un empleado con ese documento.";
      }
    }

    if (datos.cargo.trim() === "") {
      nuevosErrores.cargo = "El cargo es obligatorio.";
    }

    if (
      datos.correo.trim() !== "" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)
    ) {
      nuevosErrores.correo = "Ingresa un correo válido.";
    }

    if (datos.telefono.trim() !== "" && !/^\d{7,10}$/.test(datos.telefono)) {
      nuevosErrores.telefono = "El teléfono debe tener entre 7 y 10 números.";
    }

    if (datos.fechaIngreso === "") {
      nuevosErrores.fechaIngreso = "La fecha de ingreso es obligatoria.";
    }

    return nuevosErrores;
  };

  // Se ejecuta al enviar el formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault(); // Evita que la página se recargue

    const nuevosErrores = validar();
    setErrores(nuevosErrores);

    // Si hay errores, no se guarda
    if (Object.keys(nuevosErrores).length > 0) return;

    onGuardar(datos);
  };

  return (
    <div className="formulario-tarjeta">
      <h2>{esEdicion ? "Editar empleado" : "Registrar empleado"}</h2>

      <form onSubmit={manejarEnvio} noValidate>
        <div className="formulario-grid">
          <CampoFormulario
            etiqueta="Nombre completo"
            nombre="nombre"
            valor={datos.nombre}
            onChange={manejarCambio}
            error={errores.nombre}
          />
          <CampoFormulario
            etiqueta="Documento"
            nombre="documento"
            valor={datos.documento}
            onChange={manejarCambio}
            error={errores.documento}
          />
          <CampoFormulario
            etiqueta="Cargo"
            nombre="cargo"
            valor={datos.cargo}
            onChange={manejarCambio}
            error={errores.cargo}
          />
          <CampoFormulario
            etiqueta="Correo"
            nombre="correo"
            tipo="email"
            valor={datos.correo}
            onChange={manejarCambio}
            error={errores.correo}
          />
          <CampoFormulario
            etiqueta="Teléfono"
            nombre="telefono"
            valor={datos.telefono}
            onChange={manejarCambio}
            error={errores.telefono}
          />
          <CampoFormulario
            etiqueta="Fecha de ingreso"
            nombre="fechaIngreso"
            tipo="date"
            valor={datos.fechaIngreso}
            onChange={manejarCambio}
            error={errores.fechaIngreso}
          />
          <CampoFormulario
            etiqueta="Estado"
            nombre="estado"
            valor={datos.estado}
            onChange={manejarCambio}
            opciones={["Activo", "Inactivo"]}
          />
        </div>

        <div className="formulario-acciones">
          <Boton
            texto={esEdicion ? "Guardar cambios" : "Registrar empleado"}
            tipoHtml="submit"
          />
          <Boton texto="Cancelar" tipo="secundario" onClick={onCancelar} />
        </div>
      </form>
    </div>
  );
}

export default FormularioEmpleado;
