import Head from 'next/head';
import ExteriorComponent from '../src/components/pintura/Exterior'; // Asegúrate de que esta sea la ruta correcta
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';

export default function PinturaExterior() {
  return (
    <>
      {/* Las etiquetas <Head> reemplazan a <Helmet> en Next.js */}
      <Head>
        <title>Pintura Exterior Profesional | Emanuel Gauna</title>
        <meta
          name="description"
          content="Servicios profesionales de pintura exterior para fachadas, balcones y terrazas en Buenos Aires y AMBA. Acabados duraderos y uniformes con técnicas profesionales."
        />
        <meta name="keywords" content="pintura exterior, fachadas, terrazas, balcones, pintura profesional, Buenos Aires, AMBA" />
        <meta property="og:title" content="Pintura Exterior Profesional | Emanuel Gauna" />
        <meta property="og:description" content="Aplicación profesional de pintura exterior para proyectos residenciales, comerciales e industriales en Buenos Aires y AMBA." />
        <meta property="og:image" content="/pinturaImg/exterior1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/pintura-exterior" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pintura Exterior Profesional | Emanuel Gauna" />
        <meta name="twitter:description" content="Aplicación profesional de pintura exterior para proyectos residenciales, comerciales e industriales en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/pinturaImg/exterior1.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Aquí se renderizan los componentes de la página */}
        <FondoLogo />
        <ExteriorComponent />
      </main>
      <StickyButtons />
    </>
  );
}