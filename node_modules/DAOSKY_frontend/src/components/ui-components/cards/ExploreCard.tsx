import styles from "../../../styles/exploreBtn.module.css";

import profileIcon from "../../../assets/icons/profile-icon.svg";
import arrowRightWhite from "../../../assets/icons/arrow-right-white.svg";

type Props = {
  coverImage: string;
  profileImage: string;
  title: string;
  url: string;
  count: string;
  text: string;
};

const ExploreCard = ({
  coverImage,
  profileImage,
  title,
  url,
  count,
  text,
}: Props) => {
  return (
    <div className=" col-span-1 h-[28rem] bg-[#FAFDFE] rounded-[0.75rem] p-[1rem] shadow-md ">
      <div className=" h-[10rem] relative ">
        <div className=" h-full w-full bg-white  ">
          <img
            src={coverImage}
            alt="cover_image"
            className=" object-cover h-full w-full rounded-[0.75rem] "
          />
        </div>
        <img
          src={profileImage}
          alt="profile_image "
          className=" w-[5rem] h-[5rem] object-cover object-center rounded-full absolute bottom-[-2rem] left-[1rem] "
        />
      </div>
      <div className=" flex flex-col pt-[4rem] gap-y-[0.25rem] px-4 ">
        <p className=" text-left text-[1.25rem] font-medium font-inter-tight text-[#101828] leading-[1.75rem] tracking-tighter ">
          {" "}
          {title}{" "}
        </p>
        <div className=" flex items-center justify-between ">
          <p className=" font-inter-tight text-[0.75rem] font-medium text-[#007C9F] leading-[1rem] ">
            {" "}
            {url}{" "}
          </p>
          <div className=" rounded-full bg-[#00B8F820] flex items-center gap-x-[0.25rem] px-[0.38rem] py-[0.12rem] ">
            <img src={profileIcon} alt="profile_icon" />

            <p className="text-[#007C9F] text-[0.75rem] font-medium leading-[1rem]">
              {count}
            </p>
          </div>
        </div>
        <p className=" text-[#475467] text-left text-[0.875rem] font-inter-tight leading-[1.25rem] ">
          {" "}
          {text}{" "}
        </p>
        <button className={styles.btn}>
          <p className=" text-white font-inter-tight text-[0.875rem] leading-[1.25rem] ">
            Join Dao
          </p>{" "}
          <img src={arrowRightWhite} alt="arrow_right" />
        </button>
      </div>
    </div>
  );
};

export default ExploreCard;
