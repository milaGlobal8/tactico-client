import React, { memo, useEffect, useState, useContext } from "react";
import AxiosLoading from "./../../pages/AxiosLoading";
import MyPost from "./MyPost";
import { AuthContext } from "./../../state/AuthContext";
import { useAxiosLoading } from "../../hooks/useAxiosLoading";
import NoMyPosts from "./NoMyPosts";

const MyPosts = memo(() => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);

  const { isAxiosLoading, fetchPosts } = useAxiosLoading();

  useEffect(() => {
    fetchPosts(user.username, setMyPosts);
  }, []);

  // もし投稿がなかったら
  if (myPosts.length === 0) {
    return <NoMyPosts />;
  }

  // あったら
  return (
    <>
      {isAxiosLoading ? (
        <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
      ) : (
        <MyPost posts={myPosts} />
      )}
    </>
  );
});

export default MyPosts;
