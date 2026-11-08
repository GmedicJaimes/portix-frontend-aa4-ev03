// Contexto de React que comparte la lista de empleados con toda la aplicación.
// Evita pasar los datos por props entre muchos componentes y centraliza
// las operaciones del CRUD (agregar, actualizar y eliminar).

import { createContext, useContext, useEffect, useState } from "react";
import empleadosIniciales from "../data/empleados";

const EmpleadosContext = createContext(null);

// Clave con la que se guardan los datos en el navegador
const CLAVE_ALMACENAMIENTO = "portixEmpleados";

export function EmpleadosProvider({ children }) {
  // Estado inicial: usa lo guardado en el navegador o, si no hay nada,
  // los datos de ejemplo del archivo data/empleados.js
  const [empleados, setEmpleados] = useState(() => {
    const guardados = localStorage.getItem(CLAVE_ALMACENAMIENTO);
    return guardados ? JSON.parse(guardados) : empleadosIniciales;
  });

  // Cada vez que la lista cambia, se guarda en el navegador
  useEffect(() => {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(empleados));
  }, [empleados]);

  // CREAR: agrega un empleado nuevo asignándole el siguiente id disponible
  const agregarEmpleado = (datos) => {
    const nuevoId =
      empleados.length > 0 ? Math.max(...empleados.map((e) => e.id)) + 1 : 1;
    setEmpleados([...empleados, { ...datos, id: nuevoId }]);
  };

  // ACTUALIZAR: reemplaza los datos del empleado con el id indicado
  const actualizarEmpleado = (id, datos) => {
    setEmpleados(
      empleados.map((e) => (e.id === id ? { ...e, ...datos, id } : e)),
    );
  };

  // ELIMINAR: quita de la lista al empleado con el id indicado
  const eliminarEmpleado = (id) => {
    setEmpleados(empleados.filter((e) => e.id !== id));
  };

  return (
    <EmpleadosContext.Provider
      value={{
        empleados,
        agregarEmpleado,
        actualizarEmpleado,
        eliminarEmpleado,
      }}
    >
      {children}
    </EmpleadosContext.Provider>
  );
}

// Hook personalizado: simplifica el acceso al contexto desde cualquier componente
export function useEmpleados() {
  return useContext(EmpleadosContext);
}
