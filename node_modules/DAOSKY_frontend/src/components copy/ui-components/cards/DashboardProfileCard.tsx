import React from "react";

import indegeneLabCover from "../../../assets/images/indegene_labs.jpeg";
import indegeneLabPp from "../../../assets/images/pp_indigene_labs.jpeg";
import checkCircle from "../../../assets/icons/check-circled.svg";
import pasteIcon from "../../../assets/icons/paste-icon.svg";
import profileIcon from "../../../assets/icons/profile_blue.svg";
import calendar from "../../../assets/icons/calendar.svg";
import avatar from "../../../assets/icons/avatar.svg";

import { Link } from "react-router-dom";

import styles from "../../../styles/Miscellaneous.module.css";

const DashboardProfileCard = () => {
  return (
    <div
      className={`  ${styles.dashboardProfileBoxShadow} rounded-[0.75rem] bg-[#FAFDFE] px-[1rem] py-[1.5rem] `}
    >
      <div className=" w-full h-[10rem] rounded-[0.5rem] ">
        <img
          src={indegeneLabCover}
          alt="cover_photo"
          className=" w-full h-full object-cover object-center rounded-[0.5rem] "
        />
      </div>
      <div className="  mt-[-3rem] px-[1.5rem] ">
        <img
          src={indegeneLabPp}
          alt="profile_picture"
          className=" w-[6rem] h-[6rem] object-cover object-center rounded-full mb-[0.5rem] "
        />
        <div className=" flex items-center gap-x-[0.5rem] font-inter-tight  ">
          <p className=" text-[2.2rem] font-medium text-[#0E3C49] tracking-tight leading-[2.5rem] ">
            Revoltur
          </p>
          <div className=" flex items-center gap-x-[0.38rem] px-[0.5rem] py-[0.25rem] rounded-[625rem] bg-[#00b8f821] ">
            <img src={checkCircle} alt="check_circle" />
            <p className=" text-[0.75rem] font-medium leading-[1rem] text-[#0E3C49] ">
              {" "}
              Member{" "}
            </p>
          </div>
        </div>
        <div className=" flex justify-between items-center ">
          <div className=" flex flex-col w-[75%] ">
            <div className=" flex items-center gap-x-[0.5rem] font-inter-tight text-[0.875rem] leading-[1.25rem] font-medium text-[#007C9F] mt-[0.5rem] ">
              <p> revoltur.daosky.io </p>
              <img
                src={pasteIcon}
                alt="paste_icon"
                className=" hover:cursor-pointer "
              />
            </div>
            <div className=" flex items-center gap-x-[0.5rem] font-inter-tight text-[0.875rem] leading-[1.25rem] font-medium text-[#007C9F] ">
              <p> 3ff5858a-c0a2-437a-9153-4e61a9dfed03 </p>
              <img
                src={pasteIcon}
                alt="paste_icon"
                className=" hover:cursor-pointer "
              />
            </div>
            <p className="text-left font-inter-tight text-[#475467] text-[1rem] leading-[1.5rem] mt-[0.25rem] ">
              Pizza ipsum dolor meat lovers buffalo. Sautéed hand string thin
              ranch lasagna roll green. Beef extra large NY beef wing mozzarella
              mozzarella anchovies mushrooms.
            </p>
            <div className=" flex items-center gap-x-[0.5rem] mt-[0.25rem] ">
              <Link
                className=" font-inter-tight text-[0.875rem] font-medium leading-[1.25rem] text-[#007C9F] border-b border-b-[#00a9e647] "
                to=""
              >
                Twitter
              </Link>
              <Link
                className=" font-inter-tight text-[0.875rem] font-medium leading-[1.25rem] text-[#007C9F] border-b border-b-[#00a9e647] "
                to=""
              >
                {" "}
                Github{" "}
              </Link>
              <Link
                className=" font-inter-tight text-[0.875rem] font-medium leading-[1.25rem] text-[#007C9F] border-b border-b-[#00a9e647] "
                to=""
              >
                {" "}
                Discord{" "}
              </Link>
            </div>
          </div>
          <div className=" flex flex-col gap-y-[0.62rem] items-end ">
            <div className=" rounded-full bg-transparent border border-[#0034dc72] flex items-center gap-x-[0.25rem] px-[0.38rem] py-[0.12rem] w-fit  ">
              <img src={profileIcon} alt="profile_icon" />

              <p className="text-[#002bb7c4] text-[0.75rem] font-medium leading-[1rem]">
                4055
              </p>
            </div>
            <div className=" rounded-full bg-transparent border border-[#2b00d066] flex items-center gap-x-[0.25rem] px-[0.38rem] py-[0.12rem] ">
              <img src={calendar} alt="profile_icon" />

              <p className="text-[#1f0099af] text-[0.75rem] font-medium leading-[1rem]">
                July, 2024
              </p>
            </div>
            <div className=" rounded-full bg-transparent border border-[#9000a56d] flex items-center gap-x-[0.25rem] px-[0.38rem] py-[0.12rem] ">
              <img src={avatar} alt="profile_icon" />

              <p className="text-[#730086c1] text-[0.75rem] font-medium leading-[1rem]">
                Member-based
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileCard;
