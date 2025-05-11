import { useParams } from "next/navigation";
import useLocalizeOverview from "./localize/useLocalizeOverview";
import Image from "next/image";
import CustomButton from "@/components/client/button";
import { Contact } from "../home/section/Contact";
import SectionTabs from "./components/SectionTabs";

const OverViewModule = () => {
    const localize = useLocalizeOverview();

    return <div className="overview-module-container">
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
        <SectionTabs />
        <Contact />
    </div>
}

export default OverViewModule;