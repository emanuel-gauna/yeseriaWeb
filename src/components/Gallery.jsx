// src/components/Gallery.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"; // Swiper 8
import "swiper/css";
import "swiper/css/navigation";

export default function Gallery() {
  const categories = [
    {
      title: "Yesería",
      media: [
        { type: "image", src: "/yesoImg/armado-trapecio.jpg", link: "/cielorrasos", alt: "Cielorrasos Armados", caption: "Cielorrasos" },
        { type: "image", src: "/yesoImg/monoambiente2.jpg", link: "/paredes", alt: "Aplicado de Paredes", caption: "Paredes" },
        { type: "image", src: "/yesoImg/moldura1.jpg", link: "/molduras", alt: "Buñas y Molduras", caption: "Molduras" }
      ]
    },
    {
      title: "Albañilería",
      media: [
        { type: "image", src: "/albaImg/mamposteria1.jpg", link: "/mamposteria", alt: "Mampostería", caption: "Mampostería" },
        { type: "image", src: "/albaImg/microcemento1.jpg", link: "/microcemento", alt: "Microcemento", caption: "Microcemento"},
        { type: "image", src: "/albaImg/revestimientos1.jpg", link: "/revestimientos", alt: "Revestimientos", caption: "Revestimientos y Pisos" }
      ]
    },
    {
      title: "Pintura",
      media: [
        { type: "image", src: "/pinturaImg/interior1.jpg", link: "/pintura-interior", alt: "Pintura Interior", caption: "Pintura Interior" },
        { type: "image", src: "/pinturaImg/exterior1.jpg", link: "/pintura-exterior", alt: "Pintura Exterior", caption: "Pintura Exterior" },
        { type: "image", src: "/pinturaImg/refaccion1.jpg", link: "/pintura-refacciones", alt: "Refacciones y Restauraciones", caption: "Refacciones / Restauraciones" }
      ]
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-100">
      {categories.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">{category.title}</h2>
          <Swiper
            navigation={true}              
            modules={[Navigation]}          
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
                  className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  <img src={item.src} alt={item.alt} className="w-full h-48 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                    {item.caption}
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </section>
  );
}
