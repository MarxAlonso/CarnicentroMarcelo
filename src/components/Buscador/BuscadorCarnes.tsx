"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import { CATALOGO, type Corte } from "@/content/catalogo";

/**
 * Buscador de cortes.
 *
 * El catálogo son 30 piezas y ya viene en el bundle, así que la búsqueda es
 * instantánea y en el cliente: no hay petición, no hay estado de carga y no
 * hace falta rebotar las pulsaciones.
 *
 * Busca por nombre, por categoría y por plato, que es como pregunta la gente:
 * casi nadie escribe «huachalomo», escriben «para guiso» o «lomo saltado».
 *
 * Se maneja entero con teclado: flechas para recorrer, Enter para entrar,
 * Escape para cerrar.
 */

const MAX_RESULTADOS = 6;

/** Normaliza para que «entraña» y «entrana» encuentren lo mismo. */
function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function buscar(consulta: string): Corte[] {
  const q = normalizar(consulta);
  if (q.length < 2) return [];

  const puntuar = (corte: Corte) => {
    const nombre = normalizar(corte.nombre);
    if (nombre.startsWith(q)) return 0; // el mejor resultado posible
    if (nombre.includes(q)) return 1;
    if (corte.platos?.some((p) => normalizar(p).includes(q))) return 2;
    if (normalizar(corte.categoria).includes(q)) return 3;
    if (normalizar(corte.descripcion).includes(q)) return 4;
    return Infinity;
  };

  return CATALOGO.map((corte) => ({ corte, puntos: puntuar(corte) }))
    .filter((x) => x.puntos !== Infinity)
    .sort((a, b) => a.puntos - b.puntos || a.corte.nombre.localeCompare(b.corte.nombre))
    .slice(0, MAX_RESULTADOS)
    .map((x) => x.corte);
}

export function BuscadorCarnes({
  autoFocus = false,
  onNavegar,
  className = "",
}: {
  autoFocus?: boolean;
  /** Se llama al entrar en un resultado; sirve para cerrar el menú móvil. */
  onNavegar?: () => void;
  className?: string;
}) {
  const [consulta, setConsulta] = useState("");
  const [resaltado, setResaltado] = useState(0);
  const [abierto, setAbierto] = useState(false);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listaId = useId();
  const router = useRouter();

  const resultados = useMemo(() => buscar(consulta), [consulta]);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    setResaltado(0);
  }, [consulta]);

  // Cierra al pulsar fuera.
  useEffect(() => {
    const alPulsarFuera = (e: MouseEvent) => {
      if (!contenedorRef.current?.contains(e.target as Node)) setAbierto(false);
    };
    document.addEventListener("mousedown", alPulsarFuera);
    return () => document.removeEventListener("mousedown", alPulsarFuera);
  }, []);

  const irA = (corte: Corte) => {
    setAbierto(false);
    setConsulta("");
    onNavegar?.();
    router.push(corte.ruta);
  };

  const alTeclear = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (resultados.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setResaltado((i) => (i + 1) % resultados.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setResaltado((i) => (i - 1 + resultados.length) % resultados.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      irA(resultados[resaltado]);
    }
  };

  const mostrarPanel = abierto && consulta.length >= 2;

  return (
    <div ref={contenedorRef} className={`relative ${className}`}>
      <div className="flex h-11 items-center gap-2 overflow-hidden rounded-lg border border-cream/40 bg-brand-deep/60 px-3 focus-within:border-cream">
        <MdSearch className="shrink-0 text-xl text-cream/80" aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={consulta}
          onChange={(e) => {
            setConsulta(e.target.value);
            setAbierto(true);
          }}
          onFocus={() => setAbierto(true)}
          onKeyDown={alTeclear}
          placeholder="Buscar corte, plato o categoría…"
          aria-label="Buscar cortes de carne"
          aria-expanded={mostrarPanel}
          aria-controls={listaId}
          aria-autocomplete="list"
          role="combobox"
          autoComplete="off"
          className="w-full bg-transparent py-2 text-sm text-cream placeholder:text-cream/60 focus:outline-none"
        />
        {consulta && (
          <button
            type="button"
            onClick={() => {
              setConsulta("");
              inputRef.current?.focus();
            }}
            aria-label="Limpiar búsqueda"
            className="shrink-0 text-cream/70 transition-colors hover:text-cream"
          >
            <MdClose className="text-lg" aria-hidden="true" />
          </button>
        )}
      </div>

      {mostrarPanel && (
        <div
          id={listaId}
          role="listbox"
          className="submenu-in absolute left-0 right-0 top-full z-[1200] mt-2 overflow-hidden rounded-xl border border-line bg-surface shadow-2xl"
        >
          {resultados.length === 0 ? (
            <p className="px-4 py-5 text-center text-sm text-ink-muted">
              No encontramos ningún corte con{" "}
              <span className="font-semibold text-ink">«{consulta}»</span>.
              <br />
              <span className="text-ink-subtle">
                Prueba con «parrilla», «guiso» o «chicharrón».
              </span>
            </p>
          ) : (
            <ul className="max-h-[380px] overflow-y-auto">
              {resultados.map((corte, i) => (
                <li key={corte.slug} role="option" aria-selected={i === resaltado}>
                  <Link
                    href={corte.ruta}
                    onClick={() => {
                      setAbierto(false);
                      setConsulta("");
                      onNavegar?.();
                    }}
                    onMouseEnter={() => setResaltado(i)}
                    className={`flex items-center gap-3 px-3 py-2.5 transition-colors ${
                      i === resaltado ? "bg-surface-2" : ""
                    }`}
                  >
                    <Image
                      src={corte.imagen}
                      alt=""
                      width={44}
                      height={44}
                      sizes="44px"
                      className="h-11 w-11 shrink-0 rounded-lg object-cover"
                    />
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="truncate text-sm font-semibold text-ink">
                        {corte.nombre}
                      </span>
                      <span className="truncate text-xs text-ink-subtle">
                        {corte.tipo === "res" ? "Res" : "Cerdo"} · {corte.categoria}
                        {corte.platos ? ` · ${corte.platos[0]}` : ""}
                      </span>
                    </span>
                    <span className="shrink-0 text-sm font-bold tabular-nums text-brand-ink">
                      S/ {corte.precio.toFixed(2)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
