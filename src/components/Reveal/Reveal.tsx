/**
 * Revelado de secciones al entrar en pantalla, en CSS.
 *
 * Sustituye a las animaciones de entrada de framer-motion, que costaban 172 KB
 * de JavaScript en todas las páginas y —peor— dejaban el contenido en
 * `opacity: 0` hasta que React hidrataba. Eso es exactamente lo que se percibía
 * como "la web carga lento": el HTML llegaba rápido pero se veía vacío.
 *
 * Aquí el reparto es distinto:
 *   · El HTML sale visible. Si el JavaScript falla o tarda, no se pierde nada.
 *   · Un script de 400 bytes en el `<head>` marca el documento antes del primer
 *     pintado, así que no hay parpadeo de "se ve, se esconde, aparece".
 *   · Un IntersectionObserver añade la clase al entrar en pantalla. Corre
 *     mucho antes que la hidratación de React, no después.
 *   · Solo se animan `opacity` y `transform`: el compositor de la GPU los
 *     resuelve sin recalcular maquetación ni repintar.
 *
 * Este componente es de servidor: no manda ni un byte de JavaScript propio.
 */

type Animacion = "fade" | "up" | "left" | "right" | "scale";

type RevealProps = {
  children: React.ReactNode;
  /** Dirección de entrada. Por defecto sube unos píxeles. */
  as?: Animacion;
  /** Retraso en milisegundos, para escalonar hermanos. */
  delay?: number;
  className?: string;
  /** Etiqueta HTML a renderizar. Por defecto `div`. */
  tag?: "div" | "section" | "article" | "li" | "span";
};

export function Reveal({
  children,
  as = "up",
  delay = 0,
  className = "",
  tag: Tag = "div",
}: RevealProps) {
  return (
    <Tag
      data-reveal={as}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}

/**
 * Escalona automáticamente a los hijos directos.
 *
 * El retraso lo calcula CSS con `nth-child`, así que añadir o quitar tarjetas
 * no obliga a tocar ningún número a mano.
 */
export function RevealGroup({
  children,
  className = "",
  tag: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  tag?: "div" | "section" | "ul" | "ol";
}) {
  return (
    <Tag data-reveal-group="" className={className}>
      {children}
    </Tag>
  );
}

/**
 * Script que marca el documento antes del primer pintado y engancha el
 * observador. Va inline en el `<head>`: sin petición de red y sin esperar a
 * que React arranque.
 */
export const REVEAL_SCRIPT = `
(function(){
  try{
    var r = document.documentElement;
    // Quien pidió menos movimiento no entra al sistema: ve todo quieto y visible.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    r.setAttribute('data-reveal-on','');

    function start(){
      var io = new IntersectionObserver(function(entries){
        for (var i=0;i<entries.length;i++){
          if (entries[i].isIntersecting){
            entries[i].target.setAttribute('data-reveal-seen','');
            io.unobserve(entries[i].target);
          }
        }
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });

      function observar(){
        var nodos = document.querySelectorAll('[data-reveal]:not([data-reveal-seen])');
        for (var i=0;i<nodos.length;i++) io.observe(nodos[i]);
      }
      observar();

      // El contenido que React monta después (modales, listas filtradas)
      // también entra al observador.
      new MutationObserver(observar).observe(document.body, {childList:true, subtree:true});
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }
  }catch(e){
    // Ante cualquier fallo, el documento se queda sin marcar y todo se ve.
    document.documentElement.removeAttribute('data-reveal-on');
  }
})();
`;
