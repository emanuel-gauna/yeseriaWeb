import Head from 'next/head';
import RefaccionesComponent from '../src/components/pintura/Refacciones'; // Asegúrate de que esta sea la ruta correcta
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';

export default function PinturaRefacciones() {
  return (
    <>
      {/* Las etiquetas <Head> reemplazan a <Helmet> en Next.js */}
      <Head>
        <title>Refacciones y Restauraciones de Pintura | Emanuel Gauna</title>
        <meta
          name="description"
          content="Refacciones y restauraciones de pintura interior y exterior. Retocamos y renovamos superficies desgastadas con acabados duraderos y uniformes en Buenos Aires y AMBA."
        />
        <meta name="keywords" content="refacciones pintura, restauraciones pintura, retoques, pintura interior, pintura exterior, Buenos Aires, AMBA" />
        <meta property="og:title" content="Refacciones y Restauraciones de Pintura | Emanuel Gauna" />
        <meta property="og:description" content="Aplicación profesional de refacciones y restauraciones de pintura interior y exterior en viviendas, oficinas y locales comerciales en Buenos Aires y AMBA." />
        <meta property="og:image" content="/pinturaImg/refaccion1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/pintura-refacciones" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refacciones y Restauraciones de Pintura | Emanuel Gauna" />
        <meta name="twitter:description" content="Renovación profesional de pintura interior y exterior en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/pinturaImg/refaccion1.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Aquí se renderizan los componentes de la página */}
        <FondoLogo />
        <RefaccionesComponent />
      </main>
      <StickyButtons />
    </>
  );
}