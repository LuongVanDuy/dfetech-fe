import React from "react";

import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { PlayCircleIcon } from "@/Icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/Icons/HelpCircleIcon";
import { DegressIcon } from "@/Icons/DegressIcon";
import Container from "@/layouts/Container";
import { EnglandIcon } from "@/Icons/EnglandIcon";
import { ChevronLeftIcon } from "@/Icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/Icons/ChevronRightIcon";
import BoxDifferent from "@/components/templates/posts/loop/BoxDifferent";
import BoxShadow from "@/components/templates/posts/loop/BoxShadow";
import { StarIcon } from "@/Icons/StarIcon";

const OurCore = (props: any) => {
  return (
    <section>
      <div className="bg-[#0B0E1599]">
        <div className="bg-[#0B0E1566] py-20">
          <Container>
            <div className="flex flex-col gap-5 px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
              <h2 className="text-white text-4xl">Our core value</h2>
              <p className="text-[#ADB5BD]">
                The six core values that form the foundation for DFETECH's
                sustainable and prosperous development.
              </p>
            </div>

            <div className="grid grid-cols-3  gap-14 px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
              <BoxShadow
                title="Mision"
                icon={<StarIcon />}
                description={[
                  "To deliver a comprehensive, advanced, and cutting-edge simulation solution that provides the highest level of accuracy, helping businesses achieve breakthrough performance and excellence.",
                ]}
                type="col"
              />
              <BoxShadow
                title="Mision"
                icon={<StarIcon />}
                description={[
                  "To deliver a comprehensive, advanced, and cutting-edge simulation solution that provides the highest level of accuracy, helping businesses achieve breakthrough performance and excellence.",
                ]}
                type="col"
              />{" "}
              <BoxShadow
                title="Mision"
                icon={<StarIcon />}
                description={[
                  "To deliver a comprehensive, advanced, and cutting-edge simulation solution that provides the highest level of accuracy, helping businesses achieve breakthrough performance and excellence.",
                ]}
                type="col"
              />{" "}
              <BoxShadow
                title="Mision"
                icon={<StarIcon />}
                description={[
                  "To deliver a comprehensive, advanced, and cutting-edge simulation solution that provides the highest level of accuracy, helping businesses achieve breakthrough performance and excellence.",
                ]}
                type="col"
              />{" "}
              <BoxShadow
                title="Mision"
                icon={<StarIcon />}
                description={[
                  "To deliver a comprehensive, advanced, and cutting-edge simulation solution that provides the highest level of accuracy, helping businesses achieve breakthrough performance and excellence.",
                ]}
                type="col"
              />{" "}
              <BoxShadow
                title="Mision"
                icon={<StarIcon />}
                description={[
                  "To deliver a comprehensive, advanced, and cutting-edge simulation solution that provides the highest level of accuracy, helping businesses achieve breakthrough performance and excellence.",
                ]}
                type="col"
              />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export { OurCore };
