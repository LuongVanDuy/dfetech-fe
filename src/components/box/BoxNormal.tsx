import BoxImage from "@/components/images/BoxImage";
import { MoreIcon } from "@/Icons/MoreIcon";

import React from "react";

interface BoxNormalProps {
  title: string;
  date: string;
  imageSrc: string;
  description: string;
  type?: "normal" | "large";
}

const BoxNormal: React.FC<BoxNormalProps> = ({
  title,
  date,
  imageSrc,
  description,
  type = "normal",
}) => {
  return (
    <article className="overflow-hidden">
      <BoxImage imageUrl={imageSrc} height="61.52%" effect="zoom" />
      <div className="py-4">
        <p className="text-sm text-green-600 mb-2">{date}</p>
        <div className="flex items-center justify-between cursor-pointer mb-3">
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
