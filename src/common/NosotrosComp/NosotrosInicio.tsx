import { GiMeat, GiCow, GiPig, GiKnifeFork, GiWeight } from "react-icons/gi";
import { BannerNosotros } from "../../components/Banner/BannerNosotros";
import { Spotlight } from "../../components/Spotlight/Spotlight";
import { Reveal, RevealGroup } from "../../components/Reveal/Reveal";
import { Chancho, TablaCarnes } from "./Ilustraciones";

/* Las tarjetas van dentro de un <div data-reveal>: el revelado deja
   `transform: none` con más especificidad que `hover:-translate-y-1`, y si
   compartieran elemento la tarjeta no se elevaría al pasar el mouse. */

/**
 * Página Nosotros. Componente de servidor: lo único que manda JavaScript es
 * el banner (la frase que rota) y `Spotlight` (la luz que sigue al mouse).
 *
 * Todo el color sale de los tokens del tema, así que el modo oscuro no
 * necesita clases propias: antes el fondo terminaba en `to-white` fijo y en
 * oscuro la mitad de la página se quedaba blanca.
 */

const PILARES = [
  {
    icon: GiKnifeFork,
    titulo: "Nuestra Misión",
    texto:
      "Ofrecer la mejor selección de carnes de res y cerdo de primera calidad, garantizando cortes precisos, frescura excepcional y un servicio personalizado que satisfaga las exigencias de nuestros clientes.",
  },
  {
    icon: GiWeight,
    titulo: "Nuestra Visión",
    texto:
      "Ser la carnicería líder en la región, reconocida por la excelencia de nuestros cortes de res y cerdo, manteniendo los más altos estándares de calidad y ofreciendo una experiencia de compra única.",
  },
];

const VALORES = [
  {
    icon: GiCow,
    titulo: "Carnes de Res Premium",
    texto: "Seleccionamos las mejores reses para ofrecer cortes de primera calidad, desde tiernos lomos hasta jugosos ribeyes.",
  },
  {
    icon: GiPig,
    titulo: "Cerdo Selecto",
    texto: "Ofrecemos la mejor carne de cerdo, con cortes especializados y calidad garantizada en cada pieza.",
  },
  {
    icon: GiKnifeFork,
    titulo: "Cortes Especializados",
    texto: "Realizamos cortes precisos y personalizados según sus preferencias, garantizando la mejor presentación.",
  },
  {
    icon: GiMeat,
    titulo: "Calidad Garantizada",
    texto: "Cada corte pasa por un riguroso control de calidad para asegurar la mejor experiencia en su mesa.",
  },
];

const tarjeta =
  "glow-card group rounded-2xl border border-line bg-surface p-7 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl dark:shadow-none";

const insignia =
  "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-ink ring-1 ring-brand/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 dark:bg-brand-ink/10 dark:ring-brand-ink/25";

export const NosotrosInicio = () => {
  return (
    <div className="bg-page">
      <BannerNosotros />
      <div className="mantel" aria-hidden="true" />

      {/* ── Misión y visión ── */}
      <Spotlight className="overflow-hidden bg-gradient-to-b from-surface-warm/70 to-page py-20 dark:from-surface-warm/40">
        <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink">Quiénes somos</p>
              <h2 className="font-display text-4xl font-bold text-brand-ink-deep sm:text-5xl">
                Del mostrador a tu mesa
              </h2>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-6">
              {PILARES.map(({ icon: Icono, titulo, texto }) => (
                <div key={titulo} data-reveal="up">
                  <article data-glow className={tarjeta}>
                    <div className="flex items-start gap-5">
                      <span className={insignia}>
                        <Icono className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-ink">{titulo}</h3>
                        <p className="mt-2 leading-relaxed text-ink-muted">{texto}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </RevealGroup>
          </div>

          <Reveal as="scale" className="relative mx-auto w-full max-w-xl">
            <div className="ilus-halo" aria-hidden="true" />
            <TablaCarnes className="relative w-full text-ink-subtle" />
          </Reveal>
        </div>
      </Spotlight>

      {/* ── Lo que nos define ── */}
      <Spotlight className="overflow-hidden bg-surface-2 py-20">
        <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal as="left" className="relative order-last mx-auto w-full max-w-md lg:order-first">
            <div className="ilus-halo" aria-hidden="true" />
            <Chancho className="relative w-full text-ink" />
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-ink">Lo que nos define</p>
              <h2 className="font-display text-4xl font-bold text-brand-ink-deep sm:text-5xl">
                Res y cerdo, cortados con oficio
              </h2>
            </Reveal>

            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
              {VALORES.map(({ icon: Icono, titulo, texto }) => (
                <div key={titulo} data-reveal="up">
                  <article data-glow className={`${tarjeta} h-full`}>
                    <span className={insignia}>
                      <Icono className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">{titulo}</h3>
                    <p className="mt-2 leading-relaxed text-ink-muted">{texto}</p>
                  </article>
                </div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Spotlight>
    </div>
  );
};
