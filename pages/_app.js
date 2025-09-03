import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import StickyButtons from '../src/components/StickyButtons';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';
import FondoLogo from '../src/components/FondoLogo';
import  '../src/styles/globals.css';
import { Inter } from 'next/font/google';
import Home from '../src/components/Home';
import Gallery from '../src/components/Gallery';

const inter = Inter({ subsets: ['latin'] });

// Este componente envuelve todas las páginas de tu aplicación

export default function MyApp({ Component, pageProps }) {
  // Configuración global de SEO para todo el sitio
  const defaultTitle = "Yesero, Pintor y Albañil | Emanuel Gauna";
  const defaultDescription = "Servicios de Yesería, Albañilería y Pintura en Buenos Aires. Armado de cielorrasos, molduras, microcemento, revestimientos y pintura de interiores y exteriores.";

  return (
    <>
      <Head>
        {/* Metadatos globales */}
        <title>{pageProps.title || defaultTitle}</title>
        <meta name="description" content={pageProps.description || defaultDescription} />
      </Head>
      <main className={inter.className}>
        <div className="relative">
          <Navbar />
          <FondoLogo opacity={10} size="180px" />
          <StickyButtons />

          {/* El componente "Component" es la página actual */}
          <Component {...pageProps} />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
}