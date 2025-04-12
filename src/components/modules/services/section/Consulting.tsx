import React from "react";

import Image from "next/image";
import { PlayCircleIcon } from "@/components/icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/components/icons/HelpCircleIcon";
import { DegressIcon } from "@/components/icons/DegressIcon";
import { LayerIcon } from "@/components/icons/LayerIcon";
import Container from "@/components/layouts/clients/Container";
import CustomButton from "@/components/button";

const Consulting = (props: any) => {
  return (
    <section>
      <div
        style={{
          background: "rgba(11, 14, 21, 1)",
        }}
      >
        <Container>
          <div className="flex flex-col gap-5 px-[16px] md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
            <h2 className="text-white text-4xl">Consulting</h2>
            <p className="text-[#ADB5BD]">
              DFETECH's goal is to equip our customers with the necessary
              knowledge and management solutions to today's challenges.
            </p>
          </div>
        </Container>
        <div className="grid grid-cols-1 md:grid-cols-2 text-white ">
          <div className="relative w-full h-[622px]">
            <Image
              src="/home/shuttersock-1.jpeg"
              alt="Sheet Stamping Engineering"
              className="opacity-60"
              style={{ objectFit: "cover" }}
              fill
            />
            <div className="absolute bottom-10 left-10 flex flex-col gap-2 z-10">
              <CustomButton type="icon" className="p-3">
                <LayerIcon />
              </CustomButton>
              <p className="text-2xl">Sheet Stamping Engineering</p>
            </div>
          </div>

          <div className="relative w-full h-[622px]">
            <Image
              src="/home/shuttersock-2.jpeg"
              alt="Sheet Stamping Engineering"
              className="opacity-60"
              style={{ objectFit: "cover" }}
              fill
            />
            <div className="absolute bottom-10 left-10 flex flex-col gap-2 z-10">
              <CustomButton type="icon" className="p-3">
                <LayerIcon />
              </CustomButton>
              <p className="text-2xl">Advanced CAE Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Consulting };
