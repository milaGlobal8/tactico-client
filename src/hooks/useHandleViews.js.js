import { useCallback } from "react";
import axios from "axios";

export const useHandleViews = () => {
  // 閲覧数
  const handleViews = useCallback(async (postId) => {
    try {
      await axios.put(`/posts/${postId}/view`);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { handleViews };
};
