"use client";

import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { CLAVE_TEMA } from "./tema";

/**
 * Interruptor de tema.
 *
 * El tema ya está aplicado cuando este componente se monta —lo puso el script
 * inline del `<head>`—, así que aquí solo hace falta leer el estado real del
 * documento y poder cambiarlo.
 *
 * Se renderiza con un hueco del tamaño final antes de montar: si apareciera de
 * golpe, empujaría la barra de navegación al hidratar.
 */
export function BotonTema() {
  const [montado, setMontado] = useState(false);
  const [oscuro, setOscuro] = useState(false);

  useEffect(() => {
    setOscuro(document.documentElement.classList.contains("dark"));
    setMontado(true);

    // Si el visitante no ha elegido a mano, el sitio sigue al sistema en vivo.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const alCambiarSistema = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(CLAVE_TEMA)) return;
      } catch {
        return;
      }
      document.documentElement.classList.toggle("dark", e.matches);
      setOscuro(e.matches);
    };
    mq.addEventListener("change", alCambiarSistema);
    return () => mq.removeEventListener("change", alCambiarSistema);
  }, []);

  const alternar = () => {
    const nuevo = !oscuro;
    document.documentElement.classList.toggle("dark", nuevo);
    setOscuro(nuevo);
    try {
      localStorage.setItem(CLAVE_TEMA, nuevo ? "oscuro" : "claro");
    } catch {
      // Sin almacenamiento el cambio vale solo para esta visita. Aceptable.
    }
  };

  if (!montado) {
    return <span aria-hidden="true" className="block h-10 w-10" />;
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={oscuro ? "Modo claro" : "Modo oscuro"}
      className="flex h-10 w-10 items-center justify-center rounded-full text-cream transition-all duration-200 hover:scale-110 hover:bg-brand-deep active:scale-95"
    >
      {oscuro ? (
        <MdLightMode className="text-2xl" aria-hidden="true" />
      ) : (
        <MdDarkMode className="text-2xl" aria-hidden="true" />
      )}
    </button>
  );
}
