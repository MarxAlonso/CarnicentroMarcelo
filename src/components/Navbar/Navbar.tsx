"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdMenu, MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { ResponsiveMenu } from "./ResponsiveMenu";
import { NavbarMenu } from "./NavbarData";
import { BotonTema } from "@/components/Tema/BotonTema";

/**
 * Barra de navegación sin framer-motion.
 *
 * Va en el layout, así que su coste se pagaba en todas las páginas. El submenú
 * ahora se abre por CSS (`group-hover` + `group-focus-within`), lo que además
 * lo hace accesible con teclado: antes solo respondía a `onMouseEnter` y quien
 * navega con Tab no podía abrirlo.
 */
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="relative z-[1000] bg-brand shadow-lg">
        <div className="mx-auto w-full max-w-site flex items-center justify-between px-6 py-2">
          <Link
            href="/"
            aria-label="Carnicentro Marcelo, ir al inicio"
            className="transition-transform duration-200 hover:scale-105"
          >
            <Image
              src="/logo2-carnicentromarcelo.png"
              alt="Carnicentro Marcelo"
              width={200}
              height={64}
              priority
              className="h-14 w-auto rounded-xl object-contain shadow-lg sm:h-16"
            />
          </Link>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="group relative">
                  {item.submenu ? (
                    <>
                      {/* Es un disparador de menú, no un enlace: antes era un
                          <a href="#"> con preventDefault. */}
                      <button
                        type="button"
                        aria-haspopup="true"
                        className="inline-flex items-center gap-1 rounded-lg px-4 py-2 font-semibold text-cream transition-all duration-300 hover:bg-brand-deep hover:text-white"
                      >
                        {item.title}
                        <MdKeyboardArrowDown
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                        />
                      </button>
                      <ul className="invisible absolute left-0 top-full z-[1001] mt-2 min-w-[200px] -translate-y-1 rounded-lg bg-brand py-2 opacity-0 shadow-lg transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.link}>
                            <Link
                              href={subItem.link}
                              className="block px-4 py-2 text-cream transition-all duration-300 hover:translate-x-1 hover:bg-brand-deep hover:text-white"
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
                      className="inline-block rounded-lg px-4 py-2 font-semibold text-cream transition-all duration-300 hover:scale-105 hover:bg-brand-deep hover:text-white"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <BotonTema />

            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="menu-movil"
              className="cursor-pointer text-white transition-transform duration-200 hover:scale-110 active:scale-95 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <MdClose className="text-4xl transition-colors hover:text-cream" />
              ) : (
                <MdMenu className="text-4xl transition-colors hover:text-cream" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} onNavigate={() => setOpen(false)} />
    </>
  );
};
