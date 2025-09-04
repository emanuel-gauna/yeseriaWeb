import Head from 'next/head';
import CielorrasosComponent from '../src/components/Yeseria/Cielorrasos';
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';

export default function Cielorrasos() {
  return (
    <>
    
      {/* Las etiquetas <Head> reemplazan a <Helmet> en Next.js */}
      <Head>
        <title>Cielorrasos y Molduras | Yesería Profesional - Emanuel Gauna</title>
        <meta
          name="description"
          content="Armado e instalación de cielorrasos, buñas y molduras. Servicio profesional de yesería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        />
        <meta name="keywords" content="cielorrasos, molduras, buñas, yesería, interiores, refacciones, Buenos Aires, AMBA" />
        <meta property="og:title" content="Cielorrasos Profesionales | Emanuel Gauna" />
        <meta property="og:description" content="Instalación de cielorrasos y molduras. Servicio de yesería en Buenos Aires y AMBA." />
        <meta property="og:image" content="/yesoImg/armado-trapecio.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/cielorrasos" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cielorrasos Profesionales | Emanuel Gauna" />
        <meta name="twitter:description" content="Instalación de cielorrasos y molduras. Servicio de yesería en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/yesoImg/armado-trapecio.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Aquí se renderizan los componentes de la página */}
        <FondoLogo />
        <CielorrasosComponent />
      </main>
      <StickyButtons />
    </>
  );
}