import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import CustomButton from "@/components/button";
import { ChevronLeftIcon } from "@/Icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/Icons/ChevronRightIcon";
import BoxSolution from "../box/BoxSolution";

const SolutionsCarousel = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  const data = [
    {
      title: "Ansys",
      imageUrl: "/products/product-1.svg",
      link: [
        { name: "LS-DYNA", href: "ly-dyna-1" },
        { name: "Ansys Mechanical", href: "ly-dyna-1" },
        { name: "Ansys CFD", href: "ly-dyna-1" },
        { name: "Ansys Electronics", href: "ly-dyna-1" },
        { name: "Other Ansys Products", href: "ly-dyna-1" },
      ],
    },
    {
      title: "Autodesk",
      imageUrl: "/products/product-2.svg",
      link: [
        { name: "LS-DYNA", href: "ly-dyna-1" },
        { name: "Ansys Mechanical", href: "ly-dyna-1" },
        { name: "Ansys CFD", href: "ly-dyna-1" },
        { name: "Ansys Electronics", href: "ly-dyna-1" },
        { name: "Other Ansys Products", href: "ly-dyna-1" },
      ],
    },
    {
      title: "SolidWorks",
      imageUrl: "/products/product-1.svg",
      link: [
        { name: "LS-DYNA", href: "ly-dyna-1" },
        { name: "Ansys Mechanical", href: "ly-dyna-1" },
        { name: "Ansys CFD", href: "ly-dyna-1" },
        { name: "Ansys Electronics", href: "ly-dyna-1" },
        { name: "Other Ansys Products", href: "ly-dyna-1" },
      ],
    },
    {
      title: "MATLAB",
      imageUrl: "/products/product-2.svg",
      link: [
        { name: "LS-DYNA", href: "ly-dyna-1" },
        { name: "Ansys Mechanical", href: "ly-dyna-1" },
        { name: "Ansys CFD", href: "ly-dyna-1" },
        { name: "Ansys Electronics", href: "ly-dyna-1" },
        { name: "Other Ansys Products", href: "ly-dyna-1" },
      ],
    },
  ];

  return (
    <div>
      <Swiper
        ref={swiperRef}
        slidesPerView={3.2}
        spaceBetween={0}
        pagination={false}
        modules={[Pagination]}
        className="SolutionsCarousel"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <BoxSolution
              imageUrl={item.imageUrl}
              height="103.67%"
              effect="zoom"
              title={item.title}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between px-5 md:px-20 py-[24px] md:pt-[48px] md:pb-[64px]  md:justify-center">
        <div className="flex gap-[16px]">
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

export default SolutionsCarousel;
