import React from "react";

import CustomButton from "@/components/client/button";
import Image from "next/image";
import { PlayCircleIcon } from "@/components/client/icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/components/client/icons/HelpCircleIcon";
import { DegressIcon } from "@/components/client/icons/DegressIcon";
import { LayerIcon } from "@/components/client/icons/LayerIcon";
import Container from "@/components/client/layout/Container";
import MainTitle from "@/components/client/title/MainTitle";
import BoxConsulting from "@/components/client/box/BoxConsulting";

const consultingData1 = {
  imageSrc: "/home/shuttersock-1.jpeg",
  imageAlt: "Consulting Image 1",
  text: "Sheet Stamping Engineering",
  listItems: [
    { label: "Draw Die Development and Simulation", href: "/consulting/sheet-stamping/draw-die" },
    { label: "Design of Progressive and Transfer Dies", href: "/consulting/sheet-stamping/progressive-transfer" },
    { label: "Die Structure Designs and Analysis", href: "/consulting/sheet-stamping/structure-design" },
    { label: "Die Process Design", href: "/consulting/sheet-stamping/process-design" },
    { label: "Blank Size Estimation and Cost Analysis", href: "/consulting/sheet-stamping/blank-cost" },
    { label: "Spring back Estimation and Compensation", href: "/consulting/sheet-stamping/springback" },
    { label: "Tubular Bending and Hydroforming", href: "/consulting/sheet-stamping/hydroforming" },
    { label: "Formability Engineering Analysis", href: "/consulting/sheet-stamping/formability" },
  ],
};

const consultingData2 = {
  imageSrc: "/home/shuttersock-2.jpeg",
  imageAlt: "Consulting Image 2",
  text: "Advanced CAE Analysis",
  listItems: [
    { label: "Draw Die Development and Simulation", href: "/consulting/cae/draw-die" },
    { label: "Design of Progressive and Transfer Dies", href: "/consulting/cae/progressive-transfer" },
    { label: "Die Structure Designs and Analysis", href: "/consulting/cae/structure-design" },
    { label: "Die Process Design", href: "/consulting/cae/process-design" },
    { label: "Blank Size Estimation and Cost Analysis", href: "/consulting/cae/blank-cost" },
    { label: "Spring back Estimation and Compensation", href: "/consulting/cae/springback" },
    { label: "Tubular Bending and Hydroforming", href: "/consulting/cae/hydroforming" },
    { label: "Formability Engineering Analysis", href: "/consulting/cae/formability" },
  ],
};

const Consulting = (props: any) => {
  return (
    <section className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[48px]" id="consulting">
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
