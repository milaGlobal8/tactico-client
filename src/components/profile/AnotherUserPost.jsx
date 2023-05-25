import React from "react";
import { Avatar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import sampleIconImg from "../../images/sampleIcon.png";

const AnotherUserPost = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className="another_user_posts container-fluid p-0 border-bottom border-dark">
      {/* 投稿 */}
      <div className="another_user_posts_box" style={{ flex: 1 }}>
        {posts.map((post) => (
          <div
            key={post._id}
            className="another_user_post container-fluid border border-dark p-0 m-0 d-flex"
            style={{ backgroundColor: "rgba(255,255,255,1)" }}
          >
            {/* ユーザー情報 */}
            <div className="profile">
              <Button
                variant="text"
                className="post_author pt-1 d-flex justify-content-start ps-2 pt-0 m-0"
                onClick={() =>
                  navigate(`/profile/${post.username}`, { state: post })
                }
              >
                <Avatar
                  alt="profile"
                  src={
                    post.profilePicture
                      ? process.env.REACT_APP_API_URL +
                        `/users/profilePicture/${post.profilePicture}`
                      : sampleIconImg
                  }
                  className="author border border-dark m-0"
                />
              </Button>
            </div>
            <div className="name_content flex-grow-1">
              <Typography
                gutterBottom
                variant="p"
                component="div"
                textTransform="none"
                className="post_username"
              >
                {post.username}
              </Typography>
              {/* 投稿内容 */}
              <Button
                variant="text"
                sx={{ textTransform: "none" }}
                className="post_content p-0 d-flex flex-column align-items-start w-100"
                onClick={() => navigate("/view-post", { state: post })}
              >
                <p className="sentence m-0 text-dark">
                  <strong>{post.postTitle}</strong>
                </p>
                <p className="sentence m-0 text-dark">
                  <strong>
                    <small>注目選手：{post.goodPlayer}</small>
                  </strong>
                </p>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnotherUserPost;
