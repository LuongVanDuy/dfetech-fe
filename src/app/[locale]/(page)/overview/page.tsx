"use client";

import CustomButton from "@/components/client/button";
import MainTitle from "@/components/title/MainTitle";
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

const featureData = [
  { id: "01", title: "CAD Connected" },
  { id: "02", title: "Advanced Materials Modeling" },
  { id: "03", title: "Vibration" },
  { id: "04", title: "Coupled Field Technology" },
  { id: "05", title: "Automated Meshing Adaptivity (NLAD)" },
  { id: "06", title: "Explicit Analysis" },
  { id: "07", title: "Acoustics" },
  { id: "08", title: "Fast Parallel Solvers" },
  { id: "09", title: "Linear and Nonlinear Contact" },
  { id: 10, title: "Crack and Fracture Modeling" },
  { id: 11, title: "Structural Optimization" },
  { id: 12, title: "Fatigue Life Analysis" },
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

const ProductOverview = (props: any) => {
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
                  src={"/home/3D.png"}
                  width={630}
                  height={452}
                  alt="3d"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:p-[50px] p-[20px]">
              <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                Engineers Gain Answers Fast and With Confidence
              </h1>

              <p className="text-[18px] leading-[26px] my-5">
                Ansys Mechanical enables you to solve complex structural
                engineering problems and make better, faster design decisions.
                With the finite element analysis (FEA) solvers available in the
                suite, you can customize and automate solutions for your
                structural mechanics problems and parameterize them to analyze
                multiple design scenarios. Ansys Mechanical is a dynamic tool
                that has a complete range of analysis tools.
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                    <CheckIcon />
                  </span>
                  <span>Easy to Use, Multi-Purpose Tool</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                    <CheckIcon />
                  </span>
                  <span>
                    Persistent, Dependable, Accurate Solver Technology
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                    <CheckIcon />
                  </span>
                  <span>Dynamic, Integrated Platform</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                    <CheckIcon />
                  </span>
                  <span>Powerful Nonlinear and Linear Solvers</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b-[1px]">
        <div className="bg-[#ffffff]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
              <div className="md:col-span-4  md:p-[50px] p-[20px] items-center border-r-[1px]">
                <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                  Quick Specs
                </h1>

                <p className="text-[18px] leading-[26px] my-5">
                  Ansys Mechanical offers a dynamic environment with a complete
                  range of analysis tools, from preparing geometry for analysis
                  to connecting additional physics for even greater fidelity.
                  The intuitive and customizable user interface enables
                  engineers of all levels to get answers fast and with
                  confidence.
                </p>

                <CustomButton type="primary">Contact Us</CustomButton>
              </div>

              <div className="md:col-span-6 md:p-[50px] sm:p-[20px]">
                <ul className="space-y-4 text-gray-700">
                  {featureData.map((item) => (
                    <li key={item.id} className="flex items-center gap-[50px]">
                      <span className="w-6 h-6 flex items-center justify-center text-green-600 rounded-full">
                        {`${item.id}`.slice(-2)}
                      </span>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-[1px]">
        <div className="bg-[#f9f8f8]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
              <div className="md:col-span-4  md:p-[50px] sm:p-[20px] items-center border-r-[1px]">
                <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                  What's New
                </h1>

                <p className="text-[18px] leading-[26px] my-5">
                  The 2024 R2 release of Ansys Mechanical brings a comprehensive
                  suite of new features designed to deliver holistic advantages
                  to our customers.
                </p>

                <CustomButton type="primary">Contact Us</CustomButton>
              </div>
              <div className="md:col-span-6 p-[50px]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-[1px]">
        <div className="bg-[#f9f8f8]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
              <div className="md:col-span-4  md:p-[50px] sm:p-[20px] items-center border-r-[1px]">
                <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                  Steering the Future of Mobility with thyssenkrupp Presta AG
                </h1>

                <p className="text-[18px] leading-[26px] my-5">
                  Ansys helps thyssenkrupp Presta AG to realize complex 3D
                  digital versions of its components and lead the evolution of
                  the automotive sector.
                </p>
              </div>
              <div className="md:col-span-6 md:p-[50px] sm:p-[20px]">
                <Image
                  src={"/products/product-banner.png"}
                  width={855}
                  height={230}
                  alt="3d"
                  className="w-[100%]"
                />
                <p className="py-5 md:text-[28px] md:leading-[38px] text-[26px] leading-[28px]">
                  "Ansys Mechanical provides the ability to model the realistic
                  and complex details of injection molded plastics, like the
                  orientation of fibers and the presence of injection stresses
                  in the parts, which significantly increases the accuracy of
                  our engineering developments."
                </p>
                <p className="text-[18px] leading-[26px]">
                  —Francesco Fiorini, structural and durability engineer at
                  thysssenkrupp Presta AG
                </p>
                <p className="text-[18px] leading-[26px] my-5 text-[#495057]">
                  All products have an environmental impact, a fact customers
                  are increasingly aware of as they take an interest in their
                  carbon footprints. In the automotive industry, there is a
                  global push to reach zero vehicle emissions by 2050 to satisfy
                  consumer demand and increasingly stricter environmental laws.
                  To do so, leading vehicle manufactures and their partners are
                  embracing lightweighting and electrification. Composite
                  materials are key to making vehicles lighter so they can use
                  smaller engines that consume less energy and produce fewer
                  emissions. For the high-volume production models (body panels,
                  frames, housings), an increasingly adopted technique is the
                  manufacturing of critical components through injection molding
                  with short-fiber reinforced plastics.
                </p>

                <p className="text-[18px] leading-[26px] my-5 text-[#495057]">
                  Thyssenkrupp Presta is leveraging its longstanding
                  competencies in materials, components and systems to lead
                  automotive digital transformation processes. Ansys
                  Mechanical’s short fiber reinforced composite workflow helped
                  thyssenkrupp Presta reach the targeted 50% weight reduction
                  with respect to the original metal part to meet mechanical
                  performance and OEMs requirements. The adoption of an
                  innovative and lightweight plastic housing for its steering
                  system supports both the ecological and economical goals of
                  thyssenkrupp Presta and helps the company lead the evolution
                  of the steering systems for the automotive market of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-[1px]">
        <div className="bg-[#f9f8f8]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-10  border-l-[1px]">
              <div className="md:col-span-4  md:p-[50px] sm:p-[20px] items-center border-r-[1px]">
                <h1 className="text-[48px] sm:text-[32px] md:leading-[57px] leading-[42px]">
                  FAQs
                </h1>

                <p className="text-[18px] leading-[26px] my-5">
                  Need something cleared up? Here are our most frequently asked
                  questions.
                </p>
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
          </div>
        </div>
      </section>
    </ProductLayout>
  );
};

export default ProductOverview;
