import { useEffect, useState } from "react";
import { ReviewFormData } from "../components/Home/section-C/ReviewModal";
import { apiClient } from "../services/apiClient";
import { CanceledError } from "axios";

type ReviewToSubmit = ReviewFormData & { review: string }; //the obj type that's actually posted

export default function ({ name, email, review }: ReviewToSubmit) {
  const [isPosting, setIsPosting] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    if (name && review && email && !isPosting) {
      setIsPosting(true);
      apiClient
        .post<string>(
          "/api/reviews",
          { name, email, review },
          { signal: controller.signal }
        )
        .then((res) => {
          setResponse(res.data);
          setIsPosting(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return; //must put this everytime you pass abort-signal as during dual render in strict mode, the first req is always cancelled

          console.error("Error posting review: ", error);
          setError(error.response.data);
          setIsPosting(false);
        });
    }
  }, [name, email, review]);

  const resetReviewPoster = () => {
    setError("");
    setIsPosting(false);
    setResponse("");
  };

  return { isPosting, response, error, resetReviewPoster };
}
