import React from "react";

import CustomButton from "@/components/button";
import Container from "@/layouts/Container";
import SolutionsCarousel from "@/components/sliders/SolutionsCarousel";
import MainTitle from "@/components/title/MainTitle";

const SoftwareSolutions = (props: any) => {
  return (
    <section className="bg-gradient-to-b from-[#0E1C1D] to-[#0B1115]">
      <Container>
        <MainTitle
          className="flex justify-between px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[40px]"
          title="Software Solutions"
          link="#"
          linktext="See all →"
        />
      </Container>
      <SolutionsCarousel />
    </section>
  );
};

export { SoftwareSolutions };
