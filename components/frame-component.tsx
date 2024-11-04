import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
  prop?: string;
  aCTIVECASE?: string;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  aCTIVECASEWidth?: CSSProperties["width"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  prop,
  aCTIVECASE,
  frameDivTop,
  frameDivLeft,
  aCTIVECASEWidth,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  const aCTIVECASEStyle: CSSProperties = useMemo(() => {
    return {
      width: aCTIVECASEWidth,
    };
  }, [aCTIVECASEWidth]);

  return (
    <div
      className={`absolute top-[181px] left-[127px] w-[184px] h-[140px] text-left text-17xl text-black font-mainpragraf ${className}`}
      style={frameDiv1Style}
    >
      <Image
        className="absolute top-[0px] left-[59px] w-[50.7px] h-[50px] object-cover"
        width={51}
        height={50}
        alt=""
        src="/file-1-1@2x.png"
      />
      <b className="absolute top-[65px] left-[0px]">{prop}</b>
      <b
        className="absolute top-[125px] left-[41px] text-xs inline-block text-gray w-[86px] h-[15px]"
        style={aCTIVECASEStyle}
      >
        {aCTIVECASE}
      </b>
    </div>
  );
};

export default FrameComponent;
