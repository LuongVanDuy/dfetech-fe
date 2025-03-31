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
      <Home1 />
      <Home2 />
    </>
  );
}
