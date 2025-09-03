import Head from 'next/head';
import MoldurasComponent from '../src/components/Yeseria/Molduras'; // Asegúrate de que esta sea la ruta correcta
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';

export default function Molduras() {
  return (
    <>
      {/* Las etiquetas <Head> reemplazan a <Helmet> en Next.js */}
      <Head>
        <title>Buñas y Molduras | Yesería Profesional - Emanuel Gauna</title>
        <meta
          name="description"
          content="Instalación profesional de buñas y molduras en yeso. Servicio de yesería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        />
        <meta name="keywords" content="molduras, buñas, yesería, interiores, decoración, refacciones, Buenos Aires, AMBA" />
        <meta property="og:title" content="Buñas y Molduras Profesionales | Emanuel Gauna" />
        <meta property="og:description" content="Instalación de buñas y molduras en yeso. Servicio de yesería en Buenos Aires y AMBA." />
        <meta property="og:image" content="/yesoImg/moldura1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/molduras" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buñas y Molduras Profesionales | Emanuel Gauna" />
        <meta name="twitter:description" content="Instalación de buñas y molduras en yeso. Servicio de yesería en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/yesoImg/moldura1.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Aquí se renderizan los componentes de la página */}
        <FondoLogo />
        <MoldurasComponent />
      </main>
      <StickyButtons />
    </>
  );
}