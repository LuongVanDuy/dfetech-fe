import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DefaultLayout from "@/layouts/DefaultLayout";

const JakartaFont = localFont({
  src: [
    {
      path: "../../public/font/PlusJakartaSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/PlusJakartaSans-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/font/PlusJakartaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/PlusJakartaSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/font/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/PlusJakartaSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/PlusJakartaSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/PlusJakartaSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/font/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/PlusJakartaSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/PlusJakartaSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/PlusJakartaSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-custom",
});

const TekoFont = localFont({
  src: [
    {
      path: "../../public/font/Teko-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Teko-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Teko-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Teko-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "../../public/font/Teko-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-teko",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${JakartaFont.variable} ${TekoFont.variable} antialiased`}
      >
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
