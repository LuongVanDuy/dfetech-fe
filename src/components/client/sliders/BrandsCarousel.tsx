import React from "react";
import Image from "next/image";
const { Splide, SplideSlide } = require("@splidejs/react-splide") as any;
import "@splidejs/splide/dist/css/splide.min.css";

const BrandSlider: React.FC = () => {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        gap: "16px",
        arrows: false,
        pagination: false,
        speed: 1000,
        autoWidth: true,
        autoplay: true,
        focus: "center",
        autoScroll: {
          speed: 2,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
        breakpoints: {
          768: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
      }}
    >
      <SplideSlide>
        <div className="flex justify-center items-center min-h-[63px]">
          <Image
            src="/brands/brand-1.svg"
            width={133}
            height={67}
            alt="brand"
            className="max-h-[63px] opacity-80 hover:opacity-100 transition"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex justify-center items-center min-h-[63px] ">
          <Image
            src="/brands/brand-2.svg"
            width={133}
            height={67}
            alt="brand"
            className="max-h-[63px] opacity-80 hover:opacity-100 transition"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex justify-center items-center min-h-[63px] ">
          <Image
            src="/brands/brand-3.svg"
            width={133}
            height={67}
            alt="brand"
            className="max-h-[63px] opacity-80 hover:opacity-100 transition"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex justify-center items-center min-h-[63px] ">
          <Image
            src="/brands/brand-4.svg"
            width={133}
            height={67}
            alt="brand"
            className="max-h-[63px] opacity-80 hover:opacity-100 transition"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex justify-center items-center min-h-[63px] ">
          <Image
            src="/brands/brand-5.svg"
            width={133}
            height={67}
            alt="brand"
            className="max-h-[63px] opacity-80 hover:opacity-100 transition"
          />
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default BrandSlider;
