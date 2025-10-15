import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavbarMenu } from "./NavbarData";
import { FaShoppingBasket } from "react-icons/fa";

interface ResponsiveMenuProps {
  open: boolean;
}

export const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const toggleSubmenu = (id: number) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 w-full h-screen z-50 bg-black bg-opacity-60 backdrop-blur-lg"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#a90a0a] text-[#fff4bf] py-8 px-6 m-4 rounded-2xl shadow-lg"
          >
            <ul className="flex flex-col justify-center items-center gap-8">
              {NavbarMenu.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-center"
                >
                  <div
                    onClick={() => item.submenu && toggleSubmenu(item.id)}
                    className="cursor-pointer"
                  >
                    <a
                      href={item.link}
                      onClick={(e) => item.submenu && e.preventDefault()}
                      className="inline-block w-full py-3 px-6 text-lg font-semibold hover:bg-[#8a0808] rounded-xl transition-all duration-300"
                    >
                      {item.title}
                    </a>
                  </div>

                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.id && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 bg-[#8a0808] rounded-lg overflow-hidden"
                      >
                        {item.submenu.map((subItem, index) => (
                          <motion.li
                            key={index}
                            whileHover={{ x: 10 }}
                            className="w-full"
                          >
                            <a
                              href={subItem.link}
                              className="block w-full py-2 px-8 text-[#fff4bf] hover:text-white hover:bg-[#8a0808] transition-all duration-300 text-left"
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
              <motion.a
                href="/contacto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-8 py-3 bg-[#8a0808] hover:bg-[#a90a0a] rounded-xl font-semibold transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <FaShoppingBasket />
                Contacto
              </motion.a>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};