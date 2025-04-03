import React from "react";

import Image from "next/image";
import { PlayCircleIcon } from "@/Icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/Icons/HelpCircleIcon";
import { DegressIcon } from "@/Icons/DegressIcon";
import { LayerIcon } from "@/Icons/LayerIcon";
import Container from "@/layouts/Container";
import { CarIcon } from "@/Icons/CarIcon";
import BoxNormal from "@/components/box/BoxNormal";

const newsData = [
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
    icon: <CarIcon />,
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
    icon: <CarIcon />,
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
    icon: <CarIcon />,
  },
];

const newsData1 = [
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
    icon: <CarIcon />,
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
    icon: <CarIcon />,
  },
];

const IndustriesContent = (props: any) => {
  return (
    <section>
      <div
        className="py-10"
        style={{
          background: "rgba(11, 14, 21, 1)",
        }}
      >
        <Container>
          <div className="flex flex-col items-start justify-center mb-[40px]">
            <p className="text-[#2C7656]">Industries</p>
            <h2 className="text-[40px] leading-[48px]">
              To change the world and make it a better place
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsData1.map((news, index) => (
                <BoxNormal
                  key={index}
                  {...news}
                  className="rounded-[24px] border-[1px] border-[#FFFFFF0D]"
                  type="rounded"
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsData.map((news, index) => (
                <BoxNormal
                  key={index}
                  {...news}
                  className="rounded-[24px] border-[1px] border-[#FFFFFF0D]"
                  type="rounded"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsData1.map((news, index) => (
                <BoxNormal
                  key={index}
                  {...news}
                  className="rounded-[24px] border-[1px] border-[#FFFFFF0D]"
                  type="rounded"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsData.map((news, index) => (
                <BoxNormal
                  key={index}
                  {...news}
                  className="rounded-[24px] border-[1px] border-[#FFFFFF0D]"
                  type="rounded"
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export { IndustriesContent };
