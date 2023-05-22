import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Typography, Tooltip } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import { AuthContext } from "./../../../state/AuthContext";
import AxiosLoading from "./../../../pages/AxiosLoading";

const JL = () => {
  const { user: currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [jlPosts, setJlPosts] = useState([]);

  // データベースから投稿データをとってくる
  const { isAxiosLoadingForPost, setIsAxiosLoadingForPost, fetchJlPosts } =
    useFetchPosts();
  useEffect(() => {
    fetchJlPosts(setJlPosts, setIsAxiosLoadingForPost);
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
      {isAxiosLoadingForPost ? (
        <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
      ) : (
        <>
          {jlPosts.map((post) => (
            <div
              key={post._id}
              className="userInfoBox container-fluid border border-dark p-0 m-0 row"
              style={{
                backgroundColor: "white",
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
                    style={{ color: "black" }}
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
                      style={{ color: "black" }}
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
                  style={{ color: "black" }}
                >
                  <strong>{post.postTitle}</strong>
                </Typography>
                <Typography
                  className="sentence text-center mx-auto"
                  textTransform="none"
                  style={{ color: "black" }}
                >
                  注目選手：{post.goodPlayer}
                </Typography>
              </Button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default JL;
