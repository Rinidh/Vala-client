import { useEffect, useState } from "react"
import { apiClient } from "../services/apiClient"
import { CanceledError } from "axios";

const useDataPoster = <U extends Object>(endpoint: string, data: U, deps: any[] = [])=>{ // defualtly set the deps array to empty
  const [fetchError, setFetchError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [responseData, setResponseData] = useState<string>("") //modified the server to only return string res on any POST req, apart from /auth

  useEffect(()=>{
    const controller = new AbortController();

    //check if all props' values exist
    function allValuesTruthy() {
      for (const key in data) {
        if (!data[key]) {
          return false;
        }
      }
      return true;
    }

    if(allValuesTruthy() && !isPosting) {
      setIsPosting(true)

      apiClient.post(endpoint, data, { signal: controller.signal }).then((res)=>{
        setResponseData(res.data);
        setIsPosting(false);
      })
      .catch((error)=>{
        if(error instanceof CanceledError) return;

        console.error("Error creating new account: ", error);
        setFetchError(error.response.data);
        setIsPosting(false);
      })
    }

    return ()=>controller.abort()
  }, [...Object.getOwnPropertyNames(data), ...deps]) //spread the props in data as deps

  const resetDataPoster = () => {
    setFetchError("");
    setIsPosting(false);
    setResponseData("");
  };

  return { responseData, fetchError, isPosting, resetDataPoster }
}

export default useDataPoster;