import { useEffect, useState } from "react"
import { apiClient } from "../services/apiClient"
import { CanceledError } from "axios";
import { CreateAccountFormData } from "../components/Admin/CreateAccountForm";
import useLogin from "./useLogin";
import useDataPoster from "./useDataPoster";

const useAccountCreator = ()=>{
  return useDataPoster<CreateAccountFormData>()
}

export default useAccountCreator;