import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import Image from "next/image";

export type CronavirusStatisticsType = {
  className?: string;
};

const CronavirusStatistics: NextPage<CronavirusStatisticsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[520px] left-[0px] w-[1480px] h-[347px] overflow-hidden text-left text-17xl text-black font-mainpragraf ${className}`}
    >
      <FrameComponent prop="55,675,76" aCTIVECASE="ACTIVE CASE" />
      <FrameComponent
        prop="44,655,66"
        aCTIVECASE="DEATH CASE"
        frameDivTop="175px"
        frameDivLeft="645px"
        aCTIVECASEWidth="86px"
      />
      <FrameComponent
        prop="32,548,66"
        aCTIVECASE="RECOVERED CASE"
        frameDivTop="175px"
        frameDivLeft="1164px"
        aCTIVECASEWidth="119px"
      />
      <div className="absolute top-[31px] left-[410px] w-[660px] h-[92px] overflow-hidden text-13xl text-fuchsia-100">
        <b className="absolute top-[10px] left-[174px]">
          Coronavirus Statistics
        </b>
        <b className="absolute top-[51px] left-[53px] text-mini inline-block text-gray w-[595px] h-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </b>
      </div>
    </div>
  );
};

export default CronavirusStatistics;
