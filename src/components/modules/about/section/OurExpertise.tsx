import React from "react";

import Image from "next/image";
import { PlayCircleIcon } from "@/components/icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/components/icons/HelpCircleIcon";
import { DegressIcon } from "@/components/icons/DegressIcon";
import Container from "@/components/layouts/clients/Container";
import { FavoriteChartIcon } from "@/components/icons/FavoriteChart";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { StarIcon } from "@/components/icons/StarIcon";
import BoxShadow from "@/components/box/BoxShadow";

const OurExpertise = (props: any) => {
  return (
    <section>
      <div
        style={{
          background: "linear-gradient(to bottom, #0E1C1D, #0B1115)",
        }}
      >
        <div className="bg-[#0B0E1566] py-20">
          <Container>
            <div className="grid grid-cols-2 gap-10  text-white mx-16">
              <div className="col-span-2">
                <BoxShadow
                  icon={<FavoriteChartIcon />}
                  title="Our expertise spans the following areas:"
                  description={[
                    "CAE (Computer Aided Engineering), offering world-class solutions such as LS-DYNA, ANSYS FLUENT, ANSYS MECHANICAL, and others.",
                    "Advanced Metal Stamping Engineering, with the renowned DYNAFORM stamping simulation solution.",
                    "Tolerance and Dimensional Engineering, using leading solutions from 3DCS.",
                    "High-Performance Computing (HPC) systems.",
                  ]}
                  image="/home/shuttersock-2.jpeg"
                />
              </div>
              <div className="h-full">
                <BoxShadow
                  title="Vision"
                  icon={<EyeIcon />}
                  description={[
                    "To become a global leader in providing simulation engineering services across a wide range of industries.",
                  ]}
                />
              </div>
              <div className="h-full">
                <BoxShadow
                  title="Mision"
                  icon={<StarIcon />}
                  description={[
                    "To deliver a comprehensive, advanced, and cutting-edge simulation solution that provides the highest level of accuracy, helping businesses achieve breakthrough performance and excellence.",
                  ]}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export { OurExpertise };
