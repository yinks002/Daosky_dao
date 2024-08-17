import { ChangeEventHandler, useState } from "react";
import styles from "../../styles/CustomInput.module.css";

type Props = {
  type: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  placeHolder: string;
  name: string;
  value: string;
  required: boolean;
  maximumChar: number;
  label: string;
  count?: number;
  defaultValue?: string;
};

const CustomInput = ({
  type,
  onChangeHandler,
  placeHolder,
  name,
  value,
  required,
  maximumChar,
  label,
  count,
  defaultValue,
}: Props) => {
  const [focus, setIsFocus] = useState(false);
  const handleBlur = () => {
    setIsFocus(true);
  };
  return (
    <div className={styles["form-control"]}>
      <p className=" text-[1rem] font-medium leading-[1.5rem] font-inter-tight text-[#1C2024] text-left mb-[0.5rem] ">
        {" "}
        {label}{" "}
      </p>
      <input
        className={
          focus && value === ""
            ? `${styles["error-input"]}`
            : `${styles["text-input"]}`
        }
        onChange={onChangeHandler}
        onBlur={handleBlur}
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        maxLength={maximumChar}
        required={required}
        defaultValue={defaultValue}
      />
      <p className=" text-left font-inter-tight text-[0.75rem] font-medium leading-[1rem] text-[#0007149F] mt-[0.75rem]  ">
        {" "}
        {count} / {maximumChar} Characters
      </p>
    </div>
  );
};

export default CustomInput;
