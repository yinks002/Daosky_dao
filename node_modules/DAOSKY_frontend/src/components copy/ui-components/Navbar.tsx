import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import plugwalleticon from "../../assets/icons/plugwallet_icon.svg";

import * as Dialog from "@radix-ui/react-dialog";
import "../../styles/dialog.css";

import person01 from "../../assets/images/member_01.jpeg";
import avatar from "../../assets/icons/avatar-gray.svg";
import topRightArrow from "../../assets/icons/arrow-top-right-gray.svg";
import exitIcon from "../../assets/icons/exit.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section className=" bg-[#0099CC05] backdrop-blur-sm ">
      <div className=" max-w-[90rem] flex items-center justify-between mx-auto py-[1rem] px-[6rem] max-[480px]:px-[1rem] max-[840px]:px-[3rem] ">
        <div
          className=" w-[7rem] hover:cursor-pointer max-[480px]:w-[6rem] "
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" />
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <div className=" bg-[#009DD80D] px-[1.5rem] py-[0.2rem] flex items-center gap-x-[0.5rem] rounded-[624rem] border border-[#0097CA7D] hover:cursor-pointer  ">
              {" "}
              <div>
                {" "}
                <img
                  src={plugwalleticon}
                  alt="plug_wallet_icon"
                  className=" max-[480px]:w-[1.5rem] "
                />{" "}
              </div>{" "}
              <p className=" text-[1.125rem] leading-[1.625rem] text-[#007C9F] font-inter-tight font-medium   ">
                Internet Identity
              </p>{" "}
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
              <div className=" flex flex-col items-center gap-y-[0.5rem] ">
                <button
                  className=" flex items-center gap-x-[0.5rem] px-[1rem] bg-[#009DD80D] rounded-[0.75rem] border border-[#0097CA7D] h-[2.5rem] max-w-[18.5rem]"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  <img
                    src={person01}
                    alt="profile_picture"
                    className=" h-[1.125rem] w-[1.125rem] object-cover object-center rounded-full "
                  />
                  <p className="truncate w-[90%] font-inter-tight text-[1rem] leading-[1.5rem] font-medium text-[#007C9F] ">
                    {" "}
                    wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf{" "}
                  </p>
                </button>
                <button className=" flex justify-center items-center gap-x-[0.5rem] px-[1rem]  rounded-full border border-[#00062E32] h-[2.5rem] min-w-[18.5rem] ">
                  <p className="font-inter-tight text-[1rem] leading-[1.5rem] font-medium text-[#60646C] ">
                    {" "}
                    Profile picture{" "}
                  </p>
                  <img src={avatar} alt="avatar" />
                </button>
                <button className=" flex justify-center items-center gap-x-[0.5rem] px-[1rem]  rounded-full border border-[#00062E32] h-[2.5rem] min-w-[18.5rem] ">
                  <p className="font-inter-tight text-[1rem] leading-[1.5rem] font-medium text-[#60646C] ">
                    {" "}
                    View transactions{" "}
                  </p>
                  <img src={topRightArrow} alt="arrow" />
                </button>
                <button className=" flex justify-center items-center gap-x-[0.5rem] px-[1rem]  rounded-full border border-[#DF000356] h-[2.5rem] min-w-[18.5rem] ">
                  <p className="font-inter-tight text-[1rem] leading-[1.5rem] font-medium text-[#CE2C31] ">
                    {" "}
                    Sign out{" "}
                  </p>
                  <img src={exitIcon} alt="exit" />
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
};

export default Navbar;
