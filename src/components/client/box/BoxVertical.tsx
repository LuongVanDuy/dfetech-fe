import React from "react";

import CustomButton from "@/components/client/button";
import { TimeIcon } from "@/components/client/icons/TimeIcon";
import { DateIcon } from "@/components/client/icons/DateIcon";
import BoxImage from "@/components/client/images/BoxImage";

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
      <div className="lg:col-span-3">
        <BoxImage imageUrl={imageSrc} height="68%" />
      </div>
      <div className=" lg:col-span-7 flex flex-col justify-between">
        <div>
          <p className="text-sm text-[#2C7656] mb-2">{category}</p>
          <h3 className="text-[24px] leading-[28.8px] mb-3 cursor-pointer sm:line-clamp-2 md:line-clamp-3">
            <a
              href=""
              className="text-[#212529] hover:text-[rgba(44,118,86,1)] transition-colors duration-300"
            >
              {title}
            </a>
          </h3>
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
