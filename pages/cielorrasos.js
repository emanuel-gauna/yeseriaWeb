// /pages/Cielorrasos.js

// Eliminar la importación de 'next/head' ya que lo maneja SeoHead
// import Head from 'next/head'; 
import CielorrasosComponent from '../src/components/Yeseria/Cielorrasos';
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';
import SeoHead from '../src/components/SeoHead'; // 🟢 Nueva importación

export default function Cielorrasos() {
  return (
    <>
      {/* 🟢 Uso del componente SeoHead para un SEO consistente 🟢 */}
      <SeoHead
        // Estos valores replican lo que estaba en el <Head> original
        title="Cielorrasos y Molduras | Yesería Profesional - Emanuel Gauna"
        description="Armado e instalación de cielorrasos, buñas y molduras. Servicio profesional de yesería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        keywords="cielorrasos, molduras, buñas, yesería, interiores, refacciones, Buenos Aires, AMBA"
        ogTitle="Cielorrasos Profesionales | Emanuel Gauna"
        ogDescription="Instalación de cielorrasos y molduras. Servicio de yesería en Buenos Aires y AMBA."
        ogImage="/yesoImg/armado-trapecio.jpg"
        
        // ¡IMPORTANTE! La URL canónica sin 'www', al igual que en Mamposteria
        ogUrl="https://yeseriayreformas.com.ar/cielorrasos"
      />

      <main className="min-h-screen">
        <FondoLogo />
        <CielorrasosComponent />
      </main>

      <StickyButtons />
    </>
  );
}