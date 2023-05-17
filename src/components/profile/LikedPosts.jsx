import React, { memo, useEffect, useState, useContext } from "react";
import AxiosLoading from "./../../pages/AxiosLoading";
import LikedPost from "./LikedPost";
import { AuthContext } from "./../../state/AuthContext";
import { useAxiosLoading } from "../../hooks/useAxiosLoading";
import NoLikedPosts from "./NoLikedPosts";

const LikedPosts = memo(() => {
  const { user } = useContext(AuthContext);
  const [likedPosts, setLikedPosts] = useState([]);

  const { isAxiosLoading, fetchLikedPosts } = useAxiosLoading();

  useEffect(() => {
    fetchLikedPosts(user._id, setLikedPosts);
  }, []);

  // もし投稿がなかったら
  if (likedPosts.length === 0) {
    return <NoLikedPosts />;
  }

  // あったら
  return (
    <>{isAxiosLoading ? <AxiosLoading /> : <LikedPost posts={likedPosts} />}</>
  );
});

export default LikedPosts;
