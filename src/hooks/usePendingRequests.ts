import { useEffect, useState } from "react";
import { AdminInfo } from "../components/Admin/AdminMain";
import { apiClient } from "../services/apiClient";

export default function () {
  const [pending, setPending] = useState<AdminInfo[]>([]);

  //prefer to use effect hook here instead of trigger---() as pending reqs may be frequently searched during a session
  useEffect(()=>{
    apiClient.get<AdminInfo[]>("/api/admin?isApproved=true").then((res)=>setPending([...res.data])).catch((err)=>console.error(err))
  },[])

  return pending;
}