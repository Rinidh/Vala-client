import { useEffect, useState } from "react";
import { AdminInfo } from "../components/Admin/AdminMain";
import { apiClient } from "../services/apiClient";

export default function () {
  const [pending, setPending] = useState<AdminInfo[]>([]);

  useEffect(()=>{
    setPending([{
      name: "Name",
      email: "mailrererererererererereryyyyy",
      _id: "1234"
    },{
      name: "Name",
      email: "mail",
      _id: "1234"
    }])
    // apiClient.get<AdminInfo>("/api/auth?isApproved=true").then((res)=>setPending([res.data])).catch((err)=>console.error(err))
  },[])

  return pending;
}