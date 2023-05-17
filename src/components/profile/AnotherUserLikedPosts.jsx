import React, { memo, useEffect, useState } from "react";
import AxiosLoading from "./../../pages/AxiosLoading";
import AntherUserLikedPost from "./AntherUserLikedPost";
import { useAxiosLoading } from "../../hooks/useAxiosLoading";
import NoLikedPosts from "./NoLikedPosts";

const AnotherUserLikedPosts = memo(({ user }) => {
  const [AnotherUserLikedPosts, setAnotherUserLikedPosts] = useState([]);

  const { isAxiosLoading, fetchLikedPosts } = useAxiosLoading();

  useEffect(() => {
    fetchLikedPosts(user._id, setAnotherUserLikedPosts);
  }, []);

  // もし投稿がなかったら
  if (AnotherUserLikedPosts.length === 0) {
    return <NoLikedPosts />;
  }

  // あったら
  return (
    <>
      {isAxiosLoading ? (
        <AxiosLoading />
      ) : (
        <AntherUserLikedPost posts={AnotherUserLikedPosts} />
      )}
    </>
  );
});

export default AnotherUserLikedPosts;
