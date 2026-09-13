import { BannerSkeleton, ProseSkeleton } from "@/components/Skeletons/ContentSkeletons";
import { ProductGridSkeleton } from "@/components/Skeletons/ProductSkeletons";

/**
 * Estado de carga de la portada.
 *
 * Reemplaza al spinner centrado que antes tapaba la pagina entera: se mantiene
 * la forma del contenido para que al llegar los datos no haya salto y la espera
 * se perciba mas corta, aunque dure lo mismo.
 */
export default function Loading() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <BannerSkeleton />
      <div className="mx-auto w-full max-w-5xl px-6">
        <ProseSkeleton lineas={4} />
      </div>
      <div className="mx-auto w-full max-w-7xl px-6">
        <ProductGridSkeleton count={8} />
      </div>
    </div>
  );
}
