import { MoreIcon } from "@/Icons/MoreIcon";
import Image from "next/image";

import React from "react";

interface BoxNormalProps {
  title: string;
  date: string;
  imageSrc: string;
  description: string;
}

const BoxNormal: React.FC<BoxNormalProps> = ({
  title,
  date,
  imageSrc,
  description,
}) => {
  return (
    <article className="overflow-hidden">
      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt={title}
        className="cursor-pointer"
      />
      <div className="py-4">
        <p className="text-sm text-green-600">{date}</p>
        <div className="flex items-center justify-between cursor-pointer">
          <h2 className="text-lg font-semibold mt-1">{title}</h2>
          <MoreIcon className="cursor-pointer" />
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
      </div>
    </article>
  );
};

export default BoxNormal;
