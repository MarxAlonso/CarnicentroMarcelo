import { motion } from 'framer-motion';
import { GiCow, GiMeat } from 'react-icons/gi';
import carnemolida from '../../assets/carnes/carnemolida.webp';
import panceta from '../../assets/carnes/panceta.webp';
import costillas from '../../assets/carnes/costillas.webp';
import chuletacerdo from '../../assets/carnes/chuletacerdo.webp';
import bisteck from '../../assets/carnes/bisteck.webp';
import lomo from '../../assets/carnes/lomo.webp';
import asado from '../../assets/carnes/asado.webp';
import churrasco from '../../assets/carnes/churrasco.webp';

// Definir el tipo de los elementos del menú
interface MenuItem {
  menu_name: string;
  menu_image: string;
}

// Definir el tipo de las props para ExplorarCarnes
interface ExplorarCarnesProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

// La lista de los elementos del menú (carnes)
const menu_list: MenuItem[] = [
  { menu_name: "Panceta", menu_image: panceta },
  { menu_name: "Carne Molida", menu_image: carnemolida },
  { menu_name: "Costillas", menu_image: costillas },
  { menu_name: "Chuletas", menu_image: chuletacerdo },
  { menu_name: "Bistec", menu_image: bisteck },
  { menu_name: "Lomo", menu_image: lomo },
  { menu_name: "Asado", menu_image: asado },
  { menu_name: "Churrasco", menu_image: churrasco },
];

// Componente ExplorarCarnes
export const ExplorarCarnes: React.FC<ExplorarCarnesProps> = ({ category, setCategory }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-8 py-12 bg-[#fff4bf] rounded-xl shadow-lg px-4 md:px-8"
      id="explorar-carnes"
    >
      <div className="text-center space-y-4">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-2"
        >
          <GiCow className="text-[#a90a0a] text-4xl" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#a90a0a]">Explora Nuestras Carnes</h1>
          <GiMeat className="text-[#a90a0a] text-4xl" />
        </motion.div>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Descubre nuestra selección premium de cortes de res y cerdo, criados con los más altos estándares de calidad</p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
          {menu_list.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategory(prev => (prev === item.menu_name ? "Mas" : item.menu_name))}
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer group"
            >
              <div 
                className={`relative rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 ${category === item.menu_name ? 'ring-4 ring-[#a90a0a] ring-offset-2' : 'ring-2 ring-transparent hover:ring-[#a90a0a]/50'}`}
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full object-cover transition-transform duration-300"
                  src={item.menu_image} 
                  alt={item.menu_name} 
                />
              </div>
              <p className="mt-3 text-sm sm:text-base md:text-lg font-medium text-gray-800 group-hover:text-[#a90a0a] transition-colors text-center">
                {item.menu_name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-[#a90a0a]/20 to-transparent" />
      </div>
    </motion.div>
  );
};
