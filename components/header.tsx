import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent4 from "./frame-component4";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] rounded-t-none rounded-br-281xl rounded-bl-none bg-gainsboro-100 w-[1480px] h-[520px] overflow-hidden text-left text-xl text-black font-mainpragraf ${className}`}
    >
      <div className="absolute top-[20px] left-[128px] text-16xl font-semibold inline-block w-[132px]">
        Covid.
      </div>
      <div className="absolute top-[29px] left-[686.6px] w-[662.9px] h-[22px] text-mediumorchid-200">
        <div className="absolute w-[8.78%] top-[0px] left-[0%] font-semibold inline-block h-5">
          Home
        </div>
        <div className="absolute w-[21.44%] top-[0px] left-[13.55%] font-semibold inline-block h-5">
          Reports Center
        </div>
        <div className="absolute w-[8.78%] top-[0px] left-[39.58%] font-semibold inline-block h-5">
          About
        </div>
        <div className="absolute w-[18.75%] top-[0px] left-[69.05%] font-semibold inline-block h-5">
          Symptoms
        </div>
        <div className="absolute w-[11.46%] top-[0px] left-[52.98%] font-semibold inline-block h-5">
          Contact
        </div>
        <div className="absolute w-[12.35%] top-[0px] left-[87.65%] font-semibold inline-block h-[22px]">
          Sing In
        </div>
      </div>
      <Image
        className="absolute top-[172px] left-[834px] w-[525px] h-[350px] object-cover"
        width={525}
        height={350}
        alt=""
        src="/file-1@2x.png"
      />
      <div className="absolute top-[193px] left-[130px] uppercase text-darkviolet inline-block w-[352px] h-[42px]">
        Covid-19 Awereness
      </div>
      <div className="absolute top-[235px] left-[128px] text-29xl font-black text-fuchsia-200 inline-block w-[530px] h-14">
        Stay Safe, Stay Home
      </div>
      <div className="absolute top-[309px] left-[132px] text-mini leading-[22px] text-darkgray-100 inline-block w-[475px] h-[76px]">
        Lorem ipsum dolor modo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Exproident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </div>
      <FrameComponent4 hOWTOPREVENT="HOW TO PREVENT" />
    </div>
  );
};

export default Header;
