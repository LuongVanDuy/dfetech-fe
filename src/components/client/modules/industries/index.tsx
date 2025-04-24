"use client";
import React from "react";

import { IndustriesContent } from "./section/IndustriesContent";
import { Contact } from "./section/Contact";
import { Intro } from "./section/Intro";

const IndustriesPage = (props: any) => {
  return (
    <>
      <Intro />
      <IndustriesContent />
      <Contact />
    </>
  );
};

export { IndustriesPage };
