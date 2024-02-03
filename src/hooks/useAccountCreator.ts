import { useEffect, useState } from "react"
import { apiClient } from "../services/apiClient"
import { AxiosResponse } from "axios";

interface Props {
  formData: FormData
}

const useAccountCreator = ({formData}:Props)=>{
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [response, setResponse] = useState<AxiosResponse>()

  useEffect(()=>{
    if(isSubmitted) {
      apiClient.post("/api/admin", formData).then((response)=>{
        setResponse
      })


        .catch((error)=>{
          console.error("Err posting data: ", error)
        })
      }
  },[isSubmitted])


}

export default useAccountCreator;