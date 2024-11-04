import type { NextPage } from "next";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full top-[4971px] right-[0%] left-[0%] bg-gainsboro-200 h-[382px] overflow-hidden text-left text-mini text-darkmagenta font-mainpragraf ${className}`}
    >
      <div className="absolute top-[81px] left-[128px] w-[1012px] h-5 text-base text-black">
        <b className="absolute top-[0px] left-[0px]">About</b>
        <b className="absolute top-[0px] left-[310px]">Quick Links</b>
        <b className="absolute top-[0px] left-[622px]">Helpful Links</b>
        <b className="absolute top-[0px] left-[934px]">Resources</b>
      </div>
      <div className="absolute w-[14.53%] top-[121px] left-[9.55%] text-gray inline-block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </div>
      <div className="absolute w-[12.03%] top-[117px] right-[59.86%] left-[31.11%] h-[181px] overflow-hidden">
        <div className="absolute top-[1px] left-[22px] inline-block w-[76px] h-[21px]">
          Symptoms
        </div>
        <div className="absolute top-[32px] left-[22px] inline-block w-[77px] h-[21px]">
          Prevention
        </div>
        <div className="absolute top-[63px] left-[22px] inline-block w-[39px] h-5">
          FAQs
        </div>
        <div className="absolute top-[93px] left-[22px] inline-block w-[135px] h-[21px]">
          About Coronavirus
        </div>
        <div className="absolute top-[124px] left-[22px] inline-block w-[79px] h-[21px]">
          Contact Us
        </div>
      </div>
      <div className="absolute w-[13.64%] top-[121px] right-[37.64%] left-[54.50%] h-[141px] overflow-hidden">
        <div className="absolute top-[30px] left-[14px] inline-block w-[116px] h-[21px]">
          LGU Facilities
        </div>
        <div className="absolute top-[-1px] left-[14px] inline-block w-[173px] h-[21px]">
          Healthcare Professional
        </div>
        <div className="absolute w-[84.49%] top-[61px] left-[7.49%] inline-block h-5">
          Protect Your Family
        </div>
        <div className="absolute top-[91px] left-[14px] inline-block w-[135px] h-[21px]">
          World Health
        </div>
      </div>
      <div className="absolute w-[12.64%] top-[120px] right-[16.35%] left-[77.50%] h-[141px] overflow-hidden">
        <div className="absolute top-[30px] left-[14px] inline-block w-[116px] h-[21px]">
          CDC Website
        </div>
        <div className="absolute top-[-1px] left-[14px] inline-block w-[173px] h-[21px]">
          WHO Website
        </div>
        <div className="absolute w-[84.49%] top-[61px] left-[7.49%] inline-block h-5">
          GOV Website
        </div>
        <div className="absolute top-[91px] left-[14px] inline-block w-[135px] h-[21px]">
          DOH Website
        </div>
      </div>
      <div className="absolute w-[16.86%] top-[229px] right-[78.11%] left-[7.03%] h-[62px] overflow-hidden">
        <Image
          className="absolute w-[13.64%] top-[9px] right-[75%] left-[11.36%] max-w-full overflow-hidden h-[30px] object-cover"
          width={30}
          height={30}
          alt=""
          src="/facebook@2x.png"
        />
        <Image
          className="absolute w-[13.64%] top-[9px] right-[56.82%] left-[29.55%] max-w-full overflow-hidden h-[30px] object-cover"
          width={30}
          height={30}
          alt=""
          src="/twitter@2x.png"
        />
        <Image
          className="absolute top-[4px] left-[105px] w-10 h-10 object-cover"
          width={40}
          height={40}
          alt=""
          src="/instagram-logo@2x.png"
        />
        <Image
          className="absolute top-[4px] left-[155px] w-10 h-10 object-cover"
          width={40}
          height={40}
          alt=""
          src="/youtube-icon@2x.png"
        />
      </div>
    </div>
  );
};

export default Footer;
