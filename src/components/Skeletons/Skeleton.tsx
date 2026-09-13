/**
 * Primitiva de skeleton.
 *
 * No es un spinner: reproduce la forma real del contenido que va a ocupar ese
 * espacio, para que el salto al llegar los datos sea nulo y la espera se
 * perciba más corta. El brillo se apaga solo si el visitante pidió menos
 * movimiento en su sistema (ver `globals.css`).
 */
export function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`skeleton-shimmer rounded-md ${className}`} />;
}

/**
 * Envuelve un bloque de skeletons. `aria-busy` y el texto oculto son lo que
 * hace que un lector de pantalla anuncie "cargando" en lugar de leer una
 * sucesión de cajas vacías.
 */
export function SkeletonBlock({
  children,
  label = "Cargando contenido",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div role="status" aria-busy="true" aria-live="polite">
      <span className="sr-only">{label}</span>
      {children}
    </div>
  );
}
