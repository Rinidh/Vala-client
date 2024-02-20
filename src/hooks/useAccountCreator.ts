import { useEffect, useState } from "react"
import { apiClient } from "../services/apiClient"
import { CanceledError } from "axios";
import { CreateAccountFormData } from "../components/Admin/CreateAccountForm";
import useLogin from "./useLogin";

const useAccountCreator = ({ name, emailId, password }:CreateAccountFormData)=>{
  const [fetchError, setFetchError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [responseData, setResponseData] = useState<string>("")

  const { tryDefaultLogin, isLoading, errorMessage } = useLogin() //to login after a/c creation is successfull

  useEffect(()=>{
    const controller = new AbortController();

    console.log(emailId);
    if(emailId && !isPosting) {
      
      setIsPosting(true)

      apiClient.post("/api/admin", { name, emailId, password }, { signal: controller.signal }).then((res)=>{
        setResponseData(res.data);
        setIsPosting(false);

        tryDefaultLogin();
      })
      .catch((error)=>{
        if(error instanceof CanceledError) return;

        console.error("Error creating new account: ", error);
        setFetchError(error.response.data);
        setIsPosting(false);
      })
    }

    return ()=>controller.abort()
  },[name, emailId, password])

  return { responseData, fetchError, isPosting }
}

export default useAccountCreator;