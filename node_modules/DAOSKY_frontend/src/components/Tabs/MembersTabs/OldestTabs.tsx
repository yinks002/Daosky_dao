import Member from "../../ui-components/Member";
import person01 from "../../../assets/images/member_01.jpeg";
import person02 from "../../../assets/images/member_02.jpeg";

const memberDummyData = [
  {
    id: 1,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "5 minutes ago",
    imgUrl: person01,
  },
  {
    id: 2,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "2 hours ago",
    imgUrl: person02,
  },
  {
    id: 3,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "3 days ago",
    imgUrl: person01,
  },
  {
    id: 4,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "1 day ago",
    imgUrl: person02,
  },
  {
    id: 5,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "9 hours ago",
    imgUrl: person01,
  },
  {
    id: 6,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "5 minutes ago",
    imgUrl: person01,
  },
  {
    id: 7,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "2 hours ago",
    imgUrl: person02,
  },
  {
    id: 8,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "3 days ago",
    imgUrl: person01,
  },
  {
    id: 9,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "1 day ago",
    imgUrl: person02,
  },
  {
    id: 10,
    number: "wrt6b-m7kok-uamuo-5uhz6-xeeje-wwrwf",
    time: "9 hours ago",
    imgUrl: person01,
  },
];

const OldestTabs = () => {
  return (
    <div className=" flex flex-col gap-y-[1rem]  ">
      {memberDummyData.map((data) => {
        return (
          <Member
            imgUrl={data.imgUrl}
            number={data.number}
            time={data.time}
            id={data.id}
          />
        );
      })}
    </div>
  );
};

export default OldestTabs;
