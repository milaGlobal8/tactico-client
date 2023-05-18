import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Typography, Tooltip } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import { AuthContext } from "../../../state/AuthContext";

const National = () => {
  const { user: currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [nationalPosts, setNationalPosts] = useState([]);

  // データベースから投稿データをとってくる
  const { fetchNationalPosts } = useFetchPosts();
  useEffect(() => {
    fetchNationalPosts(setNationalPosts);
  }, []);

  return (
    <div
      className="National container-fluid p-0"
      style={{ minHeight: "100vh" }}
    >
      <h3
        className="container-fluid border border-dark p-0 m-0 text-center"
        style={{
          background:
            "linear-gradient(45deg, #356dff 0%, #000000 50%, #000000 50%, #356dff 100%)",
          color: "#ffffff",
        }}
      >
        National
      </h3>
      {/* 投稿 */}
      {nationalPosts.map((post) => (
        <div
          key={post._id}
          className="userInfoBox container-fluid border border-dark p-0 m-0 row"
          style={{ backgroundColor: "rgba(0,96,255,0.2)" }}
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
          ) : (
            <Tooltip title="ログインされた方のみ閲覧することができます">
              <Button variant="text" className="col-3 d-flex flex-column">
                <Avatar
                  alt="profilePicture"
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
            >
              <strong>{post.postTitle}</strong>
            </Typography>
            <Typography
              className="sentence text-center mx-auto"
              textTransform="none"
            >
              注目選手：{post.goodPlayer}
            </Typography>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default National;
