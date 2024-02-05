import React, { useContext, useEffect } from "react";
import { apiClient } from "../../services/apiClient";
import { useAuth } from "../AuthProvider";

export interface AdminInfo {
  _id: string;
  name: string;
  email: string;
}

const AdminMain = () => {
  const { currentAdmin } = useAuth();

  return <div>{currentAdmin.name}</div>;
};

export default AdminMain;
