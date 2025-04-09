import React from "react";

import CustomButton from "@/components/button";
import Image from "next/image";
import Container from "@/layouts/Container";
import TrainingCarousel from "@/components/sliders/TrainingCarousel";
import MainTitle from "@/components/title/MainTitle";

const TrainingWorkshop = (props: any) => {
  return (
    <section className="bg-[#0b0e15]" id="training_workshop">
      <Container>
        <div className="flex flex-col-reverse md:grid md:grid-cols-10">
          <div className="md:col-span-6  rounded-lg">
            <div className="px-[16px] md:px-[64px] py-[36px] md:py-[120px] md:pb-[64px]">
              <MainTitle
                title="Training & Workshop"
                description="DFETECH offers on a variety of training courses. Training courses are conducted by our team of application experts and doctorate holders with application and industrial professional experience"
                link="#"
                linktext="Booking Now"
                className="mb-[80px]"
              />
              <TrainingCarousel />
            </div>
          </div>

          <div className="md:col-span-4 text-white rounded-lg">
            <Image
              src="/home/workshop.png"
              width={500}
              height={500}
              alt="Workshop Image"
              className="cursor-pointer w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { TrainingWorkshop };
