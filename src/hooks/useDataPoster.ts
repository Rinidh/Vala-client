import { useState } from "react"
import { apiClient } from "../services/apiClient"
import { CanceledError } from "axios";
import { allValuesTruthy } from "../utlis/helperFunctions";

const useDataPoster = <TData extends object, TResponse extends string | object>(endpoint: string, emptyResponseValue: TResponse)=>{ //the server returns string res on any POST req, apart from /auth and /auth/login
  const [fetchError, setFetchError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [responseData, setResponseData] = useState<TResponse>(emptyResponseValue); //responseData state var should be either initialzed with "" if TResponse is a string, or `{} as TResponse` if an object type eg AdminInfo as in useManualLogin(), hence it's necessry to provide it as arg 

  const triggerDataPost = (data: TData, onSuccess?: ()=>void, onFailure?: ()=>void)=>{
    if(isPosting) return; // isPosting is checked here (in event handler) as there is chance of a client clicking the submit button simultaneously
    if(!allValuesTruthy(data)) {
      setFetchError("Please fill in all values") //For rare instances
      return;
    }

    setIsPosting(true)
    apiClient.post<TResponse>(endpoint, data, { timeout: 10000 }).then((res)=>{
      setResponseData(res.data);
      setIsPosting(false);
      if(onSuccess) onSuccess(); //if present, run the cb passed by consumer of hook on successful POST
    })
    .catch((error)=>{
      if(error instanceof CanceledError) return;
      if(error.code === "ECONNABORTED" && error.message === "timeout of 10000ms exceeded") {
        setFetchError("Request Timed out");
        setIsPosting(false)
      }
 
      console.error("Error creating new account: ", error);
      setFetchError(error.response.data);
      setIsPosting(false);
      if(onFailure) onFailure();
    })
  }

  const resetDataPoster = () => {
    setFetchError("");
    setIsPosting(false);
    setResponseData(emptyResponseValue);
  };

  return { responseData, fetchError, isPosting, resetDataPoster, triggerDataPost }
}

export default useDataPoster;