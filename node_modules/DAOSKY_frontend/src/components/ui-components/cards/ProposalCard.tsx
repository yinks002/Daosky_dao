import React from "react";
import * as Progress from "@radix-ui/react-progress";

import radioButtonIcon from "../../../assets/icons/radiobutton.svg";
import checkedIconCyan from "../../../assets/icons/check-circled-cyan.svg";
import checkedIconRed from "../../../assets/icons/check-circled-red.svg";
import checkedIconGreen from "../../../assets/icons/check-circled-green.svg";
import crossedIcon from "../../../assets/icons/cross-circled.svg";
import clockIcon from "../../../assets/icons/clock.svg";
import fileTextIcon from "../../../assets/icons/file-text.svg";
import avatarIcon from "../../../assets/icons/avatar_black.svg";
import pasteIcon from "../../../assets/icons/paste-icon.svg";

import "../../../styles/progress.css";
// import { useNavigate } from "react-router-dom";

interface ProposalCardProps {
  id: number;
  title: string;
  voted: boolean;
  article: string;
  address: string;
  timeLeft: string;
  percentAccepted: number;
  percentRejected: number;
  status?: string;
  live?: boolean;
}

const ProposalCard = ({
  id,
  title,
  voted,
  article,
  address,
  status,
  timeLeft,
  live,
  percentAccepted,
  percentRejected,
}: ProposalCardProps) => {
  // const navigate = useNavigate()
  return (
    <div
      key={id}
      //   onClick={ () => navigate(`${}`) }
      className={`flex flex-col gap-y-[0.75rem]  ${
        percentRejected > percentAccepted ? "bg-[#FFFCFC]" : "bg-[#FAFDFE]"
      } rounded-[1rem] border border-[#00000017] p-[1rem] `}
    >
      <div className=" flex items-center justify-between font-inter-tight ] ">
        <p className=" text-[#1C2024] font-medium text-[1.25rem] leading-[1.75rem] tracking-[-0.005rem] ">
          {" "}
          {title}{" "}
        </p>
        <div className=" flex items-center gap-x-[0.25rem] text-[0.75rem] font-medium ">
          {live && (
            <div className=" flex items-center gap-x-[0.38rem] px-[0.38rem] py-[0.1rem] bg-[#FF9C0029] rounded-full  ">
              <img src={radioButtonIcon} alt="radio_icon" />
              <p className=" text-[#CC4E00C5] leading-[1rem] "> Live </p>
            </div>
          )}
          {voted && (
            <div className=" flex items-center gap-x-[0.38rem] px-[0.38rem] py-[0.1rem] bg-[#00B8F820] rounded-full ">
              <img src={checkedIconCyan} alt="checked_icon" />
              <p className=" text-[#007C9F] leading-[1rem] ">
                {" "}
                {voted ? "Voted" : "Not Voted"}{" "}
              </p>
            </div>
          )}
          {status === "executed" ? (
            <div className=" flex items-center gap-x-[0.38rem] px-[0.38rem] py-[0.1rem] bg-[#00A43319] rounded-full ">
              <img src={checkedIconGreen} alt="checked_icon" />
              <p className=" text-[#00713FDE] leading-[1rem] ">Executed</p>
            </div>
          ) : status === "defeated" ? (
            <div className=" flex items-center gap-x-[0.38rem] px-[0.38rem] py-[0.1rem] bg-[#F3000D14] rounded-full ">
              <img src={crossedIcon} alt="checked_icon" />
              <p className=" text-[#C40006D3] leading-[1rem] ">Defeated</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className=" flex items-start gap-x-[0.25rem] ">
        <img src={fileTextIcon} alt="file-text-icon" />
        <p className=" text-left font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#60646C] line-clamp-3 ">
          {article}
        </p>
      </div>
      <div className=" flex items-center gap-x-[0.25rem] ">
        <img src={avatarIcon} alt="avatar" />
        <p className="text-left font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#60646C]">
          {" "}
          {address}{" "}
        </p>
        <img src={pasteIcon} alt="paste-icon" />
      </div>
      <div className=" flex items-center gap-x-[0.25rem] ">
        <img src={clockIcon} alt="clock-icon" />
        <p className="text-left font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#60646C] ">
          {" "}
          {timeLeft}{" "}
          {status === "executed" || status === "defeated" ? "Ago" : "Left"}
        </p>
      </div>
      <div className=" flex items-center w-full rounded-md border border-[#0009321F] ">
        <div className=" w-[50%] ">
          <Progress.Root className="ProgressRoot" value={percentAccepted}>
            <Progress.Indicator
              className="ProgressIndicatorAccepted"
              style={{ transform: `translateX(-${100 - percentAccepted}%)` }}
            />
          </Progress.Root>
          <div></div>
        </div>
        <div className=" w-[50%] ">
          <Progress.Root className="ProgressRoot" value={percentRejected}>
            <Progress.Indicator
              className="ProgressIndicatorRejected"
              style={{ transform: `translateX(${100 - percentRejected}%)` }}
            />
          </Progress.Root>
        </div>
      </div>
      <div className=" flex items-center justify-between font-inter-tight text-[0.75rem] leading-[1rem]  ">
        <div className=" flex items-center py-[0.125rem] px-[0.375rem] gap-x-[0.375rem] border border-[#009AC9B8] rounded-full  ">
          <img src={checkedIconCyan} alt="checked_icon" />
          <p className=" text-[#007C9F] "> Accepted by {percentAccepted}% </p>
        </div>
        <div className=" flex items-center py-[0.125rem] px-[0.375rem] gap-x-[0.375rem] border border-[#D2000571] rounded-full  ">
          <img src={checkedIconRed} alt="checked_icon" />
          <p className=" text-[#C40006D3] "> Rejected by {percentRejected}% </p>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
