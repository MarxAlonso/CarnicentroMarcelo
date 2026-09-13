import { BlogListSkeleton } from "@/components/Skeletons/ContentSkeletons";
import { Skeleton } from "@/components/Skeletons/Skeleton";

export default function Loading() {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        <BlogListSkeleton count={3} />
      </div>
    </section>
  );
}
