import CustomButton from "@/components/client/button";
import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { CheckIcon } from "@/components/client/icons/CheckIcon";
import { usePathname } from "next/navigation";

export default function ProductLayout({
  children,
  showTabs = true,
}: {
  children: any;
  showTabs?: boolean;
}) {
  const pathname = usePathname();

  const tabs = [
    { name: "Overview", href: "/overview" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Resources & Events", href: "/resourse" },
  ];

  return (
    <div id="wrapper">
      <Header />
      <section className="bg-[#0B0E15] md:min-h-[630px] sm:min-h-[830px]">
        <div className="container pt-[86px]">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 h-[50vh]">
            <div className="md:pt-[90px] md:pl-[50px] sm:pl-[15px] md:order-1 sm:order-2">
              <span className="text-[#fff] md:text-[32px] md:leading-[38px] sm:text-[24px]">
                Ansys Mechanical
              </span>
              <h1 className="text-[#fff] font-[500] md:text-[48px] md:leading-[57px] my-4 sm:text-[26px]">
                Finite Element Analysis (FEA) Software for Structural
                Engineering
              </h1>
              <p className="text-[#FFFFFFB2] text-[18px] leading-[26px] mb-10">
                Ansys Mechanical is a best-in-class finite element solver with
                structural, thermal, acoustics, transient and nonlinear
                capabilities to improve your modeling.
              </p>

              <CustomButton type="transparent">Contact Us →</CustomButton>
            </div>
            <div className="md:pt-[50px]   md:order-2 sm:order-1">
              <div className="mt-5">
                <Image
                  src={"/home/3D.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {showTabs && (
        <section className="border-b-[1px]">
          <div className="bg-[#F8F9FA]">
            <Container>
              <div className="flex md:justify-start sm:justify-between border-b ">
                {tabs.map((tab, index) => (
                  <Link key={tab.href} href={tab.href}>
                    <button
                      type="button"
                      className={`md:p-[40px] sm:p-[20px] border-[1px] ${
                        index < tabs.length - 1 ? "border-r-[1px]" : ""
                      } ${
                        pathname === tab.href ? "bg-[#fff]" : "bg-transparent"
                      }`}
                    >
                      {tab.name}
                    </button>
                  </Link>
                ))}
              </div>
            </Container>
          </div>
        </section>
      )}

      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
