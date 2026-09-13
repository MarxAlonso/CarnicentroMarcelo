"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useState } from "react";

/**
 * Galería de la ficha de producto.
 *
 * Diferencias con la versión del proyecto de origen, y el porqué de cada una:
 *
 *   · `next/image` en vez de `<img>`: las fotos de corte son importaciones
 *     estáticas, así que traen ancho y alto y no provocan salto de maquetación.
 *     Además se sirven en AVIF al tamaño de pantalla.
 *   · No hace falta el control de `onError`: al ser importaciones estáticas, si
 *     una foto no existiera el build fallaría, no la página.
 *   · Cuando hay una sola foto —el caso de casi todos los cortes— no se pintan
 *     miniaturas. Tres recuadros idénticos debajo de la foto no informan de
 *     nada y ocupan media pantalla en móvil.
 */
export function ProductGallery({
  imagenes,
  nombre,
}: {
  imagenes: StaticImageData[];
  nombre: string;
}) {
  const [activa, setActiva] = useState(0);
  const principal = imagenes[Math.min(activa, imagenes.length - 1)];

  return (
    <div className="flex w-full shrink-0 flex-col gap-3 lg:w-[560px]">
      <div className="relative h-[320px] overflow-hidden rounded-2xl border border-line bg-surface-2 sm:h-[440px] lg:h-[520px]">
        <Image
          src={principal}
          alt={`${nombre} — corte fresco de Carnicentro Marcelo`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 560px"
          placeholder="blur"
          className="object-cover"
        />
      </div>

      {imagenes.length > 1 && (
        <div className="flex gap-3">
          {imagenes.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiva(i)}
              aria-label={`Ver foto ${i + 1} de ${nombre}`}
              aria-current={i === activa}
              className={`relative h-20 flex-1 overflow-hidden rounded-lg bg-surface-2 transition-all lg:h-24 ${
                i === activa
                  ? "border-2 border-brand"
                  : "border border-line hover:border-brand/50"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="140px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
