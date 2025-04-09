import React from "react";
import Container from "@/layouts/Container";
import SolutionsCarousel from "@/components/sliders/SolutionsCarousel";
import MainTitle from "@/components/title/MainTitle";

const SoftwareSolutionTop = (props: any) => {
  return (
    <section
      className="bg-gradient-to-b from-[#0E1C1D] to-[#0B1115] backdrop-blur-[48px]"
      id="software_solutions"
    >
      <Container>
        <MainTitle
          className="flex justify-between px-[16px] md:px-[64px] py-[36px] pb-[12px] md:py-[80px] md:pb-[56px] hide-bt"
          title="Software Solutions"
          link="#"
          linktext="See all →"
        />
      </Container>
      <SolutionsCarousel />
    </section>
  );
};

export { SoftwareSolutionTop };
