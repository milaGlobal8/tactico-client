import React from "react";
import Formation from "./Formation";
import Comments from "./Comments";

const NoUserPostMainGrid = ({ post }) => {
  return (
    <>
      <Formation post={post} />
      <Comments postId={post._id} />
    </>
  );
};

export default NoUserPostMainGrid;
