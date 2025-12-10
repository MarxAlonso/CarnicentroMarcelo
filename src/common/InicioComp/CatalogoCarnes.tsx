import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiCow, GiPig, GiMeat, GiWeight, GiPriceTag } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import  lomofino  from '../../assets/catalogoinicio/lomofino.webp';
import  chuletacerdo  from '../../assets/catalogoinicio/chuletacerdo.webp';
import  bife  from '../../assets/catalogoinicio/bife.webp';
import  pancetadecerdo  from '../../assets/catalogoinicio/pancetadecerdo.webp';
import  bondiolasinhueso  from '../../assets/catalogoinicio/bondiolasinhueso.webp';
import  cuadrildecadera  from '../../assets/catalogoinicio/cuadrildecadera.webp';
import  carnemolidaespecial  from '../../assets/catalogoinicio/carnemolidaespecial.webp';


interface Producto {
    id: number;
    nombre: string;
    tipo: 'res' | 'cerdo' | 'molida';
    precio: number;
    peso: string;
    imagen: string;
    descripcion: string;
}

const productos: Producto[] = [
  // === 3 cortes de RES ===
  {
    id: 1,
    nombre: 'Lomo Fino',
    tipo: 'res',
    precio: 64.00,
    peso: '1kg',
    imagen: lomofino,
    descripcion: 'El corte más tierno y premium de res, ideal para medallones y preparaciones especiales.'
  },
  {
    id: 2,
    nombre: 'Biffe',
    tipo: 'res',
    precio: 42.00,
    peso: '1kg',
    imagen: bife,
    descripcion: 'Corte con excelente marmoleo, perfecto para parrilla y platos gourmet con gran jugosidad.'
  },
  {
    id: 3,
    nombre: 'Cuadril de Cadera',
    tipo: 'res',
    precio: 40.00,
    peso: '1kg',
    imagen: cuadrildecadera,
    descripcion: 'Corte premium de la cadera, jugoso y tierno, ideal para bistecks a la parrilla.'
  },

  // === 3 cortes de CERDO ===
  {
    id: 4,
    nombre: 'Panceta Especial',
    tipo: 'cerdo',
    precio: 29.00,
    peso: '1kg',
    imagen: pancetadecerdo,
    descripcion: 'Panceta con balance ideal de carne y grasa, perfecta para parrillas y recetas tradicionales.'
  },
  {
    id: 5,
    nombre: 'Chuleta de Lomo de Cerdo',
    tipo: 'cerdo',
    precio: 22.00,
    peso: '1kg',
    imagen: chuletacerdo,
    descripcion: 'Chuleta magra y jugosa, excelente para la parrilla, plancha o fritura.'
  },
  {
    id: 6,
    nombre: 'Bondiola sin Hueso',
    tipo: 'cerdo',
    precio: 26.00,
    peso: '1kg',
    imagen: bondiolasinhueso,
    descripcion: 'Corte versátil y jugoso, ideal para asar lentamente o preparar al horno con especias.'
  },
  {
    id: 7,
    nombre: 'Carne molida Especial',
    tipo: 'molida',
    precio: 28.00,
    peso: '1kg',
    imagen: carnemolidaespecial,
    descripcion: 'Carne molida de primera calidad, ideal para hamburguesas, albóndigas y guisos.'
  }
];

export const CatalogoCarnes = () => {
    const [filtroActivo, setFiltroActivo] = useState<'todos' | 'res' | 'cerdo' | 'molida'>('todos');
    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

    const filtros = [
        { id: 'todos', nombre: 'Todos', icono: GiMeat },
        { id: 'res', nombre: 'Res', icono: GiCow },
        { id: 'cerdo', nombre: 'Cerdo', icono: GiPig },
        { id: 'molida', nombre: 'Molida', icono: GiMeat }
    ];

    const productosFiltrados = filtroActivo === 'todos' 
        ? productos 
        : productos.filter(p => p.tipo === filtroActivo);

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#fff4bf]/10">
            {/* Filtros */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {filtros.map((filtro) => {
                        const Icono = filtro.icono;
                        return (
                            <motion.button
                                key={filtro.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setFiltroActivo(filtro.id as typeof filtroActivo)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all
                                    ${filtroActivo === filtro.id 
                                        ? 'bg-[#a90a0a] text-white shadow-lg' 
                                        : 'bg-white text-gray-700 hover:bg-[#a90a0a]/10'}`}
                            >
                                <Icono className="text-xl" />
                                {filtro.nombre}
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Catálogo */}
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {productosFiltrados.map((producto) => (
                        <motion.div
                            key={producto.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                            onClick={() => setProductoSeleccionado(producto)}
                        >
                            <div className="h-56 bg-gray-200 overflow-hidden">
                                <motion.img 
                                    whileHover={{ scale: 1.1 }}
                                    src={producto.imagen} 
                                    alt={producto.nombre}
                                    className="w-full h-full object-cover transition-transform duration-300"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#a90a0a] transition-colors">
                                    {producto.nombre}
                                </h3>
                                <div className="mt-2 flex items-center gap-2 text-[#a90a0a]">
                                    <GiPriceTag />
                                    <span className="font-medium">S/. {producto.precio.toFixed(2)}</span>
                                </div>
                                <div className="mt-1 flex items-center gap-2 text-gray-600">
                                    <GiWeight />
                                    <span>{producto.peso}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {productoSeleccionado && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        onClick={() => setProductoSeleccionado(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl max-w-2xl w-full p-6 relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setProductoSeleccionado(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <FaTimes className="text-2xl" />
                            </button>

                            <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl">
                                <motion.img
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    src={productoSeleccionado.imagen}
                                    alt={productoSeleccionado.nombre}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                {productoSeleccionado.nombre}
                            </h2>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2 text-[#a90a0a]">
                                    <GiPriceTag className="text-xl" />
                                    <span className="text-xl font-semibold">
                                        S/. {productoSeleccionado.precio.toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <GiWeight className="text-xl" />
                                    <span className="text-lg">{productoSeleccionado.peso}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                {productoSeleccionado.descripcion}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};