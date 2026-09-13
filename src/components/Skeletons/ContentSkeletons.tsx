import { Skeleton, SkeletonBlock } from "./Skeleton";

/** Cabecera + cuerpo de un artículo del blog. */
export function ArticleSkeleton() {
  return (
    <SkeletonBlock label="Cargando artículo">
      <article className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-11 w-full" />
        <Skeleton className="h-11 w-4/5" />
        <div className="flex items-center gap-3 pt-1">
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-3 w-40" />
        </div>
        <Skeleton className="aspect-[16/9] w-full rounded-2xl" />
        <div className="flex flex-col gap-3 pt-2">
          {["w-full", "w-full", "w-11/12", "w-full", "w-4/5", "w-full", "w-3/4"].map((w, i) => (
            <Skeleton key={i} className={`h-4 ${w}`} />
          ))}
        </div>
      </article>
    </SkeletonBlock>
  );
}

/** Tarjetas del listado de blog. */
export function BlogListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <SkeletonBlock label="Cargando artículos">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <Skeleton className="h-64 w-full rounded-none" />
            <div className="flex flex-col gap-4 p-8">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="mt-2 h-4 w-40" />
            </div>
          </div>
        ))}
      </div>
    </SkeletonBlock>
  );
}

/** Banner superior de las páginas internas. */
export function BannerSkeleton() {
  return (
    <SkeletonBlock label="Cargando portada">
      <Skeleton className="h-[280px] w-full rounded-none md:h-[380px]" />
    </SkeletonBlock>
  );
}

/** Bloque de texto genérico, para secciones de contenido largo. */
export function ProseSkeleton({ lineas = 6 }: { lineas?: number }) {
  const anchos = ["w-full", "w-11/12", "w-full", "w-4/5", "w-full", "w-3/4", "w-5/6", "w-full"];
  return (
    <SkeletonBlock>
      <div className="flex flex-col gap-3">
        {Array.from({ length: lineas }, (_, i) => (
          <Skeleton key={i} className={`h-4 ${anchos[i % anchos.length]}`} />
        ))}
      </div>
    </SkeletonBlock>
  );
}
