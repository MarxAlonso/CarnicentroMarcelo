import { motion } from "framer-motion";
import { GiWeight } from "react-icons/gi";

interface PriceFilterProps {
  ordenPrecio: "asc" | "desc" | "none";
  setOrdenPrecio: (orden: "asc" | "desc" | "none") => void;
}

export const PriceFilter = ({
  ordenPrecio,
  setOrdenPrecio,
}: PriceFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {/* Filtros de ordenamiento por precio */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="text-[#a90a0a] font-semibold flex items-center">
          <GiWeight className="mr-2" /> Ordenar por precio:
        </span>
        <motion.button
          onClick={() => setOrdenPrecio("none")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
            ordenPrecio === "none"
              ? "bg-[#a90a0a] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sin orden
        </motion.button>
        <motion.button
          onClick={() => setOrdenPrecio("asc")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
            ordenPrecio === "asc"
              ? "bg-[#a90a0a] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Menor a mayor
        </motion.button>
        <motion.button
          onClick={() => setOrdenPrecio("desc")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
            ordenPrecio === "desc"
              ? "bg-[#a90a0a] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mayor a menor
        </motion.button>
      </div>
    </div>
  );
};
