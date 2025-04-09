import React from "react";

import { SoftwareSolutionTop } from "./section/SoftwareSolutionTop";
import { SoftwareSolutionsBot } from "./section/SoftwareSolutionsBot";
import { Consulting } from "./section/Consulting";
import { TrainingWorkshop } from "./section/TrainingWorkshop";
import { News } from "./section/News";
import { Trusted } from "./section/Trusted";
import { Contact } from "./section/Contact";
import { ShowCase } from "./section/ShowCase";
import Image from "next/image";

const HomePage = (props: any) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full mix-blend-lighten">
        <div className="relative aspect-[440/1174] md:aspect-[1920/1302] w-full">
          <Image
            src="/home/view-3d-car-model-2.svg"
            alt="background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <ShowCase />
      <SoftwareSolutionTop />
      <SoftwareSolutionsBot />
      <Consulting />
      <TrainingWorkshop />
      <News />
      <Trusted />
      <Contact />
    </>
  );
};

export { HomePage };
