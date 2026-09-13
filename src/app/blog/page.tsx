import type { Metadata } from "next";
import BlogListing from "@/common/BlogComp/BlogListing";
import { buildBreadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guias de cortes, precios y cocina de una carniceria de Lima: que corte pedir para cada plato, cuanto rinde y como conservarlo.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          buildBreadcrumbSchema([
            { nombre: "Inicio", url: "/" },
            { nombre: "Blog", url: "/blog" },
          ])
        )}
      />
      <BlogListing />
    </>
  );
}
