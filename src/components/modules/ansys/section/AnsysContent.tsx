import React from "react";

import Container from "@/components/client/layout/Container";
import BoxNormal from "@/components/client/box/BoxNormal";

const newsData = [
  {
    title: "Ansys Mechanical",
    imageSrc: "/ansys/ansys-1.png",
    description: "Finite Element Analysis (FEA) Software for Structural Engineering",
  },
  {
    title: "Ansys Fluent ",
    imageSrc: "/ansys/ansys-2.png",
    description: "Ansys Fluent generates accurate and reliable fluid simulation results",
  },
  {
    title: "Ansys Discovery",
    imageSrc: "/ansys/ansys-3.png",
    description: "Rapid Design Exploration",
  },
  {
    title: "Ansys Additive Manufacturing",
    imageSrc: "/ansys/ansys-2.png",
    description: "3D Metal Printing Simulation Software",
  },
  {
    title: "Ansys Maxwell",
    imageSrc: "/ansys/ansys-3.png",
    description: "Low Frequency EM Field Simulation",
  },
];

const AnsysContent = (props: any) => {
  return (
    <section className="bg-[#0B0E1566] backdrop-blur-[15px]">
      <Container>
        <div className="flex flex-col gap-5 px-[16px] md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px] bg-[rgba(255,255,255,0.02)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
            {newsData.map((news, index) => (
              <BoxNormal key={index} {...news} type="large" postType="ansys" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { AnsysContent };
