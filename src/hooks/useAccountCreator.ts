import { useEffect, useState } from "react"
import { apiClient } from "../services/apiClient"
import { CanceledError } from "axios";
import { FormData } from "../components/Admin/CreateAccountForm";
import { AdminInfo } from "../components/Admin/AdminMain"

interface ResponseData {
  message: string,
  adminInfo: AdminInfo,
}

const useAccountCreator = ({ name, email, password }:FormData)=>{
  const [fetchError, setFetchError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [responseData, setResponseData] = useState<ResponseData>({} as ResponseData)

  useEffect(()=>{
    const controller = new AbortController();

    if(email && !isPosting) {
      setIsPosting(true)

      apiClient.post<ResponseData>("/api/admin", { name, email, password }, { signal: controller.signal }).then((res)=>{
        setResponseData(res.data);
        setIsPosting(false);
      })
      .catch((error)=>{
        if(error instanceof CanceledError) return;

        console.error("Err posting data: ", error);
        setFetchError(error.message);
        setIsPosting(false);
      })
    }

    return ()=>controller.abort()
  },[name, email, password])

  return { responseData, fetchError, isPosting }
}

export default useAccountCreator;