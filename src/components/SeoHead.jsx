import Head from 'next/head';

// Este componente te permite añadir metadatos de SEO a cada página.
// Los motores de búsqueda, como Google y Bing, usarán esta información para indexar tu sitio.
const SeoHead = ({ title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl }) => {
  const siteUrl = "https://yeseria-web.vercel.app";
  const finalOgUrl = ogUrl || siteUrl;
  const finalOgImage = ogImage || `${siteUrl}/images/default-og-image.jpg`; // Asegúrate de tener una imagen por defecto en la carpeta public

  return (
    <Head>
      {/* Meta etiquetas básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={finalOgUrl} />

      {/* Meta etiquetas de Open Graph (para redes sociales) */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:image" content={finalOgImage} />

      {/* Meta etiquetas de Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={finalOgImage} />
    </Head>
  );
};

export default SeoHead;