import React, { memo, useEffect, useState } from "react";
import AxiosLoading from "./../../pages/AxiosLoading";
import AnotherUserLikedPost from "./AnotherUserLikedPost";
import { useAxiosLoading } from "../../hooks/useAxiosLoading";
import NoLikedPosts from "./NoLikedPosts";

const AnotherUserLikedPosts = memo(({ user }) => {
  const [AnotherUserLikedPosts, setAnotherUserLikedPosts] = useState([]);

  const { isAxiosLoading, fetchLikedPosts } = useAxiosLoading();

  useEffect(() => {
    fetchLikedPosts(user.userId, setAnotherUserLikedPosts);
  }, []);

  // もし投稿がなかったら
  if (AnotherUserLikedPosts.length === 0) {
    return <NoLikedPosts />;
  }

  // あったら
  return (
    <>
      {isAxiosLoading ? (
        <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
      ) : (
        <AnotherUserLikedPost posts={AnotherUserLikedPosts} />
      )}
    </>
  );
});

export default AnotherUserLikedPosts;
