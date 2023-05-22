import React, { useEffect, useContext, useState } from "react";
import Header from "./../../common/Header";
import Footer from "./../../common/Footer";
import { Avatar, Button, Typography, Tooltip } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../state/AuthContext";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import AxiosLoading from "./../../../pages/AxiosLoading";

const CLPosts = () => {
  //navigateのインスタンス化
  const navigate = useNavigate();

  const { user: currentUser } = useContext(AuthContext);
  // CLPosts
  const [clPosts, setClPosts] = useState([]);

  // データベースから投稿データすべてをとってくる
  const { isAxiosLoadingForPost, setIsAxiosLoadingForPost, fetchClPosts } =
    useFetchPosts();
  useEffect(() => {
    fetchClPosts(setClPosts, setIsAxiosLoadingForPost);
  }, []);

  return (
    <div
      className="container-fluid p-0 border-bottom border-dark"
      style={{ minHeight: "100vh" }}
    >
      <Header />

      {/* CL */}
      <div className="CL container-fluid border border-dark p-0">
        <h3
          className="container-fluid border-bottom border-dark p-0 m-0 text-center"
          style={{
            background:
              "linear-gradient(45deg, #fffefd 0%, #00074b 15%, #00074b 75%, #fffefd 100%)",
            color: "#fffefd",
          }}
        >
          CL
        </h3>
        {/* 投稿 */}
        {isAxiosLoadingForPost ? (
          <AxiosLoading />
        ) : (
          <>
            {clPosts.map((post) => (
              <div
                key={post._id}
                className="userInfoBox container-fluid border border-dark p-0 m-0 row"
                style={{ backgroundColor: "rgba(33,84,133,0.1)" }}
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
                      alt="user_profilePicture"
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
                        alt="user_profilePicture"
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
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CLPosts;
