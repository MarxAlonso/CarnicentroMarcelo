import { BannerSkeleton, ProseSkeleton } from "@/components/Skeletons/ContentSkeletons";
import { FiltrosSkeleton, ProductGridSkeleton, TablaPreciosSkeleton } from "@/components/Skeletons/ProductSkeletons";

export default function Loading() {
  return (
    <div className="flex flex-col gap-14 pb-16">
      <BannerSkeleton />
      <div className="mx-auto w-full max-w-3xl px-6">
        <ProseSkeleton lineas={3} />
      </div>
      <div className="mx-auto w-full max-w-5xl px-6">
        <TablaPreciosSkeleton filas={10} />
      </div>
      <div className="mx-auto flex w-full max-w-site flex-col gap-8 px-6">
        <FiltrosSkeleton />
        <ProductGridSkeleton count={8} />
      </div>
    </div>
  );
}
