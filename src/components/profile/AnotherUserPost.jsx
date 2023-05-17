import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AnotherUserPost = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* 投稿 */}
      <div className="another_user_post" style={{ flex: 1 }}>
        {posts.map((post) => (
          <div
            key={post._id}
            className="userInfoBox container-fluid border border-dark p-0 m-0 row"
            style={{ backgroundColor: "rgba(255,255,255,1)" }}
          >
            {/* 投稿内容 */}
            <Button
              variant="text"
              className="d-flex flex-column p-3"
              onClick={() => navigate("/view-post", { state: post })}
            >
              <p className="sentence text-center mx-auto">
                <strong>{post.postTitle}</strong>
              </p>
              <p className="sentence text-center mx-auto">
                注目選手：{post.goodPlayer}
              </p>
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnotherUserPost;
