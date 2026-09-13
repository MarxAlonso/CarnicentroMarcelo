import { ArticleLayout, TablaArticulo } from "@/components/Blog/ArticleLayout";
import { productosRes } from "@/components/Filtros/data/productosRes";
import { getPost } from "@/content/posts";

/**
 * De plato peruano a corte concreto.
 *
 * Es el artículo que más directamente convierte: quien busca «qué carne para
 * lomo saltado» ya sabe qué va a cocinar, solo no sabe qué pedir. Cada
 * recomendación trae el precio vivo del catálogo.
 */

type Recomendacion = {
  plato: string;
  principal: string;
  alternativa?: string;
  porque: string;
  cantidad: string;
};

const PLATOS: Recomendacion[] = [
  {
    plato: "Lomo saltado",
    principal: "Lomo Fino",
    alternativa: "Tapa de Lomo",
    porque:
      "El saltado se hace en dos minutos a fuego muy alto: hace falta un corte que ya sea tierno, porque no hay tiempo de ablandarlo. Si el presupuesto aprieta, la tapa de lomo cortada fina y contra la fibra queda muy cerca.",
    cantidad: "150 g por persona",
  },
  {
    plato: "Bistec a lo pobre",
    principal: "Cuadril de cadera",
    alternativa: "Bola de Lomo",
    porque:
      "Se busca una pieza entera y pareja que se plancha rápido. El cuadril tiene el equilibrio justo entre terneza y sabor; la bola de lomo es más magra y más económica.",
    cantidad: "200 g por persona",
  },
  {
    plato: "Seco de res",
    principal: "Guiso de Paleta",
    alternativa: "Aguja",
    porque:
      "El seco se cocina una hora larga con culantro y chicha. Necesita un corte con tejido conectivo: es ese colágeno el que al deshacerse da la untuosidad del plato. Un lomo fino aquí quedaría seco y sería tirar el dinero.",
    cantidad: "180 g por persona",
  },
  {
    plato: "Sancochado",
    principal: "Pecho",
    alternativa: "Osobuco de brazo",
    porque:
      "El caldo sale del hueso y de la grasa, no de la carne magra. El pecho aporta cuerpo y el osobuco de brazo añade el tuétano, que es lo que hace que el caldo quede espeso.",
    cantidad: "250 g por persona, con hueso",
  },
  {
    plato: "Carapulcra",
    principal: "Guiso de Paleta",
    porque:
      "Cocción larga con papa seca. Mismo criterio que el seco: colágeno que se convierta en gelatina y ligue la salsa.",
    cantidad: "150 g por persona",
  },
  {
    plato: "Asado a la olla",
    principal: "Asado de Pejerrey",
    alternativa: "Asado Cuadrado",
    porque:
      "Se cocina la pieza entera y se corta al servir, así que conviene una pieza compacta y de forma regular. El de pejerrey es más magro; el cuadrado, algo más jugoso.",
    cantidad: "180 g por persona",
  },
  {
    plato: "Parrilla",
    principal: "Tira de Asado",
    alternativa: "Entraña",
    porque:
      "La tira aguanta fuego largo gracias al hueso y la grasa. La entraña es lo contrario: fuego fuerte y pocos minutos. Muchas parrillas llevan las dos porque se comen en momentos distintos.",
    cantidad: "400 g por persona, solo carne",
  },
  {
    plato: "Caldo de res",
    principal: "Osobuco de brazo",
    alternativa: "Costilla",
    porque:
      "Hueso, tuétano y tiempo. Dos o tres horas a fuego bajo; no hay atajo posible.",
    cantidad: "250 g por persona",
  },
  {
    plato: "Estofado",
    principal: "Huachalomo",
    alternativa: "Churrasco Redondo",
    porque:
      "Corte de fibra larga que se deshace con la cocción y absorbe bien la salsa de tomate y vino.",
    cantidad: "170 g por persona",
  },
  {
    plato: "Tallarín saltado",
    principal: "Carne molida Especial",
    alternativa: "Cordoncito de Lomo",
    porque:
      "Si es con molida, la especial aporta la grasa que necesita el wok. Si lo prefieres en tiras, el cordoncito de lomo se saltea rápido sin endurecerse.",
    cantidad: "120 g por persona",
  },
  {
    plato: "Milanesa apanada",
    principal: "Bola de Lomo",
    porque:
      "Es el corte que mejor se deja laminar fino y parejo, que es lo que una milanesa necesita para cocinarse a la vez que se dora el pan.",
    cantidad: "150 g por persona",
  },
  {
    plato: "Hamburguesa casera",
    principal: "Carne molida Especial",
    porque:
      "La grasa no es opcional en una hamburguesa: es lo que la mantiene jugosa. La extraespecial, más magra, da hamburguesas secas.",
    cantidad: "150 g por hamburguesa",
  },
];

const post = getPost("que-corte-de-res-para-cada-plato");

function precioDe(nombre: string) {
  const p = productosRes.find((x) => x.nombre === nombre);
  return p ? `S/ ${p.precio.toFixed(2)}` : "—";
}

export default function CortePorPlato() {
  if (!post) return null;

  return (
    <ArticleLayout
      post={post}
      entradilla="Elegir mal el corte es la razón número uno por la que un guiso queda duro o un bistec queda seco. Esta guía va al revés de las demás: parte del plato que vas a cocinar y te dice exactamente qué pedir, cuánto y por qué."
    >
      <p>
        En el mostrador la pregunta nunca es «¿qué es el huachalomo?». Es{" "}
        <strong>«voy a hacer seco de res, ¿qué me llevo?»</strong>. Así que esta guía está ordenada
        por plato, no por corte.
      </p>

      <h2>Tabla rápida</h2>
      <p>Si tienes prisa, esto es todo lo que necesitas:</p>

      <TablaArticulo
        cabeceras={["Plato", "Pide", "Precio/kg", "Cuánto"]}
        filas={PLATOS.map((r) => [
          r.plato,
          r.principal,
          precioDe(r.principal),
          r.cantidad,
        ])}
        nota="Las cantidades son de carne cruda y suponen que hay guarnición. Para una comida solo de carne, suma un 30 %."
      />

      <h2>Plato por plato, con el porqué</h2>
      <p>
        La razón detrás de cada recomendación importa más que la recomendación misma: si entiendes el
        criterio, puedes decidir tú la próxima vez.
      </p>

      <div data-reveal-group="" className="my-8 flex flex-col gap-4">
        {PLATOS.map((r) => (
          <div
            key={r.plato}
            data-reveal="up"
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="!mb-0 !mt-0 text-xl font-bold text-carni-dark-red">{r.plato}</h3>
              <span className="text-sm text-gray-500">{r.cantidad}</span>
            </div>

            <p className="!mb-0 !mt-3 !text-base">
              <strong className="text-gray-900">Pide:</strong>{" "}
              <span className="font-semibold text-carni-red">{r.principal}</span>{" "}
              <span className="tabular-nums text-gray-500">({precioDe(r.principal)}/kg)</span>
              {r.alternativa && (
                <>
                  {" · "}
                  <span className="text-gray-600">
                    alternativa: {r.alternativa}{" "}
                    <span className="tabular-nums">({precioDe(r.alternativa)}/kg)</span>
                  </span>
                </>
              )}
            </p>

            <p className="!mb-0 !mt-3 !text-[15px] text-gray-600">{r.porque}</p>
          </div>
        ))}
      </div>

      <h2>Las tres reglas que resuelven el resto</h2>

      <h3>1. Cocción rápida pide corte tierno</h3>
      <p>
        Plancha, wok o parrilla de pocos minutos: bistecks. No hay tiempo para que un corte duro se
        ablande, así que hay que partir de uno que ya lo sea.
      </p>

      <h3>2. Cocción larga pide corte con colágeno</h3>
      <p>
        Guisos, estofados y secos: cortes de guiso. Parece contradictorio pagar menos por un
        resultado mejor, pero es exactamente así — el colágeno que hace «duro» al corte crudo es lo
        que lo vuelve untuoso después de una hora de olla.
      </p>

      <h3>3. Caldo pide hueso</h3>
      <p>
        Un caldo hecho solo con carne magra sale aguado. El cuerpo viene del hueso y del tuétano, y
        eso solo lo dan los cortes de sancochado.
      </p>

      <p>
        Si tu plato no está en la lista, escríbenos por WhatsApp diciendo qué vas a cocinar y para
        cuántos: te decimos el corte y la cantidad exacta.
      </p>
    </ArticleLayout>
  );
}
