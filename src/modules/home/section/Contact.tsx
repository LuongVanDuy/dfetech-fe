import CustomButton from "@/components/button";
import MainTitle from "@/components/title/MainTitle";
import Image from "next/image";
import React from "react";

const Contact = (props: any) => {
  return (
    <section className="touch-section min-h-[600px] lg:px-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center">
          <Image
            src="/home/touch-mobile.png"
            width={215}
            height={440}
            alt="Picture of the author"
            className="w-[100%] cursor-pointer lg:hidden md:block"
          />
        </div>
        <div className="md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]mb-[20px] text-start">
          <MainTitle
            title="Get in touch with us"
            description="Drop us a note - we look forward to hearing from you"
          />
          <form className="mt-8 flex flex-col  gap-9">
            <div className="relative">
              <select
                title="country"
                aria-label="country"
                required
                className="w-full border-b-[2px] border-[#333333] pb-2 bg-[#000] pt-4 outline-none peer text-white
                  peer-invalid:border-red-500 appearance-none"
              >
                <option value=""></option>
                <option value="us">Salutation 1</option>
                <option value="uk">Salutation 2</option>
                <option value="vn">Salutation 3</option>
              </select>
              <label
                className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
              >
                Salutation *
              </label>
            </div>
            <div className="flex lg:flex-row md:flex-col gap-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  title="first_name"
                  aria-label="first_name"
                  required
                  autoComplete="off"
                  className="w-full border-b pb-1 border-[#333333]  bg-transparent pt-4 outline-none peer text-white
                  peer-invalid:border-red-500"
                />
                <label
                  htmlFor="first_name"
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  First name *
                </label>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  title="first_name"
                  aria-label="first_name"
                  required
                  autoComplete="off"
                  className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
                  peer-invalid:border-red-500"
                />
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  First name *
                </label>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col gap-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  title="email"
                  aria-label="Email"
                  required
                  autoComplete="off"
                  className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
                  peer-invalid:border-red-500"
                />
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  Email address *
                </label>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  title="contact number"
                  aria-label="contact number"
                  required
                  autoComplete="off"
                  className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
                  peer-invalid:border-red-500"
                />
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  Contact number *
                </label>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col gap-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  title="organization"
                  aria-label="organization"
                  required
                  autoComplete="off"
                  className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
                  peer-invalid:border-red-500"
                />
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  Organization *
                </label>
              </div>
              <div className="relative flex-1">
                <select
                  title="job"
                  aria-label="job"
                  required
                  className="w-full border-b-[2px] border-[#333333] pb-2 bg-[#000] pt-4 outline-none peer text-white
                  peer-invalid:border-red-500 appearance-none"
                >
                  <option value=""></option>
                  <option value="us">Salutation 1</option>
                  <option value="uk">Salutation 2</option>
                  <option value="vn">Salutation 3</option>
                </select>
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  Job Level *
                </label>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col gap-6">
              <div className="relative flex-1">
                <select
                  title="job"
                  aria-label="job"
                  required
                  className="w-full border-b-[2px] border-[#333333] pb-2 bg-[#000] pt-4 outline-none peer text-white
                  peer-invalid:border-red-500 appearance-none"
                >
                  <option value=""></option>
                  <option value="us">Yes</option>
                  <option value="uk">No</option>
                </select>
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  Are you a Students? *
                </label>
              </div>

              <div className="relative flex-1">
                <select
                  title="country"
                  aria-label="country"
                  required
                  className="w-full border-b-[2px] border-[#333333] pb-2 bg-[#000] pt-4 outline-none peer text-white
                  peer-invalid:border-red-500 appearance-none"
                >
                  <option value=""></option>
                  <option value="us">Thái Lan</option>
                  <option value="uk">Việt Nam</option>
                  <option value="vn">Singapore</option>
                </select>
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  Country/Region *
                </label>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col gap-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  title="city"
                  aria-label="city"
                  required
                  autoComplete="off"
                  className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
                  peer-invalid:border-red-500"
                />
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  City *
                </label>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  title="postal_code"
                  aria-label="postal_code"
                  required
                  autoComplete="off"
                  className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
                  peer-invalid:border-red-500"
                />
                <label
                  className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                >
                  PostalCode *
                </label>
              </div>
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                title="subject"
                aria-label="subject"
                required
                autoComplete="off"
                className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer text-white
                  peer-invalid:border-red-500"
              />
              <label
                className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
              >
                Subject *
              </label>
            </div>
            <div className="relative">
              <textarea
                title="message"
                aria-label="message"
                required
                autoComplete="off"
                className="w-full border-b border-[#333333] pb-1 bg-transparent pt-4 outline-none peer resize-none text-white
                  peer-invalid:border-red-500"
                rows={5}
              ></textarea>
              <label
                className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                  peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                  peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
              >
                Message *
              </label>
            </div>
            <CustomButton
              type="primary"
              className="min-w-[30px] !text-[14px] !py-[10px] !px-[20px] !font-thin my-[30px] shadow-[0px_0px_3px_rgba(255,255,255,0.8)]"
            >
              Submit
            </CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact };
