import { ReactNode, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { currentAdmin } = useAuth();
  const navigate = useNavigate();

  //always handle side-effects like navigation after the render-phase has gone thru atleast once. Always put navigation in effect hook
  useEffect(() => {
    if (!currentAdmin.name) navigate("/login");
  }, [currentAdmin.name]);

  if (!currentAdmin.name) return <div />;
  else return <div>{children}</div>;
};

export default RequireAuth;
