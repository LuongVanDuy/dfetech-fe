"use client";
import React from "react";

import { Consulting } from "./section/Consulting";
import { TrainingWorkshop } from "./section/TrainingWorkshop";
import { Contact } from "./section/Contact";
import { Intro } from "./section/Intro";

const ServicePage = (props: any) => {
  return (
    <>
      <Intro />
      <Consulting />
      <TrainingWorkshop />
      <Contact />
    </>
  );
};

export { ServicePage };
