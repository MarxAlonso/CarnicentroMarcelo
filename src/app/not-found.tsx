import type { Metadata } from "next";
import NotFound from "@/components/NotFound/NotFound";

export const metadata: Metadata = {
  title: "Pagina no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return <NotFound />;
}
