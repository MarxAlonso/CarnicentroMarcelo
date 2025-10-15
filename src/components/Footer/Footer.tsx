import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GiCow, GiPig, GiMeat } from 'react-icons/gi';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export const Footer = () => {
    return (
        <footer className="bg-[#fff4bf] pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                                <GiCow className="text-[#a90a0a] text-3xl" />
                                <GiPig className="text-[#a90a0a] text-3xl" />
                            </div>
                            <h1 className="text-2xl font-bold">
                                <span className="text-[#a90a0a]">Carnicentro</span>
                                <span className="text-[#8a0808]"> Marcelo</span>
                            </h1>
                        </div>
                        <p className="text-gray-700">Ofrecemos la mejor calidad en carnes de res y cerdo. Nuestra experiencia y dedicación nos respaldan para brindarle los mejores cortes.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#a90a0a] hover:text-[#8a0808] transition-colors">
                                <FaFacebookF className="text-xl" />
                            </a>
                            <a href="#" className="text-[#a90a0a] hover:text-[#8a0808] transition-colors">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="#" className="text-[#a90a0a] hover:text-[#8a0808] transition-colors">
                                <FaInstagram className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#a90a0a]">Enlaces Rápidos</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="/carneres" className="text-gray-700 hover:text-[#a90a0a] transition-colors flex items-center gap-2">
                                    <GiMeat className="text-[#a90a0a]" /> Carne de Res
                                </a>
                            </li>
                            <li>
                                <a href="/carnecerdo" className="text-gray-700 hover:text-[#a90a0a] transition-colors flex items-center gap-2">
                                    <GiPig className="text-[#a90a0a]" /> Carne de Cerdo
                                </a>
                            </li>
                            <li>
                                <a href="/nosotros" className="text-gray-700 hover:text-[#a90a0a] transition-colors flex items-center gap-2">
                                    <GiCow className="text-[#a90a0a]" /> Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="/contacto" className="text-gray-700 hover:text-[#a90a0a] transition-colors flex items-center gap-2">
                                    <GiPig className="text-[#a90a0a]" /> Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Horario */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#a90a0a]">Horario de Atención</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li>Lunes - Viernes: 8:00 AM - 8:00 PM</li>
                            <li>Sábados: 8:00 AM - 6:00 PM</li>
                            <li>Domingos: 9:00 AM - 2:00 PM</li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#a90a0a]">Contacto</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-700">
                                <MdPhone className="text-[#a90a0a]" />
                                <a href="tel:+51984620910" className="hover:text-[#a90a0a] transition-colors">+51 984620910</a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                                <MdEmail className="text-[#a90a0a]" />
                                <a href="mailto:contacto@carnicentro.com" className="hover:text-[#a90a0a] transition-colors">contacto@carnicentro.com</a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-700">
                                <MdLocationOn className="text-[#a90a0a]" />
                                <span>Av. Principal 123, Lima</span>
                            </li>
                            <li className="mt-4">
                                <a href="https://wa.me/51984620910" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#a90a0a] text-white px-4 py-2 rounded-lg hover:bg-[#8a0808] transition-colors">
                                    <FaWhatsapp className="text-xl" />
                                    Pedidos por WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300">
                    <p className="text-center text-gray-700">
                        © {new Date().getFullYear()} Carnicentro Marcelo - Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
};