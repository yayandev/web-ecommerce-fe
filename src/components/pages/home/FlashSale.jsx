"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

const FlashSale = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.API_URL}/products?limit=15&skip=15`)
      .then((result) => {
        result.json().then((res) => {
          setProducts(res.products);
        });
      })
      .finally(() => setLoading(false));
  }, []);

  const timer = () => {
    const countDownDate = new Date("Nov 4, 2024 15:37:25").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDay(days);
    setHour(hours);
    setMinute(minutes);
    setSecond(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      timer();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onClickPrev = () => {
    swiperRef.slidePrev();
  };

  const onClickNext = () => {
    swiperRef.slideNext();
  };

  return (
    <div className="w-full space-y-5 border-b py-10">
      <div className="p-3 border-l-8 border-red-500 font-semibold text-red-500">
        Today{"'"}s
      </div>
      <div className="flex justify-between sm:items-center">
        <div className="flex gap-5 sm:gap-20 flex-col sm:flex-row">
          <h1 className="text-xl sm:text-3xl font-bold">Flash Sales</h1>
          <div className="flex gap-2 items-center">
            <div className="flex flex-col gap-1 items-center">
              <p className="text-sm">Days</p>
              <h3 className="font-semibold text-xl sm:text-3xl">{day}</h3>
            </div>
            <div className="text-xl sm:text-3xl text-red-500 font-semibold">
              :
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p className="text-sm">Hours</p>
              <h3 className="font-semibold text-xl sm:text-3xl">{hour}</h3>
            </div>
            <div className="text-xl sm:text-3xl text-red-500 font-semibold">
              :
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p className="text-sm">Minutes</p>
              <h3 className="font-semibold text-xl sm:text-3xl">{minute}</h3>
            </div>
            <div className="text-xl sm:text-3xl text-red-500 font-semibold">
              :
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p className="text-sm">Seconds</p>
              <h3 className="font-semibold text-xl sm:text-3xl">{second}</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={onClickPrev} className="font-semibold text-xl">
            <FaArrowLeft />
          </button>
          <button onClick={onClickNext} className="font-semibold text-xl">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        spaceBetween={50}
        centeredSlides={false}
        loop={true}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {loading ? (
          <>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <ProductSkeleton />
            </SwiperSlide>
          </>
        ) : (
          <>
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
      <div className="flex justify-center">
        <Link
          href="/product"
          className="hover:opacity-75 sm:py-3 sm:px-5 py-2 px-3 rounded text-white bg-red-500 font-semibold"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FlashSale;
