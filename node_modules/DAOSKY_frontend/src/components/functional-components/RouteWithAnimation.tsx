import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/Home";
import CreateDao from "../../pages/CreateDao";
import JoinDao from "../../pages/JoinDao";
import DescribeYourDAO from "../../pages/DescribeYourDAO";
import SetupMembership from "../../pages/SetupMembership";
import SetGovernance from "../../pages/SetGovernance";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../../pages/Dashboard";
import Proposals from "../../pages/Proposals";
import Members from "../../pages/Members";
import Settings from "../../pages/Settings";
import Proposal from "../../pages/Proposal";
import CreateProposal from "../../pages/CreateProposal";
import AddMember from "../../pages/AddMember";
import EditGeneral from "../../pages/EditGeneral";
import EditGovernance from "../../pages/EditGovernance";

const RouteWithAnimation = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<Home />} path="/" />
        <Route element={<CreateDao />} path="/create-your-dao" />
        <Route element={<JoinDao />} path="/join-dao" />
        <Route element={<DescribeYourDAO />} path="describe-your-dao" />
        <Route element={<SetupMembership />} path="setup-membership" />
        <Route element={<SetGovernance />} path="set-governance" />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route
            path="/proposals/create-proposal"
            element={<CreateProposal />}
          />
          <Route path="/proposals/:proposal" element={<Proposal />} />
          <Route path="/members" element={<Members />} />
          <Route path="members/add-member" element={<AddMember />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/edit-general" element={<EditGeneral />} />
          <Route
            path="/settings/edit-governance"
            element={<EditGovernance />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default RouteWithAnimation;
