"use client";
import React from "react";

import { Contact } from "./section/Contact";
import { Intro } from "./section/Intro";
import { AnsysContent } from "./section/AnsysContent";

const AnsysPage = (props: any) => {
  return (
    <>
      <Intro />
      <AnsysContent />
      <Contact />
    </>
  );
};

export { AnsysPage };
