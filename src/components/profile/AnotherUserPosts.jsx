import React, { memo, useEffect, useState } from "react";
import AxiosLoading from "./../../pages/AxiosLoading";
import { useAxiosLoading } from "../../hooks/useAxiosLoading";
import NoMyPosts from "./NoMyPosts";
import AnotherUserPost from "./AnotherUserPost";

const AnotherUserPosts = memo(({ user }) => {
  const [anotherUserPosts, setAnotherUserPosts] = useState([]);

  const { isAxiosLoading, fetchPosts } = useAxiosLoading();

  useEffect(() => {
    fetchPosts(user.username, setAnotherUserPosts);
  }, []);

  // もし投稿がなかったら
  if (anotherUserPosts.length === 0) {
    return <NoMyPosts />;
  }

  // あったら
  return (
    <>
      {isAxiosLoading ? (
        <AxiosLoading />
      ) : (
        <AnotherUserPost posts={anotherUserPosts} />
      )}
    </>
  );
});

export default AnotherUserPosts;
