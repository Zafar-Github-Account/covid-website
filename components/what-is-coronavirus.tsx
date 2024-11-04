import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent4 from "./frame-component4";

export type WhatIsCoronavirusType = {
  className?: string;
};

const WhatIsCoronavirus: NextPage<WhatIsCoronavirusType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[884px] left-[0px] w-[1480px] h-[531px] overflow-hidden text-left text-mini text-gray font-mainpragraf ${className}`}
    >
      <div className="absolute top-[32px] left-[129px] w-[577px] h-[378px] overflow-hidden">
        <Image
          className="absolute top-[12px] left-[0px] w-[577px] h-[378px] object-cover"
          width={577}
          height={378}
          alt=""
          src="/covid-1@2x.png"
        />
        <div className="absolute top-[295px] left-[438px] w-[138.6px] h-[83px] overflow-hidden">
          <div className="absolute top-[13.7px] left-[47.4px] bg-darkmagenta w-[91.2px] h-[69.3px]" />
          <Image
            className="absolute top-[31.9px] left-[76.6px] w-[32.2px] h-[32.2px] object-contain"
            width={32}
            height={32}
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </div>
      <div className="absolute w-[32.09%] top-[44px] right-[10.07%] left-[57.84%] h-[306.6px]">
        <div className="absolute w-[98.95%] top-[49px] left-[1.05%] leading-[21.4px] inline-block h-24">
          Lorem ipsum dolor modo consequat. Duis aute ik nulladolor in
          reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur.
          Exproi.Lorem ipsum dolor sit amet, consecteturr adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore
        </div>
        <div className="absolute w-[100.01%] top-[0px] right-[32.99%] left-[0%] h-[48.7px] overflow-hidden text-12xl-2 text-fuchsia-100">
          <b className="absolute top-[0px] left-[0px]">What is Coronavirus?</b>
        </div>
        <div className="absolute w-[61.47%] top-[158.7px] right-[37.92%] left-[0.61%] h-[22.4px] overflow-hidden">
          <div className="absolute top-[0px] left-[22.4px] leading-[21.4px] inline-block w-[309.6px] h-[29.2px]">{`Tsunt in culpa qui officia deserunt mollit `}</div>
          <Image
            className="absolute top-[4.9px] left-[0px] w-[14.6px] h-[14.6px] object-cover"
            width={15}
            height={15}
            alt=""
            src="/check-mark@2x.png"
          />
        </div>
        <FrameComponent4
          hOWTOPREVENT="HOW TO LEARN"
          frameDivTop="271.6px"
          frameDivLeft="1.03%"
          frameDivWidth="31.77%"
          frameDivRight="67.2%"
          hOWTOPREVENTTextAlign="center"
          hOWTOPREVENTWidth="134.3px"
          hOWTOPREVENTDisplay="inline-block"
        />
        <div className="absolute w-[78.29%] top-[214.2px] right-[21.71%] left-[0%] h-[28.2px] overflow-hidden">
          <Image
            className="absolute top-[4.9px] left-[3.9px] w-[14.6px] h-[14.6px] object-cover"
            width={15}
            height={15}
            alt=""
            src="/check-mark1@2x.png"
          />
          <div className="absolute top-[0px] left-[24.3px] leading-[21.4px] inline-block w-[333.9px] h-[20.4px]">{`Exproident, sunt in culpa quimollit `}</div>
        </div>
        <div className="absolute w-[70.69%] top-[186.9px] right-[29.31%] left-[0%] h-[20.4px] overflow-hidden">
          <Image
            className="absolute top-[4.9px] left-[2.9px] w-[14.6px] h-[14.6px] object-cover"
            width={15}
            height={15}
            alt=""
            src="/check-mark2@2x.png"
          />
          <div className="absolute top-[-1px] left-[26.3px] leading-[21.4px] inline-block w-[317.3px] h-[20.4px]">{`Velit esse cillum dolore eu fugiat nul. `}</div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsCoronavirus;
