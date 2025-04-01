import React from "react";

import CustomButton from "@/components/CustomButton";
import SliderSolution from "@/components/templates/solutions/slider/SliderSolution";
import Container from "@/layouts/Container";

const SoftwareSolutions = (props: any) => {
  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #0E1C1D, #0B1115)",
      }}
    >
      <Container>
        <div className="flex justify-between px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
          <h2 className="text-white text-4xl">Software Solutions</h2>
          <CustomButton className="hidden md:block">See all →</CustomButton>
        </div>
      </Container>
      <SliderSolution />
    </section>
  );
};

export { SoftwareSolutions };
