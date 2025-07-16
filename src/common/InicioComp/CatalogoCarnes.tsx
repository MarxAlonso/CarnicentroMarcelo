import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiCow, GiPig, GiMeat, GiWeight, GiPriceTag } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import  food_1  from '../../assets/food_1.png';
import  food_2  from '../../assets/food_2.png';
import  food_3  from '../../assets/food_3.png';
import  food_4  from '../../assets/food_4.png';
import  food_5  from '../../assets/food_5.png';
import  food_6  from '../../assets/food_6.png';
import  food_7  from '../../assets/food_7.png';
import  food_8  from '../../assets/food_8.png';

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
    {
        id: 1,
        nombre: 'Lomo Fino de Res',
        tipo: 'res',
        precio: 45.99,
        peso: '1kg',
        imagen: food_1,
        descripcion: 'Corte premium de res, ideal para preparar a la parrilla o en medallones. Carne suave y jugosa.'
    },
    {
        id: 2,
        nombre: 'Chuleta de Cerdo',
        tipo: 'cerdo',
        precio: 32.99,
        peso: '800g',
        imagen: food_2,
        descripcion: 'Chuletas de cerdo premium, perfectas para la parrilla o freír. Jugosas y tiernas.'
    },
    {
        id: 3,
        nombre: 'Carne Molida Especial',
        tipo: 'molida',
        precio: 25.99,
        peso: '500g',
        imagen: food_3,
        descripcion: 'Carne molida premium, ideal para hamburguesas, albóndigas o cualquier preparación.'
    },
    {
        id: 4,
        nombre: 'Bife Ancho',
        tipo: 'res',
        precio: 52.99,
        peso: '1kg',
        imagen: food_4,
        descripcion: 'Corte jugoso y tierno, perfecto para la parrilla. Con el punto justo de marmoleo.'
    },
    {
        id: 5,
        nombre: 'Costillas de Cerdo',
        tipo: 'cerdo',
        precio: 38.99,
        peso: '1kg',
        imagen: food_5,
        descripcion: 'Costillas de cerdo jugosas, ideales para BBQ o al horno. Sabor incomparable.'
    },
    {
        id: 6,
        nombre: 'Carne Molida Premium',
        tipo: 'molida',
        precio: 28.99,
        peso: '500g',
        imagen: food_6,
        descripcion: 'Carne molida de primera calidad, con el punto justo de grasa para máximo sabor.'
    },
    {
        id: 7,
        nombre: 'Picaña',
        tipo: 'res',
        precio: 48.99,
        peso: '1kg',
        imagen: food_7,
        descripcion: 'Corte brasileño por excelencia, jugoso y con una capa de grasa que le da un sabor único.'
    },
    {
        id: 8,
        nombre: 'Panceta de Cerdo',
        tipo: 'cerdo',
        precio: 35.99,
        peso: '800g',
        imagen: food_8,
        descripcion: 'Panceta de cerdo con piel, perfecta para chicharrón o al horno. Textura crujiente por fuera y jugosa por dentro.'
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
                            <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
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

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-6 w-full bg-[#a90a0a] text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-[#8a0808] transition-colors flex items-center justify-center gap-2"
                            >
                                <GiMeat className="text-xl" />
                                Realizar Pedido
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};