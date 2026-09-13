"use client";

import Link from "next/link";
import { useState } from "react";
import { NavbarMenu } from "./NavbarData";
import { FaShoppingBasket } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

/**
 * Menú móvil sin framer-motion: la apertura la hace la clase `menu-movil-in`.
 *
 * Además cierra al navegar —antes el panel se quedaba abierto encima de la
 * página nueva— y el submenú desplegable ya es un `<button>`, no un `div` con
 * `onClick`.
 */
export const ResponsiveMenu = ({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: () => void;
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  if (!open) return null;

  return (
    <div
      id="menu-movil"
      className="menu-movil-in fixed left-0 top-20 z-50 h-screen w-full bg-black/60 backdrop-blur-lg md:hidden"
    >
      <div className="m-4 rounded-2xl bg-brand px-6 py-8 text-cream shadow-lg">
        <ul className="flex flex-col items-center justify-center gap-4">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="w-full text-center">
              {item.submenu ? (
                <>
                  <button
                    type="button"
                    aria-expanded={activeSubmenu === item.id}
                    onClick={() => setActiveSubmenu((prev) => (prev === item.id ? null : item.id))}
                    className="inline-flex w-full items-center justify-center gap-1 rounded-xl px-6 py-3 text-lg font-semibold transition-all duration-300 hover:bg-brand-deep"
                  >
                    {item.title}
                    <MdKeyboardArrowDown
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        activeSubmenu === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeSubmenu === item.id && (
                    <ul className="submenu-in mt-2 overflow-hidden rounded-lg bg-brand-deep">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.link} className="w-full">
                          <Link
                            href={subItem.link}
                            onClick={onNavigate}
                            className="block w-full px-8 py-2 text-left text-cream transition-all duration-300 hover:translate-x-1 hover:text-white"
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
                  className="inline-block w-full rounded-xl px-6 py-3 text-lg font-semibold transition-all duration-300 hover:bg-brand-deep"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}

          <li className="mt-4 w-full">
            <Link
              href="/contacto"
              onClick={onNavigate}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-deep px-8 py-3 font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:bg-brand active:scale-95"
            >
              <FaShoppingBasket aria-hidden="true" />
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
