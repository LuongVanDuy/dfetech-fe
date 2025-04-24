import React from "react";

import Image from "next/image";
import { PlayCircleIcon } from "@/components/client/icons/PlayCircleIcon";
import { HelpCircleIcon } from "@/components/client/icons/HelpCircleIcon";
import { DegressIcon } from "@/components/client/icons/DegressIcon";
import { LayerIcon } from "@/components/client/icons/LayerIcon";
import Container from "@/components/client/layout/Container";
import BoxSolution from "@/components/box/BoxSolution";
import BoxSoftware from "@/components/box/BoxSoftware";
import { desc } from "framer-motion/client";
import BoxNormal from "@/components/box/BoxNormal";

const newsData = [
  {
    title: "PROFIL Version 6.4 is Released!",
    imageSrc: "/posts/post-1.svg",
    description:
      "Retaining ring notches, shoulders, chamfers, fillets: The bore hole details are shown and exported in the drawing area on the screen, in the CAD exports by ActiveX, DXF, and STEP in 2D and 3D, in the print and plot functions, in the NC exports, and in the roll stock management (option).",
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    imageSrc: "/posts/post-2.svg",
    description:
      "Retaining ring notches, shoulders, chamfers, fillets: The bore hole details are shown and exported in the drawing area on the screen, in the CAD exports by ActiveX, DXF, and STEP in 2D and 3D, in the print and plot functions, in the NC exports, and in the roll stock management (option).",
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    imageSrc: "/posts/post-3.svg",
    description:
      "Retaining ring notches, shoulders, chamfers, fillets: The bore hole details are shown and exported in the drawing area on the screen, in the CAD exports by ActiveX, DXF, and STEP in 2D and 3D, in the print and plot functions, in the NC exports, and in the roll stock management (option).",
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    imageSrc: "/posts/post-2.svg",
    description:
      "Retaining ring notches, shoulders, chamfers, fillets: The bore hole details are shown and exported in the drawing area on the screen, in the CAD exports by ActiveX, DXF, and STEP in 2D and 3D, in the print and plot functions, in the NC exports, and in the roll stock management (option).",
  },
  {
    title: "PROFIL Version 6.4 is Released!",
    imageSrc: "/posts/post-3.svg",
    description:
      "Retaining ring notches, shoulders, chamfers, fillets: The bore hole details are shown and exported in the drawing area on the screen, in the CAD exports by ActiveX, DXF, and STEP in 2D and 3D, in the print and plot functions, in the NC exports, and in the roll stock management (option).",
  },
];

const AnsysContent = (props: any) => {
  return (
    <section>
      <div
        style={{
          background: "rgba(11, 14, 21, 1)",
        }}
      >
        <Container>
          <div className="flex flex-col gap-5 px-[16px] md:px-[64px] py-[36px] md:py-[80px] md:pb-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
              {newsData.map((news, index) => (
                <BoxNormal key={index} {...news} type="ansys" />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export { AnsysContent };
