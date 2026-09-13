import { ArticleLayout, TablaArticulo } from "@/components/Blog/ArticleLayout";
import { productosRes } from "@/components/Filtros/data/productosRes";
import { getPost } from "@/content/posts";

/**
 * La diferencia entre los tipos de molida.
 *
 * Es una duda que se resuelve en el mostrador todos los días y que nadie tiene
 * escrita. Además el catálogo vende las dos variantes, así que el artículo
 * responde exactamente a la decisión que el cliente tiene delante.
 */

const post = getPost("tipos-de-carne-molida");

function precioDe(nombre: string) {
  const p = productosRes.find((x) => x.nombre === nombre);
  return p ? `S/ ${p.precio.toFixed(2)}` : "—";
}

export default function TiposCarneMolida() {
  if (!post) return null;

  return (
    <ArticleLayout
      post={post}
      entradilla="La diferencia entre una molida y otra no es la calidad del animal: es cuánta grasa lleva y de qué corte sale. Y al revés de lo que parece, la más cara no siempre es la que conviene."
    >
      <p>
        Es la pregunta más frecuente del mostrador:{" "}
        <strong>«¿cuál es la diferencia entre la especial y la extraespecial?»</strong>. La respuesta
        corta: la proporción de grasa. La respuesta útil: eso cambia por completo para qué sirve cada
        una.
      </p>

      <h2>Qué distingue a cada una</h2>

      <TablaArticulo
        cabeceras={["Tipo", "Grasa aprox.", "De qué corte sale", "Precio/kg"]}
        filas={[
          [
            "Corriente",
            "20 – 25 %",
            "Recortes de varios cortes, incluyendo los más grasos",
            "Consultar",
          ],
          [
            "Especial",
            "12 – 15 %",
            "Cortes de guiso magros, con algo de grasa añadida",
            precioDe("Carne molida Especial"),
          ],
          [
            "Extraespecial",
            "5 – 8 %",
            "Cortes magros seleccionados, casi sin grasa",
            precioDe("Carne molida Extraespecial"),
          ],
        ]}
        nota="Los porcentajes son orientativos: varían según el despiece del día. Si necesitas una proporción concreta, la preparamos al pedido."
      />

      <h2>Por qué la extraespecial no siempre es la mejor</h2>
      <p>
        Es lo contrario de lo que sugiere el nombre y el precio. <strong>La grasa es sabor y es
        jugosidad.</strong> Una hamburguesa hecha con extraespecial sale seca y se desarma en la
        sartén, porque no tiene grasa que la ligue ni que se derrita al cocinarse.
      </p>
      <p>
        La extraespecial brilla donde la grasa sobra: en salsas largas que van a llevar aceite
        aparte, en rellenos, o cuando alguien en casa tiene indicación médica de reducir grasa
        saturada.
      </p>

      <h2>Cuál pedir según lo que vayas a hacer</h2>

      <TablaArticulo
        cabeceras={["Si vas a hacer…", "Pide", "Por qué"]}
        filas={[
          [
            "Hamburguesas",
            "Especial",
            "Sin grasa no se ligan y quedan secas. Es el uso donde más se nota la diferencia.",
          ],
          [
            "Albóndigas",
            "Especial",
            "La grasa mantiene la albóndiga tierna durante la cocción en salsa.",
          ],
          [
            "Tallarín saltado o salteados",
            "Especial",
            "El wok necesita algo de grasa propia para que la carne no se pegue ni se reseque.",
          ],
          [
            "Salsa boloñesa o de tomate larga",
            "Extraespecial",
            "La salsa cocina una hora o más: la grasa se separa y flota. Mejor añadir el aceite tú.",
          ],
          [
            "Lasaña o pastel de papa",
            "Extraespecial",
            "Lleva bechamel o queso, que ya aportan grasa de sobra.",
          ],
          [
            "Relleno de empanadas o papa rellena",
            "Extraespecial",
            "La grasa de más humedece la masa y la rompe al freír.",
          ],
        ]}
      />

      <h2>Tres cosas que conviene saber</h2>

      <h3>Molida del día, no de ayer</h3>
      <p>
        La carne molida tiene mucha más superficie expuesta al aire que una pieza entera, y por eso
        se oxida y se degrada más rápido. Nosotros molemos el mismo día. Si compras molida en otro
        lado, pregunta cuándo se molió: es la pregunta que más información da.
      </p>

      <h3>Puedes pedir el corte que quieras molido</h3>
      <p>
        No hace falta quedarse con las opciones del mostrador. Si quieres una hamburguesa de bife, o
        una molida de guiso de paleta para un relleno, lo molemos al momento con el corte que elijas.
        Es gratis y el resultado es notablemente mejor.
      </p>

      <h3>Congélala porcionada y aplanada</h3>
      <p>
        Aplastada en bolsa, formando una lámina fina, se congela y se descongela en una fracción del
        tiempo que un bloque. Y porcionada en las cantidades que usas, no tienes que descongelar un
        kilo para usar 300 gramos.
      </p>

      <h2>Preguntas frecuentes</h2>

      <h3>¿La molida lleva grasa añadida?</h3>
      <p>
        En la especial, sí: se ajusta la proporción con grasa del propio animal para llegar al punto
        que ese tipo necesita. En la extraespecial no se añade nada.
      </p>

      <h3>¿Cuánta molida calculo por persona?</h3>
      <p>
        Entre 120 y 150 gramos si hay guarnición. Para hamburguesas, 150 gramos por unidad es la
        medida estándar de una hamburguesa casera generosa.
      </p>

      <h3>¿Puedo pedir molida de cerdo?</h3>
      <p>
        Sí, y la mezcla de res y cerdo a partes iguales es excelente para albóndigas y para relleno:
        el cerdo aporta jugosidad y la res, sabor.
      </p>
    </ArticleLayout>
  );
}
