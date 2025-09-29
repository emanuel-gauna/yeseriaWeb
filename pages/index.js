import { useEffect } from "react";
import SeoHead from '../src/components/SeoHead';
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';
import Home from '../src/components/Home';
import Gallery from '../src/components/Gallery';
import Comments from '../src/components/Comments';

export default function HomePage() {
  const pageTitle = "Inicio | Yesería Profesional - Emanuel Gauna";
  const pageDescription = "Emanuel Gauna, yesero profesional en Buenos Aires y AMBA. Servicios de yesería, drywall y pintura. Presupuestos sin cargo.";
  const pageKeywords = "yesero, drywall, yesería, pintura, presupuestos, Buenos Aires, AMBA";
  const ogTitle = "Yesería Profesional | Emanuel Gauna";
  const ogDescription = "Servicios de yesería, drywall y pintura. Contacto: 11 6437-1277.";
  const ogImage = "/yesoImg/home-image.jpg";
  const ogUrl = "https://yeseria-web.vercel.app/";

  // Cargar SDK de Facebook
  useEffect(() => {
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.FB) window.FB.XFBML.parse();
    }
  }, []);

  return (
    <>
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        ogUrl={ogUrl}
      />
      <main className="min-h-screen">
        <Home />
        <Gallery />
        <FondoLogo />
        <Comments />
      </main>
      <StickyButtons />
    </>
  );
}
