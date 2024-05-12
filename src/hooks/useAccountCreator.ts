import { CreateAccountFormData } from "../components/Admin/CreateAccountForm";
import useDataPoster from "./useDataPoster";

const useAccountCreator = ()=>{
  return useDataPoster<CreateAccountFormData, string>("/api/admins", "")
}

export default useAccountCreator;