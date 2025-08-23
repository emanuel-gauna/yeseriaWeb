// src/components/Gallery.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"; // Swiper 8
import "swiper/css";
import "swiper/css/navigation";

export default function Gallery() {
  return (
    <section className="py-12 px-6 bg-gray-100">
      {/* Yesería */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Yesería</h2>
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
          <SwiperSlide>
            <a href="/cielorrasos" className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src="/yesoImg/armado-trapecio.jpg" alt="Cielorrasos Armados" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Cielorrasos
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/paredes" className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src="/yesoImg/monoambiente2.jpg" alt="Aplicado de Paredes" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Paredes
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/molduras" className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src="/yesoImg/moldura1.jpg" alt="Buñas y Molduras" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Molduras
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Albañilería */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Albañilería</h2>
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
          <SwiperSlide>
            <a href="/mamposteria" className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src="/albaImg/mamposteria1.jpg" alt="Mampostería" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Mampostería
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/microcemento" className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src="/albaImg/microcemento1.jpg" alt="Microcemento" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Microcemento
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/revestimientos" className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src="/albaImg/revestimientos1.jpg" alt="Revestimientos y Pisos" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Revestimientos y Pisos
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Pintura */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Pintura</h2>
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
          <SwiperSlide>
            <a href="/pintura-interior" className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src="/pinturaImg/interior1.jpg" alt="Pintura Interior" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Pintura Interior
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/pintura-exterior" className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src="/pinturaImg/exterior1.jpg" alt="Pintura Exterior" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Pintura Exterior
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/pintura-refacciones" className="relative block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img src="/pinturaImg/refaccion1.jpg" alt="Refacciones y Restauraciones" className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
                Refacciones / Restauraciones
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
