import ScrollNav from "@/components/client/nav/ScrollNav";
import { Consulting } from "./section/Consulting";
import { Contact } from "./section/Contact";
import { News } from "./section/News";
import { ShowCase } from "./section/ShowCase";
import { SoftwareSolutionsBot } from "./section/SoftwareSolutionsBot";
import { SoftwareSolutionTop } from "./section/SoftwareSolutionTop";
import { TrainingWorkshop } from "./section/TrainingWorkshop";
import { Trusted } from "./section/Trusted";

const HomeModule = (props: any) => {
  const sections = [
    { id: "software_solutions", label: "Software Solutions" },
    { id: "consulting", label: "Consulting" },
    { id: "training_workshop", label: "Training & Workshop" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
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
      <ShowCase />
      <SoftwareSolutionTop />
      <SoftwareSolutionsBot />
      <Consulting />
      <TrainingWorkshop />
      <News />
      <Trusted />
      <Contact />
      <ScrollNav handleScrollToSection={handleScrollToSection} sections={sections} />
    </>
  );
};

export { HomeModule };
