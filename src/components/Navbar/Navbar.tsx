"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu, MdClose, MdKeyboardArrowDown, MdSearch } from "react-icons/md";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { NavbarMenu } from "./NavbarData";
import { BotonTema } from "@/components/Tema/BotonTema";
import { BuscadorCarnes } from "@/components/Buscador/BuscadorCarnes";

/**
 * Barra de navegación.
 *
 * Va fija arriba (`sticky`), así que acompaña al visitante durante todo el
 * scroll. Para que eso no se coma la pantalla en un móvil, se encoge al bajar:
 * el logo pasa de 64 a 44 px y la barra recupera casi la mitad de su altura.
 *
 * El submenú se abre por CSS (`group-hover` + `group-focus-within`), lo que
 * además lo hace accesible con teclado.
 */
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [buscando, setBuscando] = useState(false);
  const [encogida, setEncogida] = useState(false);

  // Se encoge a partir de 40 px de scroll. El listener es pasivo para no
  // bloquear el desplazamiento, y solo escribe estado cuando el valor cambia
  // de verdad: sin esa comparación React re-renderizaría en cada píxel.
  useEffect(() => {
    const alDesplazar = () => {
      const debeEncoger = window.scrollY > 40;
      setEncogida((actual) => (actual === debeEncoger ? actual : debeEncoger));
    };
    alDesplazar();
    window.addEventListener("scroll", alDesplazar, { passive: true });
    return () => window.removeEventListener("scroll", alDesplazar);
  }, []);

  // Escape cierra la búsqueda.
  useEffect(() => {
    if (!buscando) return;
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBuscando(false);
    };
    window.addEventListener("keydown", alPulsar);
    return () => window.removeEventListener("keydown", alPulsar);
  }, [buscando]);

  return (
    <>
      <header
        className={`sticky top-0 z-[1000] bg-brand transition-shadow duration-300 ${
          encogida ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="mx-auto flex w-full max-w-site items-center gap-4 px-4 sm:px-6">
          <Link
            href="/"
            aria-label="Carnicentro Marcelo, ir al inicio"
            className="shrink-0 py-2 transition-transform duration-200 hover:scale-105"
          >
            <Image
              src="/logo2-carnicentromarcelo.png"
              alt="Carnicentro Marcelo"
              width={200}
              height={64}
              priority
              className={`w-auto rounded-xl object-contain shadow-lg transition-[height] duration-300 ${
                encogida ? "h-11" : "h-14 sm:h-16"
              }`}
            />
          </Link>

          {/* Con la búsqueda abierta los enlaces ceden el sitio, igual que en
              el patrón de referencia: en un ancho de barra no caben los dos. */}
          {!buscando && (
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {NavbarMenu.map((item) => (
                  <li key={item.id} className="group relative">
                    {item.submenu ? (
                      <>
                        <button
                          type="button"
                          aria-haspopup="true"
                          className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-cream transition-all duration-300 hover:bg-brand-deep hover:text-white"
                        >
                          {item.title}
                          <MdKeyboardArrowDown
                            aria-hidden="true"
                            className="transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180"
                          />
                        </button>
                        <ul className="invisible absolute left-0 top-full z-[1001] mt-1 min-w-[200px] -translate-y-1 rounded-lg bg-brand py-2 opacity-0 shadow-xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.link}>
                              <Link
                                href={subItem.link}
                                className="block px-4 py-2 text-sm text-cream transition-all duration-300 hover:translate-x-1 hover:bg-brand-deep hover:text-white"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={item.link}
                        className="inline-block rounded-lg px-3 py-2 text-sm font-semibold text-cream transition-all duration-300 hover:bg-brand-deep hover:text-white"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Buscador desplegado, en escritorio. */}
          {buscando && (
            <div className="buscador-abre hidden flex-1 items-center gap-2 lg:flex">
              <BuscadorCarnes autoFocus className="flex-1" />
              <button
                type="button"
                onClick={() => setBuscando(false)}
                aria-label="Cerrar búsqueda"
                className="shrink-0 rounded-full p-2 text-cream/80 transition-colors hover:bg-brand-deep hover:text-cream"
              >
                <MdClose className="text-xl" aria-hidden="true" />
              </button>
            </div>
          )}

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            {!buscando && (
              <button
                type="button"
                onClick={() => setBuscando(true)}
                aria-label="Buscar cortes"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-cream/40 text-cream transition-colors hover:border-cream hover:bg-brand-deep lg:flex"
              >
                <MdSearch className="text-xl" aria-hidden="true" />
              </button>
            )}

            <BotonTema />

            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="menu-movil"
              className="flex h-10 w-10 items-center justify-center rounded-full text-cream transition-all duration-200 hover:bg-brand-deep active:scale-95 lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <MdClose className="text-3xl" aria-hidden="true" />
              ) : (
                <MdMenu className="text-3xl" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <ResponsiveMenu open={open} onNavigate={() => setOpen(false)} />
    </>
  );
};
