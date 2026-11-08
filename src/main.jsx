// Punto de entrada de la aplicación React.
// BrowserRouter habilita la navegación entre pantallas sin recargar la página.
// EmpleadosProvider comparte la lista de empleados con toda la aplicación.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { EmpleadosProvider } from "./context/EmpleadosContext.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <EmpleadosProvider>
        <App />
      </EmpleadosProvider>
    </BrowserRouter>
  </StrictMode>,
);
