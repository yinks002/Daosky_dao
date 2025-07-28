import { useNavigate } from "react-router-dom";
import Explore from "../components/section-components/Explore";
import PageFooter from "../components/section-components/PageFooter";
import Button from "../components/ui-components/Button";
import Navbar from "../components/ui-components/Navbar";

import lightning from "../assets/images/lightning.png";
import eyes from "../assets/images/eyes.png";
import collaboration from "../assets/images/collaboration.png";
import userFriendly from "../assets/images/user_friendly.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className=" bg-hero-bg-image min-h-[100vh] bg-cover bg-center max-[480px]:min-h-[90vh] max-[940px]:min-h-[80vh] ">
        <Navbar />
        <div className=" flex flex-col m-auto max-w-[90rem] mt-[6rem] pb-[1rem] max-[480px]:mt-[7rem] max-[480px]:px-[1rem]  max-[840px]:px-[3rem]">
          <p className=" text-[rgb(14,60,73)] text-[3.75rem] font-inter-tight font-medium leading-[4.5rem] tracking-tight w-[57%] mx-auto max-[480px]:text-[2.2rem] max-[480px]:leading-[2.5rem] max-[480px]:w-[85%] max-[840px]:w-full ">
            The <span className=" line-through "> WordPress</span> for creating{" "}
            <span className=" font-bold ">DAOs</span> on the Blockchain
          </p>
          <p className=" w-[45%] mx-auto text-[rgb(14,60,73)] font-normal font-inter-tight text-[1.125rem] leading-[1.625rem] tracking-tight max-[480px]:text-[1rem] max-[480px]:w-[85%] max-[840px]:w-[80%] ">
            Unlock the power of decentralized governance with Daosky, the
            platform that makes creating and joining DAOs as easy as a few
            clicks.{" "}
          </p>
          <div className="flex mx-auto gap-[1rem] mt-[2rem]">
            <Button
              state="solid"
              text="Create a DAO"
              onClickFunc={() => navigate("/create-your-dao")}
            />
            <Button
              state="outlined"
              text="Join a DAO"
              onClickFunc={() => navigate("join-dao")}
            />
          </div>
          <div className="h-[23rem] mx-[6rem] mt-[3rem] bg-hero-image bg-cover bg-center rounded-[2rem] shadow-md max-[480px]:h-[14rem] max-[480px]:mx-[1rem] max-[840px]:mx-[0]  "></div>
        </div>
      </section>
      <section className="pt-[5rem] m-auto max-w-[90rem] px-[6rem] mb-[6rem] max-[480px]:px-[1rem] max-[940px]:px-[3rem]  ">
        <p className=" font-inter-tigh text-[2.187rem] font-medium leading-[2.5rem] text-[#0E3C49] mb-[2.5rem]  ">
          {" "}
          Why Daosky{" "}
        </p>
        <div className=" grid grid-flow-col grid-cols-4 gap-x-[1.5rem] max-[480px]:grid-flow-row-dense max-[480px]:grid-cols-1 max-[480px]:gap-y-[1.5rem] max-[840px]:grid-cols-2 max-[840px]:grid-flow-row-dense max-[840px]:gap-y-[1.5rem]  ">
          <div className=" h-[23rem]  bg-[#FAFDFE] rounded-[0.5rem] shadow-md border hover:border-[#0097CA7D] ">
            <div className="h-[40%] p-[1rem] max-[480px]:h-[50%]">
              <div
                className={` h-full w-full bg-noise-grid-01 bg-cover bg-center flex items-center justify-center `}
              >
                {" "}
                <img src={lightning} alt="" className=" w-[9rem] " />{" "}
              </div>
            </div>
            <div className=" h-[60%] px-[1rem] max-[480px]:h-[40%] ">
              <p className=" font-inter-tight text-left text-[1.7rem] leading-[2.25rem] font-medium max-[480px]:w-[90%]  ">
                <span className=" text-[#007C9F] ">Superpowered</span> by
                internet computer
              </p>
              <p className=" text-[0.875rem] font-inter-tight leading-[1.25rem] text-left text-[#0007149F]  ">
                Built on the revolutionary Internet Computer Protocol (ICP),
                Daosky empowers individuals and communities to collaborate,
                decide, and govern without centralized control.
              </p>
            </div>
          </div>
          <div className=" h-[23rem]  bg-[#FAFDFE] rounded-[0.5rem]  shadow-md max-[480px]:h-[20rem] border hover:border-[#0097CA7D] ">
            <div className="h-[40%] p-[1rem] max-[480px]:h-[50%] ">
              <div
                className={` h-full w-full bg-noise-grid-02 bg-cover bg-center flex items-center justify-center `}
              >
                {" "}
                <img src={eyes} alt="" className=" w-[9rem] " />{" "}
              </div>
            </div>
            <div className=" h-[60%] px-[1rem] max-[480px]:h-[40%] ">
              <p className=" font-inter-tight text-left text-[1.7rem] leading-[2.25rem] font-medium ">
                <span className=" text-[#007C9F] ">Tranparent</span> voting
                mechanisms
              </p>
              <p className=" text-[0.875rem] font-inter-tight leading-[1.25rem] text-left text-[#0007149F] ">
                Ensure integrity and transparency in decision-making with
                blockchain-based voting canisters and vetkey verification
              </p>
            </div>
          </div>
          <div className=" h-[23rem]  bg-[#FAFDFE] rounded-[0.5rem] shadow-md  max-[480px]:h-[20rem] border hover:border-[#0097CA7D]">
            <div className="h-[40%] p-[1rem] max-[480px]:h-[50%]">
              <div
                className={` h-full w-full bg-noise-grid-03 bg-cover bg-center flex items-center justify-center `}
              >
                {" "}
                <img src={collaboration} alt="" className=" w-[9rem] " />{" "}
              </div>
            </div>
            <div className=" h-[60%]  px-[1rem] max-[480px]:h-[40%] ">
              <p className=" font-inter-tight text-left text-[1.7rem] leading-[2.25rem] font-medium ">
                <span className=" text-[#007C9F] ">Community</span>{" "}
                collaboration
              </p>
              <p className=" text-[0.875rem] font-inter-tight leading-[1.25rem] text-left text-[#0007149F] ">
                Foster engagement and coordination with collaborative
                frameworks. Share ideas, coordinate activities, and drive
                collective decision-making with ease.
              </p>
            </div>
          </div>
          <div className=" h-[23rem]  bg-[#FAFDFE] rounded-[0.5rem] shadow-md max-[480px]:h-[20rem] border hover:border-[#0097CA7D] ">
            <div className="h-[40%] p-[1rem] max-[480px]:h-[50%] ">
              <div
                className={` h-full w-full bg-noise-grid-04 bg-cover bg-center flex items-center justify-center `}
              >
                {" "}
                <img src={userFriendly} alt="" className=" w-[8rem] " />{" "}
              </div>
            </div>
            <div className=" h-[60%] px-[1rem] max-[480px]:h-[40%] ">
              <p className=" font-inter-tight text-left text-[1.7rem] leading-[2.25rem] font-medium max-[480px]:w-[90%] ">
                <span className=" text-[#007C9F] ">User-Friendly</span> DAO
                Creation
              </p>
              <p className=" text-[0.875rem] font-inter-tight leading-[1.25rem] text-left text-[#0007149F] ">
                Design your DAO effortlessly with our intuitive interface.
                Define membership rules, voting mechanisms, and more with secure
                canister technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Explore />
        <PageFooter />
      </div>
    </div>
  );
};

export default Home;
