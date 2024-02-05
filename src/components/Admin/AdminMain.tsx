import React, { useContext, useEffect } from "react";
import { apiClient } from "../../services/apiClient";
import { useAuth } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export interface AdminInfo {
  _id: string;
  name: string;
  email: string;
}

const AdminMain = () => {
  const { currentAdmin } = useAuth();
  const navigate = useNavigate();

  //in case of page refresh
  useEffect(() => {
    if (!currentAdmin.name) {
      navigate("/login"); //if factors eg server connectivity, jwt expiration etc are still okay, /login will direct back to /admin
    }
  });

  return <div>{currentAdmin.name}</div>;
};

export default AdminMain;
