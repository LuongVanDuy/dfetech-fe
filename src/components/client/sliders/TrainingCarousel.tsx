import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import CustomButton from "@/components/client/button";
import { ChevronLeftIcon } from "@/components/client/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/client/icons/ChevronRightIcon";

const TrainingCarousel = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div>
      <div className="flex mb-[16px] justify-between items-center">
        <span className="text-[#ADB5BD]">Training courses:</span>
        <div className="flex items-center gap-4">
          <CustomButton
            type="icon"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <ChevronLeftIcon />
          </CustomButton>
          <CustomButton
            type="icon"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <ChevronRightIcon />
          </CustomButton>
        </div>
      </div>

      <div className="flex gap-5">
        <Swiper
          spaceBetween={30}
          slidesPerView={1.5}
          loop={false}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          ref={swiperRef}
          className="w-full md:w-[calc(100%+64px)] overflow-hidden"
        >
          <SwiperSlide>
            <div className="flex items-center px-[24px] h-[124px] gap-4 bg-white/5 rounded-lg border-[1px] border-[#2C2929]">
              <span className="text-[#fff] text-[60px]">01</span>
              <p className="text-[#ADB5BD] text-[18px]">
                Introduction to LS-DYNA®
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center px-[24px] h-[124px] gap-4 bg-white/5 rounded-lg border-[1px] border-[#2C2929]">
              <span className="text-[#fff] text-[60px]">02</span>
              <p className="text-[#ADB5BD] text-[18px]">
                Introduction to Drop Test Analysis in LS-DYNA®
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center px-[24px] h-[124px] gap-4 bg-white/5 rounded-lg border-[1px] border-[#2C2929]">
              <span className="text-[#fff] text-[60px]">03</span>
              <p className="text-[#ADB5BD] text-[18px]">
                Introduction to Drop Test Analysis in LS-DYNA®
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center px-[24px] h-[124px] gap-4 bg-white/5 rounded-lg border-[1px] border-[#2C2929] md:mr-[64px]">
              <span className="text-[#fff] text-[60px]">04</span>
              <p className="text-[#ADB5BD] text-[18px]">
                Introduction to Drop Test Analysis in LS-DYNA®
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrainingCarousel;
