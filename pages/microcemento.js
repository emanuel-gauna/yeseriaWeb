import Head from 'next/head';
import MicrocementoComponent from '../src/components/albañileria/Microcemento'; // Asegúrate de que esta sea la ruta correcta
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';

export default function Microcemento() {
  return (
    <>
      {/* Las etiquetas <Head> reemplazan a <Helmet> en Next.js */}
      <Head>
        <title>Microcemento Profesional | Emanuel Gauna</title>
        <meta
          name="description"
          content="Aplicación profesional de microcemento en pisos, paredes y superficies. Ideal para remodelaciones y revestimientos decorativos en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        />
        <meta name="keywords" content="microcemento, revestimientos, pisos, paredes, baños, cocinas, interiores, exteriores, Buenos Aires, AMBA" />
        <meta property="og:title" content="Microcemento Profesional | Emanuel Gauna" />
        <meta property="og:description" content="Aplicación de microcemento resistente y decorativo para interiores y exteriores en Buenos Aires y AMBA." />
        <meta property="og:image" content="/albaImg/microcemento1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/microcemento" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Microcemento Profesional | Emanuel Gauna" />
        <meta name="twitter:description" content="Aplicación de microcemento resistente y decorativo para interiores y exteriores en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/albaImg/microcemento1.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Aquí se renderizan los componentes de la página */}
        <FondoLogo />
        <MicrocementoComponent />
      </main>
      <StickyButtons />
    </>
  );
}