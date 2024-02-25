import { ReviewFormData } from "../components/Home/section-C/ReviewModal";
import useDataPoster from "./useDataPoster";

type ReviewToSubmit = ReviewFormData & { review: string }; //the obj type that's actually posted

export default function () {
  return useDataPoster<ReviewToSubmit>(); // means the data should be type ReviewToSubmit. The response expected is type string by default
}
