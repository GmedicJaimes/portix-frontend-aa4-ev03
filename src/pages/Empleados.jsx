// Pantalla del módulo Empleados: CRUD completo.
//   C (Crear)      -> botón "Nuevo empleado" + formulario.
//   R (Leer)       -> tabla con buscador.
//   U (Actualizar) -> botón "Editar" en cada fila.
//   D (Eliminar)   -> botón "Eliminar" con confirmación.

import { useState } from "react";
import { useEmpleados } from "../context/EmpleadosContext";
import TablaEmpleados from "../components/TablaEmpleados";
import FormularioEmpleado from "../components/FormularioEmpleado";
import Boton from "../components/Boton";

function Empleados() {
  // Datos y operaciones que provee el contexto
  const { empleados, agregarEmpleado, actualizarEmpleado, eliminarEmpleado } =
    useEmpleados();

  const [busqueda, setBusqueda] = useState(""); // Texto del buscador
  const [vista, setVista] = useState("lista"); // 'lista' o 'formulario'
  const [empleadoEditando, setEmpleadoEditando] = useState(null); // Empleado en edición (null = nuevo)
  const [mensaje, setMensaje] = useState(""); // Mensaje de confirmación

  // Filtra los empleados por nombre, documento o cargo
  const textoBusqueda = busqueda.toLowerCase();
  const empleadosFiltrados = empleados.filter(
    (empleado) =>
      empleado.nombre.toLowerCase().includes(textoBusqueda) ||
      empleado.documento.includes(textoBusqueda) ||
      empleado.cargo.toLowerCase().includes(textoBusqueda),
  );

  // Abre el formulario vacío para registrar un empleado
  const abrirFormularioNuevo = () => {
    setEmpleadoEditando(null);
    setMensaje("");
    setVista("formulario");
  };

  // Abre el formulario con los datos del empleado seleccionado
  const abrirFormularioEdicion = (empleado) => {
    setEmpleadoEditando(empleado);
    setMensaje("");
    setVista("formulario");
  };

  // Guarda los datos: actualiza si se está editando, o crea si es nuevo
  const guardarEmpleado = (datos) => {
    if (empleadoEditando) {
      actualizarEmpleado(empleadoEditando.id, datos);
      setMensaje("Empleado actualizado correctamente.");
    } else {
      agregarEmpleado(datos);
      setMensaje("Empleado registrado correctamente.");
    }
    setVista("lista");
  };

  // Pide confirmación y elimina el empleado
  const confirmarEliminacion = (empleado) => {
    if (window.confirm(`¿Seguro que deseas eliminar a ${empleado.nombre}?`)) {
      eliminarEmpleado(empleado.id);
      setMensaje("Empleado eliminado correctamente.");
    }
  };

  // Vista del formulario (registrar o editar)
  if (vista === "formulario") {
    return (
      <FormularioEmpleado
        key={empleadoEditando ? empleadoEditando.id : "nuevo"}
        empleadoInicial={empleadoEditando}
        empleados={empleados}
        onGuardar={guardarEmpleado}
        onCancelar={() => setVista("lista")}
      />
    );
  }

  // Vista del listado
  return (
    <div>
      <div className="encabezado-pagina">
        <div>
          <h2>Listado de empleados</h2>
          <p className="texto-secundario">
            {empleadosFiltrados.length} empleado(s) encontrado(s)
          </p>
        </div>
        <Boton texto="+ Nuevo empleado" onClick={abrirFormularioNuevo} />
      </div>

      {/* Mensaje de confirmación (solo aparece si hay texto) */}
      {mensaje && <div className="alerta-exito">{mensaje}</div>}

      <div className="barra-herramientas">
        <input
          type="search"
          className="buscador"
          placeholder="Buscar por nombre, documento o cargo..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <TablaEmpleados
        empleados={empleadosFiltrados}
        onEditar={abrirFormularioEdicion}
        onEliminar={confirmarEliminacion}
      />
    </div>
  );
}

export default Empleados;
