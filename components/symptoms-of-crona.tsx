import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent from "./group-component";
import FrameComponent4 from "./frame-component4";

export type SymptomsOfCronaType = {
  className?: string;
};

const SymptomsOfCrona: NextPage<SymptomsOfCronaType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3587px] left-[0px] bg-gainsboro-200 w-[1480px] h-[786px] overflow-hidden text-left text-xl text-darkorchid-200 font-mainpragraf ${className}`}
    >
      <div className="absolute w-[45.83%] top-[39px] right-[31.67%] left-[22.5%] h-[92px] overflow-hidden text-center text-13xl text-fuchsia-100">
        <b className="absolute top-[10px] left-[calc(50%_-_173.15px)]">
          <span className="capitalize">symptoms of coronaviru</span>s
        </b>
        <b className="absolute top-[51px] left-[70px] text-mini inline-block text-gray text-left w-[578px] h-6">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="m-0 whitespace-pre-wrap">{`                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
        </b>
      </div>
      <GroupComponent />
      <GroupComponent groupDivTop="458px" />
      <div className="absolute w-[31.76%] top-[458px] right-[8.85%] left-[59.39%] h-[199px]">
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] shadow-[0px_4px_10px_rgba(152,_149,_149,_0.25)] bg-snow h-[199px]" />
        <div className="absolute w-[85.51%] top-[55px] right-[1.21%] left-[13.28%] h-[89px]">
          <b className="absolute top-[1px] left-[95px] leading-[21.4px] capitalize">
            High Fever
          </b>
          <b className="absolute top-[24px] left-[95px] text-mini leading-[21.4px] inline-block text-gray whitespace-pre-wrap w-[296px]">
            Lorem ipsum dolor sit amet, consectetur eli eiusmod tempor
            incididLorem ips amet, consectetur adipiscing elit,
          </b>
          <Image
            className="absolute w-[20.45%] top-[5px] right-[79.55%] left-[0%] max-w-full overflow-hidden h-20 object-cover"
            width={82}
            height={80}
            alt=""
            src="/2811498-11@2x.png"
          />
        </div>
      </div>
      <div className="absolute w-[31.76%] top-[206px] right-[8.72%] left-[59.53%] h-[199px]">
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] shadow-[0px_4px_10px_rgba(152,_149,_149,_0.25)] bg-snow h-[199px]" />
        <div className="absolute w-[85.51%] top-[55px] right-[1.21%] left-[13.28%] h-[89px]">
          <b className="absolute top-[1px] left-[95px] leading-[21.4px] capitalize">
            High Fever
          </b>
          <b className="absolute top-[24px] left-[95px] text-mini leading-[21.4px] inline-block text-gray whitespace-pre-wrap w-[296px]">
            Lorem ipsum dolor sit amet, consectetur eli eiusmod tempor
            incididLorem ips amet, consectetur adipiscing elit,
          </b>
          <Image
            className="absolute w-[20.45%] top-[5px] right-[79.55%] left-[0%] max-w-full overflow-hidden h-20 object-cover"
            width={82}
            height={80}
            alt=""
            src="/2811498-12@2x.png"
          />
        </div>
      </div>
      <FrameComponent4
        hOWTOPREVENT="HELPLINE"
        frameDivTop="calc(50% + 309px)"
        frameDivLeft="62.16%"
        frameDivWidth="6%"
        frameDivRight="24.23%"
        hOWTOPREVENTTextAlign="center"
        hOWTOPREVENTWidth="unset"
        hOWTOPREVENTDisplay="unset"
      />
      <div className="absolute top-[694px] left-[240px] leading-[21.4px] inline-block w-[560px] text-base text-mediumorchid-100">
        <b>Stay At Home And Call Your Doctor</b>
        <span className="text-mini text-darkgray-200">
          <span className="font-mainpragraf">.</span>
          <b className="whitespace-pre-wrap">
            Lorem ipsum dolor sit amet, consectetur eli eiusmod tempor
            incididLorem ips amet, consectetur adipiscing elit,
          </b>
        </span>
      </div>
    </div>
  );
};

export default SymptomsOfCrona;
