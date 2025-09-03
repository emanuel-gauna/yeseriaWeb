import Head from 'next/head';
import ParedesComponent from '../src/components/Yeseria/Paredes';
import StickyButtons from '../src/components/StickyButtons';

export default function Paredes() {
  return (
    <>
      {/* Las etiquetas <Head> manejan el SEO por página, reemplazando a Helmet */}
      <Head>
        <title>Aplicado y Refacción de Paredes | Yesería Profesional - Emanuel Gauna</title>
        <meta name="description" content="Aplicación profesional de yeso en paredes y refacción de muros existentes. Servicios de yesería en Buenos Aires y AMBA." />
        <meta name="keywords" content="paredes, yesería, refacción, yeso, interiores, exteriores, remodelaciones, Buenos Aires, AMBA" />
        <meta property="og:title" content="Aplicado y Refacción de Paredes | Emanuel Gauna" />
        <meta property="og:description" content="Servicios profesionales de yesería en paredes, refacciones y reparaciones en Buenos Aires y AMBA." />
        <meta property="og:image" content="/yesoImg/bañoConYeso.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/paredes" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aplicado y Refacción de Paredes | Emanuel Gauna" />
        <meta name="twitter:description" content="Servicios profesionales de yesería en paredes, refacciones y reparaciones en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/yesoImg/bañoConYeso.jpg" />
      </Head>
      
      <main>
        <ParedesComponent />
      </main>
      <StickyButtons />
    </>
  );
}
