import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BoxSolutionProps {
  imageUrl: string;
  height?: string;
  linkUrl?: string;
  altText?: string;
  effect?: "zoom" | "none";
  link?: any;
  title?: any;
}

const BoxSolution: React.FC<BoxSolutionProps> = ({
  imageUrl,
  height = "100%",
  linkUrl = "",
  altText = "Image",
  effect = "none",
  link,
  title,
}) => {
  return (
    <div className="h-auto mx-auto overflow-hidden relative">
      <div
        className="bg-center bg-cover h-auto overflow-hidden relative group"
        style={{ paddingTop: height }}
      >
        <a
          href={linkUrl}
          className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.2]"
        >
          <Image
            src={imageUrl}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </a>

        <h3
          className={`absolute bottom-[10%] left-[10%] group-hover:hidden 
              text-[32px] leading-[38px] font-medium text-white`}
        >
          {title}
        </h3>

        <div
          className={`absolute rounded-xl bottom-5 left-5 right-5 bg-[#0B0E1599] transition-all duration-300 transform translate-y-5 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto`}
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
  );
};

export default BoxSolution;
