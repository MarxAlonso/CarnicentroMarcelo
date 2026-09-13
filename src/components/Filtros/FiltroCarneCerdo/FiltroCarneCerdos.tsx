"use client";

import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { PriceFilter } from "./components/PriceFilterProps";
import { CategoryFilter } from "./components/CategoryFilterProps";
import { ProductCard } from "./components/ProductCardProps";
import { cortesPorTipo } from "@/content/catalogo";

/**
 * Catálogo filtrable de cortes de cerdo.
 *
 * Igual que el de res: las tarjetas navegan a la ficha del corte en vez de
 * abrir un modal, y los datos salen del catálogo unificado.
 */
export const FiltroCarneCerdos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [ordenPrecio, setOrdenPrecio] = useState<"asc" | "desc" | "none">("none");
  const [sugerencias, setSugerencias] = useState<string[]>([]);

  const cortes = cortesPorTipo("cerdo");

  const productosFiltrados = cortes
    .filter((corte) => {
      const coincideBusqueda = corte.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideCategoria =
        categoriaSeleccionada === "Todos" || corte.categoria === categoriaSeleccionada;
      return coincideBusqueda && coincideCategoria;
    })
    .sort((a, b) => {
      if (ordenPrecio === "asc") return a.precio - b.precio;
      if (ordenPrecio === "desc") return b.precio - a.precio;
      return 0;
    });

  const handleBusquedaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setBusqueda(valor);
    setSugerencias(
      valor
        ? cortes.filter((p) => p.nombre.toLowerCase().includes(valor.toLowerCase())).map((p) => p.nombre)
        : []
    );
  };

  return (
    <div className="mx-auto w-full max-w-site px-4 py-8" id="productoscerdos">
      <SearchBar
        busqueda={busqueda}
        onBusquedaChange={handleBusquedaChange}
        sugerencias={sugerencias}
        onSugerenciaClick={(sugerencia) => {
          setBusqueda(sugerencia);
          setSugerencias([]);
        }}
      />
      <PriceFilter ordenPrecio={ordenPrecio} setOrdenPrecio={setOrdenPrecio} />
      <CategoryFilter
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productosFiltrados.map((corte) => (
          // El estado del filtro entra en el key para que la animación de
          // entrada se repita en cada cambio.
          <ProductCard key={`${categoriaSeleccionada}-${ordenPrecio}-${corte.slug}`} corte={corte} />
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <p className="py-12 text-center text-ink-muted">
          No encontramos cortes con ese nombre. Prueba con otra palabra o escríbenos por WhatsApp.
        </p>
      )}
    </div>
  );
};
