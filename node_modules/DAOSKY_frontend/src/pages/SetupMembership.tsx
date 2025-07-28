import React, { FC, useEffect, useState } from "react";
import Navbar from "../components/ui-components/Navbar";
import { Badge, Progress } from "@radix-ui/themes";

import styles from "../styles/RadioInput.module.css";
import PrincipalIDInput from "../components/ui-components/PrincipalIDInput";
import { useNavigate } from "react-router-dom";

import logo from "../assets/icons/logo.svg";
import pasteIcon from "../assets/icons/paste-icon.svg";
import topRightIconCyan from "../assets/icons/arrow-top-right-cyan.svg";
import arrowLeft from "../assets/icons/arrow-left-cyan.svg";
import arrowRightGray from "../assets/icons/arrow-right-gray.svg";
import arrowRightWhite from "../assets/icons/arrow-right-white.svg";
import twitter from "../assets/icons/twitter-logo.svg";
import github from "../assets/icons/github-logo.svg";

const daoOptions = [
  {
    id: "1",
    title: "Public DAO",
    text: "Open to everyone, anyone to join. Can be changed with a proposal. New members can also join via invite link.",
  },
  {
    id: "2",
    title: "Private DAO",
    text: "Open only to members who are added when created. New members can only be added through a proposal.",
  },
];

interface IdState {
  index: number;
}

const SetupMembership: FC = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<IdState[]>([{ index: 1 }]);
  const addPrincipalId = () => {
    setId([...id, { index: Date.now() }]);
  };

  //   const [formDetails, setFormDetails] = useState({
  //     daoType: "",
  //   });

  const [formIsValid, setFormIsValid] = useState(false);
  const [daoType, setDaoType] = useState("");
  const [principalIdNo, setPrincipalIdNo] = useState<string>("");
  useEffect(() => {
    if (daoType !== "") {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [daoType]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrincipalIdNo(e.target.value);
  };

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { value, name } = e.target;
  //     setDaoType(value);
  //     console.log(daoType);
  //     // console.log(formDetails);
  //   };

  return (
    <section>
      <Navbar />
      <div className=" my-[6rem]  m-auto max-w-[45rem] max-[480px]:px-[1rem] max-[840px]:px-[3rem] ">
        <p className=" text-left font-inter-tight font-medium text-[2.187rem] leading-[2.5rem] text-[#0E3C49] ">
          Setup Membership
        </p>
        <p className=" text-left text-[1rem] font-inter-tight font-normal leading-[1.5rem] text-[#0007149F] ">
          Add members to your DAO and setup up how potential members can join
          your DAO.
        </p>
        <p className=" text-right mt-[1.5rem] text-[1rem] font-inter-tight font-medium leading-[1.625rem] tracking-tight text-[#007C9F] mb-[0.5rem] ">
          {" "}
          Step 2/3{" "}
        </p>
        <div className=" flex flex-col gap-y-[1.5rem] ">
          <Progress value={66.66} color="cyan" />
          <div className=" flex flex-col gap-y-[0.75rem] ">
            <p className="text-left font-inter-tight font-medium text-[1.25rem] leading-[1.75rem] tracking-tight text-[#0E3C49] ">
              {" "}
              Setup who can take part in governance{" "}
            </p>
            <div className=" flex items-center justify-between px-[1rem] py-[0.875rem] border border-[#00002F26] rounded-[0.75rem] ">
              <label htmlFor="" className={styles.label}>
                <div>
                  <div className=" flex items-center gap-x-[0.5rem] ">
                    <p className=" font-inter-tight text-[1.125rem] font-medium leading-[1.625rem] tracking-tight  text-[#00051D74]">
                      Tokenisation
                    </p>
                    <Badge radius="full" color="cyan">
                      {" "}
                      Coming soon{" "}
                    </Badge>
                  </div>
                  <p className="text-left font-inter-tight text-[0.875rem] font-medium leading-[1rem] text-[#00051D74] ">
                    {" "}
                    Only token holders can participate in governance, e.g one
                    token equals one vote.
                  </p>
                </div>
              </label>
              <input
                className={styles.radio}
                type="checkbox"
                disabled
                name="work"
                // onChange={(e) => e.target.checked}
                //   value={work.name}
                //   onChange={handleChange}
                //   id={work.id}
              />
            </div>
            <div className=" flex items-center justify-between px-[1rem] py-[0.875rem] border border-[#00002F26] rounded-[0.75rem] ">
              <label htmlFor="" className={styles.label}>
                <div>
                  <div className=" flex items-center gap-x-[0.5rem] ">
                    <p className=" font-inter-tight text-[1.125rem] font-medium leading-[1.625rem] tracking-tight  text-[#000509E3]">
                      Membership
                    </p>
                  </div>
                  <p className="text-left font-inter-tight text-[0.875rem] font-medium leading-[1rem] text-[#0007149F] ">
                    {" "}
                    Votes are based on membership, e.g one wallet equals one
                    vote.
                  </p>
                </div>
              </label>
              <input
                className={styles.radio}
                type="checkbox"
                defaultChecked
                name="work"
                id="checkbox"
                //   value={work.name}
                //   onChange={handleChange}
                //   id={work.id}
              />
            </div>
          </div>
          <div className=" grid grid-flow-col gap-x-[1rem] max-[480px]:grid-flow-row  max-[480px]:gap-y-[1rem]  ">
            {daoOptions.map((option) => {
              return (
                <div
                  key={option.id}
                  className=" flex items-center justify-between px-[1rem] py-[0.875rem] border border-[#00002F26] rounded-[0.75rem] "
                >
                  <label htmlFor={option.id} className={styles.label}>
                    <div>
                      <div className=" flex items-center gap-x-[0.5rem] ">
                        <p className=" font-inter-tight text-[0.875rem] font-medium leading-[1.625rem] tracking-tight  text-[#000509E3]">
                          {option.title}
                        </p>
                      </div>
                      <p className=" w-[95%] text-left font-inter-tight text-[0.75rem] font-normal leading-[1rem] text-[#0007149F] ">
                        {option.text}
                      </p>
                    </div>
                  </label>
                  <input
                    className={styles.radio}
                    type="radio"
                    name="daoType"
                    id={option.id}
                    onClick={() => setDaoType(option.title)}
                    // value={formDetails.daoType}
                    // onChange={handleChange}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <p className="text-left font-medium text-[1rem] font-inter-tight text-[#1C2024] leading-[1.5rem] ">
              {" "}
              Add members{" "}
            </p>
            <p className=" text-left font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#0007149F] ">
              {" "}
              There is no limit on how many members (principal IDs) can be
              added. Members may create proposals, and suggest tweaks to the
              DAO's settings after it has been created.{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-y-[0.5rem] ">
            <p className="text-left font-medium text-[1rem] font-inter-tight text-[#1C2024] leading-[1.5rem] ">
              {" "}
              Principal ID{" "}
            </p>
            <div className=" flex gap-x-[0.5rem] w-full justify-between items-center ">
              <div className=" p-[0.25rem] border border-[#00002F26] rounded-[0.75rem] bg-[#0000330F] flex items-center justify-between w-full ">
                <input
                  type="text"
                  defaultValue="rq2jn...-fqe"
                  className=" text-[1rem] font-inter-tight  leading-[1.5rem] p-[0.25rem] w-[60%] bg-transparent outline-none"
                />
                <div className=" border border-[#00062E32] p-[0.3rem] rounded-[0.5rem] hover:cursor-pointer ">
                  <img src={pasteIcon} alt="paste_icon" />
                </div>
              </div>
              <div className=" border border-[#009AC9B8] rounded-[0.5rem] p-[0.65rem] hover:cursor-pointer ">
                <img src={topRightIconCyan} alt="top_right_icon_cyan" />
              </div>
            </div>
            <p className=" text-left font-inter-tight text-[0.75rem] font-medium leading-[1rem] text-[#0007149F] ">
              {" "}
              Your principal ID is automatically a member of the DAO and can
              only be removed via a proposal.{" "}
            </p>
            <div className=" flex flex-col items-start gap-y-[1rem] mt-[1rem] ">
              {id.map((principalId) => {
                return (
                  <PrincipalIDInput
                    name="principalId"
                    value={principalIdNo}
                    onChangeFunction={onChangeHandler}
                    key={principalId.index}
                  />
                );
              })}
              <button
                onClick={() => addPrincipalId()}
                className="  border border-[#009AC9B8] rounded-[0.375rem] opacity-90 px-[1rem] py-[0.4rem] bg-[#00B8F820] text-[1rem] font-medium font-inter-tight leading-[1.5rem] text-[#007C9F] "
              >
                {" "}
                Add Principal ID{" "}
              </button>
            </div>
          </div>
          <div className=" flex items-center justify-between ">
            <button
              onClick={() => navigate("/describe-your-dao")}
              className=" bg-[#009DD80D] rounded-[624rem] py-[0.4rem] px-[1rem] flex items-center gap-x-[0.25rem] "
            >
              <img src={arrowLeft} alt="arrow_left" />
              <p className=" font-inter-tight text-1rem leading-[1.5rem] font-medium text-[#007C9F] ">
                {" "}
                Back{" "}
              </p>
            </button>
            <button
              onClick={() => navigate("/set-governance")}
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
                {" "}
                Next{" "}
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
        <div className=" flex flex-col gap-y-[2rem] items-center my-[6rem] ">
          <img src={logo} alt="brand_logo" className=" w-[6rem] " />
          <div className=" flex items-center gap-x-[0.75rem] ">
            <img src={twitter} alt="twitter_icon" />
            <img src={github} alt="github_icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupMembership;
