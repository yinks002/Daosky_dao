import React from "react";
import { useParams } from "react-router-dom";

const Proposal = () => {
  const { id, title } = useParams();
  console.log(id, title);
  return <div>Proposal</div>;
};

export default Proposal;
