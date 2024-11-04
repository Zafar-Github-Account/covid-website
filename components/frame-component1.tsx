import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
  symptoms?: string;

  /** Style props */
  frameDivLeft?: CSSProperties["left"];
  frameDivTop?: CSSProperties["top"];
  rottenTomatoesTop?: CSSProperties["top"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  symptoms,
  frameDivLeft,
  frameDivTop,
  rottenTomatoesTop,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: frameDivLeft,
      top: frameDivTop,
    };
  }, [frameDivLeft, frameDivTop]);

  const rottenTomatoesStyle: CSSProperties = useMemo(() => {
    return {
      top: rottenTomatoesTop,
    };
  }, [rottenTomatoesTop]);

  return (
    <div
      className={`absolute top-[24px] left-[-3px] w-[218px] h-[70px] overflow-hidden text-left text-mini text-gray font-mainpragraf ${className}`}
      style={frameDiv2Style}
    >
      <div className="absolute top-[18px] left-[54px] w-[190px] h-[54px] overflow-hidden">
        <div className="absolute top-[13px] left-[10px] leading-[21.4px] inline-block w-[180px] h-[18px]">{`Exproident, sunt in `}</div>
        <b className="absolute top-[-3px] left-[10px] text-base inline-block text-darkorchid-200 w-[120px] h-[22px]">
          {symptoms}
        </b>
      </div>
     
    </div>
  );
};

export default FrameComponent1;
