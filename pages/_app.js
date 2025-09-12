import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import StickyButtons from '../src/components/StickyButtons';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';
import FondoLogo from '../src/components/FondoLogo';
import '../src/styles/globals.css';
import { Inter } from 'next/font/google';
import TopBanner from '../src/components/TopBanner';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  const defaultTitle = "Yesero, Pintor, Albañil y Microcemento | Emanuel Gauna - Buenos Aires";
  const defaultDescription = "Servicios de yesería, pintura, albañilería y microcemento en Buenos Aires y AMBA. Refacciones, remodelaciones, pisos y revestimientos de calidad. Contacto: 11 6437-1277.";
  const defaultKeywords = "yesero, drywall, yesería, pintura, presupuestos, Buenos Aires, AMBA, albañil, microcemento";
  const defaultImageUrl = "/logoyeso.png"; 

  return (
    <>
      <Head>
        {/* Preload de la imagen principal */}
        <link rel="preload" href={defaultImageUrl} as="image" />

        {/* Metadatos básicos */}
        <title>{pageProps.title || defaultTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={pageProps.description || defaultDescription} />
        <meta name="keywords" content={pageProps.keywords || defaultKeywords} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="es-ar" />

        {/* Verificación de Google y Bing */}
        <meta name="google-site-verification" content="TxMAIrxP6AnHjZ5xHX002zGqa75NscV5vRW4CxGsDsg" />
        <meta name="msvalidate.01" content="B8C1D7B66291DA1EC6F415AC167ADFB0" />

        {/* Open Graph */}
        <meta property="og:title" content={pageProps.title || defaultTitle} />
        <meta property="og:description" content={pageProps.description || defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app" />
        <meta property="og:image" content={pageProps.image || defaultImageUrl} />
        <meta property="og:site_name" content="Yesería Gauna" />
        <meta property="og:locale" content="es_AR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageProps.title || defaultTitle} />
        <meta name="twitter:description" content={pageProps.description || defaultDescription} />
        <meta name="twitter:image" content={pageProps.image || defaultImageUrl} />
      </Head>

      <main className={inter.className}>
        <div className="relative">
          <Navbar />
          <TopBanner />
          <FondoLogo opacity={10} size="180px" />
          <StickyButtons />

          <Component {...pageProps} />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
