import Image from "next/image";
import CustomButton from "../button";
import { LayerIcon } from "@/Icons/LayerIcon";

interface BoxConsultingProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
  listItems: string[];
}

const BoxConsulting: React.FC<BoxConsultingProps> = ({
  imageSrc,
  imageAlt,
  text,
  listItems,
}) => {
  return (
    <div className="relative w-full h-[350px] xl:h-[622px] group">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,14,21,0)] to-[#0B0E15] pointer-events-none z-10" />

      <Image
        src={imageSrc}
        alt={imageAlt}
        style={{ objectFit: "cover" }}
        fill
      />

      <div className="absolute z-10 bottom-[48px] left-[16px] md:bottom-10 md:left-10 flex flex-col gap-2 z-10 transition-opacity duration-500 group-hover:opacity-0">
        <CustomButton type="icon consulting" className="p-3">
          <LayerIcon />
        </CustomButton>
        <h3 className="text-[24px] leading-[28.8px] md:text-[32px] md:leading-[38px]">
          {text}
        </h3>
      </div>

      <div className="absolute z-20 bottom-6 left-6 w-full max-w-[calc(100%-44px)] p-6 bg-[rgba(11,14,21,0.6)] rounded-[16px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h3 className="font-semibold text-[24px] leading-[28.8px] mb-[24px]">
          {text}
        </h3>
        <div>
          {listItems.map((item, index) => (
            <p
              key={index}
              className="py-2 font-normal text-[16px] leading-[24px] border-b border-white/5 hover:transform hover:translate-x-2 transition-transform duration-300"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxConsulting;
