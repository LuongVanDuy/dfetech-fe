import React from "react";

import Image from "next/image";
import { PlayCircleIcon } from "@/Icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/Icons/HelpCircleIcon";
import { DegressIcon } from "@/Icons/DegressIcon";
import Container from "@/layouts/Container";
import { EnglandIcon } from "@/Icons/EnglandIcon";
import { ChevronLeftIcon } from "@/Icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/Icons/ChevronRightIcon";
import CustomButton from "@/components/button";

const OurJourney = (props: any) => {
  return (
    <section>
      <div
        style={{
          background: "linear-gradient(to bottom, #0E1C1D, #0B1115)",
        }}
      >
        <div className="bg-[#0B0E1566] py-20">
          <Container>
            <div className="flex flex-col gap-5 px-[16px] md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px] w-full md:w-1/2">
              <h2 className="text-white text-4xl">Consulting</h2>
              <p className="text-[#ADB5BD]">
                DFETECH’s journey began over 20 years ago, driven by our
                dedication to providing innovative simulation engineering
                solutions for a wide range of industries. With a constant focus
                on improvement and optimization, DFETECH has expanded its reach
                globally, earning the trust of numerous leading companies across
                the world.
              </p>
            </div>
          </Container>

          <Container>
            <div className="grid grid-cols-10 border-[1px] border-[#FFFFFF0D]">
              <div className="col-span-4 ">
                <div className="bg-[#FFFFFF0D]">
                  <div className="flex gap-4 py-10 pl-10 ">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <EnglandIcon />
                        <p className="text-2xl text-[#ADB5BD]">Malaysia</p>
                      </div>

                      <p className="text-5xl font-semibold">2005</p>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="bg-[#198754] h-[4px] w-full mt-5" />
                      <p className="text-[#ADB5BD]">
                        Lorem ipsum dolor sit amet consectetur. Pretium at
                        tincidunt pellentesque placerat. Tortor amet bibendum
                        tellus rutrum laoreet nec venenatis. Turpis ut et
                        aliquam magna tortor at dignissim. Elit est ultrices sit
                        aliquam vitae in.
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-full pb-10 px-10">
                    <Image
                      src={"/home/shuttersock-3.jpeg"}
                      width={545}
                      height={328}
                      alt="shuttersock"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="border-[#FFFFFF0D] border-r-[1px] h-full flex flex-col justify-between">
                  <div className="flex gap-4 py-10  ">
                    <div className="flex-1 flex flex-col gap-3 text-center">
                      <div className="relative bg-[#0F3429] h-[4px] w-full mt-5">
                        <EnglandIcon className="absolute top-[-13px] left-1/2 translate-x-[-50%]" />
                      </div>
                      <p className="text-2xl text-[#ADB5BD]">Thailand</p>
                      <p className="text-4xl font-semibold">2014</p>
                    </div>
                  </div>

                  <div className="flex justify-center py-10">
                    <CustomButton type="icon">
                      <ChevronRightIcon />
                    </CustomButton>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export { OurJourney };
