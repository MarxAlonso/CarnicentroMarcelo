import { motion } from "framer-motion";
import { ProductoCerdo } from "../../data-cerdo/productosCerdo";
import { categorias } from "../../data-cerdo/categorias";
import { GiWeight } from "react-icons/gi";

interface ProductCardProps {
  producto: ProductoCerdo;
  onClick: () => void;
}

export const ProductCard = ({ producto, onClick }: ProductCardProps) => {
  const categoriaNombre =
    categorias.find((cat) => cat.id === producto.categoria)?.nombre || "Sin categoría";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl cursor-pointer"
    >
      {producto.imagen && (
        <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-[#a90a0a]">{producto.nombre}</h3>
          <span className="bg-[#fff4bf] text-[#a90a0a] px-3 py-1 rounded-full text-sm font-semibold">
            {categoriaNombre}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{producto.descripcion}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-[#a90a0a]">
            <GiWeight className="text-xl mr-2" />
            <span className="font-bold text-lg">S/ {producto.precio.toFixed(2)} / kg</span>
          </div>

          <a
            href={`https://wa.me/51984620910?text=Hola!%20Quisiera%20pedir%20${encodeURIComponent(
              producto.nombre
            )}%20a%20S/${producto.precio.toFixed(2)}%20por%20kg.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a90a0a] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#a90a0a]/80 transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            Pedir
          </a>
        </div>
      </div>
    </motion.div>
  );
};
