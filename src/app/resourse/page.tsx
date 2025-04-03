"use client";

import Container from "@/layouts/Container";
import ProductLayout from "@/layouts/ProductLayout";
import Image from "next/image";

const ResoursePage = () => {
  return (
    <ProductLayout>
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
            <div className="md:col-span-4 flex justify-center md:p-[50px] sm:p-[15px] items-center border-r-[1px]">
              <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                Featured Webinars
              </h1>
            </div>
            <div className="md:col-span-6 md:p-[50px] p-[20px] gap-4">
              <div className="flex flex-col gap-[30px]">
                <div className="grid grid-cols-10 gap-4 w-full">
                  <div className="col-span-4 md:col-span-4 border-[1px] border-[#eee]">
                    <Image
                      src={"/products/product-3.png"}
                      width={340}
                      height={215}
                      alt="3d"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-6  p-4 rounded-lg">
                    <p className="text-sm text-green-600 mb-2">
                      Webinar Series
                    </p>
                    <h3 className="font-[600] mt-1 md:text-[32px] md:leading-[38px] sm:text-[24px] sm:leading-[28.8px]">
                      <a
                        href=""
                        className="hover:text-[rgba(44,118,86,1)] transition-colors duration-300"
                      >
                        Lightweighting Webinar Series
                      </a>
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      This webinar series focuses on our lightweighting
                      capabilities, which will help solve your toughest A&D
                      engineering problems.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-10 gap-4 w-full">
                  <div className="col-span-4 md:col-span-4 border-[1px] border-[#eee]">
                    <Image
                      src={"/products/product-4.png"}
                      width={340}
                      height={215}
                      alt="3d"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-6  p-4 rounded-lg">
                    <p className="text-sm text-green-600 mb-2">
                      Webinar Series
                    </p>
                    <h3 className="font-[600] mt-1 md:text-[32px] md:leading-[38px] sm:text-[24px] sm:leading-[28.8px]">
                      <a
                        href=""
                        className="hover:text-[rgba(44,118,86,1)] transition-colors duration-300"
                      >
                        Composites Webinar Series
                      </a>
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      Ansys has teamed up with various software vendors to
                      provide a complete workflow for composite manufacturing,
                      design and analysis. This webinar series focuses on
                      reducing modeling uncertainties when designing with
                      composites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#d2d3d71a] border-t-[1px]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
            <div className="md:col-span-4 flex justify-center md:p-[50px] sm:p-[15px] items-center border-r-[1px]">
              <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                Case Studies
              </h1>
            </div>
            <div className="md:col-span-6 md:p-[50px] p-[20px] gap-4">
              <div className="flex flex-col gap-[30px]">
                <div className="grid grid-cols-10 gap-4 w-full">
                  <div className="col-span-4 md:col-span-4 border-[1px] border-[#eee]">
                    <Image
                      src={"/products/product-5.png"}
                      width={340}
                      height={215}
                      alt="3d"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-6  p-4 rounded-lg">
                    <p className="text-sm text-green-600 mb-2">Case Studies</p>
                    <h3 className="font-[600] mt-1 md:text-[32px] md:leading-[38px] sm:text-[24px] sm:leading-[28.8px]">
                      <a
                        href=""
                        className="hover:text-[rgba(44,118,86,1)] transition-colors duration-300"
                      >
                        Thermo-Mechanical Fatigue
                      </a>
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      This white paper highlights thermo-mechanical fatigue
                      (TMF) and Ansys' state-of-the-art nonlinear material
                      models.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-10 gap-4 w-full">
                  <div className="col-span-4 md:col-span-4 border-[1px] border-[#eee]">
                    <Image
                      src={"/products/product-6.png"}
                      width={340}
                      height={215}
                      alt="3d"
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-6  p-4 rounded-lg">
                    <p className="text-sm text-green-600 mb-2">Case Studies</p>
                    <h3 className="font-[600] mt-1 md:text-[32px] md:leading-[38px] sm:text-[24px] sm:leading-[28.8px]">
                      <a
                        href=""
                        className="hover:text-[rgba(44,118,86,1)] transition-colors duration-300"
                      >
                        SMART Fracture
                      </a>
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      With the Unstructured Mesh Method (UMM) in Ansys
                      Mechanical, engineers can reduce preprocessing time by
                      employing all tet mesh for crack fronts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </ProductLayout>
  );
};
export default ResoursePage;
