"use client";

import ScrollNav from "@/components/client/nav/ScrollNav";
import SocialNav from "@/components/client/nav/SocialNav";

import { Consulting } from "@/components/client/modules/home/section/Consulting";
import { Contact } from "@/components/client/modules/home/section/Contact";
import { News } from "@/components/client/modules/home/section/News";
import { ShowCase } from "@/components/client/modules/home/section/ShowCase";
import { SoftwareSolutionsBot } from "@/components/client/modules/home/section/SoftwareSolutionsBot";
import { SoftwareSolutionTop } from "@/components/client/modules/home/section/SoftwareSolutionTop";
import { TrainingWorkshop } from "@/components/client/modules/home/section/TrainingWorkshop";
import { Trusted } from "@/components/client/modules/home/section/Trusted";
import Image from "next/image";
import { connect } from "react-redux";
import { fetchPageDetailClient } from "@/store/actions/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DefaultLayout from "@/components/client/layout/DefaultLayout";

const HomePage = (props: any) => {
  const { loading, fetchPageDetail, pageDetail } = props;

  useEffect(() => {
    const slug = "home";
    fetchPageDetail(slug, "en");
  }, [fetchPageDetail]);

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
        <ShowCase content={pageDetail?.content?.showcare} />
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
};

const mapStateToProps = (state: any) => ({
  pageDetail: state.page.detail,
});

const mapDispatchToProps = {
  fetchPageDetail: fetchPageDetailClient,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
