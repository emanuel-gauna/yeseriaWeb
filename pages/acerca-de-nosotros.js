
import AcercaComponent from '../src/components/Acerca';
import FondoLogo from '../src/components/FondoLogo';
import StickyButtons from '../src/components/StickyButtons';
import SeoHead from '../src/components/SeoHead'; // 🟢 Importamos el componente reutilizable

export default function Acerca() {
  return (
    <>
      {/* 🟢 Implementación del SeoHead (Canonical SIN www) 🟢 */}
      <SeoHead
        // Metadatos SEO básicos
        title="Acerca de Emanuel Gauna | Yesero, Pintor y Albañil Profesional"
        description="Servicios profesionales de yesería, pintura, albañilería y microcemento. Garantía de calidad en remodelaciones en Buenos Aires y AMBA."
        keywords="yesero, pintor, albañil, microcemento, remodelaciones, yesería, pintura, revestimientos, Buenos Aires, AMBA"
        
        // Metadatos Open Graph
        ogTitle="Acerca de Emanuel Gauna | Yesero y Pintor Profesional"
        ogDescription="Servicios de yesería, pintura, albañilería y microcemento en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        ogImage="/logoyeso.png" 
        // La URL canónica. El componente SeoHead usará este valor (SIN www) para la etiqueta <link rel="canonical"> y Open Graph URL.
        ogUrl="https://yeseriayreformas.com.ar/acerca-de-nosotros"
        
        // NOTA: El componente SeoHead.jsx ya incluye el resto de etiquetas:
        // - <meta name="robots" content="index, follow" />
        // - <meta httpEquiv="content-language" content="es-ar" />
        // - Metadatos de Twitter
      />

      <main className="min-h-screen">
        <FondoLogo />
        <AcercaComponent />
      </main>
      <StickyButtons />
    </>
  );
}