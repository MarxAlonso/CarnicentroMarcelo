import { BannerSkeleton, ProseSkeleton } from "@/components/Skeletons/ContentSkeletons";

export default function Loading() {
  return (
    <div className="flex flex-col gap-14 pb-16">
      <BannerSkeleton />
      <div className="mx-auto w-full max-w-3xl px-6">
        <ProseSkeleton lineas={8} />
      </div>
    </div>
  );
}
