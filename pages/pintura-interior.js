import Head from 'next/head';
import InteriorComponent from '../src/components/pintura/Interior'; // Asegúrate de que esta sea la ruta correcta
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';

export default function PinturaInterior() {
  return (
    <>
      {/* Las etiquetas <Head> reemplazan a <Helmet> en Next.js */}
      <Head>
        <title>Pintura Interior Profesional | Emanuel Gauna</title>
        <meta
          name="description"
          content="Servicios profesionales de pintura interior para paredes, cielorrasos y detalles decorativos. Acabados lisos, uniformes y duraderos en Buenos Aires y AMBA."
        />
        <meta name="keywords" content="pintura interior, cielorrasos, decoración, acabado profesional, Buenos Aires, AMBA" />
        <meta property="og:title" content="Pintura Interior Profesional | Emanuel Gauna" />
        <meta property="og:description" content="Aplicación profesional de pintura interior para casas, departamentos y oficinas en Buenos Aires y AMBA." />
        <meta property="og:image" content="/pinturaImg/interior1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/pintura-interior" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pintura Interior Profesional | Emanuel Gauna" />
        <meta name="twitter:description" content="Aplicación profesional de pintura interior para casas, departamentos y oficinas en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/pinturaImg/interior1.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Aquí se renderizan los componentes de la página */}
        <FondoLogo />
        <InteriorComponent />
      </main>
      <StickyButtons />
    </>
  );
}