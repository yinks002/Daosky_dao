import { Button, TabNav } from "@radix-ui/themes";

import indegenLab from "../../assets/images/indegene_labs.jpeg";
import brutalGamerz from "../../assets/images/brutal_gamerz.jpeg";
import wallstreetDogz from "../../assets/images/wallstreet_dogz.jpeg";
import realEngine from "../../assets/images/realengine.jpeg";
import solboyz from "../../assets/images/sol_boyz.jpeg";
import cryptoPump from "../../assets/images/crypto_pump.jpeg";
import ppIndegenLab from "../../assets/images/pp_indigene_labs.jpeg";
import ppBrutalGamerz from "../../assets/images/pp_brutal_gamerz.jpeg";
import ppWallStreetDogz from "../../assets/images/pp_wallstreet_boyz.jpeg";
import ppRealEngine from "../../assets/images/pp_realengine.jpeg";
import ppSolBoyz from "../../assets/images/pp_sol_boyz.jpeg";
import ppCryptoPump from "../../assets/images/pp_crypto_pump.jpeg";
import ExploreCard from "../ui-components/cards/ExploreCard";

type exploreProps = {
  coverImage: string;
  profileImage: string;
  title: string;
  url: string;
  count: string;
  text: string;
};

const exploreData: exploreProps[] = [
  {
    coverImage: indegenLab,
    profileImage: ppIndegenLab,
    count: "4037",
    title: "Indegene Labs",
    url: "indegene.daosky.io",
    text: "Pizza ipsum dolor meat lovers buffalo. Spinach tossed pineapple pie bacon tossed. Bianca roll Hawaiian marinara mayo sauce lot steak ipsum melted.",
  },
  {
    coverImage: brutalGamerz,
    profileImage: ppBrutalGamerz,
    count: "3004",
    title: "Brutal Gamerz",
    url: "brutalgamerz.daosky.io",
    text: "Pizza ipsum dolor meat lovers buffalo. Spinach tossed pineapple pie bacon tossed. Bianca roll Hawaiian marinara mayo sauce lot steak ipsum melted.",
  },
  {
    coverImage: wallstreetDogz,
    profileImage: ppWallStreetDogz,
    count: "4037",
    title: "Wallstreet Dogz",
    url: "wallstreetdogz.daosky.io",
    text: "Pizza ipsum dolor meat lovers buffalo. Spinach tossed pineapple pie bacon tossed. Bianca roll Hawaiian marinara mayo sauce lot steak ipsum melted.",
  },
  {
    coverImage: realEngine,
    profileImage: ppRealEngine,
    count: "4037",
    title: "Realengine",
    url: "realengine.daosky.io",
    text: "Pizza ipsum dolor meat lovers buffalo. Spinach tossed pineapple pie bacon tossed. Bianca roll Hawaiian marinara mayo sauce lot steak ipsum melted.",
  },
  {
    coverImage: solboyz,
    profileImage: ppSolBoyz,
    count: "3004",
    title: "Sol Boyz",
    url: "solboyz.daosky.io",
    text: "Pizza ipsum dolor meat lovers buffalo. Spinach tossed pineapple pie bacon tossed. Bianca roll Hawaiian marinara mayo sauce lot steak ipsum melted.",
  },
  {
    coverImage: cryptoPump,
    profileImage: ppCryptoPump,
    count: "4037",
    title: "Indegene Labs",
    url: "cryptopump.daosky.io",
    text: "Pizza ipsum dolor meat lovers buffalo. Spinach tossed pineapple pie bacon tossed. Bianca roll Hawaiian marinara mayo sauce lot steak ipsum melted.",
  },
];

const Explore = () => {
  return (
    <section className="m-auto max-w-[90rem] px-[6rem] mb-[6rem] ">
      <p className=" mb-[0.625rem] font-inter-tight font-medium leading-[2.5rem] text-[#0E3C49] text-[2.187rem] ">
        {" "}
        Explore Public DAOs{" "}
      </p>
      <div className=" w-fit mx-auto ">
        <TabNav.Root justify={"center"}>
          <TabNav.Link href="#" active>
            Member size
          </TabNav.Link>
          <TabNav.Link href="#"> Recently created </TabNav.Link>
          <TabNav.Link href="#">Proposals</TabNav.Link>
        </TabNav.Root>
      </div>
      <div className=" flex flex-wrap justify-between gap-y-[2.5rem] mt-[1.5rem] mb-[2.5rem] ">
        {exploreData.map((data) => {
          return (
            <ExploreCard
              count={data.count}
              coverImage={data.coverImage}
              profileImage={data.profileImage}
              text={data.text}
              title={data.title}
              url={data.url}
            />
          );
        })}
      </div>
      <Button variant="soft" radius="full">
        {" "}
        Show more{" "}
      </Button>
    </section>
  );
};

export default Explore;
