"use client";

import { HomePage } from "@/modules/home";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
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
      <HomePage />
      <div className="fixed top-[250px] right-[24px] z-[999] hidden md:block">
        <div
          className="group flex items-center gap-2 mb-2 cursor-pointer justify-end"
          onClick={() => handleScrollToSection("software_solutions")}
        >
          <span className="bg-[rgba(11,14,21,0.6)] backdrop-blur-[16px] pt-1 pr-2 pb-1 pl-2 rounded-[4px] font-medium text-[16px] leading-[24px] text-[rgba(0,224,127,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:block">
            Software Solutions
          </span>
          <div className="w-[8px] h-[32px] bg-[rgba(11,14,21,0.4)] border-[1px] border-[rgba(155,224,118,1)] rounded-[21px] group-hover:bg-[rgba(224,246,209,1)]"></div>
        </div>

        <div
          className="group flex items-center gap-2 mb-2 cursor-pointer justify-end"
          onClick={() => handleScrollToSection("consulting")}
        >
          <span className="bg-[rgba(11,14,21,0.6)] backdrop-blur-[16px] pt-1 pr-2 pb-1 pl-2 rounded-[4px] font-medium text-[16px] leading-[24px] text-[rgba(0,224,127,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:block">
            Consulting
          </span>
          <div className="w-[8px] h-[32px] bg-[rgba(11,14,21,0.4)] border-[1px] border-[rgba(155,224,118,1)] rounded-[21px] group-hover:bg-[rgba(224,246,209,1)]"></div>
        </div>

        <div
          className="group flex items-center gap-2 mb-2 cursor-pointer justify-end"
          onClick={() => handleScrollToSection("training_workshop")}
        >
          <span className="bg-[rgba(11,14,21,0.6)] backdrop-blur-[16px] pt-1 pr-2 pb-1 pl-2 rounded-[4px] font-medium text-[16px] leading-[24px] text-[rgba(0,224,127,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:block">
            Training & Workshop
          </span>
          <div className="w-[8px] h-[32px] bg-[rgba(11,14,21,0.4)] border-[1px] border-[rgba(155,224,118,1)] rounded-[21px] group-hover:bg-[rgba(224,246,209,1)]"></div>
        </div>

        <div
          className="group flex items-center gap-2 mb-2 cursor-pointer justify-end"
          onClick={() => handleScrollToSection("news")}
        >
          <span className="bg-[rgba(11,14,21,0.6)] backdrop-blur-[16px] pt-1 pr-2 pb-1 pl-2 rounded-[4px] font-medium text-[16px] leading-[24px] text-[rgba(0,224,127,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:block">
            News
          </span>
          <div className="w-[8px] h-[32px] bg-[rgba(11,14,21,0.4)] border-[1px] border-[rgba(155,224,118,1)] rounded-[21px] group-hover:bg-[rgba(224,246,209,1)]"></div>
        </div>

        <div
          className="group flex items-center gap-2 mb-2 cursor-pointer justify-end"
          onClick={() => handleScrollToSection("contact")}
        >
          <span className="bg-[rgba(11,14,21,0.6)] backdrop-blur-[16px] pt-1 pr-2 pb-1 pl-2 rounded-[4px] font-medium text-[16px] leading-[24px] text-[rgba(0,224,127,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:block">
            Contact
          </span>
          <div className="w-[8px] h-[32px] bg-[rgba(11,14,21,0.4)] border-[1px] border-[rgba(155,224,118,1)] rounded-[21px] group-hover:bg-[rgba(224,246,209,1)]"></div>
        </div>
      </div>

      <div className="fixed bottom-[24px] right-[0px] z-[999] hidden md:block border-t-[1px] border-b-[1px] border-l-[1px] p-[24px] rounded-tl-[24px] rounded-bl-[24px] border-solid border-[rgba(255,255,255,0.05)]">
        <div className="group relative flex items-center gap-2 mb-2 cursor-pointer justify-end">
          <span
            className=" socials-after rounded-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] bg-[rgba(255,255,255,1)] text-[rgba(33,37,41,1)] text-[12px] leading-[16px] tracking-[0.48px] opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out absolute right-[56px]"
            onClick={() => (window.location.href = "#")}
          >
            Facebook
          </span>
          <Image
            src="/socials/Facebook.svg"
            width={48}
            height={48}
            alt="Home Background"
          />
        </div>
        <div className="group relative flex items-center gap-2 mb-2 cursor-pointer justify-end">
          <span
            className=" socials-after rounded-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] bg-[rgba(255,255,255,1)] text-[rgba(33,37,41,1)] text-[12px] leading-[16px] tracking-[0.48px] opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out absolute right-[56px]"
            onClick={() => (window.location.href = "#")}
          >
            Youtube
          </span>
          <Image
            src="/socials/Social.svg"
            width={48}
            height={48}
            alt="Home Background"
          />
        </div>
        <div className="group relative flex items-center gap-2 mb-2 cursor-pointer justify-end">
          <span
            className=" socials-after rounded-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] bg-[rgba(255,255,255,1)] text-[rgba(33,37,41,1)] text-[12px] leading-[16px] tracking-[0.48px] opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out absolute right-[56px]"
            onClick={() => (window.location.href = "#")}
          >
            Linkedin
          </span>
          <Image
            src="/socials/Social-1.svg"
            width={48}
            height={48}
            alt="Home Background"
          />
        </div>
        <div className="group relative flex items-center gap-2 mb-2 cursor-pointer justify-end">
          <span
            className=" socials-after rounded-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] bg-[rgba(255,255,255,1)] text-[rgba(33,37,41,1)] text-[12px] leading-[16px] tracking-[0.48px] opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out absolute right-[56px]"
            onClick={() => (window.location.href = "#")}
          >
            X
          </span>
          <Image
            src="/socials/Social-2.svg"
            width={48}
            height={48}
            alt="Home Background"
          />
        </div>
        <div className="group relative flex items-center gap-2 mb-2 cursor-pointer justify-end">
          <span
            className=" socials-after rounded-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] bg-[rgba(255,255,255,1)] text-[rgba(33,37,41,1)] text-[12px] leading-[16px] tracking-[0.48px] opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out absolute right-[56px]"
            onClick={() => (window.location.href = "#")}
          >
            Tiktok
          </span>
          <Image
            src="/socials/Social-3.svg"
            width={48}
            height={48}
            alt="Home Background"
          />
        </div>
        <div className="group relative flex items-center gap-2 mb-2 cursor-pointer justify-end">
          <span
            className=" socials-after rounded-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] bg-[rgba(255,255,255,1)] text-[rgba(33,37,41,1)] text-[12px] leading-[16px] tracking-[0.48px] opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out absolute right-[56px]"
            onClick={() => (window.location.href = "#")}
          >
            Line
          </span>
          <Image
            src="/socials/Social-4.svg"
            width={48}
            height={48}
            alt="Home Background"
          />
        </div>
        <div className="group relative flex items-center gap-2 mb-2 cursor-pointer justify-end">
          <span
            className=" socials-after rounded-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] bg-[rgba(255,255,255,1)] text-[rgba(33,37,41,1)] text-[12px] leading-[16px] tracking-[0.48px] opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out absolute right-[56px]"
            onClick={() => (window.location.href = "#")}
          >
            Whatsapp
          </span>
          <Image
            src="/socials/Social-5.svg"
            width={48}
            height={48}
            alt="Home Background"
          />
        </div>
      </div>
    </>
  );
}
