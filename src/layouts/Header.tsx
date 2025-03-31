"use client";

import CustomButton from "@/components/CustomButton";
import { EnglandIcon } from "@/Icons/EnglandIcon";
import { MenuIcon } from "@/Icons/MenuIcon";
import { SearchIcon } from "@/Icons/SearchIcon";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const menuHeader = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Software Solutions", href: "/software-solutions" },
    { name: "Services", href: "/services" },
    { name: "News & Events", href: "/news-events" },
  ];

  return (
    <div className="fixed z-50 w-full bg-[#0B0E1566] ">
      <div className="flex justify-between xl:justify-around p-5">
        <div className="flex items-center gap-5">
          <MenuIcon className="block xl:hidden" />
          <div className="w-[60px] h-[30px] md:w-[113px] md:h-[54px]">
            <Image alt="Logo" src="/brands/Logo.svg" width={113} height={54} />
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
          <EnglandIcon />

          <CustomButton>Contact Us</CustomButton>
        </div>
      </div>
    </div>
  );
}
