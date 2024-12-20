import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Tooltip, Typography } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { AuthContext } from "./../../../state/AuthContext";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import AxiosLoading from "../../../pages/AxiosLoading";

const EUL = () => {
  // 各カテゴリーの投稿を格納する変数(HOME用のため投稿数は2つまで)
  const [premierHomePosts, setPremierHomePosts] = useState([]);
  const [laligaHomePosts, setLaligaHomePosts] = useState([]);
  const [bundesHomePosts, setBundesHomePosts] = useState([]);
  const [serieaHomePosts, setSerieaHomePosts] = useState([]);
  const [ligue1HomePosts, setLigue1HomePosts] = useState([]);
  const [clHomePosts, setClHomePosts] = useState([]);
  const [elHomePosts, setElHomePosts] = useState([]);

  const { user: currentUser } = useContext(AuthContext);

  const {
    isAxiosLoadingForPost,
    setIsAxiosLoadingForPost,
    fetchPremierHomePosts,
    fetchLaligaHomePosts,
    fetchBundesHomePosts,
    fetchSerieaHomePosts,
    fetchLigue1HomePosts,
    fetchClHomePosts,
    fetchElHomePosts,
  } = useFetchPosts();

  // データベースから投稿データをとってくる
  useEffect(() => {
    // 1. プレミアリーグ
    fetchPremierHomePosts(setPremierHomePosts, setIsAxiosLoadingForPost);
    // 2. ラリーガ
    fetchLaligaHomePosts(setLaligaHomePosts, setIsAxiosLoadingForPost);
    // 3. ブンデス
    fetchBundesHomePosts(setBundesHomePosts, setIsAxiosLoadingForPost);
    // 4. セリエA
    fetchSerieaHomePosts(setSerieaHomePosts, setIsAxiosLoadingForPost);
    // 5. リーグ・アン
    fetchLigue1HomePosts(setLigue1HomePosts, setIsAxiosLoadingForPost);
    // 6. CL
    fetchClHomePosts(setClHomePosts, setIsAxiosLoadingForPost);
    // 7. EL
    fetchElHomePosts(setElHomePosts, setIsAxiosLoadingForPost);
  }, []);

  //navigateのインスタンス化
  const navigate = useNavigate();

  return (
    <div
      className="eul container-fluid p-0 d-flex flex-column"
      style={{ flex: 1 }}
    >
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
          プレミアリーグ
        </h3>
        {/* 投稿 */}
        {isAxiosLoadingForPost ? (
          <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
        ) : (
          <>
            {premierHomePosts.map((post) => (
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

        {/* すべて見る ボタンの実装 */}
        <div className="border border-dark">
          <div className="buttonArea d-grid gap-2 col-6 mx-auto pt-3 pb-3">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => navigate("/eplPosts")}
            >
              すべて見る
            </button>
          </div>
        </div>
      </div>

      {/* ラ・リーガ */}

      <div className="SLE container-fluid border border-dark p-0">
        <h3
          className="container-fluid border-start border-end border-bottom border-dark p-0 m-0 text-center"
          style={{
            background:
              "linear-gradient(45deg,  #f3e64c 0%, #da882f 50%, #da882f 50%, #f3e64c 100%)",
            color: "white",
          }}
        >
          ラ･リーガ
        </h3>
        {/* 投稿 */}
        {isAxiosLoadingForPost ? (
          <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
        ) : (
          <>
            {laligaHomePosts.map((post) => (
              <div
                key={post._id}
                className="userInfoBox container-fluid border border-dark p-0 m-0 d-flex"
                style={{
                  background: "#FDF5E6",
                }}
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

        {/* すべて見る ボタンの実装 */}
        <div className="border border-dark">
          <div className="buttonArea d-grid gap-2 col-6 mx-auto pt-3 pb-3">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => navigate("/sllPosts")}
            >
              すべて見る
            </button>
          </div>
        </div>
      </div>

      {/* ドイツ・ブンデスリーガ */}
      <div className="GBL container-fluid border border-dark p-0">
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
            {bundesHomePosts.map((post) => (
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

        {/* すべて見る ボタンの実装 */}
        <div className="border border-dark">
          <div className="buttonArea d-grid gap-2 col-6 mx-auto pt-3 pb-3">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => navigate("/gblPosts")}
            >
              すべて見る
            </button>
          </div>
        </div>
      </div>

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
          セリエA
        </h3>
        {/* 投稿 */}
        {isAxiosLoadingForPost ? (
          <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
        ) : (
          <>
            {serieaHomePosts.map((post) => (
              <div
                key={post._id}
                className="userInfoBox container-fluid border border-dark p-0 m-0 d-flex"
                style={{ backgroundColor: "rgba(39,142,255,0.1)" }}
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

        {/* すべて見る ボタンの実装 */}
        <div className="border border-dark">
          <div className="buttonArea d-grid gap-2 col-6 mx-auto pt-3 pb-3">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => navigate("/isaPosts")}
            >
              すべて見る
            </button>
          </div>
        </div>
      </div>

      {/* フランス・リーグ・アン */}
      <div className="FL1 container-fluid border border-dark p-0">
        <h3
          className="container-fluid border-bottom border-dark p-0 m-0 text-center"
          style={{
            background:
              "linear-gradient(45deg, #091c3e 0%, #091c3e 50%, #091c3e 50%, #091c3e 100%)",
            color: "#cdfb0a",
          }}
        >
          リーグ・アン
        </h3>
        {/* 投稿 */}
        {isAxiosLoadingForPost ? (
          <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
        ) : (
          <>
            {ligue1HomePosts.map((post) => (
              <div
                key={post._id}
                className="userInfoBox container-fluid border border-dark p-0 m-0 d-flex"
                style={{ backgroundColor: "rgba(98,133,13,0.1)" }}
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

        {/* すべて見る ボタンの実装 */}
        <div className="border border-dark">
          <div className="buttonArea d-grid gap-2 col-6 mx-auto pt-3 pb-3">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => navigate("/fl1Posts")}
            >
              すべて見る
            </button>
          </div>
        </div>
      </div>

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
          <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
        ) : (
          <>
            {clHomePosts.map((post) => (
              <div
                key={post._id}
                className="userInfoBox container-fluid border border-dark p-0 m-0 d-flex"
                style={{ backgroundColor: "rgba(33,84,133,0.1)" }}
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

        {/* すべて見る ボタンの実装 */}
        <div className="border border-dark">
          <div className="buttonArea d-grid gap-2 col-6 mx-auto pt-3 pb-3">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => navigate("/clPosts")}
            >
              すべて見る
            </button>
          </div>
        </div>
      </div>

      {/* EL */}
      <div className="EL container-fluid border border-dark p-0">
        <h3
          className="container-fluid border-bottom border-dark p-0 m-0 text-center"
          style={{
            background:
              "linear-gradient(45deg, #ed7701 0%, #000000 50%, #000000 50%, #ed7701 100%)",
            color: "#ffffff",
          }}
        >
          EL
        </h3>

        {/* 投稿 */}
        {isAxiosLoadingForPost ? (
          <AxiosLoading loadingMsg="取得まで30秒ほどかかる場合がございます" />
        ) : (
          <>
            {elHomePosts.map((post) => (
              <div
                key={post._id}
                className="userInfoBox container-fluid border border-dark p-0 m-0 d-flex"
                style={{ backgroundColor: "rgba(163,81,21,0.1)" }}
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

        {/* すべて見る ボタンの実装 */}
        <div className="border border-dark">
          <div className="buttonArea d-grid gap-2 col-6 mx-auto pt-3 pb-3">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => navigate("/elPosts")}
            >
              すべて見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EUL;
