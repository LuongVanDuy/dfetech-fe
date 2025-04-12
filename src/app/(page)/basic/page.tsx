"use client";

import CustomButton from "@/components/button";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { MinusIcon } from "@/components/icons/MinusIcon";
import { PlusIcon } from "@/components/icons/PlusIcon";
import Container from "@/components/layouts/clients/Container";
import ProductLayout from "@/components/layouts/clients/ProductLayout";
import Image from "next/image";
import { useState } from "react";

const faqData = [
  {
    question: "What is Ansys Mechanical?",
    answer: [
      "Ansys Mechanical is a finite element analysis (FEA) software used to perform structural analysis using advanced solver options, including linear dynamics, nonlinearities, thermal analysis, materials, composites, hydrodynamic, explicit, and more. Mechanical offers a user-friendly, dynamic environment with a complete range of analysis tools, from preparing geometry to connecting other physics for high-fidelity simulations and optimization.",
      "Mechanical is known for its customization and scripting capabilities, enabling users to automate repetitive tasks and workflows.",
    ],
    image: "",
  },
  {
    question: "How can I learn Ansys Mechanical?",
    answer: [
      "You can learn Ansys Mechanical through official Ansys training courses, online tutorials, documentation, and community forums. Consider starting with the Ansys Learning Hub or third-party platforms like Coursera or YouTube.",
    ],
  },
  {
    question: "How do I open APDL from Ansys Mechanical?",
    answer: [
      'To open APDL from Ansys Mechanical, go to the menu, select "Preprocessor" or "Solution," and choose the APDL command input option. You can also write APDL scripts directly in the Mechanical interface.',
    ],
  },
  {
    question: "How do I use symmetry in Ansys Mechanical?",
    answer: [
      'To use symmetry in Ansys Mechanical, define symmetric boundary conditions in the model setup. Use the "Symmetry" option under boundary conditions and apply it to the appropriate faces or edges.',
    ],
  },
  {
    question: "How do I download Ansys Mechanical?",
    answer: [
      "To download Ansys Mechanical, visit the official Ansys website, log in with your account, and navigate to the download section. You’ll need a valid license to access the software.",
    ],
  },
];

const ProductBasic = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ProductLayout showTabs={false}>
      <section className="border-b-[1px]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
            <div className="md:col-span-4 flex justify-center md:p-[50px] sm:p-[15px] items-center border-r-[1px]">
              <div className="w-[100%] h-auto border-[1px]  rounded-[24px]">
                <Image
                  src={"/home/3D3.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:p-[50px] p-[20px]">
              <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                DynaForm
              </h1>

              <p className="text-[18px] leading-[26px] my-5">
                DYNAFORM is a complete die system simulation solution. It allows
                organizations to bypass soft tooling, reducing overall tryout
                time, lowering costs, increasing productivity & providing
                complete confidence in die system design DYNAFORM also allows
                for the evaluation of alternative and unconventional designs and
                materials for optimal solution.
              </p>
              <p className="text-[18px] leading-[26px] my-5">
                DYNAFORM also allows for the evaluation of alternative and
                unconventional designs and materials for optimal solution.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b-[1px]">
        <div className="bg-[#ffffff]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px] border-r-[1px]">
              <div className="md:col-span-4  md:p-[50px] p-[20px] items-center border-r-[1px]">
                <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                  Blank Size Engineering (BSE)
                </h1>

                <p className="text-[18px] leading-[26px] my-5">
                  BSE is widely used for estimating blank size, along with blank
                  nesting for maximum material usage, scrap & piece price.
                </p>

                <p className="text-[18px] leading-[26px] my-5">
                  This module offers enhanced forming limit diagram (FLD),
                  thinning, thickening and thickness strain.
                </p>

                <p className="text-[18px] leading-[26px] my-5">
                  {" "}
                  Beginning with the 3-D part geometry, BSE can quickly unfold
                  the flanges and flatten the geometry to produce a blank
                  outline for blank size estimation along with piece price and
                  scrap calculation. Product feasibility and cost analysis can
                  be thoroughly evaluated using BSE.
                </p>
              </div>

              <div className="md:col-span-6 md:p-[50px] sm:p-[20px]">
                <Image
                  src={"/home/3D4.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="mx-auto w-[100%]"
                />
                {faqData.map((item, index) => (
                  <div key={index} className="border-b-[0.5px]">
                    <button
                      type="button"
                      className="w-full text-left px-4 py-8 flex justify-start items-center gap-7 focus:outline-none"
                      onClick={() => handleToggle(index)}
                    >
                      <span className="text-xl">
                        {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </span>
                      <span className="text-lg font-medium">
                        {item.question}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4 text-[#495057] flex flex-col md:flex-row gap-6">
                        <div>
                          {item.answer.map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className="mb-2 text-[16px] leading-[26px] last:mb-0"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {item.image && (
                          <div className="w-full ">
                            <Image
                              src={item.image}
                              width={855}
                              height={230}
                              alt="3d"
                              className="w-[100%]"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section>
        <div className="bg-[#ffffff]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px] border-r-[1px]">
              <div className="md:col-span-4  md:p-[50px] p-[20px] items-center border-r-[1px]">
                <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                  Blank Size Engineering (BSE)
                </h1>

                <p className="text-[18px] leading-[26px] my-5">
                  BSE is widely used for estimating blank size, along with blank
                  nesting for maximum material usage, scrap & piece price.
                </p>

                <p className="text-[18px] leading-[26px] my-5">
                  This module offers enhanced forming limit diagram (FLD),
                  thinning, thickening and thickness strain.
                </p>

                <p className="text-[18px] leading-[26px] my-5">
                  {" "}
                  Beginning with the 3-D part geometry, BSE can quickly unfold
                  the flanges and flatten the geometry to produce a blank
                  outline for blank size estimation along with piece price and
                  scrap calculation. Product feasibility and cost analysis can
                  be thoroughly evaluated using BSE.
                </p>
              </div>

              <div className="md:col-span-6 md:p-[50px] sm:p-[20px]">
                {faqData.map((item, index) => (
                  <div key={index} className="border-b-[0.5px]">
                    <button
                      type="button"
                      className="w-full text-left px-4 py-8 flex justify-start items-center gap-7 focus:outline-none"
                      onClick={() => handleToggle(index)}
                    >
                      <span className="text-xl">
                        {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </span>
                      <span className="text-lg font-medium">
                        {item.question}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4 text-[#495057] flex flex-col md:flex-row gap-6">
                        <div>
                          {item.answer.map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className="mb-2 text-[16px] leading-[26px] last:mb-0"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {item.image && (
                          <div className="w-full ">
                            <Image
                              src={item.image}
                              width={855}
                              height={230}
                              alt="3d"
                              className="w-[100%]"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </ProductLayout>
  );
};

export default ProductBasic;
