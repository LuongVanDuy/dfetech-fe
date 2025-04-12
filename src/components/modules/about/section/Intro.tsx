import React from "react";

import Image from "next/image";
import CustomButton from "@/components/button";

const Intro = (props: any) => {
  return (
    <section>
      <div
        className="flex xl:hidden text-white flex-col items-center gap-5 pt-[100px] pb-[50px] text-center"
        style={{
          background: "linear-gradient(to bottom, #38CD60, #0E221C)",
        }}
      >
        <h2 className="text-4xl uppercase font-bold text-center">DFETECH</h2>
        <p className="text-lg opacity-70 mt-5 ">
          DFE-TECH has steadily established itself as a leading technical
          expert, consistently supporting businesses worldwide. We are driven by
          the goal of mastering and applying advanced technologies, continually
          striving to provide innovative solutions that effectively tackle the
          challenges businesses face.
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
            <h2 className="text-5xl uppercase font-bold">DFETECH</h2>
            <p className="text-lg opacity-70 mt-5 w-2/5 text-center">
              DFE-TECH has steadily established itself as a leading technical
              expert, consistently supporting businesses worldwide. We are
              driven by the goal of mastering and applying advanced
              technologies, continually striving to provide innovative solutions
              that effectively tackle the challenges businesses face.
            </p>
            <CustomButton type="contact-home">Contact Us →</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Intro };
