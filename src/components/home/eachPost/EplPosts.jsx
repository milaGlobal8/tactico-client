import React, { useEffect, useContext, useState } from "react";
import Header from "./../../common/Header";
import Footer from "./../../common/Footer";
import { Avatar, Button, Typography, Tooltip } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../state/AuthContext";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import AxiosLoading from "./../../../pages/AxiosLoading";

const EplPosts = () => {
  //navigateのインスタンス化
  const navigate = useNavigate();

  const { user: currentUser } = useContext(AuthContext);
  // EPLPosts
  const [premierPosts, setPremierPosts] = useState([]);

  // データベースから投稿データすべてをとってくる
  const { isAxiosLoadingForPost, setIsAxiosLoadingForPost, fetchPremierPosts } =
    useFetchPosts();
  useEffect(() => {
    fetchPremierPosts(setPremierPosts, setIsAxiosLoadingForPost);
  }, []);

  return (
    <div
      className="container-fluid p-0 border-bottom border-dark"
      style={{ minHeight: "100vh" }}
    >
      <Header />

      {/* プレミアリーグ */}
      <div className="EPL container-fluid border border-dark p-0">
        <h3
          className="container-fluid border border-dark p-0 m-0 text-center"
          style={{
            background:
              "linear-gradient(45deg, #ff015b 0%, #05f1ff 50%, #05f1ff 50%, #00ff87 100%)",
            color: "#37003c",
          }}
        >
          English Premier League
        </h3>
        {/* 投稿 */}
        {isAxiosLoadingForPost ? (
          <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
        ) : (
          <>
            {premierPosts.map((post) => (
              <div
                key={post._id}
                className="userInfoBox container-fluid border border-dark p-0 m-0 d-flex"
                style={{ backgroundColor: "rgba(8, 255, 170, 0.2)" }}
              >
                {/* ユーザー情報 */}
                {currentUser ? (
                  <>
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
                  </>
                ) : (
                  <Tooltip title="ログインされた方のみ閲覧することができます">
                    <div className="profile">
                      <Button
                        variant="text"
                        className="post_author pt-1 d-flex justify-content-start ps-2 pt-0 m-0"
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
                  </Tooltip>
                )}
                {/* 投稿内容 */}
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
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default EplPosts;
