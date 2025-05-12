import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0E15] text-center  text-[#fff]">
      <div className="mx-auto lg:px-[120px] md:pt-0 sm:pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:[&>:nth-child(1)]:sm:col-span-2 sm:[&>:nth-child(4)]:sm:col-span-2 md:[&>:nth-child(1)]:md:col-span-1 md:[&>:nth-child(4)]:md:col-span-1">
          <div className="md:pl-[45px] md:py-[45px] sm:pl-[15px] sm:py-[15px] text-start">
            <Link href={"/"}>
              <Image
                src="/brands/Logo.svg"
                alt="Logo"
                width={113}
                height={54}
              />
            </Link>
            <p className="mt-4 text-[#ADB5BD]">
              Engineered Solution. Our Passion.
            </p>
          </div>
          <div className="md:p-[45px] sm:p-[15px] text-start">
            <h2 className="text-[#fff] mb-2">Company</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-[#ADB5BD]">
                <Link href="/">About us</Link>
              </li>
              <li className="text-[#ADB5BD]">
                <Link href="/">News & Events</Link>
              </li>
              <li className="text-[#ADB5BD]">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="md:p-[45px] sm:p-[15px] text-start">
            <h2 className="text-[#fff] mb-2">Platform</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-[#ADB5BD]">
                <Link href="/">Software Solutions</Link>
              </li>
              <li className="text-[#ADB5BD]">
                <Link href="/">News & Events</Link>
              </li>
              <li className="text-[#ADB5BD]">
                <Link href="/">Free trial</Link>
              </li>
            </ul>
          </div>
          <div className="md:p-[45px] sm:p-[15px] text-start ">
            <h2 className="text-[#fff] mb-2">Terms</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-[#ADB5BD]">
                <Link href="/">Terms</Link>
              </li>
              <li className="text-[#ADB5BD]">
                <Link href="/">Privacy</Link>
              </li>
              <li className="text-[#ADB5BD]">
                <Link href="/">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-[#ADB5BD] text-start md:p-[45px] sm:p-[15px]">
          &copy; 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
