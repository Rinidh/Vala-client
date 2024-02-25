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

  const aborter = new AbortController();

  const tryDefaultLogin = async () => {
    try {
      setIsLoading(true);

      const { data } = await apiClient.post<AdminInfo>("/api/auth", {}, { signal:  (import.meta.env.DEV) ? undefined : aborter.signal });

      setLoggedInAdmin(data)

      setIsLoading(false);

      navigate("/admin")      

    } catch (err) {
      if(err instanceof CanceledError) return;

      setIsLoading(false);

      console.log("failed default login: ", err);

      const axiosError = err as AxiosError
      switch (err instanceof AxiosError) {
        case axiosError.response?.data == "No token provided...":
          setErrorMessage("No token provided...")
          break;

        case axiosError.response?.data == "You are not yet approved...":
          setErrorMessage("Please wait, you are not yet approved as an admin...");
          break;

        case axiosError.response?.data == "Invalid token...":
          setErrorMessage(
            "Please relogin.You may have to relogin after a certain period..."
          );
          break;
      }
    }
  };

  useEffect(()=>{
    return ()=>aborter.abort();
  })

  return { errorMessage, isLoading, tryDefaultLogin }
}