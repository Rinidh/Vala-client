import { useEffect, useState } from "react";
import { AdminInfo } from "../components/Admin/AdminMain";
import { apiClient } from "../services/apiClient";

export default function () {
  const [pending, setPending] = useState<AdminInfo[]>([]);

  useEffect(()=>{
    apiClient.get<AdminInfo[]>("/api/admin?isApproved=true").then((res)=>setPending([...res.data])).catch((err)=>console.error(err))
  },[])

  return pending;
}