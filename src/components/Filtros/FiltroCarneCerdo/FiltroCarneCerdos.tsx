import { useState } from "react";
import { ProductoCerdo, productosCerdo } from "../data-cerdo/productosCerdo";
import { categorias } from "../data-cerdo/categorias";
import { SearchBar } from "./components/SearchBar";
import { PriceFilter } from "./components/PriceFilterProps";
import { CategoryFilter } from "./components/CategoryFilterProps";
import { ProductCard } from "./components/ProductCardProps";
import { ProductModal } from "./components/ProductModalProps";

export const FiltroCarneCerdos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [ordenPrecio, setOrdenPrecio] = useState<"asc" | "desc" | "none">("none");
  const [sugerencias, setSugerencias] = useState<string[]>([]);
  const [modalProducto, setModalProducto] = useState<ProductoCerdo | null>(null);

  // Filtrar y ordenar productos según búsqueda, categoría y precio
  const productosFiltrados = productosCerdo
    .filter((producto) => {
      const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const categoriaObj = categorias.find((cat) => cat.id === producto.categoria);
      const coincideCategoria =
        categoriaSeleccionada === "Todos" || (categoriaObj && categoriaObj.nombre === categoriaSeleccionada);
      return coincideBusqueda && coincideCategoria;
    })
    .sort((a, b) => {
      if (ordenPrecio === "asc") return a.precio - b.precio;
      if (ordenPrecio === "desc") return b.precio - a.precio;
      return 0;
    });

  // Manejar cambios en la búsqueda y mostrar sugerencias
  const handleBusquedaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setBusqueda(valor);

    // Generar sugerencias
    if (valor) {
      const sugerenciasFiltradas = productosCerdo
        .filter((p) => p.nombre.toLowerCase().includes(valor.toLowerCase()))
        .map((p) => p.nombre);
      setSugerencias(sugerenciasFiltradas);
    } else {
      setSugerencias([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8" id="productoscerdos">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productosFiltrados.map((producto) => (
          <ProductCard key={producto.id} producto={producto} onClick={() => setModalProducto(producto)} />
        ))}
      </div>

      {modalProducto && <ProductModal producto={modalProducto} onClose={() => setModalProducto(null)} />}
    </div>
  );
};