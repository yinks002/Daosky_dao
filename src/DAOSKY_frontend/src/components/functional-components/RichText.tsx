// RichTextEditor.tsx

import React from "react";
import Sources from "quill";
import Delta from "quill-delta";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

interface TextProps {
  value: string;
  onChangeFunction: (
    value: string,
    delta: Delta,
    source: Sources,
    editor: ReactQuill.UnprivilegedEditor
  ) => void;
  bottomText: string;
}

const RichTextEditor: React.FC<TextProps> = ({
  value,
  onChangeFunction,
  bottomText,
}) => {
  //   const [value, setValue] = useState<string>("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],

      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
  ];

  return (
    <div className=" flex flex-col text-left w-full ">
      <label
        className=" text-[1rem] font-medium leading-[1.5rem] font-inter-tight text-[#1C2024] text-left mb-[0.5rem] "
        htmlFor="proposal-description"
      >
        Proposal Description
      </label>
      <ReactQuill
        value={value}
        onChange={onChangeFunction}
        modules={modules}
        formats={formats}
        placeholder="Enter proposal description"
        id="proposal-description"
      />
      <p className=" mt-[0.75rem] font-inter-tight text-[0.7rem] font-medium leading-[1rem] text-[#0007149F] tracking-[0.0025rem] ">
        {" "}
        {bottomText}{" "}
      </p>
    </div>
  );
};

export default RichTextEditor;
