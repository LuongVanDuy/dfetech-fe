import React from "react";

import { SoftwareSolutions } from "./section/SoftwareSolutions";
import { CaseStudy } from "./section/CaseStudy";
import { Consulting } from "./section/Consulting";
import { TrainingWorkshop } from "./section/TrainingWorkshop";
import { News } from "./section/News";
import { Trusted } from "./section/Trusted";
import { Contact } from "./section/Contact";
import { Intro } from "./section/Intro";

const HomePage = (props: any) => {
  return (
    <>
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
