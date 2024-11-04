import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent4 from "./frame-component4";

export type WhatIsVaccinationType = {
  className?: string;
};

const WhatIsVaccination: NextPage<WhatIsVaccinationType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute w-[100.2%] top-[1432px] right-[0%] left-[-0.2%] h-[459px] overflow-hidden text-left text-mini text-gray font-mainpragraf ${className}`}
    >
      <div className="absolute w-[55.07%] top-[48px] right-[8.87%] left-[52.06%] h-[378px] overflow-hidden">
        <Image
          className="absolute top-[0px] left-[5px] w-[576px] h-[378px] object-cover"
          width={590}
          height={378}
          alt=""
          src="/pregnantfemalegettingvaccine1296728header-1@2x.png"
        />
        <div className="absolute top-[295px] left-[489px] w-[92px] h-[83px] overflow-hidden">
          <div className="absolute top-[14px] left-[0px] bg-darkmagenta w-[91.2px] h-[69.3px]" />
          <Image
            className="absolute top-[33px] left-[30px] w-[32.2px] h-[32.2px] object-contain"
            width={32}
            height={32}
            alt=""
            src="/polygon-11.svg"
          />
        </div>
      </div>
      <div className="absolute top-[48px] left-[130px] w-[474px] h-[306px]">
        <div className="absolute top-[0px] left-[0px] w-[474px] h-[306px]">
          <div className="absolute top-[158px] left-[2.9px] w-[292px] h-[22.4px] overflow-hidden">
            <div className="absolute top-[0px] left-[22.4px] leading-[21.4px] inline-block w-[309.6px] h-[29.2px]">{`Tsunt in culpa qui officia deserunt mollit `}</div>
            <Image
              className="absolute top-[4.9px] left-[0px] w-[14.6px] h-[14.6px] object-cover"
              width={15}
              height={15}
              alt=""
              src="/check-mark3@2x.png"
            />
          </div>
          <FrameComponent4
            hOWTOPREVENT="HOW TO LEARN"
            frameDivTop="270.9px"
            frameDivLeft="4.9px"
            frameDivWidth="150.9px"
            frameDivRight="unset"
            hOWTOPREVENTTextAlign="center"
            hOWTOPREVENTWidth="134.3px"
            hOWTOPREVENTDisplay="inline-block"
          />
          <div className="absolute top-[213.5px] left-[0px] w-[371.9px] h-[28.2px] overflow-hidden">
            <Image
              className="absolute top-[4.9px] left-[3.9px] w-[14.6px] h-[14.6px] object-cover"
              width={15}
              height={15}
              alt=""
              src="/check-mark4@2x.png"
            />
            <div className="absolute top-[0px] left-[24.3px] leading-[21.4px] inline-block w-[333.9px] h-[20.4px]">{`Exproident, sunt in culpa quimollit `}</div>
          </div>
          <div className="absolute top-[186.2px] left-[0px] w-[335.8px] h-[20.4px] overflow-hidden">
            <Image
              className="absolute top-[4.9px] left-[2.9px] w-[14.6px] h-[14.6px] object-cover"
              width={15}
              height={15}
              alt=""
              src="/check-mark5@2x.png"
            />
            <div className="absolute top-[-1px] left-[26.3px] leading-[21.4px] inline-block w-[317.3px] h-[20.4px]">{`Velit esse cillum dolore eu fugiat nul. `}</div>
          </div>
          <div className="absolute top-[49px] left-[4px] leading-[21.4px] inline-block w-[470px] h-24">
            Lorem ipsum dolor modo consequat. Duis aute ik nulladolor in
            reprehenderit in voluptate velit esse dolore eu fugiat nulla
            pariatur. Exproi.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore
          </div>
          <div className="absolute top-[0px] left-[4px] w-[340px] h-[49px] overflow-hidden text-12xl-2 text-fuchsia-100">
            <b className="absolute top-[0px] left-[0px] inline-block w-[340px] h-[29px]">
              What is Vaccinations?
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsVaccination;
