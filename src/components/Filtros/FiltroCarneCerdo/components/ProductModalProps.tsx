import { motion } from "framer-motion";
import { ProductoCerdo } from "../../data-cerdo/productosCerdo";

interface ProductModalProps {
  producto: ProductoCerdo;
  onClose: () => void;
}

export const ProductModal = ({ producto, onClose }: ProductModalProps) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-xl p-6 max-w-md w-full relative"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>

        {producto.imagen && (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="rounded-lg mb-4 w-full object-cover"
          />
        )}

        <h2 className="text-2xl font-bold text-[#a90a0a] mb-2">
          {producto.nombre}
        </h2>
        <p className="text-gray-600 mb-4">{producto.descripcion}</p>
        <p className="text-[#a90a0a] font-bold mb-6">
          S/ {producto.precio.toFixed(2)} / kg
        </p>

        <a
          href={`https://wa.me/51984620910?text=Hola!%20Quisiera%20pedir%20${encodeURIComponent(
            producto.nombre
          )}%20a%20S/${producto.precio.toFixed(2)}%20por%20kg.`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#a90a0a] text-white py-2 rounded-lg font-semibold hover:bg-[#a90a0a]/80 transition-colors duration-300"
        >
          Pedir por WhatsApp
        </a>
      </motion.div>
    </motion.div>
  );
};
