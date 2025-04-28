import React from "react";

import Image from "next/image";
import { ChevronRightIcon } from "@/components/client/icons/ChevronRightIcon";
import { ChevronLeftIcon } from "@/components/client/icons/ChevronLeftIcon";
import Container from "@/components/client/layout/Container";
import CustomButton from "@/components/client/button";

const TrainingWorkshop = (props: any) => {
  return (
    <section className="bg-[#000] ">
      <Container>
        <div className="flex flex-col-reverse md:grid md:grid-cols-10">
          <div className="md:col-span-6  rounded-lg">
            <div className="px-[16px] md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
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

              <div className="flex my-3 justify-between items-center">
                <span className="text-[#ADB5BD]">Training courses:</span>
                <div className="flex items-center gap-3">
                  <CustomButton
                    type="icon"
                    className="!shadow-[0px_0px_10px_rgba(255,255,255,0.3)]"
                  >
                    <ChevronLeftIcon />
                  </CustomButton>
                  <CustomButton
                    type="icon"
                    className="!shadow-[0px_0px_10px_rgba(255,255,255,0.3)]"
                  >
                    <ChevronRightIcon />
                  </CustomButton>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex items-center px-[45px] h-[124px] gap-4 bg-white/5 rounded-lg border-[1px] border-[#2C2929]">
                  <span className="text-[#fff] text-[60px]">01</span>
                  <p className="text-[#ADB5BD]">Introduction to LS-DYNA®</p>
                </div>
              </div>
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
