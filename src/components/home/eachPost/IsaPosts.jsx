import React, { useEffect, useContext, useState } from "react";
import Header from "./../../common/Header";
import Footer from "./../../common/Footer";
import { Avatar, Button, Typography, Tooltip } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../state/AuthContext";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import AxiosLoading from "./../../../pages/AxiosLoading";

const IsaPosts = () => {
  //navigateのインスタンス化
  const navigate = useNavigate();
  const { user: currentUser } = useContext(AuthContext);
  // IsaPosts
  const [serieaPosts, setSerieaPosts] = useState([]);

  // データベースから投稿データすべてをとってくる
  const { isAxiosLoading, setIsAxiosLoading, fetchSerieaPosts } =
    useFetchPosts();
  useEffect(() => {
    fetchSerieaPosts(setSerieaPosts, setIsAxiosLoading);
  }, []);

  return (
    <div
      className="container-fluid p-0 border-bottom border-dark"
      style={{ minHeight: "100vh" }}
    >
      <Header />

      {/* イタリア・セリエA */}
      <div className="ISA container-fluid border border-dark p-0">
        <h3
          className="container-fluid border-bottom border-dark p-0 m-0 text-center"
          style={{
            background:
              "linear-gradient(45deg, #22d2ff 0%, #038aff 50%, #038aff 50%, #22d2ff 100%)",
            color: "#37003c",
          }}
        >
          SERIE A
        </h3>
        {/* 投稿 */}
        {isAxiosLoading ? (
          <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
        ) : (
          <>
            {serieaPosts.map((post) => (
              <div
                key={post._id}
                className="userInfoBox container-fluid border border-dark p-0 m-0 row"
                style={{ backgroundColor: "rgba(39,142,255,0.1)" }}
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

export default IsaPosts;
