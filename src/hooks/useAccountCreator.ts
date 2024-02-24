import { useEffect, useState } from "react"
import { apiClient } from "../services/apiClient"
import { CanceledError } from "axios";
import { CreateAccountFormData } from "../components/Admin/CreateAccountForm";
import useLogin from "./useLogin";

const useAccountCreator = ()=>{
  const [fetchError, setFetchError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [responseData, setResponseData] = useState<string>("") //all POST reqs return only a string res

  const { tryDefaultLogin } = useLogin()

  const aborter = new AbortController();

  const triggerAccountCreation = ({ name, emailId, password }:CreateAccountFormData)=>{
    
    if(emailId && !isPosting) {
      setIsPosting(true)
      apiClient.post("/api/admin", { name, emailId, password }, { 
        signal: (import.meta.env.DEV) ? undefined : aborter.signal //during 2nd render in strict mode, this first api call is cancelled and 2nd call doesn't happen unless button is clicked. hence just prevent the 1st call canceling in DEV 
      }).then((res)=>{
        setResponseData(res.data);
        setIsPosting(false);
        tryDefaultLogin(); //to login automaitcally after a/c creation is successfull
      })
      .catch((error)=>{
        if(error instanceof CanceledError) return;

        console.error("Error creating new account: ", error);
        setFetchError(error.response.data);
        setIsPosting(false);
      })
    }
  }

  useEffect(()=>{
    return ()=>aborter.abort();
  })

  return { responseData, fetchError, isPosting, triggerAccountCreation }
}

export default useAccountCreator;