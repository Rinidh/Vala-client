import { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { useAuth } from "../components/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { AxiosError, CanceledError } from "axios";
import { AdminInfo } from "../components/Admin/AdminMain";

export default function() {
  const [failedDefaultLogIn, setFailedDefaultLogIn] = useState(false); //the app first tries to login whenever the user visits admin section; if he's already an authorized admin, he is directly taken to admin page
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const {setLoggedInAdmin} = useAuth()

  useEffect(() => {
    const controller = new AbortController();

    const tryDefaultLogin = async () => {
      try {
        const { data } = await apiClient.post<AdminInfo>("/api/auth", {}, { signal: controller.signal });

        setLoggedInAdmin(data)

        navigate("/admin")

      } catch (err) {
        if(err instanceof CanceledError) return;

        console.log("failed default login: ", err);

        switch (err) {
          case err instanceof AxiosError &&
            err.response?.data == "No token provided...":
            setFailedDefaultLogIn(true);
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
            setFailedDefaultLogIn(true);
            break;
        }

        setFailedDefaultLogIn(true);
      }
    };
    tryDefaultLogin();

    return ()=>controller.abort();
  }, []);

  return { failedDefaultLogIn, errorMessage }
}