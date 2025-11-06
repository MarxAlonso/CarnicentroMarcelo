import { motion } from "framer-motion";
import { categorias } from "../../data-cerdo/categorias";

interface CategoryFilterProps {
  categoriaSeleccionada: string;
  setCategoriaSeleccionada: (categoria: string) => void;
}

export const CategoryFilter = ({
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {/* Botones de categorías */}
      <div className="flex flex-wrap gap-3 mb-8">
        <motion.button
          onClick={() => setCategoriaSeleccionada("Todos")}
          className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
            categoriaSeleccionada === "Todos"
              ? "bg-[#a90a0a] text-white"
              : "bg-[#fff4bf] text-[#a90a0a] hover:bg-[#a90a0a] hover:text-white"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🐷 Todos
        </motion.button>
        {categorias.map((categoria) => (
          <motion.button
            key={categoria.id}
            onClick={() => setCategoriaSeleccionada(categoria.nombre)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              categoriaSeleccionada === categoria.nombre
                ? "bg-[#a90a0a] text-white"
                : "bg-[#fff4bf] text-[#a90a0a] hover:bg-[#a90a0a] hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {categoria.icon} {categoria.nombre}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
