import React from "react";

import enterIcon from "../../assets/icons/enter_icon.svg";
import arrowTopRightCyan from "../../assets/icons/arrow-top-right-cyan.svg";

interface NewMemberProps {
  id: number;
  number: string;
  time: string;
  imgUrl: string;
}

const NewMemberNotification = ({
  imgUrl,
  number,
  time,
  id,
}: NewMemberProps) => {
  return (
    <div
      key={id}
      className=" bg-[#FAFDFE] border border-[#00000017] rounded-[0.75rem] flex items-start font-inter-tight justify-between p-[0.75rem] "
    >
      <div className=" self-center ">
        <img
          src={imgUrl}
          alt="avatar"
          className=" h-[2.5rem] w-[2.5rem] object-cover object-center rounded-full "
        />
      </div>
      <div className="w-[70%]">
        <p className=" text-[0.875rem] w-full truncate text-left text-[#60646C] font-medium leading-[1.5rem] ">
          {" "}
          {number}{" "}
        </p>
        <div className=" flex items-center mt-[0.25rem] gap-x-[0.25rem] ">
          <img src={enterIcon} alt="enter_icon" />
          <p className=" text-[#60646C] font-[300] text-[0.75rem] leading-[1.25rem] ">
            {" "}
            {time}{" "}
          </p>
        </div>
      </div>
      <img
        src={arrowTopRightCyan}
        alt="arrow-top-right"
        className=" w-[1rem] h-[1rem] bg-[#009DD80D] rounded-full p-[0.1rem] border border-[#0097CA7D] hover:cursor-pointer "
      />
    </div>
  );
};

export default NewMemberNotification;
