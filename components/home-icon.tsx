import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent2 from "./frame-component2";
import FrameComponent4 from "./frame-component4";

export type HomeIconType = {
  className?: string;
};

const HomeIcon: NextPage<HomeIconType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full top-[2135px] right-[0%] left-[0%] bg-gainsboro-200 h-[882px] overflow-hidden text-left text-xl text-darkorchid-200 font-mainpragraf ${className}`}
    >
      <FrameComponent2 />
      <FrameComponent2
        frameDivTop="518px"
        frameDivLeft="112px"
        houseLeft="93px"
      />
      <FrameComponent2
        frameDivTop="40px"
        frameDivLeft="450px"
        houseLeft="93px"
      />
      <div className="absolute top-[436px] left-[450px] w-72 h-[314px] overflow-hidden">
        <div className="absolute top-[8px] left-[18px] bg-white w-60 h-[300px]" />
        <div className="absolute top-[8px] left-[18px] bg-thistle w-60 h-[130px]" />
        <Image
          className="absolute top-[33px] left-[98px] w-20 h-20 object-cover"
          width={80}
          height={80}
          alt=""
          src="/house@2x.png"
        />
        <b className="absolute top-[158px] left-[23.61%]">Stay at Home</b>
        <div className="absolute w-[50.69%] top-[193px] left-[23.61%] text-mini leading-[22px] text-silver inline-block h-[71px]">{`Lorem ipsum dolor sit amet, consectet adipiscing elit, sed `}</div>
      </div>
      <div className="absolute top-[182px] left-[855px] w-[531px] h-[414px] text-mini text-gray">
        <div className="absolute top-[252px] left-[2.9px] w-[292px] h-[22.4px] overflow-hidden">
          <div className="absolute top-[0px] left-[22.4px] leading-[21.4px] inline-block w-[309.6px] h-[29.2px]">{`Tsunt in culpa qui officia deserunt mollit `}</div>
          <Image
            className="absolute top-[4.9px] left-[0px] w-[14.6px] h-[14.6px] object-cover"
            width={15}
            height={15}
            alt=""
            src="/check-mark3@2x.png"
          />
        </div>
        <div className="absolute top-[307.5px] left-[0px] w-[371.9px] h-[28.2px] overflow-hidden">
          <Image
            className="absolute top-[4.9px] left-[3.9px] w-[14.6px] h-[14.6px] object-cover"
            width={15}
            height={15}
            alt=""
            src="/check-mark4@2x.png"
          />
          <div className="absolute top-[0px] left-[24.3px] leading-[21.4px] inline-block w-[333.9px] h-[20.4px]">{`Exproident, sunt in culpa quimollit `}</div>
        </div>
        <div className="absolute top-[280.2px] left-[0px] w-[335.8px] h-[20.4px] overflow-hidden">
          <Image
            className="absolute top-[4.9px] left-[2.9px] w-[14.6px] h-[14.6px] object-cover"
            width={15}
            height={15}
            alt=""
            src="/check-mark5@2x.png"
          />
          <div className="absolute top-[-1px] left-[26.3px] leading-[21.4px] inline-block w-[317.3px] h-[20.4px]">{`Velit esse cillum dolore eu fugiat nul. `}</div>
        </div>
        <FrameComponent4
          hOWTOPREVENT="READ MORE "
          frameDivTop="379px"
          frameDivLeft="7px"
          frameDivWidth="155px"
          frameDivRight="unset"
          hOWTOPREVENTTextAlign="center"
          hOWTOPREVENTWidth="134.3px"
          hOWTOPREVENTDisplay="inline-block"
        />
        <div className="absolute top-[calc(50%_-_207px)] left-[7px] w-[524px] h-[39px] overflow-hidden text-12xl-2 text-fuchsia-100">
          <b className="absolute top-[0px] left-[0px] inline-block w-[456px] h-[39px]">
            How To Prevent Coronavirus?
          </b>
        </div>
        <div className="absolute top-[163px] left-[5px] leading-[22px] inline-block w-[431px] h-[42px]">
          Exproi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </div>
        <div className="absolute top-[53px] left-[7px] leading-[21.4px] inline-block w-[478px] h-[91px]">
          Lorem ipsum dolor modo consequat. Duis aute ik nulladolor in
          reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur.
          Exproi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </div>
      </div>
    </div>
  );
};

export default HomeIcon;
