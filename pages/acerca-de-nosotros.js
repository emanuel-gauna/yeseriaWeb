import Head from 'next/head';
import AcercaComponent from '../src/components/Acerca';
import FondoLogo from '../src/components/FondoLogo';
import StickyButtons from '../src/components/StickyButtons';

export default function Acerca() {
  return (
    <>
     
      <Head>
        <title>Acerca de Emanuel Gauna | Yesero, Pintor y Albañil Profesional</title>
        <meta
          name="description"
          content="Emanuel Gauna ofrece servicios profesionales de yesería, pintura y albañilería, especializado en microcemento y remodelaciones en Buenos Aires y AMBA. Garantía de calidad y atención personalizada."
        />
        <meta
          name="keywords"
          content="yesero, pintor, albañil, microcemento, remodelaciones, yesería, pintura, revestimientos, Buenos Aires, AMBA"
        />
      </Head>

      <main className="min-h-screen">
        <FondoLogo />
        <AcercaComponent />
      </main>
      <StickyButtons />
    </>
  );
}