import React, { FC, useState } from "react";

import styles from "../../styles/LinkInput.module.css";

interface LinkInputProps {
  onRemove: () => void;
}

const LinkInput: FC<LinkInputProps> = ({ onRemove }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [titleFocus, setTitleIsFocus] = useState(false);
  const [linkFocus, setLinkIsFocus] = useState(false);
  const handleTitleBlur = () => {
    setTitleIsFocus(true);
  };
  const handleLinkBlur = () => {
    setLinkIsFocus(true);
  };
  return (
    <div className=" flex gap-x-[1rem] items-end max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-y-[1rem] max-[480px]:w-full  ">
      <div className=" flex flex-col w-[40%] gap-y-[0.5rem] max-[480px]:w-full ">
        <label className=" text-left font-inter-tight text-[1rem] leading-[1.5rem] text-[#1C2024] ">
          {" "}
          Title{" "}
        </label>
        <input
          type="text"
          placeholder="e.g Twitter"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className={
            titleFocus && title === ""
              ? `${styles["error-input"]}`
              : `${styles["text-input"]}`
          }
          onBlur={handleTitleBlur}
        />
      </div>
      <div className="flex flex-col w-[40%] gap-y-[0.5rem] max-[480px]:w-full ">
        <label className=" text-left font-inter-tight text-[1rem] leading-[1.5rem] text-[#1C2024] ">
          {" "}
          Link{" "}
        </label>
        <input
          type="text"
          placeholder="https://"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onBlur={handleLinkBlur}
          className={
            linkFocus && link === ""
              ? `${styles["error-input"]}`
              : `${styles["text-input"]}`
          }
        />
      </div>
      <button
        onClick={onRemove}
        className="  border border-[#009AC9B8] rounded-[0.375rem] opacity-90 px-[1rem] py-[0.1rem] bg-[#00B8F820] text-[1rem] font-medium font-inter-tight leading-[1.5rem] text-[#007C9F] "
      >
        Remove
      </button>
    </div>
  );
};

export default LinkInput;
