import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent1 from "./frame-component1";

export type LogoType = {
  className?: string;
};

const Logo: NextPage<LogoType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[91.28%] top-[1938px] right-[0%] left-[8.72%] h-[118px] overflow-hidden text-left text-mini text-gray font-mainpragraf ${className}`}
    >
      <FrameComponent1 symptoms="Symptoms" />
      <Image className="absolute top-[-4px] left-[0px] w-[60px] h-[60px] object-cover mt-7"
          width={60}
          height={60}
          alt=""
          src="/rotten-tomatoes@2x.png"/>
      <FrameComponent1
        symptoms="Protection"
        frameDivLeft="332px"
        frameDivTop="27px"
        rottenTomatoesTop="-4px"
      />
       <Image className="absolute top-[-4px] left-[330px] w-[60px] h-[60px] object-cover mt-7"
          width={60}
          height={60}
          alt=""
          src="/facial-recognition@2x.png"/>

      <div className="absolute top-[22px] left-[667px] w-[219px] h-[70px] overflow-hidden">
        <div className="absolute top-[18px] left-[64px] w-[148px] h-[38px] overflow-hidden">
          <div className="absolute top-[13px] left-[10px] leading-[21.4px] inline-block w-[180px] h-[18px]">{`Exproident, sunt in `}</div>
          <b className="absolute top-[-3px] left-[10px] text-base inline-block text-darkorchid-200 w-[120px] h-[22px]">
            Security
          </b>
        </div>
        <Image
          className="absolute top-[-4px] left-[4px] w-[60px] h-[60px] object-cover"
          width={60}
          height={60}
          alt=""
          src="/check-lock@2x.png"
        />
      </div>
      <FrameComponent1
        symptoms="Treatment"
        frameDivLeft="1003px"
        frameDivTop="27px"
        rottenTomatoesTop="-4px"
      />
      <Image className="absolute top-[-4px] left-[1000px] w-[60px] h-[60px] object-cover mt-7"
          width={60}
          height={60}
          alt=""
          src="/being-sick@2x.png"/>
      <div className="absolute top-[-11px] left-[-132px] w-[1436px] h-[151px] overflow-hidden" />
    </div>
  );
};

export default Logo;
