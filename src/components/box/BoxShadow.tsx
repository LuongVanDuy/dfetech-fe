import { FavoriteChartIcon } from "@/Icons/FavoriteChart";
import Image from "next/image";
import CustomButton from "../button";

export default function BoxShadow({
  title,
  description,
  image,
  icon,
  type,
}: any) {
  return (
    <div
      className="h-full border-[1px] border-[#9BE076]  overflow-hidden rounded-[24px]"
      style={{
        backdropFilter: "blur(48px)",
        background: "linear-gradient(to right, #18382F, #0B1115)",
        boxShadow:
          "0px 0px 28px 0px #78CF4C66, 0px 0px 80px 4px #78CF4C1A, 0px 0px 64px 0px #78CF4C4D inset",
      }}
    >
      <div className={`grid ${image ? "grid-cols-2" : "grid-cols-1"}`}>
        <div
          className={`flex p-10 gap-5 ${
            image || type === "col" ? "flex-col" : ""
          }`}
        >
          <CustomButton type="icon" className="!w-[80px] !h-[80px] p-3">
            {icon}
          </CustomButton>
          <div className="flex flex-col gap-3">
            <p className="text-xl">{title}</p>
            <ul className="space-y-3 list-disc text-[#ADB5BD] text-sm ">
              {description.map((item: any, index: any) => (
                <li key={index} className="flex items-start gap-3">
                  {description.length > 1 && "•"} <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {image && (
          <div className="w-full h-full">
            <Image
              src={image}
              width={776}
              height={540}
              alt="shuttersock"
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
