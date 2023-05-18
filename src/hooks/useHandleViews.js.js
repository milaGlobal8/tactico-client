import { useCallback } from "react";
import axios from "axios";

export const useHandleViews = () => {
  // 閲覧数
  const handleViews = useCallback(async (postId) => {
    try {
      await axios.put(process.env.REACT_APP_API_URL + `/posts/${postId}/view`);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { handleViews };
};
