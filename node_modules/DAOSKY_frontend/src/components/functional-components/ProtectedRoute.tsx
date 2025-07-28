import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
