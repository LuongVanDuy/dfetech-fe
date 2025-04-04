import React from "react";

import Image from "next/image";
import CustomButton from "@/components/button";
import BrandSlider from "@/components/sliders/BrandsCarousel";
import Container from "@/layouts/Container";

const Intro = (props: any) => {
  return (
    <section>
      <div
        className="flex xl:hidden text-white flex-col items-center gap-5 pt-[100px] pb-[50px] text-center"
        style={{
          background: "linear-gradient(to bottom, #38CD60, #0E221C)",
        }}
      >
        <div className="flex justify-center">
          <Image
            alt="logo"
            width={253}
            height={80}
            src={"/home/Ansys-logo.png"}
          />
        </div>
        <p className="text-lg opacity-70 mt-5 ">
          DFETECH is a tier-1 partner of ANSYS, specializing in providing
          advanced engineering simulation solutions for various industries.
        </p>
        <CustomButton>Contact Us →</CustomButton>
      </div>

      <div className="relative w-full">
        <Image
          src="/home/view-3d-car-model.svg"
          width={1920}
          height={1385}
          alt="Home Background"
        />
        <div className="absolute top-0 left-0 w-full h-full mix-blend-lighten">
          <Image
            src="/home/view-3d-car-model-2.svg"
            width={1920}
            height={1385}
            className="h-full"
            alt="Body Background"
          />
        </div>

        <div className="absolute hidden xl:block top-[15%] text-white w-full flex justify-center">
          <div className="flex flex-col items-center gap-5">
            <div className="flex justify-center">
              <Image
                alt="logo"
                width={253}
                height={80}
                src={"/home/Ansys-logo.png"}
              />
            </div>
            <p className="text-lg opacity-70 mt-5 text-center">
              DFETECH is a tier-1 partner of ANSYS, specializing in providing
              advanced <br />
              engineering simulation solutions for various industries.
            </p>
            <CustomButton type="contact-home">Contact Us →</CustomButton>
          </div>
        </div>

        <div className="absolute hidden xl:flex  bottom-0 text-white w-full  justify-between items-center bg-[#0B0E1566]">
          <Container>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col  gap-5 w-3/5">
                <h2 className="text-4xl">Engineers turn dream into reality</h2>
                <p className="text-lg opacity-70 ">
                  The strategic partnership between the exceptional capabilities
                  of ANSYS software and DFETECH’s high-level technical expertise
                  enables the creation of powerful and efficient tools that
                  empower engineers to solve complex technical challenges.
                  Together, we not only enhance simulation performance but also
                  foster innovation, helping our clients achieve groundbreaking
                  progress in research, development, and manufacturing.
                </p>
                <CustomButton className="mt-10">More Info</CustomButton>
              </div>
              <div className="w-2/5 flex justify-center items-center">
                <Image
                  width={500}
                  height={550}
                  alt="Reward"
                  className="translate-y-[-10%]"
                  src={"/home/Ansys-reward.png"}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div
        className="flex xl:hidden flex-col items-center text-center text-white gap-5 py-10"
        style={{
          background: "linear-gradient(to bottom, #0E221C, #38CD60)",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-5xl">Engineers turn dream into reality</p>
          <p className="text-lg opacity-70 ">- Hayao Miyazaki-</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg">Trusted by Leaders across Industries</p>
          <div className="flex gap-5">
            <Image
              src={"/brands/apm.png"}
              width={133}
              height={67}
              alt="brand"
            />
            <Image
              src={"/brands/vinfast.png"}
              width={133}
              height={67}
              alt="brand"
            />
            <Image
              src={"/brands/dso.png"}
              width={133}
              height={67}
              alt="brand"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Intro };
