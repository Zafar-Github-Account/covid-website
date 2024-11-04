import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent3Type = {
  className?: string;

  /** Style props */
  frameDivLeft?: CSSProperties["left"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  frameDivLeft,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  return (
    <div
      className={`absolute top-[440px] left-[574px] w-[374px] h-[67px] overflow-hidden text-left text-mini text-gray font-mainpragraf ${className}`}
      style={frameDiv4Style}
    >
      <div className="absolute top-[8px] left-[169px] w-[78px] h-[19px]">
        <div className="absolute top-[0px] left-[-13px] w-[126px] h-[19px]">
          <Image
            className="absolute top-[1px] left-[0px] w-[18px] h-[18px] object-cover"
            width={18}
            height={18}
            alt=""
            src="/male-user@2x.png"
          />
          <b className="absolute top-[0px] left-[26px]">4 COMMENTS</b>
        </div>
        <div className="absolute top-[1px] left-[-136px] w-[78px] h-[19px]">
          <Image
            className="absolute top-[1px] left-[0px] w-[18px] h-[18px] object-cover"
            width={18}
            height={18}
            alt=""
            src="/male-user@2x.png"
          />
          <b className="absolute top-[0px] left-[26px]">ADMIN</b>
        </div>
      </div>
      <div className="absolute top-[31px] left-[11px] font-semibold text-darkmagenta">
        HOW CORONAVIRUS IS VERY DANGEROUS
      </div>
    </div>
  );
};

export default FrameComponent3;
