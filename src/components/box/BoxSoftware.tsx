import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "../button";

interface BoxSoftwareProps {
  imageUrl: string;
  height?: string;
  linkUrl?: string;
  altText?: string;
  effect?: "zoom" | "none";
  type?: "large" | "small";
  link?: any;
  title?: any;
  description?: string;
}

const BoxSoftware: React.FC<BoxSoftwareProps> = ({
  imageUrl,
  height = "auto",
  linkUrl = "#",
  altText = "Software preview",
  effect = "none",
  link = [],
  type = "large",
  title = "",
  description = "",
}) => {
  return (
    <div
      className="relative mx-auto overflow-hidden rounded-xl shadow-lg w-full"
      style={{ height }} // Optional override for custom height
    >
      <div className="relative group h-full">
        {/* Aspect Ratio Container */}
        <div
          className="relative w-full pb-[53.33%]"
          style={{ aspectRatio: "15 / 8" }}
        >
          <Link href={linkUrl} className="block absolute inset-0">
            <Image
              src={imageUrl}
              alt={altText}
              width={1500}
              height={800}
              className={`object-cover w-full h-full transition-transform duration-300 ${
                effect === "zoom" ? "group-hover:scale-110" : ""
              }`}
              priority={true}
            />
          </Link>

          <div>
            <div
              className={`absolute flex flex-col gap-5 bottom-[50px] left-[50px] 
                    text-white ${
                      type === "large" ? "w-2/5" : "group-hover:hidden "
                    }`}
            >
              <h3 className=" text-5xl leading-[38px] font-medium ">
                {" "}
                {title}
              </h3>
              {type === "large" && (
                <>
                  <p className="text-lg opacity-80">{description}</p>
                  <CustomButton>More Info</CustomButton>
                </>
              )}
            </div>
          </div>

          <div
            className={`absolute rounded-xl bottom-5  bg-[#0B0E1599] transition-all duration-300 transform translate-y-5 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto ${
              type === "large" ? "w-1/2 right-5" : "left-5 right-5"
            } `}
          >
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-2xl font-medium text-white">{title}</h3>
              {link?.map((item: any, index: number) => (
                <Link key={index} className="text-[#2C7656]" href={item?.href}>
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

export default BoxSoftware;
