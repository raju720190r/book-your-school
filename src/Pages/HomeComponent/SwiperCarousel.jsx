import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../swiperCss/swiper.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/q5RyHKD/academy-celebrate-celebration-267885-1-1024x683.jpg"
            className="relative"
          />
          <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 text-xl  font-bold">
            Graduation ceramony MP University 2021
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/gwj66sz/3edbde5a861-kingston-university-877a100892a-conditionsforattendingyourcerem.jpg"
            className="relative"
          />
          <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 text-xl  font-bold">
            Graduation ceramony Zaxon college 2021
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/tpYdKF1/17f20f4d-008d-40ef-aa48-6bf66fb60bd1-TJ-Class-C.webp"
            className="relative"
          />
          <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 text-xl  font-bold">
            Graduation ceramony MP University 2022
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/S7k4b0p/IMG-4251-scaled-e1681739733424.jpg"
            className="relative"
          />
          <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 text-xl  font-bold">
            Graduation ceramony Zaxon college 2021
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/M7n0rkz/maxresdefault.jpg"
            className="relative"
          />
          <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 text-xl  font-bold">
            Graduation ceramony Csc college 2023
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
