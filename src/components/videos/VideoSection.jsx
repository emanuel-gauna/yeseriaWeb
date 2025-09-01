// src/components/VideoGallery.jsx
import React, { useState } from "react";
import { Loader2, X } from "lucide-react";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(Array(6).fill(true));
  const [modalVideo, setModalVideo] = useState(null);

  const handleLoad = (index) => {
    setLoading((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  const videos = [
    { type: "tiktok", src: "https://www.tiktok.com/embed/7539544687326137605" },
    { type: "tiktok", src: "https://www.tiktok.com/embed/7526338348584094982" },
    { type: "tiktok", src: "https://www.tiktok.com/embed/7526968549848534277" },
    { type: "instagram", src: "https://www.instagram.com/reel/DMu4FlBMdqn/embed" },
    { type: "instagram", src: "https://www.instagram.com/reel/DNa-2z_ts2n/embed" },
    { type: "instagram", src: "https://www.instagram.com/reel/DMREvoDMpck/embed" },
  ];

  // Función para abrir modal con autoplay
  const openModal = (src, type) => {
    let autoplaySrc = src;
    if (type === "tiktok") {
      autoplaySrc += "?autoplay=1";
    } else if (type === "instagram") {
      autoplaySrc += "?autoplay=1";
    }
    setModalVideo(autoplaySrc);
  };

  return (
    <section className="my-8 z-30">
      {/* Botón con gradiente tipo Instagram */}
    <h2
  className="text-xl md:text-2xl font-bold cursor-pointer flex items-center justify-between 
             p-4 rounded-xl shadow-md transition z-20 text-white
             bg-gradient-to-r from-violet-500 via-red-500 to-yellow-500
             hover:from-yellow-500 hover:via-red-500 hover:to-pink-500
             hover:opacity-95"
  onClick={() => setOpen(!open)}
>
  👉 Mirá algunos de nuestros trabajos en video
  <span>{open ? "▲" : "▼"}</span>
</h2>


      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {videos.map((video, i) => {
            const aspectClass =
              video.type === "tiktok" ? "aspect-[9/16]" : "aspect-square";
            return (
              <div
                key={i}
                className={`relative w-full ${aspectClass} bg-gray-200 rounded-xl overflow-hidden shadow-md cursor-pointer`}
                onClick={() => openModal(video.src, video.type)}
              >
                {loading[i] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
                  </div>
                )}
                <iframe
                  src={video.src}
                  className="w-full h-full"
                  onLoad={() => handleLoad(i)}
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      )}

      {modalVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setModalVideo(null)}
          >
            <X size={32} />
          </button>
          <iframe
            src={modalVideo}
            className="w-full max-w-4xl h-[80vh]"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
}
