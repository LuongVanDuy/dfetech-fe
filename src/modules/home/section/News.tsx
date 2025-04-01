import React from "react";

import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { MoreIcon } from "@/Icons/MoreIcon";
import BoxNormal from "@/components/templates/posts/loop/BoxNormal";
import BoxVertical from "@/components/templates/posts/loop/BoxVertical";
import Container from "@/layouts/Container";

const newsData = [
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
    description:
      "Retaining ring notches, shoulders, chamfers, fillets: The bore hole details are shown and exported in the drawing area on the screen, in the CAD exports by ActiveX, DXF, and STEP in 2D and 3D, in the print and plot functions, in the NC exports, and in the roll stock management (option).",
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
    description:
      "Retaining ring notches, shoulders, chamfers, fillets: The bore hole details are shown and exported in the drawing area on the screen, in the CAD exports by ActiveX, DXF, and STEP in 2D and 3D, in the print and plot functions, in the NC exports, and in the roll stock management (option).",
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    date: "19 Jan 2022",
    imageSrc: "/home/new.png",
    description:
      "Retaining ring notches, shoulders, chamfers, fillets: The bore hole details are shown and exported in the drawing area on the screen, in the CAD exports by ActiveX, DXF, and STEP in 2D and 3D, in the print and plot functions, in the NC exports, and in the roll stock management (option).",
  },
];

const eventData = [
  {
    imageSrc: "/home/academy.png",
    category: "Events",
    title:
      "Exploring Ansys Discovery – The Simulation Software for Every Engineer",
    time: "3:00 PM - 4:00 PM",
    date: "Dec 19 2024",
  },
  {
    imageSrc: "/home/academy.png",
    category: "Webinar",
    title: "Future of AI in Engineering Simulations",
    time: "10:00 AM - 11:30 AM",
    date: "Jan 15 2025",
  },
  {
    imageSrc: "/home/academy.png",
    category: "Workshop",
    title: "Hands-on Training: CFD Analysis Basics",
    time: "1:00 PM - 5:00 PM",
    date: "Feb 5 2025",
  },
];

const News = (props: any) => {
  return (
    <section>
      <Container>
        <div className="border-l border-r border-[#0b0e15]/10">
          <div className="px-5 md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px] ">
            <div className="flex justify-between items-center mb-[40px]">
              <h2 className="text-[40px] leading-[48px]">News</h2>
              <CustomButton
                type="primary"
                className="!font-thin md:block sm:hidden"
              >
                See all →
              </CustomButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
              {newsData.map((news, index) => (
                <BoxNormal key={index} {...news} />
              ))}
            </div>
            <CustomButton
              type="primary"
              className="!font-thin min-w-[30px] !text-[14px] !py-[8px] !px-[20px]  md:hidden sm:block"
            >
              See all →
            </CustomButton>
          </div>
          <div className="border-t-[1px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-5 md:px-[64px] py-[36px] md:py-[64px] md:pb-[64px]  border-r-[1px] ">
                <div className="flex justify-between items-center  mb-[30px]">
                  <h2 className="md:text-[40px] sm:text-[32px] ">Academy</h2>
                  <MoreIcon width={20} height={20} fill="#2C7656" />
                </div>
                <BoxNormal
                  imageSrc="/home/academy.png"
                  title="Ansys Academic"
                  date="19 Jan 2022"
                  description="Utilized by Students, Educators and Researchers Across the World. The demand for graduates with engineering simulation skills is exploding. This is largely due to the widespread use of simulation across product development and optimization workflows."
                  type="large"
                />
              </div>
              <div className="px-5 md:px-[64px] py-[36px] md:py-[64px] md:pb-[64px] ">
                <div className="flex justify-between items-center mb-[30px]">
                  <h2 className="text-[40px]">Events</h2>
                  <MoreIcon width={20} height={20} fill="#2C7656" />
                </div>
                <div className="flex flex-col gap-[40px]">
                  {eventData.map((event, index) => (
                    <BoxVertical key={index} {...event} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { News };
