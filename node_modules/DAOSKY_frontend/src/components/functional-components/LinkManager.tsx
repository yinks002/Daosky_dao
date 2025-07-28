import React, { FC, useState } from "react";
import LinkInput from "../ui-components/LinkInput";

interface LinkManagerProps {
  id: number;
}

const LinkManager: FC = () => {
  const [links, setLinks] = useState<LinkManagerProps[]>([]);
  const addLink = () => {
    setLinks([...links, { id: Date.now() }]);
  };
  const removeLink = (id: number) => {
    setLinks(links.filter((link) => link.id !== id));
  };
  return (
    <div className=" flex flex-col gap-y-[1.5rem] ">
      {links.map((link) => {
        return <LinkInput key={link.id} onRemove={() => removeLink(link.id)} />;
      })}
      <button
        className=" bg-[#00B8F820] py-[0.4rem] px-[1rem] w-fit text-[#007C9F] rounded-[0.75rem] font-medium font-inter-tight leading-[1.5rem] "
        onClick={addLink}
      >
        {" "}
        Add Link{" "}
      </button>
    </div>
  );
};

export default LinkManager;
