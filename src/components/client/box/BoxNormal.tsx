import BoxImage from "@/components/client/images/BoxImage";
import { MoreIcon } from "@/components/client/icons/MoreIcon";

import React from "react";
import CustomButton from "../button";

interface BoxNormalProps {
  title: string;
  date?: string;
  imageSrc: string;
  description?: string;
  icon?: any;
  type?: "normal" | "large" | "rounded" | "ansys";
  postType?: string;
  className?: string;
}

const BoxNormal: React.FC<BoxNormalProps> = ({ title, date, imageSrc, description, icon, type = "normal", postType, className }) => {
  return (
    <article className={`overflow-hidden ${className}`}>
      <BoxImage imageUrl={imageSrc} height="61.52%" effect="zoom" rounded={postType === "ansys" ? "[16px]" : ""} />

      <div className={`relative py-[16px] ${type === "rounded" && "!p-10 bg-[#10131A]"}`}>
        {icon && (
          <CustomButton className={`!absolute top-[-15%] right-[15%] rounded-full`} type="icon">
            {icon}
          </CustomButton>
        )}
        <p className="text-sm text-green-600">{date}</p>
        <div className="flex  justify-between cursor-pointer gap-[16px]">
          <h3 className={`font-[600] text-[#212529] ${type === "large" ? "text-[32px] leading-[38px]" : "text-[24px] leading-[28.8px]"}`}>
            <a
              href=""
              className={`${postType === "ansys" ? "text-[#fff]" : "text-[#212529]"} hover:text-[rgba(44,118,86,1)] transition-colors duration-300`}
            >
              {title}
            </a>
          </h3>
          <MoreIcon
            className="cursor-pointer"
            fill={postType === "ansys" ? "#2C7656" : "#101828"}
            width={postType === "ansys" ? 20 : 13}
            height={postType === "ansys" ? 20 : 12}
          />
        </div>
        <p className={`${postType === "ansys" ? "text-[#ADB5BD]" : "text-gray-600"} mt-[16px] line-clamp-2`}>{description}</p>{" "}
      </div>
    </article>
  );
};

export default BoxNormal;
