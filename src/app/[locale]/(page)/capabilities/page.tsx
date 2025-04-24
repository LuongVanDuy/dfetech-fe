"use client";
import CustomButton from "@/components/client/button";
import { CheckIcon } from "@/components/client/icons/CheckIcon";
import { MinusIcon } from "@/components/client/icons/MinusIcon";
import { PlusIcon } from "@/components/client/icons/PlusIcon";
import { TickIcon } from "@/components/client/icons/TickIcon";
import Container from "@/components/client/layout/Container";
import DefaultLayout from "@/components/layouts/clients/DefaultLayout";
import ProductLayout from "@/components/client/layout/ProductLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "What is Ansys Mechanical?",
    answer: [
      "Ansys Mechanical is a finite element analysis (FEA) software used to perform structural analysis using advanced solver options, including linear dynamics, nonlinearities, thermal analysis, materials, composites, hydrodynamic, explicit, and more. Mechanical offers a user-friendly, dynamic environment with a complete range of analysis tools, from preparing geometry to connecting other physics for high-fidelity simulations and optimization.",
      "Mechanical is known for its customization and scripting capabilities, enabling users to automate repetitive tasks and workflows.",
    ],
    image: "/posts/post-1.svg",
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

const tableData = [
  {
    name: "Full thermal analysis",
    pro: false,
    premium: true,
    enterprise: true,
  },
  { name: "Modal analysis", pro: true, premium: true, enterprise: true },
  { name: "Full contact", pro: true, premium: true, enterprise: true },
  { name: "Non-linear geometry", pro: true, premium: true, enterprise: true },
  { name: "Material plasticity", pro: true, premium: true, enterprise: true },
  {
    name: "Structural optimization",
    pro: true,
    premium: true,
    enterprise: true,
  },
  { name: "Pre-stressed modal", pro: true, premium: true, enterprise: true },
  { name: "4 HPC Cores", pro: true, premium: true, enterprise: true },
  { name: "Full linear dynamics", pro: false, premium: true, enterprise: true },
  {
    name: "Element birth and death",
    pro: false,
    premium: true,
    enterprise: true,
  },
  {
    name: "Full material non-linearity",
    pro: false,
    premium: false,
    enterprise: true,
  },
  {
    name: "Coupled field elements",
    pro: false,
    premium: false,
    enterprise: true,
  },
  {
    name: "User Defined Material Model Formulations",
    pro: false,
    premium: false,
    enterprise: true,
  },
];

const CapabilitiesPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <ProductLayout>
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
            <div className="md:col-span-4 flex justify-center md:p-[50px] sm:p-[15px] items-center border-r-[1px]">
              <div className="w-[100%] h-auto border-[1px]  rounded-[24px]">
                <Image
                  src={"/home/3D1.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:p-[50px] p-[20px]">
              <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                Range of Analytical Tools Prepares Geometry Quickly and Gives
                You Confidence
              </h1>
              <p className="text-[18px] leading-[26px] my-5">
                Ansys Mechanical creates an integrated platform that uses finite
                element analysis (FEA) for structural analysis. Mechanical is a
                dynamic environment that has a complete range of analysis tools,
                from preparing geometry for analysis to connecting additional
                physics for even greater fidelity. The intuitive and
                customizable user interface enables engineers of all levels to
                get answers fast and with confidence.
              </p>

              <p className="text-[18px] leading-[26px] my-5">
                Ansys Workbench enables robust connection to commercial CAD
                tools, providing click button design point updates. Seamlessly
                integrated multiphysics capabilities are available with fluids
                and electrical solvers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b-[1px]">
        <div className="bg-[#f9f8f8]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
              <div className="md:col-span-4  md:p-[50px] sm:p-[20px] items-center border-r-[1px]">
                <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                  Key Features
                </h1>

                <p className="text-[18px] leading-[26px] my-5">
                  Experience dynamic analysis and embrace advanced solver
                  options across a variety of materials and functions
                </p>

                <ul className="list-disc pl-5 mb-5 space-y-2 text-gray-700">
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    Linear Dynamics
                  </li>
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    Nonlinearities
                  </li>
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    Thermal Analysis
                  </li>
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    Materials
                  </li>
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    Composites
                  </li>
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    Hydrodynamics
                  </li>
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    Fluid-Structure Interaction
                  </li>
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    Customization and Scripting
                  </li>
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    Solve Management
                  </li>
                  <li className="text-[#495057] text-[18px] leading-[26px]">
                    High Performance Computing
                  </li>
                </ul>

                <CustomButton type="primary">Contact Us</CustomButton>
              </div>
              <div className="md:col-span-6 md:p-[50px] sm:p-[20px]">
                {faqData.map((item, index) => (
                  <div key={index} className="border-b-[0.5px]">
                    <button
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

      <section className="border-b-[1px]">
        <div className="bg-[#f9f8f8]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
              <div className="md:col-span-4  md:p-[50px] sm:p-[20px] items-center border-r-[1px]">
                <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                  Licensing Overview
                </h1>

                <p className="text-[18px] leading-[26px] my-5">
                  There are three licensing options available with Ansys
                  Mechanical:
                </p>
                <CustomButton type="primary">Contact Us</CustomButton>
              </div>
              <div className="md:col-span-6 md:p-[50px] sm:p-[20px]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 font-semibold text-gray-700"></th>
                      <th className="p-4 font-semibold text-gray-700  ">Pro</th>
                      <th className="p-4 font-semibold text-gray-700 ">
                        Premium
                      </th>
                      <th className="p-4 font-semibold text-gray-700 ">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((feature, index) => (
                      <tr key={index} className="">
                        <td className="p-4 text-[#495057] text-[16px] leading-[24px]">
                          {feature.name}
                        </td>
                        <td className="p-4">
                          {feature.pro ? (
                            <span>
                              {" "}
                              <TickIcon />
                            </span>
                          ) : (
                            <span className=""></span>
                          )}
                        </td>
                        <td className="p-4">
                          {feature.premium ? (
                            <span>
                              <TickIcon />
                            </span>
                          ) : (
                            <span></span>
                          )}
                        </td>
                        <td className="p-4">
                          {feature.enterprise ? (
                            <span>
                              {" "}
                              <TickIcon />
                            </span>
                          ) : (
                            <span></span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
};

export default CapabilitiesPage;
