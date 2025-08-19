// src/components/Gallery.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"; // ✅ Swiper 8
import "swiper/css";
import "swiper/css/navigation";

export default function Gallery() {
  const categories = [
    {
      title: "Yesería",
      media: [
        { type: "image", src: "https://link-a-tu-imagen1.jpg", link: "https://www.facebook.com/emanuel.gauna", alt: "Yesería 1" },
        { type: "image", src: "https://link-a-tu-imagen2.jpg", link: "https://www.instagram.com/lemagauna/", alt: "Yesería 2" }
      ]
    },
    {
      title: "Albañilería",
      media: [
        { type: "image", src: "https://link-a-tu-imagen3.jpg", link: "https://www.facebook.com/emanuel.gauna", alt: "Albañilería 1" },
        { type: "image", src: "https://link-a-tu-imagen4.jpg", link: "https://www.instagram.com/lemagauna/", alt: "Albañilería 2" }
      ]
    },
    {
      title: "Revestimientos de Piso",
      media: [
        { type: "image", src: "https://link-a-tu-imagen5.jpg", link: "https://www.facebook.com/emanuel.gauna", alt: "Revestimientos 1" },
        { type: "image", src: "https://link-a-tu-imagen6.jpg", link: "https://www.instagram.com/lemagauna/", alt: "Revestimientos 2" }
      ]
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-100">
      {categories.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">{category.title}</h2>
          <Swiper
            navigation={true}              // Activa botones de navegación
            modules={[Navigation]}          // Módulo de Swiper 8
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {category.media.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform block"
                >
                  <img src={item.src} alt={item.alt} className="w-full h-48 object-cover" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </section>
  );
}
