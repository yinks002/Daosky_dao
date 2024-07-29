import styles from "../../../styles/exploreBtn.module.css";

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
    <div className=" w-[21rem] h-[28rem] bg-[#FAFDFE] rounded-[0.75rem] p-[1rem] shadow-md ">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <rect
                width="12"
                height="12"
                transform="translate(0.333313)"
                fill="white"
                fill-opacity="0.01"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.33329 0.700012C4.73167 0.700012 3.43329 1.99839 3.43329 3.60001C3.43329 4.92232 4.31828 6.03792 5.52828 6.38682C4.57305 6.50322 3.75375 6.84108 3.13655 7.44935C2.35102 8.22353 1.95331 9.37601 1.95331 10.8799C1.95331 11.0899 2.12344 11.2599 2.33331 11.2599C2.54318 11.2599 2.71331 11.0899 2.71331 10.8799C2.71331 9.50393 3.07558 8.57649 3.67002 7.99065C4.26558 7.40372 5.15468 7.10001 6.33325 7.10001C7.51183 7.10001 8.40097 7.40372 8.99657 7.99066C9.59097 8.57649 9.95329 9.50393 9.95329 10.8799C9.95329 11.0899 10.1234 11.2599 10.3333 11.2599C10.5431 11.26 10.7133 11.0899 10.7133 10.88C10.7133 9.37601 10.3155 8.22353 9.53001 7.44934C8.91281 6.84109 8.09349 6.50324 7.13829 6.38683C8.34825 6.03793 9.23329 4.92232 9.23329 3.60001C9.23329 1.99839 7.93492 0.700012 6.33329 0.700012ZM4.19329 3.60001C4.19329 2.41812 5.1514 1.46001 6.33329 1.46001C7.51518 1.46001 8.47329 2.41812 8.47329 3.60001C8.47329 4.7819 7.51518 5.74001 6.33329 5.74001C5.1514 5.74001 4.19329 4.7819 4.19329 3.60001Z"
                fill="#007C9F"
              />
            </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <rect
              width="16"
              height="16"
              transform="translate(0.666626)"
              fill="white"
              fill-opacity="0.01"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.3562 3.35623C9.56448 3.14794 9.90216 3.14794 10.1104 3.35623L14.3772 7.6229C14.5854 7.83117 14.5854 8.16886 14.3772 8.37713L10.1104 12.6439C9.90216 12.8521 9.56448 12.8521 9.3562 12.6439C9.14791 12.4355 9.14791 12.0978 9.3562 11.8895L12.7124 8.53335H3.33332C3.03877 8.53335 2.79999 8.29456 2.79999 8.00001C2.79999 7.70547 3.03877 7.46668 3.33332 7.46668H12.7124L9.3562 4.11047C9.14791 3.90219 9.14791 3.56451 9.3562 3.35623Z"
              fill="#FCFCFD"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ExploreCard;
