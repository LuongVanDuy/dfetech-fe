import React from "react";

import CustomButton from "@/components/button";
import Image from "next/image";
import { ChevronRightIcon } from "@/Icons/ChevronRightIcon";
import { ChevronLeftIcon } from "@/Icons/ChevronLeftIcon";
import Container from "@/layouts/Container";
import TrainingCarousel from "@/components/sliders/TrainingCarousel";

const TrainingWorkshop = (props: any) => {
  return (
    <section className="bg-[#0b0e15] ">
      <Container>
        <div className="flex flex-col-reverse md:grid md:grid-cols-10">
          <div className="md:col-span-6  rounded-lg">
            <div className="px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
              <h2 className="text-[#fff] md:text-[45px] sm:text-[35px] leading-[55px] mb-5">
                Training & Workshop
              </h2>
              <p className="text-[#ADB5BD] mb-10">
                DFETECH offers on a variety of training courses. Training
                courses are conducted by our team of application experts and
                doctorate holders with application and industrial professional
                experience.
              </p>

              <CustomButton
                type="primary"
                className="min-w-[30px] !text-[14px] !py-[10px] !px-[20px] !font-thin mb-[50px]"
              >
                Booking Now
              </CustomButton>

              <TrainingCarousel />
            </div>
          </div>

          <div className="md:col-span-4 text-white rounded-lg">
            <Image
              src="/home/workshop.png"
              width={500}
              height={500}
              alt="Workshop Image"
              className="cursor-pointer w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { TrainingWorkshop };
