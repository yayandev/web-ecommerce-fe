"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function TeamSection() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="my-10">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="w-64 p-3 flex flex-col items-center border gap-3">
            <img
              src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-64 object-cover"
              alt=""
            />
            <h3 className="text-xl font-bold">Tom Cruise</h3>
            <p className="text-sm">Founder & Chairman</p>
            <div className="flex gap-2 items-center">
              <Link href="#" className="font-bold">
                <FaTwitter />
              </Link>
              <Link href="#" className="font-bold">
                <FaInstagram />
              </Link>
              <Link href="#" className="font-bold">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 p-3 flex flex-col items-center border gap-3">
            <img
              src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-64 object-cover"
              alt=""
            />
            <h3 className="text-xl font-bold">Tom Cruise</h3>
            <p className="text-sm">Founder & Chairman</p>
            <div className="flex gap-2 items-center">
              <Link href="#" className="font-bold">
                <FaTwitter />
              </Link>
              <Link href="#" className="font-bold">
                <FaInstagram />
              </Link>
              <Link href="#" className="font-bold">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 p-3 flex flex-col items-center border gap-3">
            <img
              src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-64 object-cover"
              alt=""
            />
            <h3 className="text-xl font-bold">Tom Cruise</h3>
            <p className="text-sm">Founder & Chairman</p>
            <div className="flex gap-2 items-center">
              <Link href="#" className="font-bold">
                <FaTwitter />
              </Link>
              <Link href="#" className="font-bold">
                <FaInstagram />
              </Link>
              <Link href="#" className="font-bold">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 p-3 flex flex-col items-center border gap-3">
            <img
              src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-64 object-cover"
              alt=""
            />
            <h3 className="text-xl font-bold">Tom Cruise</h3>
            <p className="text-sm">Founder & Chairman</p>
            <div className="flex gap-2 items-center">
              <Link href="#" className="font-bold">
                <FaTwitter />
              </Link>
              <Link href="#" className="font-bold">
                <FaInstagram />
              </Link>
              <Link href="#" className="font-bold">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 p-3 flex flex-col items-center border gap-3">
            <img
              src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-64 object-cover"
              alt=""
            />
            <h3 className="text-xl font-bold">Tom Cruise</h3>
            <p className="text-sm">Founder & Chairman</p>
            <div className="flex gap-2 items-center">
              <Link href="#" className="font-bold">
                <FaTwitter />
              </Link>
              <Link href="#" className="font-bold">
                <FaInstagram />
              </Link>
              <Link href="#" className="font-bold">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 p-3 flex flex-col items-center border gap-3">
            <img
              src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="w-full h-64 object-cover"
              alt=""
            />
            <h3 className="text-xl font-bold">Tom Cruise</h3>
            <p className="text-sm">Founder & Chairman</p>
            <div className="flex gap-2 items-center">
              <Link href="#" className="font-bold">
                <FaTwitter />
              </Link>
              <Link href="#" className="font-bold">
                <FaInstagram />
              </Link>
              <Link href="#" className="font-bold">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
