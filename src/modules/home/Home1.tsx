import CustomButton from "@/components/CustomButton";
import { ChevronLeftIcon } from "@/Icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/Icons/ChevronRightIcon";
import { DegressIcon } from "@/Icons/DegressIcon";
import { HelpCircleIcon } from "@/Icons/HelpCircleIcon";
import { LayerIcon } from "@/Icons/LayerIcon";
import { PlayCircleIcon } from "@/Icons/PlayCircleIcon";
import Image from "next/image";

export default function Home1() {
  return (
    <div>
      <div>
        <div
          className="flex xl:hidden text-white flex-col items-center gap-5 pt-[100px] pb-[50px] text-center"
          style={{
            background: "linear-gradient(to bottom, #38CD60, #0E221C)",
          }}
        >
          <p className="text-5xl">Dyna Forming Engineering</p>
          <p className="text-5xl">& Technology</p>
          <p className="text-lg opacity-70 mt-5">
            Next-Gen Engineering Solutions
          </p>
          <CustomButton type="contact-home">Contact Us →</CustomButton>
        </div>

        <div className="relative w-full">
          <Image
            src="/home/home-background.jpg"
            width={1920}
            height={1302}
            objectFit="cover"
            alt="Home Background"
          />
          <div className="absolute top-0 left-0 w-full h-full mix-blend-lighten">
            <Image
              src="/home/body-background.png"
              width={1920}
              height={1302}
              objectFit="cover"
              className="h-full"
              alt="Body Background"
            />
          </div>

          <div className="absolute hidden xl:block top-[11%] text-white w-full flex justify-center">
            <div className="flex flex-col items-center gap-5">
              <p className="text-5xl">Dyna Forming Engineering</p>
              <p className="text-5xl">& Technology</p>
              <p className="text-lg opacity-70 mt-5">
                Next-Gen Engineering Solutions
              </p>
              <CustomButton type="contact-home">Contact Us →</CustomButton>
            </div>
          </div>

          <div className="absolute hidden xl:block  bottom-0 text-white w-full flex justify-center bg-[#0B0E1566]">
            <div className="flex flex-col items-center gap-5 py-10">
              <div className="flex flex-col items-center gap-2">
                <p className="text-5xl">Engineers turn dream into reality</p>
                <p className="text-lg opacity-70 ">- Hayao Miyazaki-</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg">Trusted by Leaders across Industries</p>
                <div className="flex gap-5">
                  <Image
                    src={"/brands/apm.png"}
                    width={133}
                    height={67}
                    alt="brand"
                  />
                  <Image
                    src={"/brands/vinfast.png"}
                    width={133}
                    height={67}
                    alt="brand"
                  />
                  <Image
                    src={"/brands/dso.png"}
                    width={133}
                    height={67}
                    alt="brand"
                  />
                  <Image
                    src={"/brands/dsta.png"}
                    width={133}
                    height={67}
                    alt="brand"
                  />
                  <Image
                    src={"/brands/keppel.png"}
                    width={133}
                    height={67}
                    alt="brand"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex xl:hidden  flex-col items-center text-center text-white gap-5 py-10"
          style={{
            background: "linear-gradient(to bottom, #0E221C, #38CD60,)",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl">Engineers turn dream into reality</p>
            <p className="text-lg opacity-70 ">- Hayao Miyazaki-</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg">Trusted by Leaders across Industries</p>
            <div className="flex gap-5">
              <Image
                src={"/brands/apm.png"}
                width={133}
                height={67}
                alt="brand"
              />
              <Image
                src={"/brands/vinfast.png"}
                width={133}
                height={67}
                alt="brand"
              />
              <Image
                src={"/brands/dso.png"}
                width={133}
                height={67}
                alt="brand"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(to bottom, #0E1C1D, #0B1115)",
        }}
      >
        <div className="flex justify-between py-10 mx-5 md:mx-20">
          <p className="text-white text-4xl">Software Solutions</p>
          <CustomButton className="hidden md:block">See all →</CustomButton>
        </div>

        <div className="flex">
          <div>
            <Image
              src={"/home/Solution-2.png"}
              width={600}
              height={622}
              alt="Solution"
            />
          </div>

          <div className="hidden md:block">
            <Image
              src={"/home/Solution-1.png"}
              width={600}
              height={622}
              alt="Solution"
            />
          </div>

          <div className="hidden md:block">
            <Image
              src={"/home/Solution-3.png"}
              width={600}
              height={622}
              alt="Solution"
            />
          </div>
        </div>

        <div className="flex justify-between md:justify-center items-center py-5">
          <div className="flex gap-2">
            <CustomButton type="icon">
              <ChevronLeftIcon />
            </CustomButton>
            <CustomButton type="icon">
              <ChevronRightIcon />
            </CustomButton>
          </div>

          <CustomButton className="block md:hidden">See all →</CustomButton>
        </div>

        <div className="bg-[#0B0E1566] py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10  text-white mx-16">
            <div className="order-last md:order-first flex justify-center items-center">
              <div className="flex flex-col gap-3">
                <p className="text-[#2C7656]">Case Study</p>
                <p className="text-4xl">Computer-Aided Engineering</p>
                <p className="text-[#ADB5BD]">
                  Using 3DCS, we help industries minimize production variation
                  through precise dimensional analysis, ensuring accuracy in
                  every step of the manufacturing process.
                </p>

                <CustomButton className="mt-5">Explore →</CustomButton>
              </div>
            </div>
            <div className="order-first md:order-last">
              <div className="flex md:flex-col-reverse flex-col">
                <div className="mt-5">
                  <Image
                    src={"/home/3D.png"}
                    width={630}
                    height={452}
                    alt="3d"
                  />
                </div>

                <div className="flex justify-between">
                  <div>
                    <div className="flex justify-center gap-2 bg-[#FFFFFF0D] p-2 border-[1px] border-[#FFFFFF0D] rounded-full">
                      <PlayCircleIcon />
                      <HelpCircleIcon />
                    </div>
                  </div>
                  <DegressIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mx-16 text-white py-10">
            <div className="flex flex-col gap-3">
              <p className="text-4xl">Consulting</p>
              <p className="text-[#ADB5BD]">
                DFETECH's goal is to equip our customers with the necessary
                knowledge and management solutions to today's challenges.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-white ">
            <div className="relative w-full h-[622px]">
              <Image
                src="/home/shuttersock-1.jpeg"
                alt="Sheet Stamping Engineering"
                layout="fill"
                objectFit="cover"
                className="opacity-60"
              />
              <div className="absolute bottom-10 left-10 flex flex-col gap-2 z-10">
                <CustomButton type="icon" className="p-3">
                  <LayerIcon />
                </CustomButton>
                <p className="text-2xl">Sheet Stamping Engineering</p>
              </div>
            </div>

            <div className="relative w-full h-[622px]">
              <Image
                src="/home/shuttersock-2.jpeg"
                alt="Sheet Stamping Engineering"
                layout="fill"
                objectFit="cover"
                className="opacity-60"
              />
              <div className="absolute bottom-10 left-10 flex flex-col gap-2 z-10">
                <CustomButton type="icon" className="p-3">
                  <LayerIcon />
                </CustomButton>
                <p className="text-2xl">Advanced CAE Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
