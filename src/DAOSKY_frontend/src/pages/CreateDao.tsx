import Navbar from "../components/ui-components/Navbar";
import styles from "../styles/button.module.css";
import logo from "../assets/icons/logo.svg";

const CreateDao = () => {
  return (
    <section>
      <div className=" bg-hero-bg-image min-h-[100vh] bg-cover bg-center ">
        <Navbar />
        <div className="my-[6rem] flex flex-col items-center m-auto max-w-[90rem] px-[6rem]">
          <p className=" text-[3.75rem] font-inter-tight text-[#0E3C49] font-medium leading-[4.5rem] ">
            Create your DAO in 3 steps
          </p>
          <p className=" font-inter-tight font-normal text-[1.125rem] text-[#0E3C49] leading-[1.625rem] tracking-tight mb-[2rem] ">
            Start creating your DAO now, make sure to confirm the details before
            completing.
          </p>
          <button className={styles.solidBtn}>
            <p>Create your DAO</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <rect width="20" height="20" fill="white" fill-opacity="0.01" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.862 4.19527C11.1224 3.93491 11.5445 3.93491 11.8048 4.19527L17.1382 9.5286C17.3985 9.78895 17.3985 10.2111 17.1382 10.4714L11.8048 15.8048C11.5445 16.0651 11.1224 16.0651 10.862 15.8048C10.6017 15.5444 10.6017 15.1223 10.862 14.8619L15.0573 10.6667H3.33341C2.96523 10.6667 2.66675 10.3682 2.66675 10C2.66675 9.63182 2.96523 9.33334 3.33341 9.33334H15.0573L10.862 5.13807C10.6017 4.87772 10.6017 4.45562 10.862 4.19527Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="flex items-center justify-between w-[100%] mt-[3rem]  ">
            <div className=" w-[20rem] h-[20rem] rounded-[1rem] bg-[#009DD80D] backdrop-blur-sm p-[1rem]  ">
              <div className=" h-[60%] bg-noise-grid-01 bg-cover bg-center bg-[#FAFDFE] rounded-[0.75rem] "></div>
              <div className=" h-[40%] mt-[0.5rem]">
                <p className=" font-bold text-[0.875rem] font-inter-tight leading-[1.25rem] text-[#007C9F] mb-[0.5rem] text-left">
                  {" "}
                  Step 1{" "}
                </p>
                <p className=" font-medium font-inter-tight leading-[2.25rem] tracking-tight text-[1.75rem] text-[#0E3C49] text-left ">
                  {" "}
                  Describe your DAO{" "}
                </p>
                <p className=" font-inter-tight text-[1rem] leading-[1.5rem] text-left">
                  {" "}
                  Enter relevant details and appearance of your DAO{" "}
                </p>
              </div>
            </div>
            <div className=" w-[22rem] h-[20rem] rounded-[1rem] bg-[#009DD80D] backdrop-blur-sm p-[1rem]  ">
              <div className=" h-[60%] bg-noise-grid-02 bg-cover bg-center bg-[#FAFDFE] rounded-[0.75rem] "></div>
              <div className=" h-[40%] mt-[0.5rem] ">
                <p className=" font-bold text-[0.875rem] font-inter-tight leading-[1.25rem] text-[#007C9F] mb-[0.5rem] text-left ">
                  {" "}
                  Step 2{" "}
                </p>
                <p className=" font-medium font-inter-tight leading-[2.25rem] tracking-tight text-[1.75rem] text-[#0E3C49] text-left ">
                  {" "}
                  Setup Membership{" "}
                </p>
                <p className=" font-inter-tight text-[1rem] leading-[1.5rem] text-left ">
                  {" "}
                  Customise membership and add members{" "}
                </p>
              </div>
            </div>
            <div className=" w-[22rem] h-[20rem] rounded-[1rem] bg-[#009DD80D] backdrop-blur-sm p-[1rem] ">
              <div className=" h-[60%] bg-noise-grid-03 bg-cover bg-center bg-[#FAFDFE] rounded-[0.75rem] "></div>
              <div className=" h-[40%] mt-[0.5rem]">
                <p className=" font-bold text-[0.875rem] font-inter-tight leading-[1.25rem] text-[#007C9F] mb-[0.5rem] text-left ">
                  {" "}
                  Step 3{" "}
                </p>
                <p className=" font-medium font-inter-tight leading-[2.25rem] tracking-tight text-[1.75rem] text-[#0E3C49] text-left ">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" fill="white" fill-opacity="0.01" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4312 10.0188C15.4312 6.33353 18.4178 3.34628 22.1014 3.34628C24.2637 3.34628 25.9904 4.36915 27.1475 5.85355C28.3902 5.5993 29.5589 5.13948 30.6161 4.51217C30.1993 5.81542 29.3171 6.91115 28.1671 7.60454L28.1701 7.61129C29.2979 7.47437 30.371 7.17444 31.3703 6.73165L31.3679 6.73525C30.649 7.8119 29.7453 8.76237 28.7064 9.53672C28.7623 9.913 28.7906 10.2918 28.7906 10.6684C28.7906 18.5325 22.7996 27.6791 11.7786 27.6791C8.40335 27.6791 5.25963 26.6901 2.61346 24.9924C2.11764 24.6743 1.97359 24.0145 2.29171 23.5187C2.31981 23.4748 2.35059 23.4338 2.38368 23.3954C2.57244 23.0831 2.93203 22.8926 3.31821 22.938C5.27077 23.1682 7.22281 22.9301 8.94336 22.1786C7.23685 21.4259 5.91211 19.9675 5.33771 18.1754C5.23435 17.853 5.3085 17.5 5.53285 17.2463C5.54063 17.2375 5.54855 17.2289 5.55659 17.2205C4.1897 16.0175 3.32745 14.2551 3.32745 12.291V12.2189C3.32745 11.8787 3.50746 11.5639 3.80066 11.3914C3.89701 11.3348 4.00081 11.2962 4.10737 11.2759C3.6384 10.3713 3.37316 9.34366 3.37316 8.2551C3.37316 7.25685 3.37888 5.99876 4.08177 4.86573C4.23934 4.61173 4.49619 4.45685 4.77101 4.42016C5.17523 4.29306 5.63388 4.41534 5.91802 4.76378C8.24613 7.61869 11.6068 9.5911 15.4318 10.1112L15.4312 10.0188ZM11.7786 25.5458C10.0989 25.5458 8.48602 25.2661 6.98131 24.7516C8.81095 24.4348 10.5666 23.7139 12.0793 22.5284C12.3992 22.2778 12.5266 21.8528 12.3974 21.4675C12.2682 21.0823 11.9104 20.8201 11.5041 20.8129C10.0047 20.7865 8.67655 20.0473 7.84627 18.9194C8.25235 18.8865 8.64915 18.8168 9.03352 18.7129C9.46355 18.5966 9.7571 18.1998 9.7424 17.7545C9.7277 17.3093 9.40864 16.9326 8.97186 16.8449C7.31083 16.5115 5.97086 15.291 5.46496 13.6997C5.89346 13.8032 6.3382 13.8647 6.79431 13.8797C7.2227 13.8937 7.60847 13.622 7.73965 13.214C7.87081 12.8059 7.71557 12.3603 7.35923 12.1221C6.11251 11.2886 5.29316 9.8659 5.29316 8.2551C5.29316 7.89788 5.2982 7.57905 5.3196 7.29001C8.21581 10.2381 12.1786 12.1372 16.5886 12.3592C16.9222 12.376 17.2444 12.2356 17.4591 11.9798C17.6739 11.724 17.7564 11.3824 17.6822 11.0567C17.6055 10.7204 17.5645 10.3741 17.5645 10.0188C17.5645 7.51115 19.5966 5.47962 22.1014 5.47962C24.7345 5.47962 26.6573 7.9191 26.6573 10.6684C26.6573 17.6151 21.3765 25.5458 11.7786 25.5458Z"
                fill="#0195B7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" fill="white" fill-opacity="0.01" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9986 0.533325C7.45887 0.533325 0.533325 7.45798 0.533325 16.0005C0.533325 22.8331 4.96458 28.6306 11.1106 30.6767C11.8844 30.8181 12.1664 30.3407 12.1664 29.9304C12.1664 29.5629 12.1531 28.5907 12.1455 27.3003C7.84343 28.2347 6.93571 25.2267 6.93571 25.2267C6.23214 23.4398 5.2181 22.964 5.2181 22.964C3.81382 22.0051 5.32445 22.0241 5.32445 22.0241C6.87686 22.1333 7.69341 23.6183 7.69341 23.6183C9.07302 25.9814 11.3138 25.2988 12.1949 24.9028C12.3355 23.904 12.7352 23.2222 13.1767 22.8358C9.74239 22.4446 6.13151 21.1182 6.13151 15.1915C6.13151 13.5024 6.73443 12.1228 7.72379 11.0413C7.56428 10.6501 7.03353 9.07777 7.8757 6.94807C7.8757 6.94807 9.17364 6.53217 12.1285 8.53275C13.3618 8.18999 14.6854 8.01909 16.0005 8.01243C17.3146 8.01909 18.6372 8.18999 19.8725 8.53275C22.8254 6.53217 24.1214 6.94807 24.1214 6.94807C24.9655 9.07777 24.4348 10.6501 24.2763 11.0413C25.2674 12.1228 25.8656 13.5024 25.8656 15.1915C25.8656 21.1334 22.249 22.441 18.8043 22.8235C19.3588 23.3011 19.8535 24.2449 19.8535 25.6881C19.8535 27.7551 19.8345 29.4234 19.8345 29.9304C19.8345 30.3443 20.1137 30.8258 20.8979 30.6748C27.0391 28.6248 31.4667 22.832 31.4667 16.0005C31.4667 7.45798 24.541 0.533325 15.9986 0.533325Z"
                fill="#0195B7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateDao;
