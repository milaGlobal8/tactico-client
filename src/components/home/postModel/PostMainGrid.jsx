import React, { memo } from "react";
import Formation from "./Formation";
import Comments from "./Comments";

const PostMainGrid = memo(({ post }) => {
  return (
    <>
      <Formation post={post} />
      <Comments postId={post._id} comments={post.comments} />
    </>
  );
});

export default PostMainGrid;
