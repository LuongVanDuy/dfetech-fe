import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import Image from "next/image";

const SwiperComponent = () => {
  const swiperRef = useRef(null);
  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={"auto"}
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      style={{ height: "979px" }}
    >
      <SwiperSlide>
        <Image src="/home/slide.jpg" alt="Logo" width={1920} height={979} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/home/slide.jpg" alt="Logo" width={1920} height={979} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/home/slide.jpg" alt="Logo" width={1920} height={979} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/home/slide.jpg" alt="Logo" width={1920} height={979} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/home/slide.jpg" alt="Logo" width={1920} height={979} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
