"use client";
import React from "react";

import { SoftwareSolution } from "./section/SoftwareSolution";
import { Contact } from "./section/Contact";
import { ShowCase } from "./section/ShowCase";

const SoftwareSolutionModule = (props: any) => {
  return (
    <>
      <ShowCase />
      <SoftwareSolution />
      <Contact />
    </>
  );
};

export { SoftwareSolutionModule };
