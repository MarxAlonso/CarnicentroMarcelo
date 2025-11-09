import { useState } from "react";
import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
import { GiCow, GiPig } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { ResponsiveMenu } from "./ResponsiveMenu.tsx";
import { NavbarMenu } from "./NavbarData";
//import {logoimagen} from "../../assets/logo2-carnicentromarcelo.png";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => setActiveMenu(id);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <>
      <nav className="bg-[#a90a0a] shadow-lg relative z-[1000]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container mx-auto flex justify-between items-center py-2 px-6"
        >
          {/* Logo section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-bold text-[#fff4bf]"
          >
            {/* Logo image */}
            <img 
              src="/logo2-carnicentromarcelo.png"
              alt="Logo Carnicentro Marcelo"
              className="w-full h-24 object-cover rounded-[20px] cursor-pointer shadow-lg"
            />
          </motion.div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center gap-1">
                    <a
                      href={item.link}
                      className="inline-block py-2 px-4 text-[#fff4bf] hover:text-white hover:bg-[#8a0808] rounded-lg transition-all duration-300 font-semibold"
                      onClick={item.submenu ? (e) => e.preventDefault() : undefined}
                    >
                      {item.title}
                      {item.submenu && <MdKeyboardArrowDown className="inline ml-1" />}
                    </a>
                  </div>
                  
                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && activeMenu === item.id && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 py-2 bg-[#a90a0a] rounded-lg shadow-lg min-w-[200px] z-[1001]"
                      >
                        {item.submenu.map((subItem, index) => (
                          <motion.li
                            key={index}
                            whileHover={{ x: 5 }}
                          >
                            <a
                              href={subItem.link}
                              className="block px-4 py-2 text-[#fff4bf] hover:text-white hover:bg-[#8a0808] transition-all duration-300"
                            >
                              {subItem.title}
                            </a>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Icons section */}
          <div className="flex items-center gap-4">

            {/* Mobile hamburger Menu section */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden cursor-pointer text-white" 
              onClick={() => setOpen(!open)}
            >
              <MdMenu className="text-4xl hover:text-[#fff4bf] transition-colors" />
            </motion.div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};