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
    <section>
      <div
        style={{
          background: "linear-gradient(to bottom, #0E1C1D, #0B1115)",
        }}
      >
        <div className="bg-[#0B0E1566] py-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10  text-white px-[16px] md:px-[64px]">
              <div className="order-last md:order-first flex justify-center items-center">
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
              <div className="order-first md:order-last">
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
        </div>
      </div>
    </section>
  );
};

export { CaseStudy };
