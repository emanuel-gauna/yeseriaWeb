import Head from 'next/head';
import RevestimientosComponent from '../src/components/albañileria/Revestimientos'; // Asegúrate de que esta sea la ruta correcta
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';

export default function Revestimientos() {
  return (
    <>
      {/* Las etiquetas <Head> reemplazan a <Helmet> en Next.js */}
      <Head>
        <title>Revestimientos y Pisos Profesionales | Emanuel Gauna</title>
        <meta
          name="description"
          content="Colocación profesional de cerámicas, pisos de microcemento, revoques y revestimientos exteriores. Acabados duraderos y estéticamente impecables en Buenos Aires y AMBA."
        />
        <meta name="keywords" content="revestimientos, pisos, cerámicas, microcemento, revoques, albañilería, Buenos Aires, AMBA" />
        <meta property="og:title" content="Revestimientos Profesionales | Emanuel Gauna" />
        <meta property="og:description" content="Instalación profesional de revestimientos y pisos en interiores y exteriores en Buenos Aires y AMBA." />
        <meta property="og:image" content="/albaImg/revestimientos1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/revestimientos" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revestimientos Profesionales | Emanuel Gauna" />
        <meta name="twitter:description" content="Instalación profesional de revestimientos y pisos en interiores y exteriores en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/albaImg/revestimientos1.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Aquí se renderizan los componentes de la página */}
        <FondoLogo />
        <RevestimientosComponent />
      </main>
      <StickyButtons />
    </>
  );
}