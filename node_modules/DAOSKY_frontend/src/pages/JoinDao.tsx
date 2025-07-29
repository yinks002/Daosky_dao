import React from "react";
import Navbar from "../components/ui-components/Navbar";
import Explore from "../components/section-components/Explore";
import PageFooter from "../components/section-components/PageFooter";
import { Box, TextField } from "@radix-ui/themes";

function JoinDao() {
  return (
    <section>
      <div className=" bg-hero-bg-image min-h-[100vh] bg-cover bg-center">
        <Navbar />
        <div className=" my-[6rem] flex flex-col items-center m-auto max-w-[90rem]">
          <p className=" text-[3.75rem] font-inter-tight text-[#0E3C49] font-medium leading-[4.5rem] max-[480px]:text-[2.2rem] max-[480px]:leading-[2.5rem] ">
            {" "}
            Join a DAO{" "}
          </p>
          <p className=" font-inter-tight font-normal text-[1.125rem] text-[#0E3C49] leading-[1.625rem] tracking-tight mb-[2rem] max-[480px]:text-[1rem] max-[480px]:leading-[1.5rem] ">
            {" "}
            Search a DAO or explore public DAOs{" "}
          </p>
          {/* still need to make a fix here. this is just a placeholder. */}

          <Box maxWidth="30rem" width="22rem">
            <TextField.Root
              placeholder=" Enter DAO name / ID /Subdomain "
              variant="surface"
              radius="full"
              color="cyan"
              size="3"
            ></TextField.Root>
          </Box>
        </div>
        <Explore />
      </div>
      <PageFooter />
    </section>
  );
}

export default JoinDao;
