import styles from "../../styles/Navlink.module.css";

import { NavLink } from "react-router-dom";
import * as Popover from "@radix-ui/react-popover";

// imported assets
import dropDownIcon from "../../assets/icons/drop_down_icon.svg";
import avatar from "../../assets/images/avatar.jpeg";
import topRightCyan from "../../assets/icons/arrow-top-right-cyan.svg";

// imported styles
import "../../styles/popover.css";
import { useState } from "react";

const accountOption = [
  {
    id: "1",
    name: "Revoltur",
    link: "revoltur.daosky.io",
  },
  {
    id: "2",
    name: "The Boyz",
    link: "theboyz.daosky.io",
  },
];

const AuthNavbar = () => {
  const [acct, setAcct] = useState({
    name: "Revoltur",
    link: "revoltur.daosky.io",
  });
  return (
    <section className=" flex justify-between items-center py-[0.75rem] px-[3rem] max-w-[90rem] mx-auto">
      <div className=" flex items-center gap-x-[0.75rem] ">
        <div className="flex flex-col font-inter-tight text-[#1C2024] text-left ">
          <p className="text-[1.125rem]  tracking-tight leading-[1.625rem] font-medium">
            {acct.name}
          </p>
          <p className=" text-[0.75rem] leading-[1rem] ">{acct.link}</p>
        </div>
        <Popover.Root>
          <Popover.Trigger asChild>
            <img src={dropDownIcon} alt="drop_down_icon" />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent" sideOffset={5}>
              <div className=" flex flex-col gap-y-[0.5rem] ">
                <p className=" font-inter-tight text-[1.25rem] leading-[1.75rem] font-medium text-[#0E3C49] tracking-[-0.005rem] ">
                  Switch
                </p>
                <div className=" flex flex-col gap-y-[0.5rem] ">
                  {accountOption.map((option) => {
                    return (
                      <div
                        onClick={() =>
                          setAcct({ name: option.name, link: option.link })
                        }
                        key={option.id}
                        className=" flex items-center justify-between px-[0.75rem] py-[0.625rem] border border-[#00002F26] rounded-[0.75rem] "
                      >
                        <label htmlFor={option.id} className={styles.label}>
                          <div>
                            <div className=" flex items-center gap-x-[0.5rem] ">
                              <p className=" font-inter-tight text-[1.125rem] font-medium leading-[1.625rem] tracking-tight  text-[#1C2024]">
                                {option.name}
                              </p>
                            </div>
                            <p className=" w-[95%] text-left font-inter-tight text-[0.75rem] font-[300] leading-[1rem] text-[#0007149F] ">
                              {option.link}
                            </p>
                          </div>
                        </label>
                        <input
                          className={styles.radio}
                          type="radio"
                          name="daoType"
                          id={option.id}
                        />
                      </div>
                    );
                  })}
                </div>
                <button
                  className=" flex items-center justify-center gap-x-[0.5rem] px-[1rem] bg-[#009DD80D] rounded-full border border-[#0097CA7D] h-[2.5rem] "
                  onClick={() => {
                    // navigate("/dashboard");
                  }}
                >
                  <p className=" font-inter-tight text-[1rem] leading-[1.5rem] font-medium text-[#007C9F] ">
                    Explore Public DAOs
                  </p>
                  <img
                    src={topRightCyan}
                    alt="profile_picture"
                    className=" h-[1.125rem] w-[1.125rem] object-cover object-center rounded-full "
                  />
                </button>
              </div>
              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
      <div className=" flex items-center gap-[0.5rem] px-[0.75rem] py-[0.5rem] bg-[#009DD80D] rounded-full ">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.notActive}`
          }
        >
          {" "}
          Dashboard{" "}
        </NavLink>
        <NavLink
          to="/proposals"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.notActive}`
          }
        >
          {" "}
          Proposals{" "}
        </NavLink>
        <NavLink
          to="/members"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.notActive}`
          }
        >
          {" "}
          Members{" "}
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.notActive}`
          }
        >
          {" "}
          Settings{" "}
        </NavLink>
      </div>
      <div className=" flex items-center gap-x-[0.5rem] px-[1rem] py-[0.2rem] border border-[#009AC9B8] rounded-[625rem] ">
        <img
          src={avatar}
          alt=" profile_avatar "
          className=" w-[1.2rem] h-[1.2rem] object-cover object-center rounded-full "
        />
        <p className=" font-inter-tight text-[1rem] leading-[1.5rem] text-[#007C9F] font-medium ">
          {" "}
          rq2...-fqe{" "}
        </p>
      </div>
    </section>
  );
};

export default AuthNavbar;
