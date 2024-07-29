import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/Home";
import CreateDao from "../../pages/CreateDao";
import JoinDao from "../../pages/JoinDao";

const RouteWithAnimation = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<Home />} path="/" />
        <Route element={<CreateDao />} path="/create-your-dao" />
        <Route element={<JoinDao />} path="/join-dao" />
      </Routes>
    </AnimatePresence>
  );
};

export default RouteWithAnimation;
