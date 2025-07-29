import React, { useEffect, useState } from "react";
import AuthNavbar from "../components/ui-components/AuthNavbar";
import RichTextEditor from "../components/functional-components/RichText";

// imported assets
import arrowRightWhite from "../assets/icons/arrow-right-white.svg";
import arrowRightGray from "../assets/icons/arrow-right-gray.svg";
import PrincipalIDInput from "../components/ui-components/PrincipalIDInput";

import styles from "../styles/Miscellaneous.module.css";

const AddMember = () => {
  const [formDetails, setFormDetails] = useState({
    pricipalIdNo: "",
    days: "",
    hours: "",
  });
  const [description, setDescription] = useState<string>("");
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  }

  useEffect(() => {
    if (
      description !== "" &&
      formDetails.pricipalIdNo !== "" &&
      formDetails.days !== "" &&
      formDetails.hours !== ""
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    description,
    formDetails.pricipalIdNo,
    formDetails.days,
    formDetails.hours,
  ]);

  return (
    <section>
      <AuthNavbar />
      <div className="max-w-[50rem] mx-auto  px-[0.5rem] py-[1.5rem] ">
        <div
          className={` ${styles.memberBoxShadow} px-[1rem] py-[1.5rem] rounded-[0.75rem] `}
        >
          <div className=" flex items-center justify-between px-[1.5rem] py-[0.75rem] bg-[#F2FAFD] rounded-[1.5rem] ">
            <p className=" font-inter-tight text-[1.5rem] leading-[1.875rem] tracking-[-0.00625rem] font-medium text-[#0E3C49]  ">
              Add Member
            </p>
          </div>
          <p className=" text-left mt-[1rem]  border-l-[0.3rem] border-[#0195B7] pl-3 font-inter-tight text-[0.75rem] font-medium leading-[1rem] text-[#0007149F] ">
            To add a member to a private DAO, a proposal must be created.
          </p>
          <div className=" flex flex-col gap-y-[1.5rem] mt-[1.5rem] ">
            <PrincipalIDInput
              name="pricipalIdNo"
              onChangeFunction={handleChange}
              value={formDetails.pricipalIdNo}
              label="Principal ID"
            />
            <RichTextEditor
              value={description}
              onChangeFunction={setDescription}
              bottomText="Type the purpose of your proposal. Description will be shown to all members."
            />
            <div>
              <p className="text-left font-medium text-[1rem] font-inter-tight text-[#1C2024] leading-[1.5rem] ">
                Set time proposal can be decided
              </p>
              <div className="mt-[0.75rem] flex gap-x-[0.75rem] ">
                <div className=" flex flex-col gap-y-[0.5rem]  ">
                  <label
                    htmlFor={formDetails.days}
                    className="  text-left font-inter-tight text-[0.875rem] text-[#1C2024] font-medium leading-[1.25rem] "
                  >
                    Days
                  </label>
                  <input
                    type="tel"
                    placeholder="00"
                    maxLength={2}
                    name="days"
                    value={formDetails.days}
                    onChange={handleChange}
                    className=" border border-[#00002F26] rounded-[0.375rem] bg-[#FFFFFFE5] w-[1.8rem] px-[0.25rem] outline-none font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#1C2024] "
                  />
                </div>
                <div className=" flex flex-col gap-y-[0.5rem]  ">
                  <label
                    htmlFor={formDetails.hours}
                    className=" text-left font-inter-tight text-[0.875rem] text-[#1C2024] font-medium leading-[1.25rem] "
                  >
                    Hours
                  </label>
                  <input
                    type="tel"
                    placeholder="00"
                    name="hours"
                    maxLength={2}
                    value={formDetails.hours}
                    onChange={handleChange}
                    className=" border border-[#00002F26] rounded-[0.375rem] bg-[#FFFFFFE5] w-[1.8rem] px-[0.25rem] outline-none font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#1C2024] "
                  />
                </div>
              </div>
              <p className="mt-[0.75rem] text-left font-inter-tight text-[0.7rem] font-medium leading-[1rem] text-[#0007149F] tracking-[0.0025rem]">
                {" "}
                Minimum time above is default. (Changeable with proposal){" "}
              </p>
            </div>
            <button
              // onClick={() => navigate("/proposals/create-proposal")}
              disabled={!formIsValid}
              className={` rounded-[624rem] py-[0.4rem] px-[1rem] flex items-center gap-x-[0.25rem]
                 w-fit ${
                   formIsValid ? " bg-[#0195B7]" : " disabled:bg-[#0000330F] "
                 }
              `}
            >
              <p
                className={`font-inter-tight text-[0.875rem] leading-[1.5rem] font-medium  ${
                  formIsValid ? "text-white" : "text-[#00083046]"
                } `}
              >
                Add Member
              </p>
              {formIsValid ? (
                <img src={arrowRightWhite} alt="arrow_right" />
              ) : (
                <img src={arrowRightGray} alt="arrow_right" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddMember;
