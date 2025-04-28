import React from "react";

import BoxSolution from "@/components/client/box/BoxSolution";

const dataLarge = [
  {
    title: "Ansys",
    description: "DFETECH is a tier-1 partner of ANSYS, specializing in providing advanced engineering simulation solutions for various industries.",
    imageUrl: "/home/software-solution-1.png",
    link: [
      { name: "LS-DYNA", href: "ly-dyna-1" },
      { name: "Ansys Mechanical", href: "ly-dyna-1" },
      { name: "Ansys CFD", href: "ly-dyna-1" },
      { name: "Ansys Electronics", href: "ly-dyna-1" },
      { name: "Other Ansys Products", href: "ly-dyna-1" },
    ],
  },
  {
    title: "Zwsoft",
    imageUrl: "/products/product-2.svg",
    description: "DFETECH is a tier-1 partner of ANSYS, specializing in providing advanced engineering simulation solutions for various industries.",
    link: [
      { name: "LS-DYNA", href: "ly-dyna-1" },
      { name: "Ansys Mechanical", href: "ly-dyna-1" },
      { name: "Ansys CFD", href: "ly-dyna-1" },
      { name: "Ansys Electronics", href: "ly-dyna-1" },
      { name: "Other Ansys Products", href: "ly-dyna-1" },
    ],
  },
];

const data = [
  {
    title: "Ansys",
    imageUrl: "/home/software-solution-1.png",
    link: [
      { name: "LS-DYNA", href: "ly-dyna-1" },
      { name: "Ansys Mechanical", href: "ly-dyna-1" },
      { name: "Ansys CFD", href: "ly-dyna-1" },
      { name: "Ansys Electronics", href: "ly-dyna-1" },
      { name: "Other Ansys Products", href: "ly-dyna-1" },
    ],
  },
  {
    title: "Autodesk",
    imageUrl: "/products/product-2.svg",
    link: [
      { name: "LS-DYNA", href: "ly-dyna-1" },
      { name: "Ansys Mechanical", href: "ly-dyna-1" },
      { name: "Ansys CFD", href: "ly-dyna-1" },
      { name: "Ansys Electronics", href: "ly-dyna-1" },
      { name: "Other Ansys Products", href: "ly-dyna-1" },
    ],
  },
  {
    title: "SolidWorks",
    imageUrl: "/products/product-1.svg",
    link: [
      { name: "LS-DYNA", href: "ly-dyna-1" },
      { name: "Ansys Mechanical", href: "ly-dyna-1" },
      { name: "Ansys CFD", href: "ly-dyna-1" },
      { name: "Ansys Electronics", href: "ly-dyna-1" },
      { name: "Other Ansys Products", href: "ly-dyna-1" },
    ],
  },
  {
    title: "MATLAB",
    imageUrl: "/products/product-2.svg",
    link: [
      { name: "LS-DYNA", href: "ly-dyna-1" },
      { name: "Ansys Mechanical", href: "ly-dyna-1" },
      { name: "Ansys CFD", href: "ly-dyna-1" },
      { name: "Ansys Electronics", href: "ly-dyna-1" },
      { name: "Other Ansys Products", href: "ly-dyna-1" },
    ],
  },
];

const SoftwareSolution = (props: any) => {
  return (
    <section>
      <div className="flex flex-col gap-[48px] px-[16px] md:px-[300px] py-[36px] md:py-[64px]">
        <div className="grid grid-cols-1 gap-[48px]">
          {dataLarge.map((item, index) => (
            <BoxSolution
              imageUrl={item.imageUrl}
              effect="zoom"
              title={item.title}
              content={item.description}
              link={item.link}
              height="53%"
              large={true}
              border="border-solid border-[#FFFFFF0D]"
              rounded="[24px]"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-[48px]">
          {data.map((item, index) => (
            <BoxSolution
              imageUrl={item.imageUrl}
              effect="zoom"
              title={item.title}
              link={item.link}
              border="border-solid border-[#FFFFFF0D]"
              rounded="[24px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { SoftwareSolution };
