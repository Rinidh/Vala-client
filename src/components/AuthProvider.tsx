import { ReactNode, createContext, useContext, useState } from "react";
import { AdminInfo } from "./Admin/AdminMain";

interface AuthProviderValue {
  setLoggedInAdmin: (adminInfo: AdminInfo) => void;
  removeLoggedInAdmin: () => void;
  currentAdmin: AdminInfo;
}
const AuthContext = createContext({} as AuthProviderValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentAdmin, setCurrentAdmin] = useState({} as AdminInfo);

  const setLoggedInAdmin = (adminInfo: AdminInfo) => {
    setCurrentAdmin(adminInfo);
  };
  const removeLoggedInAdmin = () => {
    setCurrentAdmin({} as AdminInfo);
  };

  return (
    <AuthContext.Provider
      value={{ currentAdmin, setLoggedInAdmin, removeLoggedInAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext); //basically, you would call useContext in another comp (where you wanna use it), but it;s better to call it once here and export named specially as useAuth()
};
