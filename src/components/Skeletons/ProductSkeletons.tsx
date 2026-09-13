import { Skeleton, SkeletonBlock } from "./Skeleton";

/** Una tarjeta de corte: foto cuadrada, nombre, categoría y precio. */
export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <Skeleton className="aspect-square w-full rounded-none" />
      <div className="flex flex-col gap-3 p-5">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-1/3" />
        <div className="flex items-center justify-between pt-1">
          <Skeleton className="h-7 w-20" />
          <Skeleton className="h-9 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

/** Rejilla del catálogo. `count` imita cuántas tarjetas entran sin hacer scroll. */
export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <SkeletonBlock label="Cargando cortes">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: count }, (_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </SkeletonBlock>
  );
}

/** Barra de búsqueda + chips de categoría + rango de precio. */
export function FiltrosSkeleton() {
  return (
    <SkeletonBlock label="Cargando filtros">
      <div className="flex flex-col gap-5">
        <Skeleton className="h-12 w-full rounded-xl" />
        <div className="flex flex-wrap gap-2">
          {["w-20", "w-24", "w-20", "w-28", "w-24", "w-32"].map((w, i) => (
            <Skeleton key={i} className={`h-9 rounded-full ${w}`} />
          ))}
        </div>
        <Skeleton className="h-2 w-full max-w-sm rounded-full" />
      </div>
    </SkeletonBlock>
  );
}

/** Fila de la tabla de precios por kilo. */
export function TablaPreciosSkeleton({ filas = 10 }: { filas?: number }) {
  return (
    <SkeletonBlock label="Cargando precios por kilo">
      <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
        {Array.from({ length: filas }, (_, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-4">
            <Skeleton className="h-12 w-12 shrink-0 rounded-lg" />
            <Skeleton className="h-4 flex-1 max-w-[220px]" />
            <Skeleton className="ml-auto h-5 w-16" />
          </div>
        ))}
      </div>
    </SkeletonBlock>
  );
}
