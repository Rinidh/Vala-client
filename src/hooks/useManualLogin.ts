import { LoginFormData } from "../components/Admin/LoginForm";
import useDataPoster from "./useDataPoster";
import { AdminInfo } from "../components/Admin/AdminMain";

export function useManualLogin() {
  return useDataPoster<LoginFormData, AdminInfo>("/api/auth/login", {} as AdminInfo)
}