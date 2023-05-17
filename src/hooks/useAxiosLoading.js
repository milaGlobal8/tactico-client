import { useState, useCallback } from "react";
import axios from "axios";

export const useAxiosLoading = () => {
  // axios処理中のstate [true-ローディング表示/false-非表示]
  const [isAxiosLoading, setIsAxiosLoading] = useState(true);

  // 自分の投稿すべて取得する
  const fetchPosts = useCallback(async (username, setFn) => {
    await axios
      .get(`/posts/profile/${username}`)
      .then((response) => {
        setFn(response.data);
        setIsAxiosLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsAxiosLoading(false);
      });
  }, []);

  // いいね投稿取得
  const fetchLikedPosts = useCallback(async (userId, setFn) => {
    await axios
      .get(`/posts/profile/like/${userId}`)
      .then((response) => {
        setFn(response.data);
        setIsAxiosLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsAxiosLoading(false);
      });
  }, []);

  return { isAxiosLoading, setIsAxiosLoading, fetchPosts, fetchLikedPosts };
};
