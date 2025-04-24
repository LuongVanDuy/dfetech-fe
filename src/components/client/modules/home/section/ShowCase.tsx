import React from "react";

import CustomButton from "@/components/client/button";
import Image from "next/image";
import BrandSlider from "@/components/client/sliders/BrandsCarousel";

const ShowCase = (props: any) => {
  const { content } = props;
  return (
    <section>
      <div className="relative w-full">
        <div>
          <div className="relative xl:absolute xl:block top-[0] text-white w-full flex justify-center pt-[156px]">
            <div className="flex flex-col items-center gap-[16px]">
              <h2 className="font-teko font-[var(--font-teko)] text-[68px] leading-[72px] md:text-[80px] md:leading-[84px] font-medium tracking-normal text-center uppercase">
                {content?.title}
              </h2>

              <p className="text-lg opacity-70 mb-5 ">{content?.subtitle}</p>
              <CustomButton type="">Contact Us →</CustomButton>
            </div>
          </div>

          <Image
            src="/home/view-3d-car-model.svg"
            width={1920}
            height={1385}
            alt="Home Background"
            className="relative mix-blend-lighten w-full"
          />
        </div>

        <div className="relative xl:absolute xl:block bottom-0 text-white w-full flex justify-center bg-[#0B0E1566] backdrop-blur-[15px]">
          <div className="flex flex-col items-center gap-[64px] p-[48px_16px] md:py-[64px] md:px-0">
            <div className="flex flex-col items-center gap-[16px]">
              <h2 className="text-[32px] leading-[38px] font-medium md:text-[48px] md:leading-[57px] text-center">
                {content?.slogan}
              </h2>
              <p className="text-lg opacity-70 text-center">
                {content?.author}
              </p>
            </div>
            <div className="flex flex-col items-center gap-[16px]">
              <p>Trusted by Leaders across Industries</p>
              <div className="overflow-hidden max-w-[750px] mx-auto">
                <div className="flex gap-[16px]">
                  <BrandSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ShowCase };
