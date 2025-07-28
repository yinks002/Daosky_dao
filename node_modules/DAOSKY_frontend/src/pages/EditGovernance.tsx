import React, { useEffect, useState } from "react";
import AuthNavbar from "../components/ui-components/AuthNavbar";

import * as Slider from "@radix-ui/react-slider";
import "../styles/slider.css";

import styles from "../styles/Miscellaneous.module.css";
import { useNavigate } from "react-router-dom";

import arrowLeft from "../assets/icons/arrow-left-cyan.svg";
import arrowRightGray from "../assets/icons/arrow-right-gray.svg";
import arrowRightWhite from "../assets/icons/arrow-right-white.svg";

const EditGovernance = () => {
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState<number[]>([0]);
  const [formDetails, setFormDetails] = useState({
    days: "05",
    hours: "12",
  });
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (formDetails.days !== "" && formDetails.hours !== "") {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [formDetails.days, formDetails.hours]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  return (
    <section>
      <AuthNavbar />
      <div className="max-w-[50rem] mx-auto  px-[0.5rem] py-[1.5rem] ">
        <div
          className={` ${styles.memberBoxShadow} flex flex-col px-[1rem] py-[1.5rem] rounded-[0.75rem] gap-y-[1rem] `}
        >
          <div className=" flex items-center justify-between px-[1.5rem] py-[0.75rem] bg-[#F2FAFD] rounded-[1.5rem] ">
            <p className=" font-inter-tight text-[0.75rem] leading-[1rem] tracking-[-0.00625rem] text-[#0007149F]  ">
              <span
                className=" hover:cursor-pointer  "
                onClick={() => navigate("/dashboard")}
              >
                {" "}
                Dashboard{" "}
              </span>{" "}
              /{" "}
              <span
                className=" hover:cursor-pointer "
                onClick={() => navigate("/settings")}
              >
                {" "}
                Settings{" "}
              </span>{" "}
              /{" "}
              <span className=" font-medium text-[#007C9F] ">
                {" "}
                Edit Governance{" "}
              </span>
            </p>
          </div>
          <p className=" text-left  border-l-[0.3rem] border-[#FFBA18] pl-3 font-inter-tight text-[0.75rem] font-medium leading-[1rem] text-[#0007149F] ">
            To change a setting, a proposal will be have to be put to vote.
          </p>
          <div className=" flex flex-col gap-y-[1.5rem] mt-[0.75rem] ">
            <div>
              <p className="text-left font-medium text-[1rem] font-inter-tight text-[#1C2024] leading-[1.5rem] ">
                Set minimum percentage of members that can decide a proposal.{" "}
              </p>
              <p className=" text-left font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#0007149F] ">
                Changeable with a vote.
              </p>
              <div className=" flex items-center gap-x-[1rem] mt-[0.75rem] ">
                <Slider.Root
                  className="SliderRoot"
                  defaultValue={[25]}
                  max={100}
                  step={1}
                  onValueChange={(value: number[]) => setPercentage(value)}
                  // onValueCommit={(value: number[]) => setPercentage(value)}
                >
                  <Slider.Track className="SliderTrack">
                    <Slider.Range className="SliderRange" />
                  </Slider.Track>
                  <Slider.Thumb className="SliderThumb" aria-label="Volume" />
                </Slider.Root>
                <p className=" font-inter-tight text-[0.875rem] text-[#1C2024] leading-[1.25rem] p-[0.25rem] border border-[#00002F26] rounded-[0.375rem] flex items-center justify-center bg-[#FFFFFFE5] ">
                  {" "}
                  % {percentage || 25}{" "}
                </p>
              </div>
            </div>
            <div>
              <p className="text-left font-medium text-[1rem] font-inter-tight text-[#1C2024] leading-[1.5rem] ">
                Set minimum time that a proposal can be decided
              </p>
              <p className=" text-left font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#0007149F] ">
                Changeable with a vote.
              </p>
              <div className="mt-[0.75rem] flex gap-x-[0.75rem] ">
                <div className=" flex flex-col gap-y-[0.5rem]  ">
                  <label
                    htmlFor=""
                    className=" text-left font-inter-tight text-[0.875rem] text-[#1C2024] font-medium leading-[1.25rem] "
                  >
                    Days
                  </label>
                  <input
                    type="text"
                    placeholder="00"
                    name="days"
                    value={formDetails.days}
                    onChange={handleChange}
                    className=" border border-[#00002F26] rounded-[0.375rem] bg-[#FFFFFFE5] w-[1.8rem] px-[0.25rem] outline-none font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#1C2024] "
                  />
                </div>
                <div className=" flex flex-col gap-y-[0.5rem]  ">
                  <label
                    htmlFor=""
                    className=" text-left font-inter-tight text-[0.875rem] text-[#1C2024] font-medium leading-[1.25rem] "
                  >
                    Hours
                  </label>
                  <input
                    type="text"
                    placeholder="00"
                    name="hours"
                    value={formDetails.hours}
                    onChange={handleChange}
                    className=" border border-[#00002F26] rounded-[0.375rem] bg-[#FFFFFFE5] w-[1.8rem] px-[0.25rem] outline-none font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#1C2024] "
                  />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between ">
              <button
                onClick={() => navigate("/settings")}
                className=" bg-[#009DD80D] rounded-[624rem] py-[0.4rem] px-[1rem] flex items-center gap-x-[0.25rem] "
              >
                <img src={arrowLeft} alt="arrow_left" />
                <p className=" font-inter-tight text-1rem leading-[1.5rem] font-medium text-[#007C9F] ">
                  {" "}
                  Back{" "}
                </p>
              </button>
              <button
                onClick={() => navigate("/settings")}
                disabled={!formIsValid}
                className={` rounded-[624rem] py-[0.4rem] px-[1rem] flex items-center gap-x-[0.25rem]
                ${formIsValid ? "bg-[#0195B7] " : "disabled:bg-[#0000330F]"}
              `}
              >
                <p
                  className={`font-inter-tight text-1rem leading-[1.5rem] font-medium ${
                    formIsValid ? " text-[#FFFFFF] " : " text-[#00083046] "
                  } `}
                >
                  Create Proposal
                </p>
                {formIsValid ? (
                  <img src={arrowRightWhite} alt="arrow_right" />
                ) : (
                  <img src={arrowRightGray} alt="arrow_right" />
                )}
              </button>
            </div>
            <p className=" text-left  border-l-[0.3rem] border-[#FFBA18] pl-3 font-inter-tight text-[0.75rem] font-medium leading-[1rem] text-[#0007149F] ">
              {" "}
              Confirm details before continuing. Parameters are only changeable
              with a proposal.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditGovernance;
