"use client";

import ScrollNav from "@/components/nav/ScrollNav";
import SocialNav from "@/components/nav/SocialNav";
import DefaultLayout from "@/components/layouts/clients/DefaultLayout";
import { Consulting } from "@/components/modules/home/section/Consulting";
import { Contact } from "@/components/modules/home/section/Contact";
import { News } from "@/components/modules/home/section/News";
import { ShowCase } from "@/components/modules/home/section/ShowCase";
import { SoftwareSolutionsBot } from "@/components/modules/home/section/SoftwareSolutionsBot";
import { SoftwareSolutionTop } from "@/components/modules/home/section/SoftwareSolutionTop";
import { TrainingWorkshop } from "@/components/modules/home/section/TrainingWorkshop";
import { Trusted } from "@/components/modules/home/section/Trusted";
import Image from "next/image";

export default function Home() {
  const sections = [
    { id: "software_solutions", label: "Software Solutions" },
    { id: "consulting", label: "Consulting" },
    { id: "training_workshop", label: "Training & Workshop" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
  ];

  const socials = [
    { name: "Facebook", icon: "/socials/Facebook.svg", url: "#" },
    { name: "Youtube", icon: "/socials/Social.svg", url: "#" },
    { name: "Linkedin", icon: "/socials/Social-1.svg", url: "#" },
    { name: "X", icon: "/socials/Social-2.svg", url: "#" },
    { name: "Tiktok", icon: "/socials/Social-3.svg", url: "#" },
    { name: "Line", icon: "/socials/Social-4.svg", url: "#" },
    { name: "Whatsapp", icon: "/socials/Social-5.svg", url: "#" },
  ];

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 86,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <DefaultLayout>
        <div className="fixed top-0 left-0 w-full h-full mix-blend-lighten">
          <div className="relative aspect-[440/1174] md:aspect-[1920/1302] w-full">
            <Image
              src="/home/view-3d-car-model-2.svg"
              alt="background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        </div>
        <ShowCase />
        <SoftwareSolutionTop />
        <SoftwareSolutionsBot />
        <Consulting />
        <TrainingWorkshop />
        <News />
        <Trusted />
        <Contact />
      </DefaultLayout>
      <ScrollNav
        handleScrollToSection={handleScrollToSection}
        sections={sections}
      />
      <SocialNav socials={socials} />;
    </>
  );
}
