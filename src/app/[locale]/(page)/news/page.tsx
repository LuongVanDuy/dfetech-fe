import BoxNormal from "@/components/box/BoxNormal";
import CustomButton from "@/components/client/button";
import { ChevronLeftIcon } from "@/components/client/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/client/icons/ChevronRightIcon";
import { EnglandIcon } from "@/components/client/icons/EnglandIcon";
import DefaultLayout from "@/components/layouts/clients/DefaultLayout";
import Image from "next/image";
import Link from "next/link";

const NewPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-[80px]">
            <div className=" relative">
              <div className="absolute inset-0 bg-black/35"></div>
              <Image
                src={"/news/new-banner.png"}
                width={630}
                height={452}
                alt="3d"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-5 pr-6">
                <EnglandIcon className="mb-3" />
                <span className="text-[14px] leading-[20px] font-[500] text-yellow-400">
                  Featured
                </span>
                <h3 className="md:text-[32px] sm:text-[18px] py-2 leading-[38px] font-[600] text-[#fff]">
                  PROFIL Version 6.4 is Released!
                </h3>
                <p className="text-start md:text-[16px] text-[14px] md:leading-[24px] sm:leading-[22px] text-[#eee]">
                  Retaining ring notches, shoulders, chamfers, fillets: The bore
                  hole details are shown and exported in the drawing area on the
                  screen, in the CAD exports by ActiveX, DXF, and STEP in 2D and
                  3D, in the print and plot functions, in the NC exports, and in
                  the roll stock management (option).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="relative flex flex-col items-center">
                <div className="absolute inset-0 bg-black/35"></div>
                <Image
                  src={"/news/new-banner.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-5">
                  <EnglandIcon className="mb-3" />
                  <span className="text-[14px] leading-[20px] font-[500] text-yellow-400">
                    Featured
                  </span>
                  <h3 className="md:text-[24px] sm:text-[14px] py-1 md:leading-[38px] leading-[20px] font-[500] text-[#fff]">
                    PROFIL Version 6.4 is Released!
                  </h3>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="absolute inset-0 bg-black/35"></div>
                <Image
                  src={"/news/new-banner.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-5">
                  <EnglandIcon className="mb-3" />
                  <span className="text-[14px] leading-[20px] font-[500] text-yellow-400">
                    Featured
                  </span>
                  <h3 className="md:text-[24px] sm:text-[14px] py-1 md:leading-[38px] leading-[20px] font-[500] text-[#fff]">
                    PROFIL Version 6.4 is Released!
                  </h3>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="absolute inset-0 bg-black/35"></div>
                <Image
                  src={"/news/new-banner.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-5">
                  <EnglandIcon className="mb-3" />
                  <span className="text-[14px] leading-[20px] font-[500] text-yellow-400">
                    Featured
                  </span>
                  <h3 className="md:text-[24px] sm:text-[14px] py-1 md:leading-[38px] leading-[20px] font-[500] text-[#fff]">
                    PROFIL Version 6.4 is Released!
                  </h3>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="absolute inset-0 bg-black/35"></div>
                <Image
                  src={"/news/new-banner.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-5">
                  <EnglandIcon className="mb-3" />
                  <span className="text-[14px] leading-[20px] font-[500] text-yellow-400">
                    Featured
                  </span>
                  <h3 className="md:text-[24px] sm:text-[14px] py-1 md:leading-[38px] leading-[20px] font-[500] text-[#fff]">
                    PROFIL Version 6.4 is Released!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px] border-r-[1px]">
            <div className="md:col-span-2  sm:col-span-10 items-center border-r-[1px]">
              <div className="flex md:flex-col flex-row sm:justify-center sm:items-center md:items-start gap-3  md:p-[50px] p-[20px]">
                <Link href="/news">
                  <span className="text-[24px] leading-[28.8px] font-[500]  hover:text-[#2C7656] cursor-pointer">
                    News
                  </span>
                </Link>
                <Link href="/news">
                  <span className="text-[24px] leading-[28.8px] font-[500] text-[#2C7656] hover:text-[#2C7656] cursor-pointer">
                    Events
                  </span>
                </Link>
                <Link href="/news">
                  <span className="text-[24px] leading-[28.8px] font-[500]  hover:text-[#2C7656] cursor-pointer">
                    Academy
                  </span>
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/home/touch-mobile.png"
                  width={215}
                  height={440}
                  alt="Picture of the author"
                  className="w-[100%] h-[100%] cursor-pointer object-fill"
                />
                <span className="absolute top-2 p-[50px] text-[32px] leading-[38px] text-[#fff] font-[600]">
                  Next-Gen Engineering Solutions
                </span>
                <button
                  type="button"
                  className="absolute bottom-10 rounded-[50px] bg-white  text-[#495057.] text-center px-[20px] py-[15px] left-[50px]"
                >
                  Contact us
                </button>
              </div>
            </div>

            <div className="md:col-span-8 sm:col-span-10 md:p-[50px] sm:p-[20px]">
              <h2 className="text-[40px] leading-[48px] mb-[50px]">All News</h2>

              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <EnglandIcon />
                  <span className="text-[32px] leading-[38px]">USA</span>
                </div>
                <div className="flex gap-[16px]">
                  <CustomButton type="icon">
                    <ChevronLeftIcon />
                  </CustomButton>
                  <CustomButton type="icon">
                    <ChevronRightIcon />
                  </CustomButton>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 auto-rows-fr border-b-0 gap-[64px]">
                {Array.from({ length: 3 }).map((_, index) => (
                  <BoxNormal
                    key={index}
                    imageSrc="/posts/post-7.svg"
                    title="Ansys Academic"
                    date="19 Jan 2022"
                    description="Utilized by Students, Educators and Researchers Across the World. The demand for graduates with engineering simulation skills is exploding. This is largely due to the widespread use of simulation across product development and optimization workflows."
                    type="normal"
                  />
                ))}
              </div>

              <div className="flex items-center border-t-[1px] pt-[50px] justify-center space-x-2 my-4 gap-5">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 flex items-center"
                >
                  <span className="mx-2">←</span> Previous
                </button>

                <div className="md:flex  sm:hidden space-x-2">
                  <button
                    type="button"
                    className="w-[64px] h-[68px] flex items-center justify-center bg-teal-700 text-white "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-[64px] h-[68px] flex items-center justify-center text-gray-700 hover:bg-gray-200 rounded"
                  >
                    2
                  </button>

                  <span className="flex items-center justify-center text-gray-700">
                    ...
                  </span>
                  <button
                    type="button"
                    className="w-[64px] h-[68px] flex items-center justify-center text-gray-700 hover:bg-gray-200 rounded"
                  >
                    8
                  </button>
                  <button
                    type="button"
                    className="w-[64px] h-[68px] flex items-center justify-center text-gray-700 hover:bg-gray-200 rounded"
                  >
                    10
                  </button>
                </div>

                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 flex items-center"
                >
                  Next <span className="mx-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewPage;
