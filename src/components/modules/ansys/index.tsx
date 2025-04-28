"use client";
import React from "react";

import { Contact } from "./section/Contact";
import { AnsysContent } from "./section/AnsysContent";
import { ShowCase } from "./section/ShowCase";

const AnsysPage = (props: any) => {
  return (
    <>
      <ShowCase />
      <AnsysContent />
      <Contact />
    </>
  );
};

export { AnsysPage };
