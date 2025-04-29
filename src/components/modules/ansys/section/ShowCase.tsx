import React from "react";

import CustomButton from "@/components/client/button";
import Image from "next/image";
import Container from "@/components/client/layout/Container";

const ShowCase = (props: any) => {
  const { content } = props;
  return (
    <section>
      <div className="relative w-full pb-[175px]">
        <div>
          <div className="relative xl:absolute xl:block top-[0] text-white w-full flex justify-center pt-[156px] z-[1] ">
            <div className="flex flex-col items-center gap-[16px]">
              <Image alt="logo" width={253} height={80} src={"/home/Ansys-logo.png"} />
              <p className="text-lg opacity-70 mb-5 max-w-[700px] text-center">
                DFETECH is a tier-1 partner of ANSYS, specializing in providing advanced engineering simulation solutions for various industries.
              </p>
              <CustomButton type="">Contact Us →</CustomButton>
            </div>
          </div>

          <Image src="/home/view-3d-car-model.svg" width={1920} height={1385} alt="Home Background" className="relative mix-blend-lighten w-full" />
        </div>

        <div className="relative xl:absolute xl:block bottom-0 text-white w-full flex justify-center bg-[#0B0E1566] backdrop-blur-[15px]">
          <Container>
            <div className="flex flex-col md:flex-row">
              {/* Khối text - 66% */}
              <div className="md:basis-[66%] flex flex-col gap-[24px] pt-[120px] pr-[64px] pb-[64px] pl-[64px]">
                <h2 className="text-[32px] font-medium leading-[38px]">
                  DFETECH is a tier-1 partner of ANSYS, specializing in providing advanced engineering simulation solutions for various industries.
                </h2>
                <p className="text-lg opacity-70">
                  The strategic partnership between the exceptional capabilities of ANSYS software and DFETECH’s high-level technical expertise
                  enables the creation of powerful and efficient tools that empower engineers to solve complex technical challenges. Together, we not
                  only enhance simulation performance but also foster innovation, helping our clients achieve groundbreaking progress in research,
                  development, and manufacturing.
                </p>
                <CustomButton className="mt-[24px]">More Info</CustomButton>
              </div>

              <div className="md:basis-[34%] w-full flex justify-center items-center pr-[24px] pl-[24px] relative">
                <Image
                  src="/home/Ansys-reward.png"
                  width={498}
                  height={554}
                  alt="Reward"
                  className="absolute bottom-[0] w-full h-auto object-contain"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export { ShowCase };
