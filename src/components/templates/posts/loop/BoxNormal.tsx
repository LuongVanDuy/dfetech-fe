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
        <p className="text-sm text-green-600">{date}</p>
        <div className="flex items-center justify-between cursor-pointer">
          <h2
            className={`font-[400] mt-1 ${
              type === "large" ? "text-[32px]" : "text-lg"
            }`}
          >
            {title}
          </h2>
          <MoreIcon className="cursor-pointer" />
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
      </div>
    </article>
  );
};

export default BoxNormal;
