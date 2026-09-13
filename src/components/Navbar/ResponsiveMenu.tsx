"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavbarMenu } from "./NavbarData";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { BuscadorCarnes } from "@/components/Buscador/BuscadorCarnes";
import { SITE, whatsappUrl } from "@/lib/site";

/**
 * Menú móvil.
 *
 * Pasa a ocupar la pantalla completa desde `inset-0`. Antes colgaba de
 * `top-20`, una altura escrita a mano que dejó de coincidir en cuanto la barra
 * empezó a encogerse con el scroll.
 *
 * El buscador se monta solo cuando el menú se abre: si estuviera siempre en el
 * DOM, cargaría el catálogo en cada visita aunque nadie lo desplegara.
 */
export const ResponsiveMenu = ({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: () => void;
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  // Con el menú abierto, el fondo no debe desplazarse.
  useEffect(() => {
    if (!open) return;
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === "Escape") onNavigate();
    };
    window.addEventListener("keydown", alPulsar);

    return () => {
      document.body.style.overflow = previo;
      window.removeEventListener("keydown", alPulsar);
    };
  }, [open, onNavigate]);

  if (!open) return null;

  return (
    <div
      id="menu-movil"
      className="menu-movil-in fixed inset-0 z-[1100] flex flex-col bg-brand lg:hidden"
    >
      <div className="flex shrink-0 items-center justify-between px-4 py-3">
        <Link href="/" onClick={onNavigate} aria-label="Carnicentro Marcelo, ir al inicio">
          <Image
            src="/logo2-carnicentromarcelo.png"
            alt="Carnicentro Marcelo"
            width={160}
            height={48}
            className="h-11 w-auto rounded-xl object-contain"
          />
        </Link>
        <button
          type="button"
          onClick={onNavigate}
          aria-label="Cerrar menú"
          className="flex h-10 w-10 items-center justify-center rounded-full text-cream transition-colors hover:bg-brand-deep"
        >
          <MdClose className="text-3xl" aria-hidden="true" />
        </button>
      </div>

      <div className="shrink-0 px-4 pb-4">
        <BuscadorCarnes onNavegar={onNavigate} />
      </div>

      <nav className="flex-1 overflow-y-auto px-4 pb-4">
        <ul className="flex flex-col">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="border-b border-cream/20">
              {item.submenu ? (
                <>
                  <button
                    type="button"
                    aria-expanded={activeSubmenu === item.id}
                    onClick={() => setActiveSubmenu((prev) => (prev === item.id ? null : item.id))}
                    className="flex w-full items-center justify-between py-4 text-left font-display text-xl font-semibold text-cream"
                  >
                    {item.title}
                    <MdKeyboardArrowDown
                      aria-hidden="true"
                      className={`text-2xl transition-transform duration-200 ${
                        activeSubmenu === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeSubmenu === item.id && (
                    <ul className="submenu-in overflow-hidden pb-2">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.link}>
                          <Link
                            href={subItem.link}
                            onClick={onNavigate}
                            className="block rounded-lg px-4 py-2.5 text-base text-cream/90 transition-colors hover:bg-brand-deep hover:text-white"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.link}
                  onClick={onNavigate}
                  className="block py-4 font-display text-xl font-semibold text-cream transition-colors hover:text-white"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="shrink-0 border-t border-cream/20 p-4">
        <a
          href={whatsappUrl("Hola, quiero hacer un pedido.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cream py-3.5 font-semibold text-brand-ink-deep transition-transform duration-200 active:scale-95"
        >
          <FaWhatsapp className="text-xl" aria-hidden="true" />
          Pedir por WhatsApp
        </a>
        <a
          href={`tel:${SITE.phone}`}
          className="mt-2 block text-center text-sm text-cream/80"
        >
          o llama al {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  );
};
