"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";

type SliderProps = {
  images?: (string | StaticImageData)[]; 
  children?: React.ReactNode;
};

const SliderBox: React.FC<SliderProps> = ({ images = [], children }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full lg:w-1/2 xl:w-1/2 h-full"
    >
      {children}

      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
          <Image
          src={typeof img === 'string' ? img : img.src}
          alt={`Slide ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderBox;
