import Container from "@/layouts/Container";
import React from "react";

const Trusted = (props: any) => {
  return (
    <section className="bg-[#0B0E15]">
      <Container>
        <div className="px-5 md:px-[64px] py-[36px] md:py-[64px] md:pb-[64px] ">
          <h2 className="text-center lg:text-[32px] sm:text-[29px] text-[#ADB5BD] mb-[64px]">
            We are Trusted 15+ Countries Worldwide
          </h2>
          <div className="grid  grid-cols-3 md:gap-8 sm:gap-1">
            <div className="p-4 background-trusted text-center rounded-lg bg-gradient-radial from-green-500/80 to-green-900">
              <h3 className="text-[76px] font-extrabold leading-[76px] text-white mb-5">
                100+
              </h3>
              <p className="text-[#ADB5BD]">Clients</p>
            </div>
            <div className="p-4 background-trusted text-center rounded-lg">
              <h3 className="text-[76px] font-extrabold leading-[76px] text-white mb-5">
                100+
              </h3>
              <p className="text-[#ADB5BD]">Projects</p>
            </div>
            <div className="p-4 background-trusted text-center rounded-lg">
              <h3 className="text-[76px] font-extrabold leading-[76px] text-white mb-5">
                50
              </h3>
              <p className="text-[#ADB5BD]">Years</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Trusted };
