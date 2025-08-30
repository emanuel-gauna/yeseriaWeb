// src/components/VideosSection.jsx
import React, { useState } from "react";

export default function VideosSection() {
  const [open, setOpen] = useState(false);

  const videos = [
    { id: 1, src: "https://www.tiktok.com/embed/7350432831185143082", title: "Trabajo 1" },
    { id: 2, src: "https://www.instagram.com/reel/C9_fWxEN8pI/embed", title: "Trabajo 2" },
    { id: 3, src: "https://www.tiktok.com/embed/7362228413158784262", title: "Trabajo 3" },
  ];

  return (
    <section className="my-10">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl font-bold mb-6 text-blue-700">
        🎥👉 Mirá algunos de nuestros trabajos en video
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>

      {/* Content */}
      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src={video.src}
                title={video.title}
                width="100%"
                height="400"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
