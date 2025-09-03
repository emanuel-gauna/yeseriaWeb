import Head from 'next/head';
import StickyButtons from '../src/components/StickyButtons';
import Home from "../src/components/Home"
import Gallery from '../src/components/Gallery';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Yesería y Refacciones Gauna</title>
        <meta name="description" content="Especialistas en yesería, drywall y pintura." />
      </Head>
     <Home />
     <Gallery />
      {/* Tu componente de chat se renderizará aquí */}
      <StickyButtons />
    </div>
  );
}
