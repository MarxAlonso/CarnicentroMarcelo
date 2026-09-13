"use client";

import { useState } from "react";
import { ExplorarCarnes } from "./ExplorarCarnes";

/**
 * Guarda el estado de la categoría seleccionada.
 *
 * `ExplorarCarnes` recibía `category` y `setCategory` de la página, que en la
 * arquitectura anterior era un componente con estado. Ahora la página se
 * genera en el servidor, así que el estado baja hasta aquí: el envoltorio
 * mínimo que necesita ser cliente, y nada más.
 */
export function ExplorarCarnesSection() {
  const [category, setCategory] = useState("Mas");
  return <ExplorarCarnes category={category} setCategory={setCategory} />;
}
