"use client";

import CustomButton from "@/components/button";
import { ChevronLeftIcon } from "@/Icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/Icons/ChevronRightIcon";
import { EnglandIcon } from "@/Icons/EnglandIcon";
import Container from "@/layouts/Container";
import Image from "next/image";
import { useState } from "react";

export default function MeetOur() {
  const [selected, setSelected] = useState("Vietnam");
  const countries = ["Thailand", "Vietnam", "Malaysia"];

  return (
    <section>
      <div className="bg-white">
        <Container>
          <div className="grid grid-cols-12 text-black">
            <div className="col-span-4 h-full">
              <div className="p-10 border-[#0B0E151A] border-x-[1px] h-full">
                <h2 className="text-5xl">
                  Meet our <br /> Expert team
                </h2>
                <p className="mt-5 text-[#495057]">
                  Meet our team of experts. Our dedicated professionals bring
                  years of experience and specialized knowledge to provide you
                  with the highest quality service and support.
                </p>

                <div>
                  <p>Request a meeting with our Expert</p>
                  <div className="flex flex-col gap-2 mt-5 mb-7">
                    <label className="text-gray-500 uppercase text-sm font-semibold">
                      COUNTRY
                    </label>
                    <div className="flex items-center gap-6">
                      {countries.map((country) => (
                        <label
                          key={country}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="country"
                            value={country}
                            checked={selected === country}
                            onChange={() => setSelected(country)}
                            className="hidden"
                          />
                          <div
                            className={`w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ${
                              selected === country ? "border-green-700" : ""
                            }`}
                          >
                            {selected === country && (
                              <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                            )}
                          </div>
                          <span className="text-gray-700">{country}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        title="first_name"
                        aria-label="first_name"
                        required
                        autoComplete="off"
                        className="w-full border-b-[4px] pb-1 border-[#0B0E151A]  bg-transparent pt-4 outline-none peer text-white
                    peer-invalid:border-red-500"
                      />
                      <label
                        htmlFor="first_name"
                        className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                    peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                    peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                      >
                        Your name
                      </label>
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="text"
                        title="first_name"
                        aria-label="first_name"
                        required
                        autoComplete="off"
                        className="w-full border-b-[4px] pb-1 border-[#0B0E151A]  bg-transparent pt-4 outline-none peer text-white
                    peer-invalid:border-red-500"
                      />
                      <label
                        htmlFor="first_name"
                        className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                    peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                    peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                      >
                        Phone number
                      </label>
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="text"
                        title="first_name"
                        aria-label="first_name"
                        required
                        autoComplete="off"
                        className="w-full border-b-[4px] pb-1 border-[#0B0E151A]  bg-transparent pt-4 outline-none peer text-white
                    peer-invalid:border-red-500"
                      />
                      <label
                        htmlFor="first_name"
                        className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                    peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                    peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                      >
                        Work email
                      </label>
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="text"
                        title="first_name"
                        aria-label="first_name"
                        required
                        autoComplete="off"
                        className="w-full border-b-[4px] pb-1 border-[#0B0E151A]  bg-transparent pt-4 outline-none peer text-white
                    peer-invalid:border-red-500"
                      />
                      <label
                        htmlFor="first_name"
                        className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                    peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                    peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                      >
                        Business name
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-5 mb-7">
                    <label className="text-gray-500 uppercase text-sm font-semibold">
                      Stage of life
                    </label>
                    <div className="flex flex-col gap-2">
                      {countries.map((country) => (
                        <label
                          key={country}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="country"
                            value={country}
                            checked={selected === country}
                            onChange={() => setSelected(country)}
                            className="hidden"
                          />
                          <div
                            className={`w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ${
                              selected === country ? "border-green-700" : ""
                            }`}
                          >
                            {selected === country && (
                              <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                            )}
                          </div>
                          <span className="text-gray-700">{country}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-5 mb-7">
                    <label className="text-gray-500 uppercase text-sm font-semibold">
                      Annual marketing budget
                    </label>
                    <div className="flex flex-col gap-2">
                      {countries.map((country) => (
                        <label
                          key={country}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="country"
                            value={country}
                            checked={selected === country}
                            onChange={() => setSelected(country)}
                            className="hidden"
                          />
                          <div
                            className={`w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ${
                              selected === country ? "border-green-700" : ""
                            }`}
                          >
                            {selected === country && (
                              <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                            )}
                          </div>
                          <span className="text-gray-700">{country}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-5 mb-7">
                    <label className="text-gray-500 uppercase text-sm font-semibold">
                      requirements
                    </label>
                    <div className="flex flex-col gap-2">
                      {countries.map((country) => (
                        <label
                          key={country}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="country"
                            value={country}
                            checked={selected === country}
                            onChange={() => setSelected(country)}
                            className="hidden"
                          />
                          <div
                            className={`w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ${
                              selected === country ? "border-green-700" : ""
                            }`}
                          >
                            {selected === country && (
                              <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                            )}
                          </div>
                          <span className="text-gray-700">{country}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="relative flex-1">
                    <input
                      type="text"
                      title="first_name"
                      aria-label="first_name"
                      required
                      autoComplete="off"
                      className="w-full border-b-[4px] pb-1 border-[#0B0E151A]  bg-transparent pt-4 outline-none peer text-white
                    peer-invalid:border-red-500"
                    />
                    <label
                      htmlFor="first_name"
                      className="absolute font-[300] left-0 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300
                    peer-focus:top-0 peer-focus:text-[15px] peer-focus:text-gray-600
                    peer-valid:top-0 peer-valid:text-[15px] peer-valid:text-gray-600"
                    >
                      Tell us about your business
                    </label>
                  </div>

                  <CustomButton className="mt-10">Submit</CustomButton>
                </div>
              </div>
            </div>
            <div className="col-span-8 ">
              <div>
                <div className="p-5 border-b-[1px] flex justify-between">
                  <div className="flex items-center gap-3">
                    <EnglandIcon />
                    <p className="text-2xl font-semibold">Thailand (4)</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <CustomButton type="icon">
                      <ChevronLeftIcon />
                    </CustomButton>
                    <CustomButton type="icon">
                      <ChevronRightIcon />
                    </CustomButton>
                  </div>
                </div>
                <div className="grid grid-cols-3 border-t-[1px]">
                  <div className="p-10 bg-[#F8F9FA] border-x-[1px]">
                    <Image
                      alt=""
                      src={"/home/Avatar.png"}
                      width={148}
                      height={148}
                      className="rounded-full"
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      Mr. Chin Chien Chen
                    </h3>
                    <p className="text-[#2C7656] mt-1">1st Contact</p>
                    <p className="mt-3 text-base text-[#495057]">Thailand</p>
                  </div>
                  <div className="p-10 bg-[#F8F9FA] border-x-[1px]">
                    <Image
                      alt=""
                      src={"/home/Avatar.png"}
                      width={148}
                      height={148}
                      className="rounded-full"
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      Mr. Chin Chien Chen
                    </h3>
                    <p className="text-[#2C7656] mt-1">1st Contact</p>
                    <p className="mt-3 text-base text-[#495057]">Thailand</p>
                  </div>
                  <div className="p-10 bg-[#F8F9FA] border-x-[1px]">
                    <Image
                      alt=""
                      src={"/home/Avatar.png"}
                      width={148}
                      height={148}
                      className="rounded-full"
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      Mr. Chin Chien Chen
                    </h3>
                    <p className="text-[#2C7656] mt-1">1st Contact</p>
                    <p className="mt-3 text-base text-[#495057]">Thailand</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-5 border-b-[1px] flex justify-between">
                  <div className="flex items-center gap-3">
                    <EnglandIcon />
                    <p className="text-2xl font-semibold">Thailand (4)</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <CustomButton type="icon">
                      <ChevronLeftIcon />
                    </CustomButton>
                    <CustomButton type="icon">
                      <ChevronRightIcon />
                    </CustomButton>
                  </div>
                </div>
                <div className="grid grid-cols-3 border-t-[1px]">
                  <div className="p-10 bg-[#F8F9FA] border-x-[1px]">
                    <Image
                      alt=""
                      src={"/home/Avatar.png"}
                      width={148}
                      height={148}
                      className="rounded-full"
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      Mr. Chin Chien Chen
                    </h3>
                    <p className="text-[#2C7656] mt-1">1st Contact</p>
                    <p className="mt-3 text-base text-[#495057]">Thailand</p>
                  </div>
                  <div className="p-10 bg-[#F8F9FA] border-x-[1px]">
                    <Image
                      alt=""
                      src={"/home/Avatar.png"}
                      width={148}
                      height={148}
                      className="rounded-full"
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      Mr. Chin Chien Chen
                    </h3>
                    <p className="text-[#2C7656] mt-1">1st Contact</p>
                    <p className="mt-3 text-base text-[#495057]">Thailand</p>
                  </div>
                  <div className="p-10 bg-[#F8F9FA] border-x-[1px]">
                    <Image
                      alt=""
                      src={"/home/Avatar.png"}
                      width={148}
                      height={148}
                      className="rounded-full"
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      Mr. Chin Chien Chen
                    </h3>
                    <p className="text-[#2C7656] mt-1">1st Contact</p>
                    <p className="mt-3 text-base text-[#495057]">Thailand</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-5 border-b-[1px] flex justify-between">
                  <div className="flex items-center gap-3">
                    <EnglandIcon />
                    <p className="text-2xl font-semibold">Thailand (4)</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <CustomButton type="icon">
                      <ChevronLeftIcon />
                    </CustomButton>
                    <CustomButton type="icon">
                      <ChevronRightIcon />
                    </CustomButton>
                  </div>
                </div>
                <div className="grid grid-cols-3 border-t-[1px]">
                  <div className="p-10 bg-[#F8F9FA] border-x-[1px]">
                    <Image
                      alt=""
                      src={"/home/Avatar.png"}
                      width={148}
                      height={148}
                      className="rounded-full"
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      Mr. Chin Chien Chen
                    </h3>
                    <p className="text-[#2C7656] mt-1">1st Contact</p>
                    <p className="mt-3 text-base text-[#495057]">Thailand</p>
                  </div>
                  <div className="p-10 bg-[#F8F9FA] border-x-[1px]">
                    <Image
                      alt=""
                      src={"/home/Avatar.png"}
                      width={148}
                      height={148}
                      className="rounded-full"
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      Mr. Chin Chien Chen
                    </h3>
                    <p className="text-[#2C7656] mt-1">1st Contact</p>
                    <p className="mt-3 text-base text-[#495057]">Thailand</p>
                  </div>
                  <div className="p-10 bg-[#F8F9FA] border-x-[1px]">
                    <Image
                      alt=""
                      src={"/home/Avatar.png"}
                      width={148}
                      height={148}
                      className="rounded-full"
                    />
                    <h3 className="mt-5 text-2xl font-semibold">
                      Mr. Chin Chien Chen
                    </h3>
                    <p className="text-[#2C7656] mt-1">1st Contact</p>
                    <p className="mt-3 text-base text-[#495057]">Thailand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
