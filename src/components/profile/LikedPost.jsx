import React from "react";
import { Avatar, Button, Typography } from "@mui/material";
import sampleIconImg from "../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";

const LikedPost = ({ posts }) => {
  //navigateのインスタンス化
  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0 border-bottom border-dark">
      {/* 投稿 */}
      <div className="liked_posts_box" style={{ flex: 1 }}>
        {posts.map((post) => (
          <div
            key={post._id}
            className="userInfoBox container-fluid border border-dark p-0 m-0 row"
            style={{ backgroundColor: "rgba(255,255,255,1)" }}
          >
            {/* ユーザー情報 */}
            <Button
              variant="text"
              className="col-3 d-flex flex-column"
              onClick={() =>
                navigate(`/profile/${post.username}`, { state: post })
              }
            >
              <Avatar
                alt="sample"
                src={
                  post.profilePicture
                    ? process.env.REACT_APP_API_URL +
                      `/users/profilePicture/${post.profilePicture}`
                    : sampleIconImg
                }
                className="border border-dark m-0"
              />
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                textTransform="none"
              >
                {post.username}
              </Typography>
            </Button>
            {/* 投稿内容 */}
            <Button
              variant="text"
              className="col-9 d-flex flex-column p-3 m-0"
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
    </div>
  );
};

export default LikedPost;
