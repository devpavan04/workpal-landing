import { useLayoutEffect, useEffect, useRef, useState } from "react";
import NeedHelpIcon from "../svgs/need-help-robotpal-icon.svg";

export const DetailsSection = () => {

  return (
    <div className="bg-primary-one rounded-xl rounded-b-none">
      <div className="text-[white] py-[30px] lg:py-[60px]">
        <h2 className="mb-[28px] font-extraBold text-[white] text-[28px] tracking-wide text-center">
          More Details?
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[24px] lg:gap-[125px]">
          <img
            src={NeedHelpIcon}
            alt="Need help RobotPal Icon"
            className="w-[127px] lg:w-[172px]"
          />
          <div className="flex flex-col items-center lg:items-start gap-[10px]">
            <h3 className="font-extraBold uppercase tracking-wider text-center">
              All About WorkPal
            </h3>
            <p className="font-regular text-[16px] w-[296px]">
              Get more information about WorkPal, please download our proposal
              here!
            </p>
            <button className="text-center font-semiBold py-[18px] px-[40px] rounded-xl bg-secondary text-white-0 mt-[10px]">
              Download Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
