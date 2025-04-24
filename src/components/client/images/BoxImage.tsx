import Image from "next/image";
import React from "react";

interface BoxImageProps {
  imageUrl: string;
  height?: string;
  linkUrl?: string;
  altText?: string;
  effect?: "zoom" | "none";
}

const BoxImage: React.FC<BoxImageProps> = ({
  imageUrl,
  height = "100%",
  linkUrl = "",
  altText = "Image",
  effect = "none",
}) => {
  return (
    <div className="h-auto mx-auto overflow-hidden relative">
      <div
        className={`bg-center bg-cover h-auto overflow-hidden relative transition-transform duration-300 ${
          effect === "zoom" ? "hover:scale-[1.2]" : ""
        }`}
        style={{ paddingTop: height }}
      >
        <a href={linkUrl} className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </a>
      </div>
    </div>
  );
};

export default BoxImage;
