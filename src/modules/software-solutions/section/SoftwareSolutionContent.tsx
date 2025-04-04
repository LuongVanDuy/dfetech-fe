import React from "react";

import Image from "next/image";
import { PlayCircleIcon } from "@/Icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/Icons/HelpCircleIcon";
import { DegressIcon } from "@/Icons/DegressIcon";
import { LayerIcon } from "@/Icons/LayerIcon";
import Container from "@/layouts/Container";
import BoxSolution from "@/components/box/BoxSolution";
import BoxSoftware from "@/components/box/BoxSoftware";
import { desc } from "framer-motion/client";

const dataLarge = [
  {
    title: "Ansys",
    description:
      "Ansys is a global leader in engineering simulation software, providing solutions for structural, fluid dynamics, and electromagnetic simulations.",
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
    description:
      "Autodesk is a leader in 3D design, engineering, and entertainment software, providing tools for architecture, engineering, construction, manufacturing, and media.",
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

const SoftwareSolutionContent = (props: any) => {
  return (
    <section>
      <div
        style={{
          background: "rgba(11, 14, 21, 1)",
        }}
      >
        <Container>
          <div className="flex flex-col gap-5 px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
            <h2 className="text-white text-4xl">Consulting</h2>
            <p className="text-[#ADB5BD]">
              DFETECH's goal is to equip our customers with the necessary
              knowledge and management solutions to today's challenges.
            </p>
          </div>

          <div className="flex flex-col gap-5 px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
            <div className="grid grid-cols-1 gap-8">
              {dataLarge.map((item, index) => (
                <BoxSoftware
                  imageUrl={item.imageUrl}
                  effect="zoom"
                  type="large"
                  title={item.title}
                  link={item.link}
                  description={item.description}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 mt-5">
              {[...data, ...data].map((item, index) => (
                <BoxSoftware
                  imageUrl={item.imageUrl}
                  effect="zoom"
                  type="small"
                  title={item.title}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export { SoftwareSolutionContent };
