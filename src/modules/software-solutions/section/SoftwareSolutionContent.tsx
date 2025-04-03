import React from "react";

import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { PlayCircleIcon } from "@/Icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/Icons/HelpCircleIcon";
import { DegressIcon } from "@/Icons/DegressIcon";
import { LayerIcon } from "@/Icons/LayerIcon";
import Container from "@/layouts/Container";
import BoxSolution from "@/components/templates/solutions/loop/BoxSolution";

const SoftwareSolutionContent = (props: any) => {
  return (
    <section>
      <div
        style={{
          background: "rgba(11, 14, 21, 1)",
        }}
      >
        <Container>
          <div className="flex flex-col gap-5 px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
            <h2 className="text-white text-4xl">Consulting</h2>
            <p className="text-[#ADB5BD]">
              DFETECH's goal is to equip our customers with the necessary
              knowledge and management solutions to today's challenges.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export { SoftwareSolutionContent };
