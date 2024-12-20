import React, { useEffect, useContext, useState } from "react";
import Header from "./../../common/Header";
import Footer from "./../../common/Footer";
import { Avatar, Button, Typography, Tooltip } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../state/AuthContext";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import AxiosLoading from "./../../../pages/AxiosLoading";

const GblPosts = () => {
  //navigateのインスタンス化
  const navigate = useNavigate();
  const { user: currentUser } = useContext(AuthContext);
  // GBLPosts
  const [bundesPosts, setBundesPosts] = useState([]);

  // データベースから投稿データすべてをとってくる
  const { isAxiosLoadingForPost, setIsAxiosLoadingForPost, fetchBundesPosts } =
    useFetchPosts();
  useEffect(() => {
    fetchBundesPosts(setBundesPosts, setIsAxiosLoadingForPost);
  }, []);

  return (
    <div
      className="container-fluid p-0 border-bottom border-dark"
      style={{ minHeight: "100vh" }}
    >
      <Header />

      {/* ドイツ・ブンデスリーガ */}
      <h3
        className="container-fluid border-bottom border-dark p-0 m-0 text-center"
        style={{
          background:
            "linear-gradient(45deg, #d10214 0%, #d10214 50%, #d10214 50%, #d10214 100%)",
          color: "#191917",
        }}
      >
        ブンデスリーガ
      </h3>
      {/* 投稿 */}
      {isAxiosLoadingForPost ? (
        <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
      ) : (
        <>
          {bundesPosts.map((post) => (
            <div
              key={post._id}
              className="userInfoBox container-fluid border border-dark p-0 m-0 d-flex"
              style={{ backgroundColor: "rgba(255,24,11,0.1)" }}
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

      <Footer />
    </div>
  );
};

export default GblPosts;
