"use client";

import React from 'react';
import Image from 'next/image';
import { GiHealthNormal, GiBrain, GiMuscleUp, GiElectric } from 'react-icons/gi';
import { FaShieldAlt, FaAppleAlt } from 'react-icons/fa';

const BeneficiosNutritivos: React.FC = () => {
  return (
    <article className="bg-surface min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[clamp(320px,50vh,440px)] overflow-hidden">
        <Image
          src="/blog/nutricion_carne_header.webp"
          alt="Beneficios nutritivos de la carne de res"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="max-w-site mx-auto px-6 pb-12 w-full text-white">
            <div data-reveal="up">
              <span className="bg-brand px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">Nutrición y Salud</span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Beneficios Nutritivos al Consumir Carne de Res
              </h1>
              <p className="mt-4 text-xl text-cream/80 max-w-3xl">
                Un análisis detallado sobre el elevado valor nutricional y el aporte de proteínas de alta calidad que la carne roja brinda al organismo humano.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        {/* Intro */}
        <section className="prose prose-lg max-w-none text-ink-muted leading-relaxed">
          <div className="text-2xl font-medium text-ink mb-8 border-l-4 border-brand pl-6 space-y-4">
            <p>
              La carne roja es uno de los alimentos de origen animal más consumidos a nivel mundial debido a su elevado valor nutricional y su aporte de proteínas de alta calidad.
            </p>
            <p className="text-lg font-normal text-ink-muted italic">
              Este tipo de carne se caracteriza por su color rojo, debido a la mioglobina, y constituye una fuente esencial de hierro, vitaminas del complejo B, fósforo y zinc.
            </p>
          </div>

          <p className="mb-6">
            Desde tiempos antiguos, la carne roja ha sido fundamental en diversas culturas, satisfaciendo necesidades nutricionales y favoreciendo el desarrollo muscular gracias a sus proteínas completas. En la actualidad, sigue siendo clave en muchas dietas, aunque es relevante analizar su papel considerando sus propiedades y beneficios dentro de una dieta equilibrada.
          </p>

          <h2 className="text-3xl font-bold text-ink mt-12 mb-8 text-center uppercase tracking-tighter">Referencial Teórico: Beneficios Principales</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {/* Hierro */}
            <div
              className="bg-surface-2 p-6 rounded-2xl border-b-4 border-brand shadow-sm transition-transform duration-200 hover:-translate-y-1.5">
              <div className="flex items-center gap-3 mb-4 text-brand-ink">
                <GiHealthNormal className="text-3xl" />
                <h3 className="text-lg font-bold m-0 leading-tight">Fuente de Hierro</h3>
              </div>
              <p className="text-sm leading-relaxed">
                El **hierro hemo** de la carne de res es absorbido con mayor facilidad, fundamental para la formación de hemoglobina y la prevención de la anemia.
              </p>
            </div>

            {/* Vitamina B */}
            <div
              className="bg-surface-2 p-6 rounded-2xl border-b-4 border-ink shadow-sm transition-transform duration-200 hover:-translate-y-1.5">
              <div className="flex items-center gap-3 mb-4 text-ink">
                <GiBrain className="text-3xl" />
                <h3 className="text-lg font-bold m-0 leading-tight">Complejo B</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Aporte significativo de **vitaminas B6 y B12**, esenciales para la producción de energía, formación de glóbulos rojos y el sistema nervioso.
              </p>
            </div>

            {/* Desarrollo Muscular */}
            <div
              className="bg-surface-2 p-6 rounded-2xl border-b-4 border-brand shadow-sm transition-transform duration-200 hover:-translate-y-1.5">
              <div className="flex items-center gap-3 mb-4 text-brand-ink">
                <GiMuscleUp className="text-3xl" />
                <h3 className="text-lg font-bold m-0 leading-tight">Mantenimiento Muscular</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Sus proteínas de alta calidad favorecen la **síntesis y reparación de tejidos**, vital para deportistas y adultos mayores.
              </p>
            </div>

            {/* Minerales */}
            <div
              className="bg-surface-2 p-6 rounded-2xl border-b-4 border-ink shadow-sm transition-transform duration-200 hover:-translate-y-1.5">
              <div className="flex items-center gap-3 mb-4 text-ink">
                <FaShieldAlt className="text-3xl" />
                <h3 className="text-lg font-bold m-0 leading-tight">Minerales Esenciales</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Contiene **zinc, fósforo, potasio y magnesio**, que fortalecen el sistema inmune y la salud ósea y dental.
              </p>
            </div>

            {/* Energía */}
            <div
              className="bg-surface-2 p-6 rounded-2xl border-b-4 border-brand shadow-sm transition-transform duration-200 hover:-translate-y-1.5">
              <div className="flex items-center gap-3 mb-4 text-brand-ink">
                <GiElectric className="text-3xl" />
                <h3 className="text-lg font-bold m-0 leading-tight">Metabolismo Energético</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Compuestos como **carnitina y creatina** ayudan a producir energía y mejoran el rendimiento físico durante el esfuerzo muscular.
              </p>
            </div>

            {/* Antioxidantes */}
            <div
              className="bg-surface-2 p-6 rounded-2xl border-b-4 border-ink shadow-sm transition-transform duration-200 hover:-translate-y-1.5">
              <div className="flex items-center gap-3 mb-4 text-ink">
                <FaAppleAlt className="text-3xl" />
                <h3 className="text-lg font-bold m-0 leading-tight">Efecto Antioxidante</h3>
              </div>
              <p className="text-sm leading-relaxed">
                Posee compuestos bioactivos como el **ácido linoleico conjugado (CLA)**, que protegen las células frente al daño oxidativo.
              </p>
            </div>
          </div>
        </section>

        {/* Considerations */}
        <section className="mt-16 bg-surface-warm/10 p-8 md:p-12 rounded-[40px] border border-cream">
          <h2 className="text-2xl font-black text-ink mb-6">Consideraciones para un Consumo Responsable</h2>
          <div className="space-y-4 text-ink-muted text-lg">
            <p>
              A pesar de sus múltiples beneficios, el consumo de carne de res debe ser **moderado** y formar parte de una dieta equilibrada que incluya frutas, verduras y cereales integrales.
            </p>
            <p>
              La calidad del producto, un almacenamiento correcto y métodos de preparación adecuados son fundamentales para garantizar la **seguridad alimentaria** y aprovechar al máximo sus nutrientes de manera responsable.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-24 p-12 bg-ink rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand/20 rounded-full -ml-16 -mt-16 blur-xl"></div>
          <h3 className="text-3xl font-bold mb-6">Nutrición de Excelencia en su Mesa</h3>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            En Carnicentro Marcelo, nos comprometemos con la calidad. Cada corte que ofrecemos está pensado para brindar no solo el mejor sabor, sino también el máximo valor nutricional para usted y su familia.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a href="/carne-de-res" className="bg-brand text-white px-8 py-3 rounded-full font-bold hover:bg-surface hover:text-brand-ink transition-all transform hover:scale-105">Ver Cortes Premium</a>
            <a href="/nosotros" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-surface hover:text-ink transition-all">Nuestra Tradición</a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BeneficiosNutritivos;
