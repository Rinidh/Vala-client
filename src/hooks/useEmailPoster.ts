import useDataPoster from "./useDataPoster";

export function useEmailPoster() {
  return useDataPoster<{email: string}>();
}