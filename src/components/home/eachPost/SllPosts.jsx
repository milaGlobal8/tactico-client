import React, { useEffect, useContext, useState } from "react";
import Header from "./../../common/Header";
import Footer from "./../../common/Footer";
import { Avatar, Button, Typography, Tooltip } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../state/AuthContext";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import AxiosLoading from "./../../../pages/AxiosLoading";

const SllPosts = () => {
  //navigateのインスタンス化
  const navigate = useNavigate();
  const { user: currentUser } = useContext(AuthContext);
  // SllPosts
  const [laligaPosts, setLaligaPosts] = useState([]);

  // データベースから投稿データすべてをとってくる
  const { isAxiosLoadingForPost, setIsAxiosLoadingForPost, fetchLaligaPosts } =
    useFetchPosts();
  useEffect(() => {
    fetchLaligaPosts(setLaligaPosts, setIsAxiosLoadingForPost);
  }, []);

  return (
    <div
      className="container-fluid p-0 border-bottom border-dark"
      style={{ minHeight: "100vh" }}
    >
      <Header />

      {/* リーガ・エスパニョーラ */}

      <div className="SLE container-fluid border border-dark p-0">
        <h3
          className="container-fluid border-start border-end border-bottom border-dark p-0 m-0 text-center"
          style={{
            background:
              "linear-gradient(45deg,  #f3e64c 0%, #da882f 50%, #da882f 50%, #f3e64c 100%)",
            color: "white",
          }}
        >
          LaLiga
        </h3>
        {/* 投稿 */}
        {isAxiosLoadingForPost ? (
          <AxiosLoading />
        ) : (
          <>
            {laligaPosts.map((post) => (
              <div
                key={post._id}
                className="userInfoBox container-fluid border border-dark p-0 m-0 row"
                style={{
                  background: "#FDF5E6",
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

export default SllPosts;
