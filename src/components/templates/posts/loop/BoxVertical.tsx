import React from "react";
import Image from "next/image";

import CustomButton from "@/components/CustomButton";
import { TimeIcon } from "@/Icons/TimeIcon";
import { DateIcon } from "@/Icons/DateIcon";

interface BoxVerticalProps {
  imageSrc: string;
  category: string;
  title: string;
  time: string;
  date: string;
}

const BoxVertical: React.FC<BoxVerticalProps> = ({
  imageSrc,
  category,
  title,
  time,
  date,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
      <div className="text-white lg:col-span-4">
        <Image
          src={imageSrc}
          width={215}
          height={150}
          alt={title}
          className="w-[100%] cursor-pointer"
        />
      </div>
      <div className="text-white lg:col-span-6 flex flex-col justify-between">
        <div>
          <p className="text-sm text-[#2C7656]">{category}</p>
          <h3 className="text-[#000] cursor-pointer">{title}</h3>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-700">
            <div className="flex items-center space-x-2">
              <TimeIcon className="w-5 h-5 text-gray-500" />
              <span className="text-[14px] text-[#495057]">{time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <DateIcon className="w-5 h-5 text-gray-500" />
              <span className="text-[14px] text-[#495057]">{date}</span>
            </div>
          </div>
          <CustomButton className="min-w-[30px] !text-[14px] !py-[8px] !px-[20px] !font-thin">
            Register
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default BoxVertical;
