"use client";
import React from "react";

import { Industries } from "./section/Industries";
import { Contact } from "./section/Contact";
import { Intro } from "./section/Intro";
import { OurExpertise } from "./section/OurExpertise";
import { UsDifferent } from "./section/UsDifferent";
import { OurJourney } from "./section/OurJourney";
import { OurCore } from "./section/OurCore";
import MeetOur from "./section/MeetOur";

const AboutPage = (props: any) => {
  return (
    <>
      <Intro />
      <OurExpertise />
      <OurJourney />
      <UsDifferent />
      <OurCore />
      <Industries />
      <MeetOur />
      <Contact />
    </>
  );
};

export { AboutPage };
