import { GiMeat } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
    busqueda: string;
    onBusquedaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sugerencias: string[];
    onSugerenciaClick: (sugerencia: string) => void;
}

export const SearchBar = ({ busqueda, onBusquedaChange, sugerencias, onSugerenciaClick }: SearchBarProps) => {
    return (
        <div className="relative mb-8">
            <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#a90a0a] focus-within:border-[#a90a0a] transition-colors duration-300">
                <GiMeat className="text-[#a90a0a] text-2xl ml-4" />
                <input
                    type="text"
                    value={busqueda}
                    onChange={onBusquedaChange}
                    placeholder="Buscar corte de carne..."
                    className="w-full py-3 px-4 outline-none text-lg"
                />
            </div>
            
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
                                onClick={() => onSugerenciaClick(sugerencia)}
                                className="w-full text-left px-4 py-2 hover:bg-[#fff4bf]/20 transition-colors duration-200"
                                whileHover={{ x: 10 }}
                            >
                                {sugerencia}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};