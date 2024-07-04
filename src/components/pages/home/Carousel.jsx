"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-40 sm:h-72 my-5"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-[url(https://swiperjs.com/demos/images/nature-1.jpg)] bg-cover flex items-center justify-start px-5 sm:px-10">
            <div className="space-y-1 sm:space-y-2 max-w-md">
              <h1 className="text-xl sm:text-2xl font-semibold sm:font-bold text-white">
                Slide 1
              </h1>
              <Link
                href={"#"}
                className="text-white flex gap-2 items-center hover:border-b pb-1"
              >
                <span>Shop Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-[url(https://swiperjs.com/demos/images/nature-2.jpg)] bg-cover flex items-center justify-start px-5 sm:px-10">
            <div className="space-y-1 sm:space-y-2 max-w-md">
              <h1 className="text-xl sm:text-2xl font-semibold sm:font-bold text-white">
                Slide 2
              </h1>
              <Link
                href={"#"}
                className="text-white flex gap-2 items-center hover:border-b pb-1"
              >
                <span>Shop Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-[url(https://swiperjs.com/demos/images/nature-3.jpg)] bg-cover flex items-center justify-start px-5 sm:px-10">
            <div className="space-y-1 sm:space-y-2 max-w-md">
              <h1 className="text-xl sm:text-2xl font-semibold sm:font-bold text-white">
                Slide 3
              </h1>
              <Link
                href={"#"}
                className="text-white flex gap-2 items-center hover:border-b pb-1"
              >
                <span>Shop Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
