"use client";
import React from "react";

import { SoftwareSolutionContent } from "./section/SoftwareSolutionContent";
import { Contact } from "./section/Contact";
import { Intro } from "./section/Intro";

const SoftwareSolutionPage = (props: any) => {
  return (
    <>
      <Intro />
      <SoftwareSolutionContent />
      <Contact />
    </>
  );
};

export { SoftwareSolutionPage };
