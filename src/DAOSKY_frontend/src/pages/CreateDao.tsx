import Navbar from "../components/ui-components/Navbar";
import styles from "../styles/button.module.css";
import logo from "../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

// imported assets
import twitter from "../assets/icons/twitter-logo.svg";
import github from "../assets/icons/github-logo.svg";
import arrowRightWhite from "../assets/icons/arrow-right-white.svg";
import describeIcon from "../assets/images/describe_icon.png";
import setupIcon from "../assets/images/setup_icon.png";
import governanceIcon from "../assets/images/governance_icon.png";

const CreateDao = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className=" bg-hero-bg-image min-h-[100vh] bg-cover bg-center ">
        <Navbar />
        <div className="my-[6rem] flex flex-col items-center m-auto max-w-[90rem] px-[6rem] max-[480px]:px-[1rem] max-[940px]:px-[3rem] ">
          <p className=" text-[3.75rem] font-inter-tight text-[#0E3C49] font-medium leading-[4.5rem] max-[480px]:text-[2.2rem] max-[480px]:leading-[2.5rem] ">
            Create your DAO in 3 steps
          </p>
          <p className=" font-inter-tight font-normal text-[1.125rem] text-[#0E3C49] leading-[1.625rem] tracking-tight mb-[2rem] max-[480px]:text-[1rem] max-[480px]:w-[85%] ">
            Start creating your DAO now, make sure to confirm the details before
            completing.
          </p>
          <button
            onClick={() => navigate("/describe-your-dao")}
            className={styles.solidBtn}
          >
            <p>Create your DAO</p>
            <img src={arrowRightWhite} alt="arrow-right_white" />
          </button>
          <div className=" grid grid-flow-col grid-cols-3 gap-x-[2rem] w-[100%] mt-[3rem] max-[480px]:grid max-[480px]:grid-flow-row-dense max-[480px]:grid-cols-1 max-[480px]:gap-y-[2rem] max-[840px]:gap-x-[1.5rem] ">
            <div className="  h-[20rem] rounded-[1rem] bg-[#009DD80D] backdrop-blur-sm p-[1rem] border hover:border-[#0097CA7D]  ">
              <div className=" h-[60%] bg-noise-grid-01 bg-cover bg-center bg-[#FAFDFE] rounded-[0.75rem] flex items-center justify-center ">
                <img
                  src={describeIcon}
                  alt="describer_icon"
                  className=" w-[9rem] "
                />
              </div>
              <div className=" h-[40%] mt-[0.5rem]">
                <p className=" font-bold text-[0.875rem] font-inter-tight leading-[1.25rem] text-[#007C9F] mb-[0.5rem] text-left">
                  {" "}
                  Step 1{" "}
                </p>
                <p className=" font-medium font-inter-tight leading-[2.25rem] tracking-tight text-[1.75rem] text-[#0E3C49] text-left max-[840px]:text-[1.25rem] max-[840px]:leading-[1.75rem] ">
                  {" "}
                  Describe your DAO{" "}
                </p>
                <p className=" font-inter-tight text-[1rem] leading-[1.5rem] text-left  ">
                  {" "}
                  Enter relevant details and appearance of your DAO{" "}
                </p>
              </div>
            </div>
            <div className="  h-[20rem] rounded-[1rem] bg-[#009DD80D] backdrop-blur-sm p-[1rem] border hover:border-[#0097CA7D]  ">
              <div className=" h-[60%] bg-noise-grid-02 bg-cover bg-center bg-[#FAFDFE] rounded-[0.75rem] flex items-center justify-center ">
                <img src={setupIcon} alt="setup_icon" className=" w-[9rem] " />
              </div>
              <div className=" h-[40%] mt-[0.5rem] ">
                <p className=" font-bold text-[0.875rem] font-inter-tight leading-[1.25rem] text-[#007C9F] mb-[0.5rem] text-left ">
                  {" "}
                  Step 2{" "}
                </p>
                <p className=" font-medium font-inter-tight leading-[2.25rem] tracking-tight text-[1.75rem] text-[#0E3C49] text-left max-[840px]:text-[1.25rem] max-[840px]:leading-[1.75rem] ">
                  {" "}
                  Setup Membership{" "}
                </p>
                <p className=" font-inter-tight text-[1rem] leading-[1.5rem] text-left ">
                  {" "}
                  Customise membership and add members{" "}
                </p>
              </div>
            </div>
            <div className="  h-[20rem] rounded-[1rem] bg-[#009DD80D] backdrop-blur-sm p-[1rem] border hover:border-[#0097CA7D]">
              <div className=" h-[60%] bg-noise-grid-03 bg-cover bg-center bg-[#FAFDFE] rounded-[0.75rem] flex items-center justify-center ">
                <img
                  src={governanceIcon}
                  alt="governance_icon"
                  className=" w-[9rem] "
                />
              </div>
              <div className=" h-[40%] mt-[0.5rem]">
                <p className=" font-bold text-[0.875rem] font-inter-tight leading-[1.25rem] text-[#007C9F] mb-[0.5rem] text-left ">
                  {" "}
                  Step 3{" "}
                </p>
                <p className=" font-medium font-inter-tight leading-[2.25rem] tracking-tight text-[1.75rem] text-[#0E3C49] text-left max-[840px]:text-[1.25rem] max-[840px]:leading-[1.75rem]">
                  {" "}
                  Set Governance{" "}
                </p>
                <p className=" font-inter-tight text-[1rem] leading-[1.5rem] text-left ">
                  {" "}
                  Set proposal and voting decision rules{" "}
                </p>
              </div>
            </div>
          </div>
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

export default CreateDao;
