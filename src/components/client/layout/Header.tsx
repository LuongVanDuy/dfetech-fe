"use client";

import CustomButton from "@/components/client/button";
import { MenuIcon } from "@/components/client/icons/MenuIcon";
import { SearchIcon } from "@/components/client/icons/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import Container from "../../client/layout/Container";
import { USIcon } from "@/components/client/icons/USIcon";
import LanguageDropdown from "../LanguageDropdown";
import { useParams } from "next/navigation";

export default function Header() {
  const menuHeader = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Software Solutions", href: "/software-solutions" },
    { name: "Services", href: "/services" },
    { name: "News & Events", href: "/news-events" },
  ];
  const params = useParams();

  return (
    <header id="header">
      <div className="fixed z-50 w-full bg-[#0B0E1566] backdrop-blur-[100px]">
        <Container>
          <div className="flex justify-between xl:justify-between px-[16px] py-[16px]">
            <div className="flex items-center gap-[8px] xl:gap-[48px]">
              <MenuIcon className="block xl:hidden" />
              <div
                className="w-[113px] h-[54px] cursor-pointer"
                onClick={() => (window.location.href = "/")}
              >
                <Image
                  alt="Logo"
                  src="/brands/Logo.svg"
                  width={113}
                  height={54}
                  className="w-[113px] h-[54px]"
                />
              </div>

              {menuHeader?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="text-white opacity-70 hidden xl:block"
                  >
                    <Link href={item.href}> {item.name}</Link>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-5">
              <SearchIcon />
              <LanguageDropdown 
                defaultLanguage={typeof params.locale === "string" ? params.locale : "en"}
              />

              <CustomButton>Contact Us</CustomButton>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
