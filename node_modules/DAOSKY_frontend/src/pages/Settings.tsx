import AuthNavbar from "../components/ui-components/AuthNavbar";

import styles from "../styles/Miscellaneous.module.css";
import { Table } from "@radix-ui/themes";
import * as Progress from "@radix-ui/react-progress";

import person01 from "../assets/images/member_01.jpeg";
import coverPhoto from "../assets/images/indegene_labs.jpeg";
import gear from "../assets/icons/gear.svg";
import { useNavigate } from "react-router-dom";
import "../styles/progress.css";

function Settings() {
  const navigate = useNavigate();

  return (
    <section>
      <AuthNavbar />
      <div className="max-w-[50rem] mx-auto  px-[0.5rem] py-[1.5rem] ">
        <div
          className={` ${styles.memberBoxShadow} px-[1rem] py-[1.5rem] rounded-[0.75rem] `}
        >
          <div className=" flex items-center justify-between px-[1.5rem] py-[0.75rem] bg-[#F2FAFD] rounded-[1.5rem] ">
            <p className=" font-inter-tight text-[1.5rem] leading-[1.875rem] tracking-[-0.00625rem] font-medium text-[#0E3C49]  ">
              Settings
            </p>
          </div>
          <p className=" text-left mt-[1rem]  border-l-[0.3rem] border-[#FFBA18] pl-3 font-inter-tight text-[0.75rem] font-medium leading-[1rem] text-[#0007149F] ">
            To change a setting, a proposal will be have to be put to vote.
          </p>
          <div className=" my-[1rem] ">
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>
                    {" "}
                    <p className=" font-inter-tight text-[1rem] text-[#1C2024] leading-[1.5rem] font-medium ">
                      {" "}
                      General{" "}
                    </p>{" "}
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell> </Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>
                    {" "}
                    <p className="text-[#1C2024] font-medium font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                      DAO Name
                    </p>{" "}
                  </Table.RowHeaderCell>
                  <Table.Cell justify="start" width="75%">
                    <p className="text-[#60646C] font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                      {" "}
                      Revoltur{" "}
                    </p>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    {" "}
                    <p className="text-[#1C2024] font-medium font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                      DAO Subdomain
                    </p>{" "}
                  </Table.RowHeaderCell>
                  <Table.Cell justify="start" width="75%">
                    <p className="text-[#60646C] font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                      revoltur.daosky.io
                    </p>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    {" "}
                    <p className="text-[#1C2024] font-medium font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                      DAO Logo
                    </p>{" "}
                  </Table.RowHeaderCell>
                  <Table.Cell justify="start" width="75%">
                    <img
                      src={person01}
                      alt="logo"
                      className=" object-cover object-center rounded-[0.75rem] border border-dashed border-[#0097CA7D] w-[2.5rem] h-[2.5rem] p-[0.1rem] "
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    {" "}
                    <p className="text-[#1C2024] font-medium font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                      DAO Cover Photo
                    </p>{" "}
                  </Table.RowHeaderCell>
                  <Table.Cell justify="start" width="75%">
                    <img
                      src={coverPhoto}
                      alt="logo"
                      className=" object-cover object-center rounded-[0.75rem] border border-dashed border-[#0097CA7D] w-[4.4rem] h-[2.5rem] p-[0.1rem] "
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    {" "}
                    <p className="text-[#1C2024] font-medium font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                      DAO Description
                    </p>{" "}
                  </Table.RowHeaderCell>
                  <Table.Cell justify="start" width="75%">
                    <p className="text-[#60646C] font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    {" "}
                    <p className="text-[#1C2024] font-medium font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                      Links
                    </p>{" "}
                  </Table.RowHeaderCell>
                  <Table.Cell justify="start" width="75%">
                    <div className=" flex flex-col gap-y-[0.75rem] ">
                      <div className=" flex items-center gap-x-[2.5rem] ">
                        <p className="text-[#60646C] font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                          Twitter
                        </p>
                        <p className="text-[#60646C] font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                          https://twitter.com/revoltur
                        </p>
                      </div>
                      <div className=" flex items-center gap-x-[2.5rem] ">
                        <p className="text-[#60646C] font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                          Github
                        </p>
                        <p className="text-[#60646C] font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                          https://github.com/revoltur
                        </p>
                      </div>
                    </div>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <button
                      onClick={() => navigate("/settings/edit-general")}
                      className=" flex items-center gap-x-[0.5rem] px-[0.75rem] bg-[#00B8F820] py-[0.5rem] font-inter-tight text-[0.875rem] font-medium leading-[1.5rem] text-[#007C9F] rounded-full "
                    >
                      <img src={gear} alt="gear_icon" />
                      Edit Settings
                    </button>
                  </Table.RowHeaderCell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </div>
          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>
                  {" "}
                  <p className=" font-inter-tight text-[1rem] text-[#1C2024] leading-[1.5rem] font-medium ">
                    {" "}
                    Governance{" "}
                  </p>{" "}
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                {/* <div> */}
                <Table.RowHeaderCell>
                  {" "}
                  <p className="text-[#1C2024] font-medium font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                    {" "}
                    Minimum approval{" "}
                  </p>{" "}
                </Table.RowHeaderCell>
                <Table.Cell justify="start" width="75%">
                  <div className=" flex items-center h-full ">
                    <Progress.Root className="ProgressRootSettings" value={20}>
                      <Progress.Indicator
                        className="ProgressIndicatorAccepted"
                        style={{ transform: `translateX(-${100 - 20}%)` }}
                      />
                    </Progress.Root>
                  </div>
                </Table.Cell>
                {/* </div> */}
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  {" "}
                  <p className="text-[#1C2024] font-medium font-inter-tight text-[0.875rem] leading-[1.25rem] ">
                    {" "}
                    DAO Subdomain{" "}
                  </p>{" "}
                </Table.RowHeaderCell>
                <Table.Cell justify="start" width="75%">
                  <div className=" flex gap-x-[0.75rem] ">
                    <div className=" flex flex-col gap-y-[0.5rem]  ">
                      <label
                        // htmlFor={formDetails.days}
                        className="  text-left font-inter-tight text-[0.875rem] text-[#1C2024] font-medium leading-[1.25rem] "
                      >
                        Days
                      </label>
                      <input
                        type="tel"
                        maxLength={2}
                        disabled
                        name="days"
                        value="05"
                        className=" border border-[#00002F26] rounded-[0.375rem] bg-[#FFFFFFE5] w-[1.8rem] px-[0.25rem] outline-none font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#1C2024] "
                      />
                    </div>
                    <div className=" flex flex-col gap-y-[0.5rem]  ">
                      <label className=" text-left font-inter-tight text-[0.875rem] text-[#1C2024] font-medium leading-[1.25rem] ">
                        Hours
                      </label>
                      <input
                        type="tel"
                        disabled
                        value="12"
                        name="hours"
                        maxLength={2}
                        className=" border border-[#00002F26] rounded-[0.375rem] bg-[#FFFFFFE5] w-[1.8rem] px-[0.25rem] outline-none font-inter-tight text-[0.875rem] leading-[1.25rem] text-[#1C2024] "
                      />
                    </div>
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <button
                    onClick={() => navigate("/settings/edit-governance")}
                    className=" flex items-center gap-x-[0.5rem] px-[0.75rem] bg-[#00B8F820] py-[0.5rem] font-inter-tight text-[0.875rem] font-medium leading-[1.5rem] text-[#007C9F] rounded-full "
                  >
                    <img src={gear} alt="gear_icon" />
                    Edit Settings
                  </button>
                </Table.RowHeaderCell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </section>
  );
}

export default Settings;
