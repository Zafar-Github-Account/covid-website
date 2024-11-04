import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type GroupComponentType = {
  className?: string;

  /** Style props */
  groupDivTop?: CSSProperties["top"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  groupDivTop,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: groupDivTop,
    };
  }, [groupDivTop]);

  return (
    <div
      className={`absolute top-[206px] left-[130px] w-[470px] h-[199px] text-left text-xl text-darkorchid-200 font-mainpragraf ${className}`}
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_10px_rgba(152,_149,_149,_0.25)] bg-snow w-[470px] h-[199px]" />
      <div className="absolute w-[85.51%] top-[55px] right-[5.4%] left-[9.09%] h-[89px]">
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
          src="/2811498-1@2x.png"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
