import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdAccessTime, MdLocalShipping, MdPayments, MdAcUnit } from "react-icons/md";

import { FaqVisible } from "@/components/Pilar/FaqVisible";
import { ArticulosDelPilar } from "@/components/Pilar/ArticulosDelPilar";
import { PILARES } from "@/lib/pilares";
import { DELIVERY, DISTRITOS, HOURS_DISPLAY, SITE, whatsappUrl } from "@/lib/site";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  jsonLd,
} from "@/lib/schema";

const pilar = PILARES.delivery;

export const metadata: Metadata = {
  title: pilar.titulo,
  description: pilar.descripcion,
  alternates: { canonical: pilar.ruta },
  openGraph: {
    title: pilar.titulo,
    description: pilar.descripcion,
    url: pilar.ruta,
    type: "website",
  },
};

const COMO_FUNCIONA = [
  {
    paso: "Arma tu pedido",
    texto:
      "Escríbenos por WhatsApp con los cortes, los kilos y el gramaje por porción que necesitas. Si no sabes qué corte pedir, dinos qué plato vas a preparar.",
  },
  {
    paso: "Confirmamos y agendamos",
    texto:
      "Te respondemos con disponibilidad, el total y la hora aproximada de entrega. El pedido se confirma con un día de anticipación.",
  },
  {
    paso: "Cortamos el mismo día",
    texto:
      "La carne se prepara y porciona el día de la entrega, no antes. Nada sale del mostrador congelado para venderse como fresco.",
  },
  {
    paso: "Llega a tu puerta",
    texto:
      "Sale empacada y en contenedor térmico. La entrega es coordinada: no se deja el pedido sin que alguien lo reciba.",
  },
];

export default function DeliveryPage() {
  const schema = [
    buildLocalBusinessSchema(),
    buildFaqSchema(pilar.faqs),
    buildBreadcrumbSchema([
      { nombre: "Inicio", url: "/" },
      { nombre: "Delivery de carne en Lima", url: pilar.ruta },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />

      <section className="bg-carni-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-carni-red">
            Carnicería con reparto en Lima
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-carni-dark-red md:text-5xl">
            {pilar.h1}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-800">{pilar.entradilla}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={whatsappUrl("Hola, quiero coordinar un delivery de carne. Mi distrito es:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-carni-red px-5 py-3 font-semibold text-white transition-colors hover:bg-carni-dark-red"
            >
              <FaWhatsapp className="text-xl" aria-hidden="true" />
              Coordinar mi pedido
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="rounded-lg border border-carni-red px-5 py-3 font-semibold text-carni-red transition-colors hover:bg-white"
            >
              Llamar al {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Datos duros del servicio. Lo que alguien necesita saber antes de
          escribir, y lo que ningún competidor de Lima publica. */}
      <section className="mx-auto max-w-5xl px-6 py-16" aria-labelledby="condiciones">
        <h2 id="condiciones" className="font-display text-3xl font-bold text-carni-dark-red md:text-4xl">
          Cómo funciona el delivery
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Dato icon={<MdAccessTime />} titulo="Anticipación">
            {DELIVERY.anticipacionHoras} horas antes de la entrega
          </Dato>
          <Dato icon={<MdLocalShipping />} titulo="Pedido mínimo">
            {DELIVERY.minimoSoles !== null
              ? `S/ ${DELIVERY.minimoSoles}`
              : "Se confirma al coordinar"}
          </Dato>
          <Dato icon={<MdAcUnit />} titulo="Cadena de frío">
            Empaque sellado y contenedor térmico
          </Dato>
          <Dato icon={<MdPayments />} titulo="Pago">
            Efectivo, Yape y Plin
          </Dato>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {COMO_FUNCIONA.map((item, i) => (
            <li key={item.paso} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-carni-red text-sm font-bold tabular-nums text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-gray-900">{item.paso}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{item.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-gray-50 py-16" aria-labelledby="cobertura">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="cobertura" className="font-display text-3xl font-bold text-carni-dark-red md:text-4xl">
            Distritos donde entregamos
          </h2>

          {DISTRITOS.length > 0 ? (
            <>
              <p className="mt-3 max-w-2xl text-gray-700">
                Estos son los distritos con ruta de reparto confirmada. Si el tuyo no está en la
                lista, escríbenos igual: coordinamos entregas fuera de ruta según el día.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {DISTRITOS.map((distrito) => (
                  <li
                    key={distrito}
                    className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800"
                  >
                    {distrito}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-3 max-w-2xl text-gray-700">
              Entregamos en Lima Metropolitana. Escríbenos con tu distrito y te confirmamos la
              disponibilidad de ruta para el día que necesitas el pedido.
            </p>
          )}

          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="font-bold text-gray-900">Horario de atención</h3>
            <dl className="mt-4 divide-y divide-gray-100">
              {HOURS_DISPLAY.map((h) => (
                <div key={h.label} className="flex flex-wrap justify-between gap-2 py-2.5">
                  <dt className="text-gray-600">{h.label}</dt>
                  <dd className="font-medium tabular-nums text-gray-900">{h.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-gray-500">
              Los mensajes de WhatsApp se reciben a cualquier hora y se confirman al abrir.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16" aria-labelledby="que-pedir">
        <h2 id="que-pedir" className="font-display text-3xl font-bold text-carni-dark-red md:text-4xl">
          Qué puedes pedir
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Link
            href="/carne-de-res"
            className="rounded-2xl border border-gray-200 bg-white p-7 transition-colors hover:border-carni-red"
          >
            <h3 className="font-display text-2xl font-bold text-carni-dark-red">Carne de res</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              23 cortes con precio por kilo publicado: desde carne molida y guisos hasta lomo fino,
              bife y asado de tira.
            </p>
            <span className="mt-4 inline-block font-semibold text-carni-red">Ver cortes y precios →</span>
          </Link>
          <Link
            href="/carne-de-cerdo"
            className="rounded-2xl border border-gray-200 bg-white p-7 transition-colors hover:border-carni-red"
          >
            <h3 className="font-display text-2xl font-bold text-carni-dark-red">Carne de cerdo</h3>
            <p className="mt-2 leading-relaxed text-gray-600">
              Panceta, bondiola, chuleta, pierna y brazuelo. Para chicharrón, horno o parrilla, con
              precio por kilo publicado.
            </p>
            <span className="mt-4 inline-block font-semibold text-carni-red">Ver cortes y precios →</span>
          </Link>
        </div>
      </section>

      <ArticulosDelPilar pilar="delivery" titulo="Antes de hacer tu pedido" />

      <FaqVisible faqs={pilar.faqs} />
    </>
  );
}

function Dato({
  icon,
  titulo,
  children,
}: {
  icon: React.ReactNode;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <span className="text-2xl text-carni-red" aria-hidden="true">
        {icon}
      </span>
      <h3 className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">{titulo}</h3>
      <p className="mt-1 font-medium text-gray-900">{children}</p>
    </div>
  );
}
