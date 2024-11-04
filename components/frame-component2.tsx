import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent2Type = {
  className?: string;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  houseLeft?: CSSProperties["left"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  frameDivTop,
  frameDivLeft,
  houseLeft,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  const houseStyle: CSSProperties = useMemo(() => {
    return {
      left: houseLeft,
    };
  }, [houseLeft]);

  return (
    <div
      className={`absolute top-[125px] left-[112px] w-72 h-[314px] overflow-hidden text-left text-xl text-darkorchid-200 font-mainpragraf ${className}`}
      style={frameDiv3Style}
    >
      <div className="absolute top-[8px] left-[18px] bg-white w-60 h-[300px]" />
      <div className="absolute top-[8px] left-[18px] bg-thistle w-60 h-[130px]" />
      <b className="absolute top-[158px] left-[68px]">Stay at Home</b>
      <div className="absolute top-[193px] left-[68px] text-mini leading-[22px] text-silver inline-block w-[146px] h-[71px]">{`Lorem ipsum dolor sit amet, consectet adipiscing elit, sed `}</div>
      <Image
        className="absolute top-[33px] left-[98px] w-20 h-20 object-cover"
        width={80}
        height={80}
        alt=""
        src="/house@2x.png"
        style={houseStyle}
      />
    </div>
  );
};

export default FrameComponent2;
