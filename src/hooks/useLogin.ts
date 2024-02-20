import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { useAuth } from "../components/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { AxiosError, CanceledError } from "axios";
import { AdminInfo } from "../components/Admin/AdminMain";

export default function() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();
  const {setLoggedInAdmin} = useAuth()

  const tryDefaultLogin = async () => {
    try {
      setIsLoading(true);

      const { data } = await apiClient.post<AdminInfo>("/api/auth", {});

      setLoggedInAdmin(data)

      setIsLoading(false);

      // navigate("/admin")
      console.log("success");
      

    } catch (err) {
      if(err instanceof CanceledError) return;

      setIsLoading(false);

      console.log("failed default login: ", err);

      switch (err) {
        case err instanceof AxiosError &&
          err.response?.data == "No token provided...":
          setErrorMessage("No token provided...")
          break;

        case err instanceof AxiosError &&
          err.response?.data == "You are not yet approved...":
          setErrorMessage("Please wait, you are not yet approved as an admin...");
          break;

        case err instanceof AxiosError &&
          err.response?.data == "Invalid token...":
          setErrorMessage(
            "Please relogin.You may have to relogin after a certain period..."
          );
          break;
      }
    }
  };

  return { errorMessage, isLoading, tryDefaultLogin }
}