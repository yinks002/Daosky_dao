import React from "react";
import { useNavigate } from "react-router-dom";

// imported assets
import arrowRightWhite from "../assets/icons/arrow-right-white.svg";

// imported components
import AuthNavbar from "../components/ui-components/AuthNavbar";
import { Tabs } from "@radix-ui/themes";
import AllProposalsTab from "../components/Tabs/ProposalsTabs/AllProposalsTab";
import LiveProposalsTab from "../components/Tabs/ProposalsTabs/LiveProposalsTab";
import ExecutedProposalsTab from "../components/Tabs/ProposalsTabs/ExecutedProposalsTab";
import DefeatedProposalsTabs from "../components/Tabs/ProposalsTabs/DefeatedProposalsTabs";
import CompletedProposalsTab from "../components/Tabs/ProposalsTabs/CompletedProposalsTab";

const Proposals = () => {
  const navigate = useNavigate();
  return (
    <section>
      <AuthNavbar />
      <div className="max-w-[50rem] mx-auto  px-[3.5rem] py-[1rem] ">
        <div className=" flex items-center justify-between px-[1.5rem] py-[0.75rem] bg-[#F2FAFD] rounded-[1.5rem] ">
          <p className=" font-inter-tight text-[1.5rem] leading-[1.875rem] tracking-[-0.00625rem] font-medium text-[#0E3C49]  ">
            {" "}
            Live Proposals{" "}
          </p>
          <button
            onClick={() => navigate("/proposals/create-proposal")}
            className={` rounded-[624rem] py-[0.4rem] px-[1rem] flex items-center gap-x-[0.25rem]
                bg-[#0195B7] 
              `}
          >
            <p
              className={`font-inter-tight text-[0.875rem] leading-[1.5rem] font-medium text-white`}
            >
              Create a Proposal
            </p>
            <img src={arrowRightWhite} alt="arrow_right" />
          </button>
        </div>
        <div>
          <Tabs.Root defaultValue="all">
            <div className=" w-fit mx-auto my-[0.75rem] ">
              <Tabs.List color="cyan">
                <Tabs.Trigger value="all"> All </Tabs.Trigger>
                <Tabs.Trigger value="live"> Live</Tabs.Trigger>
                <Tabs.Trigger value="executed"> Executed </Tabs.Trigger>
                <Tabs.Trigger value="defeated"> Defeated </Tabs.Trigger>
                <Tabs.Trigger value="completed"> Completed </Tabs.Trigger>
              </Tabs.List>
            </div>
            <Tabs.Content value="all">
              {" "}
              <AllProposalsTab />{" "}
            </Tabs.Content>
            <Tabs.Content value="live">
              {" "}
              <LiveProposalsTab />{" "}
            </Tabs.Content>
            <Tabs.Content value="executed">
              {" "}
              <ExecutedProposalsTab />{" "}
            </Tabs.Content>
            <Tabs.Content value="defeated">
              {" "}
              <DefeatedProposalsTabs />{" "}
            </Tabs.Content>
            <Tabs.Content value="completed">
              {" "}
              <CompletedProposalsTab />{" "}
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
};

export default Proposals;
