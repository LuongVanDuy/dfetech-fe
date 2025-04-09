import React from "react";

import CustomButton from "@/components/button";
import Image from "next/image";
import { PlayCircleIcon } from "@/Icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/Icons/HelpCircleIcon";
import { DegressIcon } from "@/Icons/DegressIcon";
import Container from "@/layouts/Container";
import MainTitle from "@/components/title/MainTitle";

const CaseStudy = (props: any) => {
  return (
    <section className="bg-gradient-to-b from-[#0E1C1D] to-[#0B1115] backdrop-blur-[48px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 text-white">
          <div className="order-last md:order-first flex justify-center items-center  px-[16px] py-[48px] md:px-[64px] md:py-[64px]">
            <div className="flex flex-col gap-5">
              <MainTitle
                subTitle="Case Study"
                title="Computer-Aided Engineering"
                description="Using 3DCS, we help industries minimize production variation
                    through precise dimensional analysis, ensuring accuracy in
                    every step of the manufacturing process."
                link="#"
                linktext="Explore →"
                type="small"
              />
            </div>
          </div>
          <div className="order-first md:order-last  px-[16px] py-[48px] md:px-[64px] md:py-[64px]">
            <div className="flex md:flex-col-reverse flex-col">
              <div className="mt-5">
                <Image
                  src={"/home/3D.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="mx-auto"
                />
              </div>

              <div className="flex justify-between">
                <div>
                  <div className="flex justify-center gap-2 bg-[#FFFFFF0D] p-2 border-[1px] border-[#FFFFFF0D] rounded-full">
                    <PlayCircleIcon />
                    <HelpCircleIcon />
                  </div>
                </div>
                <DegressIcon />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { CaseStudy };
