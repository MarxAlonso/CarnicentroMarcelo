import React from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  keywords?: string;
};

const siteTitle = "Carnicentro Marcelo";
const siteDescription =
  "Carnicentro Marcelo — Carnes de res y cerdo de calidad. Catálogo de productos, información de nosotros y contacto para pedidos.";
const siteUrl = "https://carnicentromarcelo.com";
const defaultImage = `${siteUrl}/logo-carnicentromarcelo.png`;

import defaultKeywords from "../../seo/keywords";

const SEO: React.FC<SEOProps> = ({ title, description, pathname, image, keywords }) => {
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageDescription = description || siteDescription;
  const url = pathname ? `${siteUrl}${pathname}` : siteUrl;
  const img = image || defaultImage;
  const metaKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={url} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:alt" content={`${siteTitle} logo`} />
    </Helmet>
  );
};

export default SEO;
