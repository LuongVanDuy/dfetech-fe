import BoxImage from "@/components/images/BoxImage";
import { MoreIcon } from "@/Icons/MoreIcon";

import React from "react";
import CustomButton from "../button";

interface BoxNormalProps {
  title: string;
  date: string;
  imageSrc: string;
  description?: string;
  icon?: any;
  type?: "normal" | "large" | "rounded";
  className?: string;
}

const BoxNormal: React.FC<BoxNormalProps> = ({
  title,
  date,
  imageSrc,
  description,
  icon,
  type = "normal",
  className,
}) => {
  return (
    <article className={`overflow-hidden ${className}`}>
      <BoxImage imageUrl={imageSrc} height="61.52%" effect="zoom" />
      <div
        className={`relative py-4 ${
          type === "rounded" && "!p-10 bg-[#10131A]"
        }`}
      >
        {icon && (
          <CustomButton
            className="!absolute top-[-15%] right-[15%]"
            type="icon"
          >
            {icon}
          </CustomButton>
        )}
        <p className="text-sm text-green-600">{date}</p>
        <div className="flex items-center justify-between cursor-pointer">
          <h3
            className={`font-[600] mt-1 ${
              type === "large"
                ? "text-[32px] leading-[38px]"
                : "text-[24px] leading-[28.8px]"
            }`}
          >
            <a
              href=""
              className="hover:text-[rgba(44,118,86,1)] transition-colors duration-300"
            >
              {title}
            </a>
          </h3>
          <MoreIcon className="cursor-pointer" />
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
      </div>
    </article>
  );
};

export default BoxNormal;
