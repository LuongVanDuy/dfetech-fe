import React from "react";

import { SoftwareSolutions } from "./section/SoftwareSolutions";
import { CaseStudy } from "./section/CaseStudy";
import { Consulting } from "./section/Consulting";
import { TrainingWorkshop } from "./section/TrainingWorkshop";
import { News } from "./section/News";
import { Trusted } from "./section/Trusted";
import { Contact } from "./section/Contact";
import { Intro } from "./section/Intro";
import Image from "next/image";

const HomePage = (props: any) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full mix-blend-lighten">
        <Image
          src="/home/view-3d-car-model-2.svg"
          width={1920}
          height={1385}
          className="h-full object-cover"
          alt="Body Background"
        />
      </div>
      <Intro />
      <SoftwareSolutions />
      <CaseStudy />
      <Consulting />
      <TrainingWorkshop />
      <News />
      <Trusted />
      <Contact />
    </>
  );
};

export { HomePage };
