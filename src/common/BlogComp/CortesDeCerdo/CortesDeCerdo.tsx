import Image from "next/image";
import { ArticleLayout, TablaArticulo } from "@/components/Blog/ArticleLayout";
import { productosCerdo } from "@/components/Filtros/data-cerdo/productosCerdo";
import { getPost } from "@/content/posts";

/**
 * Comparativa de los cortes de cerdo. Como en la guía de res, la lista y los
 * precios salen del catálogo; lo que se escribe aquí es el criterio de
 * elección, que es lo que no está en los datos.
 */

const CRITERIO: Record<string, { grasa: string; metodo: string; plato: string }> = {
  "Panceta Especial": {
    grasa: "Alta, en capas",
    metodo: "Fritura, horno, parrilla",
    plato: "Chicharrón, panceta crocante",
  },
  Panceta: {
    grasa: "Alta",
    metodo: "Fritura, guiso",
    plato: "Chicharrón de comercio, frejoles",
  },
  "Pierna sin hueso": {
    grasa: "Baja",
    metodo: "Horno lento",
    plato: "Pierna al horno, lechón, sánguche",
  },
  "Bondiola sin hueso": {
    grasa: "Media, infiltrada",
    metodo: "Horno lento, parrilla",
    plato: "Bondiola al horno, pulled pork",
  },
  "Brazuelo deshuesado": {
    grasa: "Media",
    metodo: "Guiso, horno",
    plato: "Adobo de cerdo, estofados",
  },
  "Chuleta de Lomo": {
    grasa: "Baja",
    metodo: "Plancha, parrilla rápida",
    plato: "Chuleta a la plancha",
  },
  "Chuleta de Bondiola": {
    grasa: "Media",
    metodo: "Parrilla",
    plato: "Chuleta jugosa a la parrilla",
  },
};

const post = getPost("panceta-bondiola-chuleta-cual-elegir");

export default function CortesDeCerdo() {
  if (!post) return null;

  return (
    <ArticleLayout
      post={post}
      entradilla="La diferencia entre panceta, bondiola y chuleta no es el precio: es cuánta grasa lleva cada una y cuánto tiempo aguanta al fuego. Elegir bien decide si el plato sale jugoso o seco."
    >
      <p>
        Casi todas las dudas sobre cerdo se resuelven con una sola pregunta:{" "}
        <strong>¿cuánto tiempo va a estar al fuego?</strong> Los cortes grasos aguantan cocciones
        largas porque la grasa los mantiene jugosos; los magros se secan si se pasan de tiempo.
      </p>

      <h2>La tabla de decisión</h2>
      <p>
        Estos son los siete cortes de cerdo que trabajamos, ordenados por lo único que importa al
        elegir: la grasa y el método de cocción que piden.
      </p>

      <TablaArticulo
        cabeceras={["Corte", "Grasa", "Cómo cocinarlo", "Plato típico", "Precio/kg"]}
        filas={productosCerdo.map((p) => {
          const c = CRITERIO[p.nombre];
          return [
            p.nombre,
            c?.grasa ?? "—",
            c?.metodo ?? "—",
            c?.plato ?? "—",
            `S/ ${p.precio.toFixed(2)}`,
          ];
        })}
        nota="Precios del catálogo, revisados cada mes. Pueden variar según el abastecimiento del día."
      />

      <h2>Los tres que más se confunden</h2>

      <h3>Panceta: cuando quieres crocante</h3>
      <p>
        Es el corte del costado, con capas alternadas de carne y grasa. Esa alternancia es
        exactamente lo que produce la textura del chicharrón: la grasa se derrite, la carne se cocina
        en ella y la piel se infla. <strong>Para chicharrón no hay sustituto real.</strong>
      </p>
      <p>
        La <strong>panceta especial</strong> tiene una proporción de carne mayor y capas más
        parejas; la panceta común lleva más grasa y rinde mejor cuando el chicharrón es para vender.
      </p>

      <h3>Bondiola: cuando quieres jugoso sin vigilar</h3>
      <p>
        Viene del cuello y tiene la grasa <em>infiltrada</em> dentro del músculo, no en capas. Eso la
        hace prácticamente a prueba de errores en cocciones largas: se puede tener dos o tres horas
        al horno y sigue jugosa. Es el corte del pulled pork y el mejor para quien no quiere estar
        pendiente del horno.
      </p>

      <h3>Chuleta: cuando quieres rápido</h3>
      <p>
        Es un corte con hueso que se hace en minutos. Aquí el error más común es el contrario: pasarse
        de cocción. La <strong>chuleta de lomo</strong> es magra y se seca con facilidad; la{" "}
        <strong>chuleta de bondiola</strong> tiene más grasa y perdona mejor unos minutos de más. Si
        no estás seguro de tu punto, pide la de bondiola.
      </p>

      <h2>Los cortes con fotografía</h2>

      <div data-reveal-group="" className="my-8 grid gap-5 sm:grid-cols-2">
        {productosCerdo.map((p) => (
          <div
            key={p.id}
            data-reveal="up"
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
          >
            <Image
              src={p.imagen}
              alt={`Corte de cerdo: ${p.nombre}`}
              width={400}
              height={224}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="!mb-0 !mt-0 text-lg font-bold text-gray-900">{p.nombre}</h3>
                <span className="shrink-0 font-bold tabular-nums text-carni-red">
                  S/ {p.precio.toFixed(2)}
                </span>
              </div>
              <p className="!mb-0 !mt-2 !text-[15px] text-gray-600">{p.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Preguntas frecuentes</h2>

      <h3>¿Qué corte pido para un chicharrón para diez personas?</h3>
      <p>
        Entre 2,5 y 3 kilos de panceta. El chicharrón pierde bastante peso al freírse, así que la
        cuenta se hace sobre la carne cruda: unos 250 a 300 gramos por persona si hay acompañamientos.
      </p>

      <h3>¿La pierna sirve para chicharrón?</h3>
      <p>
        Sirve, pero da un chicharrón distinto: más magro y más seco, porque no tiene las capas de
        grasa. Hay quien lo prefiere así. Para el chicharrón clásico, panceta.
      </p>

      <h3>¿Cuál es el corte más económico que rinde bien?</h3>
      <p>
        El brazuelo deshuesado. Es el más barato del catálogo y funciona muy bien en adobo y
        estofados, donde la cocción larga lo ablanda por completo.
      </p>

      <h3>¿Puedo congelar el cerdo que no use?</h3>
      <p>
        Sí, pero conviene porcionar antes de congelar, no después. Congelar la pieza entera obliga a
        descongelarla toda cada vez, y cada ciclo de congelado y descongelado le cuesta jugosidad.
      </p>
    </ArticleLayout>
  );
}
