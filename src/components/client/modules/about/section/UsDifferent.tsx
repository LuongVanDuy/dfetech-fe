import React from "react";

import Image from "next/image";
import { PlayCircleIcon } from "@/components/client/icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/components/client/icons/HelpCircleIcon";
import { DegressIcon } from "@/components/client/icons/DegressIcon";
import Container from "@/components/client/layout/Container";
import { EnglandIcon } from "@/components/client/icons/EnglandIcon";
import { ChevronLeftIcon } from "@/components/client/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/client/icons/ChevronRightIcon";
import BoxDifferent from "@/components/box/BoxDifferent";

const UsDifferent = (props: any) => {
  return (
    <section>
      <div
        style={{
          background: "linear-gradient(to bottom, #0E1C1D, #0B1115)",
        }}
      >
        <div className="bg-[#0B0E1566] py-20">
          <Container>
            <div className="flex flex-col gap-5 px-[16px] md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
              <h2 className="text-white text-4xl">What’s make us different?</h2>
              <p className="text-[#ADB5BD]">
                We not only implement cutting-edge engineering solutions but
                also make significant investments in developing and training a
                team of highly skilled experts. At DFETECH, WE ALWAYS PUT OUR
                CLIENTS FIRST. With the goal of bringing our clients' projects
                to life, we consistently provide the most advanced and optimized
                technological solutions. We are committed to supporting our
                clients throughout the entire process, delivering products and
                services that not only meet but exceed their expectations.
              </p>
            </div>

            <div className="grid grid-cols-3  gap-5 px-[16px] md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
              <BoxDifferent title="20+" description="Employees" />
              <BoxDifferent title="20+" description="Employees" />
              <BoxDifferent title="20+" description="Employees" />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export { UsDifferent };
