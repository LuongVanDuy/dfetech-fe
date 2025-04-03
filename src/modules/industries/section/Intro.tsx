import React from "react";

import CustomButton from "@/components/CustomButton";
import Image from "next/image";

const Intro = (props: any) => {
  return (
    <section>
      <div
        className="flex xl:hidden text-white flex-col items-center gap-5 pt-[100px] pb-[50px] text-center"
        style={{
          background: "linear-gradient(to bottom, #38CD60, #0E221C)",
        }}
      >
        <h2 className="text-4xl uppercase font-bold text-center">Industries</h2>
        <p className="text-lg opacity-70 mt-5 ">To change the world</p>
        <CustomButton>Contact Us →</CustomButton>
      </div>

      <div className="relative w-full">
        <Image
          src="/home/home-background.jpg"
          width={1920}
          height={1302}
          alt="Home Background"
        />
        <div className="absolute top-0 left-0 w-full h-full mix-blend-lighten">
          <Image
            src="/home/body-background.png"
            width={1920}
            height={1302}
            className="h-full"
            alt="Body Background"
          />
        </div>

        <div className="absolute hidden xl:block top-[15%] text-white w-full flex justify-center">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-4xl uppercase font-bold">Industries</h2>
            <p className="text-lg opacity-70 mt-5 ">
              and make it a better place
            </p>
            <CustomButton type="contact-home">Contact Us →</CustomButton>
          </div>
        </div>

        <div className="absolute hidden xl:block  bottom-0 text-white w-full flex justify-center bg-[#0B0E1566]">
          <div className="flex flex-col items-center gap-10 py-10">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-5xl">Engineers turn dream into reality</h2>
              <p className="text-lg opacity-70 ">- Hayao Miyazaki-</p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <p className="text-lg">Trusted by Leaders across Industries</p>
              <div className="flex gap-5">
                <Image
                  src={"/brands/apm.png"}
                  width={133}
                  height={67}
                  alt="brand"
                  style={{ height: "auto" }}
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
                <Image
                  src={"/brands/dsta.png"}
                  width={133}
                  height={67}
                  alt="brand"
                />
                <Image
                  src={"/brands/keppel.png"}
                  width={133}
                  height={67}
                  alt="brand"
                />
              </div>
            </div>
          </div>
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
