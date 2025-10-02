import { useState, useEffect, useRef } from "react"; 

export default function FacebookComments() {
  const fbContainerRef = useRef(null);
  // ✨ REINTRODUCIR: Estado para controlar si el contenedor es visible
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    
    // 1. FUNCIÓN DE ANULACIÓN DE SCROLL
    const forceScrollToTop = () => {
      let attempts = 0;
      // Ejecuta el scroll cada 200ms durante 2 segundos
      const intervalId = setInterval(() => {
          // Forzar el scroll al tope
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          attempts++;
          
          // Detener después de 2 segundos (10 intentos)
          if (attempts >= 10) { 
              clearInterval(intervalId);
              // ✨ CLAVE: Revelar la sección SOLO después de anular el scroll
              setIsSectionVisible(true); 
          }
      }, 200);

      // Llamarlo también inmediatamente
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    // 2. Carga el SDK de Facebook
    const initFacebook = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
        // Aplicar anulación con un pequeño retraso para que Facebook actúe primero
        setTimeout(forceScrollToTop, 500); 
      } else {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v16.0";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        
        script.onload = () => {
          setTimeout(forceScrollToTop, 500); 
        };
        document.body.appendChild(script);
      }
    };

    initFacebook();

  }, []);

  // 3. Renderizado: El contenedor principal se renderiza OCULTO inicialmente
  return (
    <div 
      // ✨ CLAVE: Control de visibilidad para eliminar el pestañeo
      className={`flex-1 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md 
                  min-h-[300px] flex flex-col items-center justify-center 
                  transition-opacity duration-1000 ease-in-out 
                  ${isSectionVisible ? 'opacity-100' : 'opacity-0'}`}
    >

      <div className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
        Comentarios de Facebook
      </div>

      <div
        ref={fbContainerRef}
        className="fb-comments w-full"
        data-href="https://yeseria-web.vercel.app/"
        data-width="100%"
        data-numposts="5"
        tabIndex="-1"
      >
        {/* Aquí es donde Facebook inyectará el iframe */}
      </div>

    </div>
  );
}