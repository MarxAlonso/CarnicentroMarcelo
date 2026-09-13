"use client";

import Image from "next/image";
import { ProductoCerdo } from "../../data-cerdo/productosCerdo";
import { Modal } from "@/components/Modal/Modal";

interface ProductModalProps {
  producto: ProductoCerdo;
  onClose: () => void;
}

/**
 * Usa el modal compartido: con eso hereda cierre por Escape, bloqueo del
 * scroll de fondo y devolución del foco, que esta implementación no tenía.
 */
export const ProductModal = ({ producto, onClose }: ProductModalProps) => {
  return (
    <Modal abierto onClose={onClose} etiqueta={producto.nombre}>
      {producto.imagen && (
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          width={600}
          height={400}
          sizes="(max-width: 768px) 90vw, 600px"
          className="mb-4 w-full rounded-lg object-cover"
        />
      )}

      <h2 className="mb-2 text-2xl font-bold text-[#a90a0a]">{producto.nombre}</h2>
      <p className="mb-4 text-gray-600">{producto.descripcion}</p>
      <p className="mb-2 font-bold tabular-nums text-[#a90a0a]">
        S/ {producto.precio.toFixed(2)} / kg
      </p>
    </Modal>
  );
};
