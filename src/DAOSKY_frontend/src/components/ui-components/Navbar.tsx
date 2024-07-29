import logo from "../../assets/icons/logo.svg";
import plugwalleticon from "../../assets/icons/plugwallet_icon.svg";

const Navbar = () => {
  return (
    <section className=" bg-[#0099CC05] backdrop-blur-sm ">
      <div className=" max-w-[90rem] flex items-center justify-between mx-auto py-[1rem] px-[6rem] ">
        <div className=" w-[7rem] ">
          <img src={logo} alt="logo" />
        </div>
        <div className=" bg-[#009DD80D] px-[1.5rem] py-[0.2rem] flex items-center gap-x-[0.5rem] rounded-[624rem] border border-[#0097CA7D]">
          {" "}
          <div>
            {" "}
            <img src={plugwalleticon} alt="plug_wallet_icon" />{" "}
          </div>{" "}
          <p className=" text-[1.125rem] leading-[1.625rem] text-[#007C9F] font-inter-tight font-medium  ">
            Internet Identity
          </p>{" "}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
