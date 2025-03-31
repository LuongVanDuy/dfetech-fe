"use client";

import Image from "next/image";
// import SwiperComponent from "./components/sliders/SwiperComponent";
import Link from "next/link";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home1 from "@/modules/home/Home1";
import Home2 from "@/modules/home/Home2";

export default function Home() {
  return (
    <>
      <Image src="/home/top.png" alt="Logo" width={1920} height={979} />
      <section className="relative min-h-auto w-full flex flex-row items-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full p-0 m-0 bg-cover bg-no-repeat bg-center"></div>
        <div className="relative w-full">{/* <SwiperComponent /> */}</div>
      </section>
      <Home1 />
      <Home2 />
    </>
  );
}
