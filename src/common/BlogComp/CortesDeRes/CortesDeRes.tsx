import Image from "next/image";
import { ArticleLayout, TablaArticulo } from "@/components/Blog/ArticleLayout";
import { productosRes } from "@/components/Filtros/data/productosRes";
import { getPost } from "@/content/posts";
import { PRECIOS_ACTUALIZADOS } from "@/lib/site";

/**
 * Guía de los 23 cortes de res.
 *
 * No lleva ni un nombre ni un precio escrito a mano: la lista sale de
 * `productosRes`, que es el mismo origen del catálogo y de la tabla del pilar.
 * Si mañana entra un corte nuevo o cambia un precio, el artículo se actualiza
 * solo. Lo que sí está escrito aquí es lo que aporta valor y no está en los
 * datos: para qué plato sirve cada corte y cómo se llama fuera del Perú.
 */

/** Lo que el dato no sabe: uso y equivalencias. Clave = nombre exacto del catálogo. */
const SABER_CARNICERO: Record<string, { plato: string; fuera?: string }> = {
  "Lomo Fino": {
    plato: "Lomo saltado, medallones, bistec a lo pobre",
    fuera: "solomillo en España, lomo en Argentina",
  },
  "Biffe": { plato: "Parrilla y plancha", fuera: "bife ancho en Argentina, ribeye en EE. UU." },
  "Cuadril de cadera": { plato: "Bistec a la plancha, parrilla", fuera: "picanha en Brasil" },
  "Tapa de Lomo": { plato: "Bistec, lomo saltado económico" },
  "Bola de Lomo": { plato: "Milanesas, bistec apanado" },
  "Corazón de Paleta": { plato: "Bistec económico, saltados" },
  "Asado de Pejerrey": { plato: "Asado a la olla, carne al jugo" },
  "Asado Cuadrado": { plato: "Asado a la olla, estofado" },
  "Guiso de Paleta": { plato: "Seco de res, estofado, carapulcra" },
  "Churrasco Redondo": { plato: "Churrasco a la plancha" },
  "Aguja": { plato: "Guisos largos, carne desmenuzada" },
  "Malaya": { plato: "Malaya frita, parrilla", fuera: "matambre en Argentina" },
  "Osobuco de pierna": { plato: "Osobuco al vino, sopas sustanciosas" },
  "Tira de Asado": { plato: "Parrilla", fuera: "asado de tira en Argentina, short ribs en EE. UU." },
  "Huachalomo": { plato: "Guisos, olla de presión" },
  "Cordoncito de Lomo": { plato: "Saltados rápidos, brochetas" },
  "Entraña": { plato: "Parrilla a fuego fuerte", fuera: "entraña en Argentina, skirt steak en EE. UU." },
  "Pecho": { plato: "Sancochado, caldo de res", fuera: "brisket en EE. UU." },
  "Falda": { plato: "Sancochado, puchero" },
  "Costilla": { plato: "Caldo, sancochado, parrilla lenta" },
  "Osobuco de brazo": { plato: "Caldo de res, sopa criolla" },
  "Carne molida Especial": { plato: "Hamburguesas, albóndigas, tallarín saltado" },
  "Carne molida Extraespecial": { plato: "Salsas, rellenos, lasaña" },
};

const ORDEN_CATEGORIAS = ["Bistecks", "Asados", "Guisos", "Sanchochados", "Carne molida"] as const;

const EXPLICACION_CATEGORIA: Record<string, string> = {
  Bistecks:
    "Cortes tiernos, de fibra corta, que se cocinan rápido y a fuego alto. Son los que van a la plancha o la parrilla sin necesidad de ablandarse antes.",
  Asados:
    "Piezas de tamaño mediano que se cocinan enteras y lentas, en olla o al horno, y se cortan al servir.",
  Guisos:
    "Cortes con más tejido conectivo. Necesitan tiempo y líquido: es ese tiempo el que convierte el colágeno en gelatina y da la textura que se deshace.",
  Sanchochados:
    "Cortes con hueso o con mucha fibra, pensados para caldos largos. El hueso es justamente lo que da cuerpo al caldo.",
  "Carne molida":
    "Se diferencian por la proporción de grasa, no por el animal. Más grasa da más jugo; menos grasa, más rendimiento en salsas.",
};

const post = getPost("cortes-de-carne-de-res-peru");

export default function CortesDeRes() {
  if (!post) return null;

  const porCategoria = ORDEN_CATEGORIAS.map((cat) => ({
    categoria: cat,
    cortes: productosRes.filter((p) => p.categoria === cat),
  })).filter((g) => g.cortes.length > 0);

  const fecha = new Date(`${PRECIOS_ACTUALIZADOS}T12:00:00`).toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <ArticleLayout
      post={post}
      entradilla="En el Perú se venden más de veinte cortes de res, y el mismo músculo cambia de nombre según el país. Esta guía muestra los 23 cortes que trabajamos, con foto real, para qué plato sirve cada uno y cuánto cuesta el kilo hoy."
    >
      <p>
        La confusión con los nombres es real y cuesta dinero: pedir «lomo» en Lima y en Buenos Aires
        no trae la misma pieza. Aquí van los <strong>23 cortes de res</strong> que tenemos en el
        mostrador, agrupados por cómo se cocinan, que es lo que de verdad importa a la hora de
        elegir.
      </p>

      <p>
        Las fotos son del mostrador, no de banco de imágenes, y los precios son los del catálogo,
        revisados el {fecha}.
      </p>

      <h2>Cómo elegir sin equivocarse</h2>
      <p>
        La regla que usan los carniceros es sencilla y vale para cualquier res:{" "}
        <strong>cuanto más trabaja un músculo, más duro es y más tiempo necesita</strong>. El lomo,
        que casi no trabaja, se hace en minutos. El osobuco, que soporta el peso del animal, pide
        dos horas de olla. No hay cortes malos: hay cortes mal usados.
      </p>

      <TablaArticulo
        cabeceras={["Si vas a…", "Pide un corte de…", "Tiempo aproximado"]}
        filas={[
          ["Freír o planchar", "Bistecks", "3 a 6 minutos"],
          ["Hacer parrilla", "Bistecks o guisos grasos (tira, entraña, malaya)", "10 a 25 minutos"],
          ["Guisar o estofar", "Guisos", "1 a 2 horas"],
          ["Hacer caldo o sancochado", "Sancochados, con hueso", "2 a 3 horas"],
          ["Moler para salsa o hamburguesa", "Carne molida", "Según la receta"],
        ]}
      />

      {porCategoria.map(({ categoria, cortes }) => (
        <section key={categoria}>
          <h2>
            {categoria} · {cortes.length} cortes
          </h2>
          <p>{EXPLICACION_CATEGORIA[categoria]}</p>

          <div data-reveal-group="" className="my-8 grid gap-5 sm:grid-cols-2">
            {cortes.map((corte) => {
              const extra = SABER_CARNICERO[corte.nombre];
              return (
                <div
                  key={corte.id}
                  data-reveal="up"
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >
                  <Image
                    src={corte.imagen}
                    alt={`Corte de res: ${corte.nombre}`}
                    width={400}
                    height={224}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="!mt-0 !mb-0 text-lg font-bold text-gray-900">
                        {corte.nombre}
                      </h3>
                      <span className="shrink-0 font-bold tabular-nums text-carni-red">
                        S/ {corte.precio.toFixed(2)}
                      </span>
                    </div>

                    <p className="!mb-0 !mt-2 !text-[15px] text-gray-600">{corte.descripcion}</p>

                    {extra && (
                      <dl className="mt-3 space-y-1 border-t border-gray-100 pt-3 text-sm">
                        <div>
                          <dt className="inline font-semibold text-gray-900">Para: </dt>
                          <dd className="inline text-gray-600">{extra.plato}</dd>
                        </div>
                        {extra.fuera && (
                          <div>
                            <dt className="inline font-semibold text-gray-900">Fuera del Perú: </dt>
                            <dd className="inline text-gray-600">{extra.fuera}</dd>
                          </div>
                        )}
                      </dl>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <h2>Los nombres que más confusión generan</h2>
      <p>
        Si alguien te pasó una receta de otro país, estas son las equivalencias que más se preguntan
        en el mostrador:
      </p>

      <TablaArticulo
        cabeceras={["En Perú", "En Argentina", "En España", "En EE. UU."]}
        filas={[
          ["Lomo fino", "Lomo", "Solomillo", "Tenderloin"],
          ["Biffe", "Bife ancho", "Entrecot", "Ribeye"],
          ["Tira de asado", "Asado de tira", "Costillar", "Short ribs"],
          ["Malaya", "Matambre", "Falda", "Flank"],
          ["Entraña", "Entraña", "Entraña", "Skirt steak"],
          ["Cuadril de cadera", "Colita de cuadril", "Tapilla", "Picanha / top sirloin cap"],
          ["Pecho", "Pecho", "Pecho", "Brisket"],
        ]}
        nota="El mismo músculo, cortado con otra tradición, no siempre da una pieza idéntica: la equivalencia sirve para orientarse, no es exacta al gramo."
      />

      <h2>Preguntas que nos hacen a diario</h2>

      <h3>¿Cuál es el corte más tierno?</h3>
      <p>
        El lomo fino, sin discusión. Es también el más caro precisamente por eso. Si buscas terneza
        a menor costo, el cuadril de cadera y la tapa de lomo son las mejores alternativas, siempre
        cortando contra la fibra.
      </p>

      <h3>¿Qué corte rinde más por sol?</h3>
      <p>
        Los de guiso. El guiso de paleta y la aguja cuestan alrededor de la mitad que un bistec
        premium y, bien cocinados, dan un plato mejor. La diferencia está en el tiempo, no en la
        calidad de la carne.
      </p>

      <h3>¿Por qué mi bistec queda duro?</h3>
      <p>
        Casi siempre por una de tres razones: se cortó a favor de la fibra en vez de en contra, se
        cocinó a fuego bajo —que lo seca en lugar de sellarlo—, o se eligió un corte de guiso para
        una preparación rápida. Si nos dices qué plato vas a hacer, te decimos qué corte pedir.
      </p>

      <h3>¿Puedo pedir el corte a un grosor específico?</h3>
      <p>
        Sí, y conviene decirlo al hacer el pedido. El grosor cambia por completo el resultado: un
        bistec de dos centímetros y uno de medio centímetro no se cocinan igual ni de lejos.
      </p>
    </ArticleLayout>
  );
}
