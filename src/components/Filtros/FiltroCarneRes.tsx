import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiMeat, GiWeight } from 'react-icons/gi';

// Datos de ejemplo de productos
import { productosRes } from './data/productosRes';
import { categorias } from './data/categorias';



export const FiltroCarneRes = () => {
    const [busqueda, setBusqueda] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
    const [sugerencias, setSugerencias] = useState<string[]>([]);
    //asegura que el estado del modal tendrá el mismo tipo que un producto, o null cuando no se esté mostrando.
    const [modalProducto, setModalProducto] = useState<typeof productosRes[0] | null>(null);

    // Filtrar productos según búsqueda y categoría
    const productosFiltrados = productosRes.filter(producto => {
        const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoriaSeleccionada === 'Todos' || producto.categoria === categoriaSeleccionada;
        return coincideBusqueda && coincideCategoria;
    });

    // Manejar cambios en la búsqueda y mostrar sugerencias
    const handleBusquedaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        setBusqueda(valor);

        // Generar sugerencias
        if (valor) {
            const sugerenciasFiltradas = productosRes
                .filter(p => p.nombre.toLowerCase().includes(valor.toLowerCase()))
                .map(p => p.nombre);
            setSugerencias(sugerenciasFiltradas);
        } else {
            setSugerencias([]);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Barra de búsqueda */}
            <div className="relative mb-8">
                <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden border-2 border-carni-red focus-within:border-carni-dark-red transition-colors duration-300">
                    <GiMeat className="text-carni-red text-2xl ml-4" />
                    <input
                        type="text"
                        value={busqueda}
                        onChange={handleBusquedaChange}
                        placeholder="Buscar corte de carne..."
                        className="w-full py-3 px-4 outline-none text-lg"
                    />
                </div>
                
                {/* Sugerencias de autocompletado */}
                <AnimatePresence>
                    {sugerencias.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute w-full bg-white mt-2 rounded-lg shadow-lg z-10 border border-gray-200"
                        >
                            {sugerencias.map((sugerencia, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setBusqueda(sugerencia);
                                        setSugerencias([]);
                                    }}
                                    className="w-full text-left px-4 py-2 hover:bg-carni-cream/20 transition-colors duration-200"
                                    whileHover={{ x: 10 }}
                                >
                                    {sugerencia}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Botones de categorías */}
            <div className="flex flex-wrap gap-3 mb-8">
                {categorias.map((categoria, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCategoriaSeleccionada(categoria)}
                        className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${categoriaSeleccionada === categoria ? 'bg-carni-red text-white' : 'bg-carni-cream text-carni-red hover:bg-carni-red hover:text-white'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {categoria}
                    </motion.button>
                ))}
            </div>
            {/* Grid de productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productosFiltrados.map((producto) => (
                    <motion.div
                    key={producto.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setModalProducto(producto)}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl cursor-pointer"
                >
                    {/* Imagen del producto */}
                    {producto.imagen && (
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="w-full h-48 object-cover"
                        />
                    )}

                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-carni-red">{producto.nombre}</h3>
                            <span className="bg-carni-cream text-carni-red px-3 py-1 rounded-full text-sm font-semibold">
                                {producto.categoria}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center text-carni-dark-red">
                                <GiWeight className="text-xl mr-2" />
                                <span className="font-bold text-lg">S/ {producto.precio}.00/kg</span>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-carni-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-carni-dark-red transition-colors duration-300"
                            >
                                Pedir
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
                ))}
                {modalProducto && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setModalProducto(null)}
                >
                    <motion.div
                    className="bg-white rounded-xl p-6 max-w-md w-full relative"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    >
                    <button
                        onClick={() => setModalProducto(null)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                    >
                        ✕
                    </button>
                    <img src={modalProducto.imagen} alt={modalProducto.nombre} className="rounded-lg mb-4" />
                    <h2 className="text-2xl font-bold text-carni-red mb-2">{modalProducto.nombre}</h2>
                    <p className="text-gray-600 mb-4">{modalProducto.descripcion}</p>
                    <p className="text-carni-dark-red font-bold mb-6">S/ {modalProducto.precio}.00 /kg</p>
                    <a
                        href={`https://wa.me/51922061911?text=Hola!%20Quisiera%20pedir%20${encodeURIComponent(modalProducto.nombre)}%20a%20S/${modalProducto.precio}.00%20por%20kg.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-carni-red text-white py-2 rounded-lg font-semibold hover:bg-carni-dark-red transition-colors duration-300"
                    >
                        Pedir por WhatsApp
                    </a>
                    </motion.div>
                </motion.div>
                )}

            </div>
        </div>
    );
};