import React from "react";
import { Button, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import sampleIconImg from "../../images/sampleIcon.png";

const ResultPost = ({ posts }) => {
  //navigateのインスタンス化
  const navigate = useNavigate();

  return (
    <div className="result_post_box">
      {/* 検索結果 */}
      {posts.map((post) => (
        <div
          key={post._id}
          className="userInfoBox container-fluid border border-dark p-0 m-0 row"
          style={{ backgroundColor: "white" }}
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
              alt="profile"
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
            sx={{ textTransform: "none" }}
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
  );
};

export default ResultPost;
