import './ExplorarCarnes.css';
import menu_1 from '../../assets/menu_1.png';
import menu_2 from '../../assets/menu_2.png';
import menu_3 from '../../assets/menu_3.png';
import menu_4 from '../../assets/menu_4.png';
import menu_5 from '../../assets/menu_5.png';
import menu_6 from '../../assets/menu_6.png';
import menu_7 from '../../assets/menu_7.png';
import menu_8 from '../../assets/menu_8.png';

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
  { menu_name: "Ensalada", menu_image: menu_1 },
  { menu_name: "Rolls", menu_image: menu_2 },
  { menu_name: "Deserts", menu_image: menu_3 },
  { menu_name: "Sandwich", menu_image: menu_4 },
  { menu_name: "Cake", menu_image: menu_5 },
  { menu_name: "Pure Veg", menu_image: menu_6 },
  { menu_name: "Pasta", menu_image: menu_7 },
  { menu_name: "Noodles", menu_image: menu_8 },
];

// Componente ExplorarCarnes
export const ExplorarCarnes: React.FC<ExplorarCarnesProps> = ({ category, setCategory }) => {
  return (
    <div className="explorar-carnes" id="explorar-carnes">
      <h1>Explora Nuestras Carnes</h1>
      <p className="explorar-carnes-texto">Ofrecemos una gran variedad de carnes de res y chancho</p>
      <div className="explorar-carnes-lista">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => (prev === item.menu_name ? "Mas" : item.menu_name))}
            key={index}
            className="explorar-carnes-lista-item"
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};
