import { productosCerdo } from '../../Filtros/data-cerdo/productosCerdo';
import { productosRes } from '../../Filtros/data/productosRes';
import { categorias as categoriasCerdo } from '../../Filtros/data-cerdo/categorias';
import { categorias as categoriasRes } from '../../Filtros/data/categorias';

export const INITIAL_MESSAGE = "¡Hola! Soy el asistente virtual de Carnicentro Marcelo. ¿En qué puedo ayudarte?";

const formatearPrecio = (precio: number) => `S/.${precio.toFixed(2)}`;

const obtenerProductosRes = (categoria: string) => {
    return productosRes
        .filter(p => p.categoria === categoria)
        .map(p => `${p.nombre} - ${formatearPrecio(p.precio)}`);
};

const obtenerProductosCerdo = (categoriaId: number) => {
    return productosCerdo
        .filter(p => p.categoria === categoriaId)
        .map(p => `${p.nombre} - ${formatearPrecio(p.precio)}`);
};

export const BOT_RESPONSES = {
    GREETING: [
        "¡Hola! ¿En qué puedo ayudarte?",
        "¡Bienvenido a Carnicentro Marcelo! ¿Qué información necesitas?",
        "¡Hola! Estoy aquí para ayudarte con información sobre nuestros productos"
    ],
    PRODUCTS_RES: [
        `Tenemos las siguientes categorías de carne de res:\n${categoriasRes.join(', ')}`,
        "En carne de res contamos con Bistecks, Asados, Guisos, Sanchochados y Carne molida. ¿Qué te interesa?"
    ],
    PRODUCTS_CERDO: [
        `Tenemos las siguientes categorías de cerdo:\n${categoriasCerdo.map(c => c.nombre).join(', ')}`,
        "En carne de cerdo tenemos cortes especiales y chuletas. ¿Qué te gustaría saber?"
    ],
    BISTECKS: () => [
        `Nuestros Bistecks disponibles son:\n${obtenerProductosRes('Bistecks').join('\n')}`
    ],
    ASADOS: () => [
        `En Asados tenemos:\n${obtenerProductosRes('Asados').join('\n')}`
    ],
    GUISOS: () => [
        `Para Guisos contamos con:\n${obtenerProductosRes('Guisos').join('\n')}`
    ],
    SANCHOCHADOS: () => [
        `En Sanchochados tenemos:\n${obtenerProductosRes('Sanchochados').join('\n')}`
    ],
    CARNE_MOLIDA: () => [
        `Nuestra Carne Molida incluye:\n${obtenerProductosRes('Carne molida').join('\n')}`
    ],
    CERDO_CORTES: () => [
        `Nuestros cortes de cerdo son:\n${obtenerProductosCerdo(1).join('\n')}`
    ],
    CERDO_CHULETAS: () => [
        `En chuletas de cerdo tenemos:\n${obtenerProductosCerdo(2).join('\n')}`
    ],
    LOCATION: [
        "Estamos ubicados en Jr. Ramón Castilla 466, Huacho. Nuestro horario es de lunes a sábado de 8:00 AM a 6:00 PM",
        "Nos encuentras en Jr. Ramón Castilla 466, Huacho. ¡Te esperamos!"
    ],
    DEFAULT: [
        "Lo siento, no entiendo tu pregunta. Puedes preguntarme sobre:\n- Nuestros productos de res y cerdo\n- Ubicación y horarios\n- Precios específicos",
        "Disculpa, no estoy seguro de cómo ayudarte. ¿Te gustaría saber sobre nuestros productos, ubicación o precios?"
    ]
};

export const KEYWORDS = {
    GREETING: ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'saludos'],
    PRODUCTS_GENERAL: ['productos', 'carnes', 'precios', 'cortes', 'qué tienen', 'qué venden', 'tienen'],
    PRODUCTS_RES: ['res', 'vaca', 'ternera', 'vacuno'],
    PRODUCTS_CERDO: ['cerdo', 'chancho', 'puerco', 'porcino'],
    BISTECKS: ['bisteck', 'bife', 'lomo', 'bistecks'],
    ASADOS: ['asado', 'parrilla', 'asados'],
    GUISOS: ['guiso', 'guisos', 'estofado'],
    SANCHOCHADOS: ['sancochado', 'sanchochados', 'caldo'],
    CARNE_MOLIDA: ['molida', 'hamburguesa', 'molido'],
    LOCATION: ['ubicación', 'dirección', 'donde están', 'horario', 'local', 'donde'],
    PRICES: ['precio', 'cuesta', 'valor', 'cuánto', 'costos']
};