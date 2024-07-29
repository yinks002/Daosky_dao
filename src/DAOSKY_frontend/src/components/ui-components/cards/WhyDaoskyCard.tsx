type Props = {
  index: string;
};

const WhyDaoskyCard = ({ index }: Props) => {
  return (
    <div className=" h-[23rem] w-[16.4rem] bg-[#FAFDFE] rounded-[0.5rem] ">
      <div className="h-[50%] p-[1rem]">
        <div
          className={` h-full w-full bg-noise-grid-${index} bg-cover bg-center `}
        ></div>
      </div>
      <div className=" h-[50%] bg-red-500 "></div>
    </div>
  );
};

export default WhyDaoskyCard;
