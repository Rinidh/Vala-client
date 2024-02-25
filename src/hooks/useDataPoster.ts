import { useEffect, useState } from "react"
import { apiClient } from "../services/apiClient"
import { CanceledError } from "axios";
import { allValuesTruthy } from "../utlis/helperFunctions";

const useDataPoster = <U extends object>()=>{ // defualtly set the deps array to empty
  const [fetchError, setFetchError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [responseData, setResponseData] = useState<string>("") //modified the server to only return string res on any POST req, apart from /auth

  const controller = new AbortController();

  const triggerDataPost = (endpoint: string, data: U, onSuccess?: ()=>void, onFailure?: ()=>void)=>{
    if(isPosting) return; // isPosting is checked here (in event handler) as there is chance of a client clicking the submit button simultaneously
    if(!allValuesTruthy(data)) {
      setFetchError("Please fill in all values") //For rare instances
      return;
    }

    setIsPosting(true)
    apiClient.post(endpoint, data, { signal: import.meta.env.DEV ? undefined : controller.signal }).then((res)=>{
      setResponseData(res.data);
      setIsPosting(false);
      if(onSuccess) onSuccess(); //if present, run the cb passed by consumer of hook on successful POST
    })
    .catch((error)=>{
      if(error instanceof CanceledError) return;

      console.error("Error creating new account: ", error);
      setFetchError(error.response.data);
      setIsPosting(false);
      if(onFailure) onFailure();
    })
  }

  useEffect(()=>{
    return ()=>controller.abort()
  })

  const resetDataPoster = () => {
    setFetchError("");
    setIsPosting(false);
    setResponseData("");
  };

  return { responseData, fetchError, isPosting, resetDataPoster, triggerDataPost }
}

export default useDataPoster;