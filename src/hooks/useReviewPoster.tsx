import { ReviewFormData } from "../components/Home/section-C/ReviewModal";
import useDataPoster from "./useDataPoster";

type ReviewToSubmit = ReviewFormData & { review: string }; //the obj type that's actually posted

export default function (data: ReviewToSubmit) {
  return useDataPoster<ReviewToSubmit>("/api/reviews", data); // means the data should be type ReviewToSubmit and the response expected is type string
}
