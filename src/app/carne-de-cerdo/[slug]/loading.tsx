import { Skeleton } from "@/components/Skeletons/Skeleton";
import { ProseSkeleton } from "@/components/Skeletons/ContentSkeletons";

export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-site flex-col gap-10 px-6 py-10 lg:flex-row lg:gap-12">
      <div className="flex w-full shrink-0 flex-col gap-3 lg:w-[560px]">
        <Skeleton className="h-[320px] w-full rounded-2xl sm:h-[440px] lg:h-[520px]" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-8 w-40" />
        <ProseSkeleton lineas={3} />
        <Skeleton className="mt-4 h-12 w-full rounded-md" />
        <Skeleton className="h-12 w-full rounded-md" />
      </div>
    </div>
  );
}
