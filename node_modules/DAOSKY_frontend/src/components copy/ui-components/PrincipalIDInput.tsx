import React, { ChangeEventHandler } from "react";

import topRightIconGray from "../../assets/icons/arrow-top-right-gray.svg";

interface PrincipalInputProps {
  name: string;
  value: string;
  onChangeFunction: ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

const PrincipalIDInput: React.FC<PrincipalInputProps> = ({
  name,
  value,
  label,
  onChangeFunction,
}) => {
  // const [principalId, setPrincipalId] = useState("");
  return (
    <div>
      {label && (
        <p className=" text-[1rem] font-medium leading-[1.5rem] font-inter-tight text-[#1C2024] text-left mb-[0.5rem] ">
          {" "}
          {label}{" "}
        </p>
      )}
      <div className=" w-[100%] flex items-center gap-x-[0.5rem]  ">
        <div className=" flex items-center justify-between w-full border border-[#00062E32] p-[0.25rem] rounded-[0.75rem] ">
          <input
            type="text"
            placeholder="xxxxx...-xxx"
            value={value}
            name={name}
            className=" text-[1rem] font-inter-tight  leading-[1.5rem] p-[0.25rem] w-[60%] bg-transparent outline-none"
            // onChange={(e) => setPrincipalId(e.target.value)}
            onChange={onChangeFunction}
          />
          <button className="  border border-[#009AC9B8] rounded-[0.375rem] opacity-90 px-[1rem] py-[0.1rem] bg-[#00B8F820] text-[1rem] font-medium font-inter-tight leading-[1.5rem] text-[#007C9F] ">
            Paste
          </button>
        </div>
        {!label && (
          <div className=" border border-[#00062E32] rounded-[0.5rem] p-[0.65rem]  ">
            <img src={topRightIconGray} alt="top_right_arrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrincipalIDInput;
