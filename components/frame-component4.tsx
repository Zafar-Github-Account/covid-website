import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  className?: string;
  hOWTOPREVENT?: string;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
  frameDivWidth?: CSSProperties["width"];
  frameDivRight?: CSSProperties["right"];
  hOWTOPREVENTTextAlign?: CSSProperties["textAlign"];
  hOWTOPREVENTWidth?: CSSProperties["width"];
  hOWTOPREVENTDisplay?: CSSProperties["display"];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  className = "",
  hOWTOPREVENT,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
  frameDivRight,
  hOWTOPREVENTTextAlign,
  hOWTOPREVENTWidth,
  hOWTOPREVENTDisplay,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
      right: frameDivRight,
    };
  }, [frameDivTop, frameDivLeft, frameDivWidth, frameDivRight]);

  const hOWTOPREVENTStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: hOWTOPREVENTTextAlign,
      width: hOWTOPREVENTWidth,
      display: hOWTOPREVENTDisplay,
    };
  }, [hOWTOPREVENTTextAlign, hOWTOPREVENTWidth, hOWTOPREVENTDisplay]);

  return (
    <div
      className={`absolute top-[433px] left-[132px] rounded-xl bg-darkmagenta w-[155px] h-9 overflow-hidden text-left text-mini text-white font-mainpragraf ${className}`}
      style={frameDivStyle}
    >
      <div
        className="absolute top-[7px] left-[9px] leading-[22px] inline-block w-[138px]"
        style={hOWTOPREVENTStyle}
      >
        {hOWTOPREVENT}
      </div>
    </div>
  );
};

export default FrameComponent4;
