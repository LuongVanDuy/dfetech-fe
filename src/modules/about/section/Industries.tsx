import React from "react";

import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { MoreIcon } from "@/Icons/MoreIcon";
import BoxNormal from "@/components/templates/posts/loop/BoxNormal";
import BoxVertical from "@/components/templates/posts/loop/BoxVertical";
import Container from "@/layouts/Container";

const newsData = [
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
  },
];

const Industries = (props: any) => {
  return (
    <section>
      <Container>
        <div className="border-l border-r border-[#0b0e15]/10">
          <div className="px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px] ">
            <div className="flex flex-col items-center justify-center mb-[40px]">
              <p className="text-[#2C7656]">Industries</p>
              <h2 className="text-[40px] leading-[48px]">
                To change the world and make it a better place
              </h2>
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
        </div>
      </Container>
    </section>
  );
};

export { Industries };
