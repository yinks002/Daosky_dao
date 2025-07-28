import { ChangeEventHandler, FC, useState } from "react";

interface InputProps {
  name: string;
  value: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
  domainLink: string;
  placeholder: string;
  required: boolean;
  maxChar?: number;
  count?: number;
}

const DomainInput: FC<InputProps> = ({
  name,
  value,
  label,
  onChange,
  type,
  domainLink,
  placeholder,
  required,
  maxChar,
  count,
}) => {
  const [focus, setIsFocus] = useState(false);
  const handleBlur = () => {
    setIsFocus(true);
  };
  return (
    <div className=" flex flex-col text-left   ">
      <label
        className=" text-[1rem] font-medium leading-[1.5rem] font-inter-tight text-[#1C2024] text-left mb-[0.5rem] "
        htmlFor={name}
      >
        {" "}
        {label}{" "}
      </label>
      <div
        className={` flex rounded-[0.75rem] border items-center w-full h-[45px] justify-between pl-[0.75rem] text-[1rem] leading-[1.5rem] font-inter-tight ${
          focus && value === "" ? "border-[#ff000632] " : null
        } `}
      >
        <input
          type={type}
          name={name}
          value={value}
          onBlur={handleBlur}
          onChange={onChange}
          maxLength={maxChar}
          required={required}
          placeholder={placeholder}
          className={`outline-none w-[80%] font-inter-tight placeholder:text-[1rem]  text-[1rem] ${
            focus && value === ""
              ? "placeholder:text-[red] placeholder:font-medium placeholder:text-[0.875rem]"
              : null
          } `}
        />
        <p className=" px-[0.75rem] font-medium text-[#007C9F] bg-[#00000006] h-full flex items-center ">
          {" "}
          {domainLink}{" "}
        </p>
      </div>
      <p className=" text-left font-inter-tight text-[0.75rem] font-medium leading-[1rem] text-[#0007149F] mt-[0.75rem]  ">
        {" "}
        {count} / {maxChar} Characters
      </p>
    </div>
  );
};

export default DomainInput;
