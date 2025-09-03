import Head from 'next/head';
import MamposteriaComponent from '../src/components/albañileria/Mamposteria'; // Asegúrate de que esta sea la ruta correcta
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';

export default function Mamposteria() {
  return (
    <>
      {/* Las etiquetas <Head> reemplazan a <Helmet> en Next.js */}
      <Head>
        <title>Mampostería y Ladrillos | Yesería Profesional - Emanuel Gauna</title>
        <meta
          name="description"
          content="Trabajos de mampostería, paredes, y reformas en ladrillos. Servicio profesional de albañilería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        />
        <meta name="keywords" content="mampostería, ladrillos, albañilería, refacciones, obra, remodelaciones, Buenos Aires, AMBA" />
        <meta property="og:title" content="Mampostería y Ladrillos | Emanuel Gauna" />
        <meta property="og:description" content="Servicios de mampostería, refacciones y trabajos con ladrillos en Buenos Aires y AMBA." />
        <meta property="og:image" content="/yesoImg/ladrilloCubierto.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/mamposteria" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mampostería y Ladrillos | Emanuel Gauna" />
        <meta name="twitter:description" content="Servicios de mampostería, refacciones y trabajos con ladrillos en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/yesoImg/ladrilloCubierto.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Aquí se renderizan los componentes de la página */}
        <FondoLogo />
        <MamposteriaComponent />
      </main>
      <StickyButtons />
    </>
  );
}