import React from "react";

import CustomButton from "@/components/button";
import Image from "next/image";
import { PlayCircleIcon } from "@/components/icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/components/icons/HelpCircleIcon";
import { DegressIcon } from "@/components/icons/DegressIcon";
import { LayerIcon } from "@/components/icons/LayerIcon";
import Container from "@/components/layouts/clients/Container";
import BoxConsulting from "@/components/box/BoxConsulting";
import MainTitle from "@/components/title/MainTitle";

const consultingData1 = {
  imageSrc: "/home/shuttersock-1.jpeg",
  imageAlt: "Consulting Image 1",
  text: "Sheet Stamping Engineering",
  listItems: [
    "Draw Die Development and Simulation",
    "Design of Progressive and Transfer Dies",
    "Die Structure Designs and Analysis",
    "Die Process Design",
    "Blank Size Estimation and Cost Analysis",
    "Spring back Estimation and Compensation",
    "Tubular Bending and Hydroforming",
    "Formability Engineering Analysis",
  ],
};

const consultingData2 = {
  imageSrc: "/home/shuttersock-2.jpeg",
  imageAlt: "Consulting Image 2",
  text: "Advanced CAE Analysis",
  listItems: [
    "Draw Die Development and Simulation",
    "Design of Progressive and Transfer Dies",
    "Die Structure Designs and Analysis",
    "Die Process Design",
    "Blank Size Estimation and Cost Analysis",
    "Spring back Estimation and Compensation",
    "Tubular Bending and Hydroforming",
    "Formability Engineering Analysis",
  ],
};

const Consulting = (props: any) => {
  return (
    <section
      className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[48px]"
      id="consulting"
    >
      <Container>
        <MainTitle
          className="px-[16px] md:px-[64px] py-[36px] md:py-[80px] md:pb-[15px]"
          title="Consulting"
          description="DFETECH's goal is to equip our customers with the necessary knowledge and management solutions to today's challenges."
        />
      </Container>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white ">
        <BoxConsulting
          imageSrc={consultingData1.imageSrc}
          imageAlt={consultingData1.imageAlt}
          text={consultingData1.text}
          listItems={consultingData1.listItems}
        />

        <BoxConsulting
          imageSrc={consultingData2.imageSrc}
          imageAlt={consultingData2.imageAlt}
          text={consultingData2.text}
          listItems={consultingData2.listItems}
        />
      </div>
    </section>
  );
};

export { Consulting };
