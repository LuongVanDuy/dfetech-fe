import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import BoxImage from "@/components/images/BoxImage";
import CustomButton from "@/components/CustomButton";
import { ChevronLeftIcon } from "@/Icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/Icons/ChevronRightIcon";
import BoxSolution from "../loop/BoxSolution";

const SliderSolution = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <div>
      <Swiper
        ref={swiperRef}
        slidesPerView={3.2}
        spaceBetween={0}
        pagination={false}
        modules={[Pagination]}
        className="SliderSolution"
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index}>
            <BoxSolution
              imageUrl="/home/Solution-2.png"
              height="103.67%"
              effect="zoom"
              title="UBECO"
              link={[
                { name: "LS-DYNA", href: "ly-dyna" },
                { name: "LS-DYNA", href: "ly-dyna" },
                { name: "LS-DYNA", href: "ly-dyna" },
                { name: "LS-DYNA", href: "ly-dyna" },
                { name: "LS-DYNA", href: "ly-dyna" },
              ]}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between px-5 md:px-20 py-[24px] md:pt-[48px] md:pb-[64px]  md:justify-center">
        <div className="flex gap-2">
          <CustomButton type="icon" onClick={handlePrev}>
            <ChevronLeftIcon />
          </CustomButton>
          <CustomButton type="icon" onClick={handleNext}>
            <ChevronRightIcon />
          </CustomButton>
        </div>

        <CustomButton className="block md:hidden">See all →</CustomButton>
      </div>
    </div>
  );
};

export default SliderSolution;
