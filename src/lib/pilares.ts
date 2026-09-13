/**
 * Las tres páginas pilar.
 *
 * Cada una apunta a una sola búsqueda y recibe el enlazado de sus artículos.
 * Título y descripción llevan su longitud contada en el comentario: pasarse de
 * 60 y 155 caracteres hace que Google recorte y pierda el gancho.
 *
 * Las preguntas de `faqs` se pintan visibles en la página Y se declaran en
 * `FAQPage`. Si las dos versiones dejan de coincidir, es penalización manual.
 */
import type { Pilar } from "@/content/posts";
import type { Faq } from "./schema";
import { HOURS_DISPLAY } from "./site";

export type PilarDef = {
  id: Pilar;
  ruta: string;
  titulo: string;
  descripcion: string;
  objetivo: string;
  h1: string;
  /** Respuesta directa, en las dos primeras líneas. Es lo que citan los buscadores con IA. */
  entradilla: string;
  faqs: Faq[];
};

const horarioTexto = HOURS_DISPLAY.map((h) => `${h.label}: ${h.value}`).join("; ");

export const PILARES: Record<Pilar, PilarDef> = {
  res: {
    id: "res",
    ruta: "/carne-de-res",
    // 51 caracteres
    titulo: "Carne de Res en Lima: Cortes y Precios por Kilo",
    // 148 caracteres
    descripcion:
      "23 cortes de res frescos con precio por kilo: lomo fino, bife, asado de tira, osobuco. Delivery en Lima coordinado por WhatsApp.",
    objetivo: "precio carne de res Lima",
    h1: "Carne de res en Lima: cortes y precio por kilo",
    entradilla:
      "Vendemos 23 cortes de res frescos con precio por kilo publicado, desde carne molida hasta lomo fino. Los pedidos se coordinan por WhatsApp con un día de anticipación y se entregan a domicilio en Lima.",
    faqs: [
      {
        pregunta: "¿Cuánto cuesta el kilo de carne de res?",
        respuesta:
          "El precio va según el corte: los cortes de guiso y sancochado están en el rango bajo, y los cortes premium como el lomo fino y el cuadril de cadera en el alto. La tabla de esta página muestra el precio por kilo de cada corte con su fecha de actualización.",
      },
      {
        pregunta: "¿Hacen delivery de carne de res en Lima?",
        respuesta:
          "Sí. Coordinamos la entrega por WhatsApp con un día de anticipación para organizar la ruta y mantener la cadena de frío. La carne se entrega empacada y porcionada según lo que pidas.",
      },
      {
        pregunta: "¿Puedo pedir el corte porcionado a un gramaje específico?",
        respuesta:
          "Sí. Indícanos el gramaje por porción al hacer el pedido y lo cortamos así. Es lo que suelen pedir restaurantes y familias que congelan por raciones.",
      },
      {
        pregunta: "¿Qué horario tienen?",
        respuesta: `Atendemos ${horarioTexto}. Los pedidos por WhatsApp se reciben fuera de horario y se confirman al abrir.`,
      },
      {
        pregunta: "¿Qué corte de res me conviene para lomo saltado?",
        respuesta:
          "El lomo fino es el corte clásico por su terneza. Si buscas la misma preparación a menor costo, el bife y la tapa de lomo funcionan bien cortados en tiras contra la fibra.",
      },
    ],
  },

  cerdo: {
    id: "cerdo",
    ruta: "/carne-de-cerdo",
    // 53 caracteres
    titulo: "Carne de Cerdo en Lima: Cortes y Precios por Kilo",
    // 146 caracteres
    descripcion:
      "Panceta, bondiola, chuleta y pierna de cerdo fresca con precio por kilo. Delivery en Lima y pedidos de campaña por WhatsApp.",
    objetivo: "precio carne de cerdo Lima",
    h1: "Carne de cerdo en Lima: cortes y precio por kilo",
    entradilla:
      "Trabajamos ocho cortes de cerdo fresco con precio por kilo publicado: panceta, bondiola, chuleta, pierna y brazuelo, entre otros. Para chicharrón, horno o parrilla, y con pedidos de campaña en Navidad y Año Nuevo.",
    faqs: [
      {
        pregunta: "¿Cuánto cuesta el kilo de carne de cerdo?",
        respuesta:
          "Depende del corte y de la proporción de grasa. La panceta y la bondiola están por encima de la pierna y el brazuelo deshuesado. El precio por kilo de cada corte está en la tabla de esta página.",
      },
      {
        pregunta: "¿Qué corte de cerdo se usa para chicharrón?",
        respuesta:
          "La panceta es la opción tradicional porque alterna carne y grasa, que es lo que da la textura crocante. La pierna sin hueso funciona para un chicharrón más magro. Para chicharrón de comercio se suele pedir panceta especial.",
      },
      {
        pregunta: "¿Reciben pedidos grandes para Navidad?",
        respuesta:
          "Sí, y conviene reservarlos con anticipación porque en campaña la demanda supera al abastecimiento. Recomendamos confirmar el pedido de diciembre durante noviembre.",
      },
      {
        pregunta: "¿La carne de cerdo llega fresca o congelada?",
        respuesta:
          "Fresca. No congelamos para vender: el corte se prepara el mismo día y se entrega con cadena de frío. Si necesitas congelarlo en casa, conviene porcionar antes de guardar.",
      },
      {
        pregunta: "¿Hacen delivery de cerdo en Lima?",
        respuesta:
          "Sí, con la misma coordinación que la carne de res: se agenda por WhatsApp con un día de anticipación y se entrega a domicilio.",
      },
    ],
  },

  delivery: {
    id: "delivery",
    ruta: "/delivery-de-carne-en-lima",
    // 48 caracteres
    titulo: "Delivery de Carne en Lima | Carnicentro Marcelo",
    // 151 caracteres
    descripcion:
      "Delivery de carne de res y cerdo fresca en Lima. Pedidos por WhatsApp con un día de anticipación, cadena de frío y entrega coordinada.",
    objetivo: "delivery de carne Lima",
    h1: "Delivery de carne en Lima",
    entradilla:
      "Llevamos carne de res y cerdo fresca a domicilio en Lima. El pedido se arma por WhatsApp, se confirma con un día de anticipación y se entrega empacado y porcionado, manteniendo la cadena de frío de principio a fin.",
    faqs: [
      {
        pregunta: "¿Cómo hago un pedido a domicilio?",
        respuesta:
          "Escríbenos por WhatsApp con los cortes y los kilos que necesitas, tu distrito y la fecha en que quieres recibirlo. Te confirmamos disponibilidad, el total y la hora aproximada de entrega.",
      },
      {
        pregunta: "¿Con cuánta anticipación debo pedir?",
        respuesta:
          "Con un día de anticipación. Ese margen es lo que nos permite preparar los cortes frescos, porcionarlos como los pediste y organizar la ruta de reparto.",
      },
      {
        pregunta: "¿Cómo mantienen la carne fría durante la entrega?",
        respuesta:
          "La carne sale empacada y se transporta en contenedor térmico. Por eso la entrega se coordina: no se deja el pedido sin que alguien lo reciba.",
      },
      {
        pregunta: "¿Qué formas de pago aceptan?",
        respuesta:
          "Aceptamos efectivo contra entrega y transferencias por Yape y Plin. El detalle se confirma al cerrar el pedido por WhatsApp.",
      },
      {
        pregunta: "¿Atienden a restaurantes y negocios?",
        respuesta:
          "Sí. Para restaurantes, pollerías y negocios de comida trabajamos volúmenes con entregas de frecuencia fija y cortes estandarizados por gramaje. Conviene coordinarlo directamente por teléfono.",
      },
    ],
  },
};

export const PILARES_LISTA = Object.values(PILARES);
