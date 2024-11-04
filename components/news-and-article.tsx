import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent3 from "./frame-component3";

export type NewsAndArticleType = {
  className?: string;
};

const NewsAndArticle: NextPage<NewsAndArticleType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full top-[4412px] right-[0%] left-[0%] h-[539px] overflow-hidden text-center text-mini text-gray font-mainpragraf ${className}`}
    >
      <div className="absolute w-[46.39%] top-[24px] right-[26.72%] left-[26.89%] h-[65px] text-13xl text-fuchsia-100">
        <b className="absolute top-[0px] left-[calc(50%_-_215.25px)] capitalize inline-block w-[372px]">
          News And Articles
        </b>
        <b className="absolute top-[41px] left-[0px] text-mini inline-block text-gray text-left w-[578px] h-6">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <p className="m-0 whitespace-pre-wrap">{`                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
        </b>
      </div>
      <div className="absolute top-[196px] left-[128px] w-[1220px] h-[214px]">
        <Image
          className="absolute top-[0px] left-[418px] w-[385.1px] h-[214px] object-cover"
          width={385}
          height={214}
          alt=""
          src="/covid2-1@2x.png"
        />
        <Image
          className="absolute top-[0px] left-[831.6px] w-[388.4px] h-[214px] object-cover"
          width={388}
          height={214}
          alt=""
          src="/images-1-1@2x.png"
        />
        <Image
          className="absolute top-[0px] left-[0px] w-[386.2px] h-[214px] object-cover"
          width={386}
          height={214}
          alt=""
          src="/covid-2@2x.png"
        />
      </div>
      <div className="absolute top-[440px] left-[146px] w-[374px] h-[67px] overflow-hidden text-left">
        <div className="absolute top-[9px] left-[33px] w-[78px] h-[19px]">
          <Image
            className="absolute top-[1px] left-[0px] w-[18px] h-[18px] object-cover"
            width={18}
            height={18}
            alt=""
            src="/male-user@2x.png"
          />
          <b className="absolute top-[0px] left-[26px]">ADMIN</b>
        </div>
        <div className="absolute top-[8px] left-[156px] w-[78px] h-[19px]">
          <div className="absolute top-[0px] left-[0px] w-[126px] h-[19px]">
            <Image
              className="absolute top-[1px] left-[0px] w-[18px] h-[18px] object-cover"
              width={18}
              height={18}
              alt=""
              src="/male-user@2x.png"
            />
            <b className="absolute top-[0px] left-[26px]">4 COMMENTS</b>
          </div>
        </div>
        <div className="absolute top-[31px] left-[11px] font-semibold text-darkmagenta inline-block w-[316px] h-9">
          HOW CORONAVIRUS IS VERY DANGEROUS
        </div>
      </div>
      <FrameComponent3 />
      <FrameComponent3 frameDivLeft="978px" />
      <div className="absolute w-[71.81%] top-[389px] right-[13.95%] left-[18.24%] h-[45px] text-xl text-white">
        <div className="absolute w-[20.48%] top-[7px] right-[79.52%] left-[0%] bg-darkmagenta h-[38px] overflow-hidden">
          <b className="absolute top-[6px] left-[37px] capitalize inline-block w-[141px]">
            10 DEC 2021
          </b>
        </div>
        <div className="absolute w-[20.48%] top-[0px] right-[39.56%] left-[39.96%] bg-darkmagenta h-[38px] overflow-hidden">
          <b className="absolute top-[6px] left-[37px] capitalize inline-block w-[141px]">
            12 DEC 2022
          </b>
        </div>
        <div className="absolute w-[20.48%] top-[0px] right-[0%] left-[79.52%] bg-darkmagenta h-[38px] overflow-hidden">
          <b className="absolute top-[6px] left-[38.1px] capitalize inline-block w-[141px]">
            15 DEC 2023
          </b>
        </div>
      </div>
    </div>
  );
};

export default NewsAndArticle;
