import Container from "@/layouts/Container";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

const Trusted = (props: any) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="bg-[#0B0E15]" ref={ref}>
      <Container>
        <div className="px-5 md:px-[64px] py-[36px] md:py-[64px] md:pb-[64px]">
          <h2 className="text-center lg:text-[32px] sm:text-[24px] text-[#ADB5BD] md:mb-[64px] sm:mb-[40px]">
            We are Trusted 15+ Countries Worldwide
          </h2>
          <div className="grid grid-cols-3 md:gap-8 sm:gap-1">
            <div className="p-4 background-trusted text-center rounded-lg bg-gradient-radial from-green-500/80 to-green-900">
              <h3 className="md:text-[76px] sm:text-[40px] font-extrabold md:leading-[76px] sm:leading-[44px] text-white md:mb-5 sm:mb-1">
                {hasAnimated ? (
                  <CountUp start={0} end={100} duration={3} suffix="+" />
                ) : (
                  "0+"
                )}
              </h3>
              <p className="text-[#ADB5BD]">Clients</p>
            </div>
            <div className="p-4 background-trusted text-center rounded-lg">
              <h3 className="md:text-[76px] sm:text-[40px] font-extrabold md:leading-[76px] sm:leading-[44px] text-white md:mb-5 sm:mb-1">
                {hasAnimated ? (
                  <CountUp start={0} end={100} duration={3} suffix="+" />
                ) : (
                  "0+"
                )}
              </h3>
              <p className="text-[#ADB5BD]">Projects</p>
            </div>
            <div className="p-4 background-trusted text-center rounded-lg">
              <h3 className="md:text-[76px] sm:text-[40px] font-extrabold md:leading-[76px] sm:leading-[44px] text-white md:mb-5 sm:mb-1">
                {hasAnimated ? (
                  <CountUp start={0} end={15} duration={2} />
                ) : (
                  "0"
                )}
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
