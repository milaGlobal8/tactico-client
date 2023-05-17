import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Typography, Tooltip } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import { AuthContext } from "./../../../state/AuthContext";

const JL = () => {
  const { user: currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [jlPosts, setJlPosts] = useState([]);

  // データベースから投稿データをとってくる
  const { fetchJlPosts } = useFetchPosts();
  useEffect(() => {
    fetchJlPosts(setJlPosts);
  }, []);

  return (
    <div
      className="jl container-fluid p-0 d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <h3
        className="container-fluid border border-dark p-0 m-0 text-center"
        style={{
          background:
            "linear-gradient(45deg, #e70012 0%, #000000 50%, #000000 50%, #e70012 100%)",
          color: "#ffffff",
        }}
      >
        J-league
      </h3>
      {/* 投稿 */}
      <div className="jl_posts_box" style={{ flex: 1 }}>
        {jlPosts.map((post) => (
          <div
            key={post._id}
            className="userInfoBox container-fluid border border-dark p-0 m-0 row"
            style={{
              backgroundColor: "rgb(25,24,23)",
            }}
          >
            {/* ユーザー情報 */}
            {currentUser ? (
              <Button
                variant="text"
                className="col-3 d-flex flex-column"
                onClick={() =>
                  navigate(`/profile/${post.username}`, { state: post })
                }
              >
                <Avatar
                  alt="profilePicture"
                  src={
                    post.profilePicture
                      ? `/users/profilePicture/${post.profilePicture}`
                      : sampleIconImg
                  }
                  className="border border-white m-0"
                />
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  textTransform="none"
                  style={{ color: "rgb(247,247,246)" }}
                >
                  {post.username}
                </Typography>
              </Button>
            ) : (
              <Tooltip title="ログインされた方のみ閲覧することができます">
                <Button variant="text" className="col-3 d-flex flex-column">
                  <Avatar
                    alt="profilePicture"
                    src={
                      post.profilePicture
                        ? `/users/profilePicture/${post.profilePicture}`
                        : sampleIconImg
                    }
                    className="border border-white m-0"
                  />
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    textTransform="none"
                    style={{ color: "rgb(247,247,246)" }}
                  >
                    {post.username}
                  </Typography>
                </Button>
              </Tooltip>
            )}
            {/* 投稿内容 */}
            <Button
              variant="text"
              className="col-9 d-flex flex-column p-3 m-0"
              onClick={() => navigate("/view-post", { state: post })}
            >
              <Typography
                className="sentence text-center mx-auto"
                textTransform="none"
                style={{ color: "rgb(247,247,246)" }}
              >
                <strong>{post.postTitle}</strong>
              </Typography>
              <Typography
                className="sentence text-center mx-auto"
                textTransform="none"
                style={{ color: "rgb(247,247,246)" }}
              >
                注目選手：{post.goodPlayer}
              </Typography>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JL;
