import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "../button";
import { ArrowUpRightIcon } from "../icons/ArrowUpRight";

interface BoxSolutionProps {
  imageUrl: string;
  linkUrl?: string;
  altText?: string;
  effect?: string;
  link?: { href: string; name: string }[];
  title: string;
  content?: string;
  height?: string;
  large?: boolean;
  border?: string;
  rounded?: string;
}

const BoxSolution: React.FC<BoxSolutionProps> = ({
  imageUrl,
  linkUrl = "",
  altText = "Image",
  effect = "none",
  link,
  title,
  content = "",
  height = "104%",
  large = false,
  border = "",
  rounded = "",
}) => {
  return (
    <div className="relative w-full">
      <div className="h-auto mx-auto overflow-hidden relative">
        <div
          style={{ paddingTop: height }}
          className={`w-full bg-center bg-cover h-auto overflow-hidden relative group                         
            ${border ? `border ${border}` : ""} 
            ${rounded ? `rounded-${rounded}` : ""} `}
        >
          <a href={linkUrl} className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.2]">
            <Image src={imageUrl} alt={altText} layout="fill" objectFit="cover" className="absolute inset-0" />
          </a>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0B0E15]"></div>

          <div
            className={`absolute bottom-[64px] left-[64px] ${large ? "" : "group-hover:hidden"}`}
            style={large ? { maxWidth: "calc(50% - 112px)" } : {}}
          >
            <h3 className="text-[32px] leading-[38px] font-medium text-white uppercase mb-[16px] ">{title}</h3>

            {large && content && (
              <>
                <p className="font-normal text-[18px] leading-[26px] tracking-[0%] mb-[36px] text-[#fff]">{content}</p>
                <CustomButton className="min-w-[30px] !text-[14px] !py-[8px] !px-[20px] !font-thin">More Info</CustomButton>
              </>
            )}
          </div>

          <div
            className={`absolute rounded-[16px] bottom-[16px] right-[16px] ${large ? "w-[50%] left-[unset]" : "max-w-full left-[16px]"} 
            bg-[#0B0E1599] transition-all duration-300 transform translate-y-[16px] opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto border border-solid border-[#FFFFFF0D]`}
          >
            <div className={`flex flex-col gap-[18px] ${large ? "p-[48px]" : "p-[24px]"}`}>
              {!large && (
                <h3 className="text-[24px] font-medium text-white uppercase">
                  <Link href={"#"} className="flex justify-between items-center ">
                    <span>{title}</span>
                    <ArrowUpRightIcon className="w-[34px] h-[34px] text-white" />
                  </Link>
                </h3>
              )}
              {link?.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={item?.href}
                  className={`${
                    large ? "flex items-center gap-[8px] font-[500] text-[24px] leading-[28.8px] text-[#fff]" : "text-[#22AB42]"
                  } hover:text-[#22AB42] hover:transform hover:translate-x-2 transition-transform duration-300`}
                >
                  {large && <ArrowUpRightIcon />}
                  {item?.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSolution;
