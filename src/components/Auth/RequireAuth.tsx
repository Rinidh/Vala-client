import { ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { currentAdmin } = useAuth();
  const navigate = useNavigate();

  if (!currentAdmin.name) {
    navigate("/login");
  } else return children;
};

export default RequireAuth;
