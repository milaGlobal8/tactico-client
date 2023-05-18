import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Tooltip, Typography } from "@mui/material";
import sampleIconImg from "../../../images/sampleIcon.png";
import { AuthContext } from "./../../../state/AuthContext";
import { useFetchPosts } from "../../../hooks/useFetchPosts";

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
    fetchPremierHomePosts(setPremierHomePosts);
    // 2. ラリーガ
    fetchLaligaHomePosts(setLaligaHomePosts);
    // 3. ブンデス
    fetchBundesHomePosts(setBundesHomePosts);
    // 4. セリエA
    fetchSerieaHomePosts(setSerieaHomePosts);
    // 5. リーグ・アン
    fetchLigue1HomePosts(setLigue1HomePosts);
    // 6. CL
    fetchClHomePosts(setClHomePosts);
    // 7. EL
    fetchElHomePosts(setElHomePosts);
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
          English Premier League
        </h3>
        {/* 投稿 */}
        {premierHomePosts.map((post) => (
          <div
            key={post._id}
            className="userInfoBox container-fluid border border-dark p-0 m-0 row"
            style={{ backgroundColor: "rgba(8, 255, 170, 0.2)" }}
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
        {laligaHomePosts.map((post) => (
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
          BUNDESLIGA
        </h3>
        {/* 投稿 */}
        {bundesHomePosts.map((post) => (
          <div
            key={post._id}
            className="userInfoBox container-fluid border border-dark p-0 m-0 row"
            style={{ backgroundColor: "rgba(255,24,11,0.1)" }}
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
          SERIE A
        </h3>
        {/* 投稿 */}
        {serieaHomePosts.map((post) => (
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

      {/* フランス・リーグ１ */}
      <div className="FL1 container-fluid border border-dark p-0">
        <h3
          className="container-fluid border-bottom border-dark p-0 m-0 text-center"
          style={{
            background:
              "linear-gradient(45deg, #091c3e 0%, #091c3e 50%, #091c3e 50%, #091c3e 100%)",
            color: "#cdfb0a",
          }}
        >
          LIGUE 1
        </h3>
        {/* 投稿 */}
        {ligue1HomePosts.map((post) => (
          <div
            key={post._id}
            className="userInfoBox container-fluid border border-dark p-0 m-0 row"
            style={{ backgroundColor: "rgba(98,133,13,0.1)" }}
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
        {clHomePosts.map((post) => (
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
        {elHomePosts.map((post) => (
          <div
            key={post._id}
            className="userInfoBox container-fluid border border-dark p-0 m-0 row"
            style={{ backgroundColor: "rgba(163,81,21,0.1)" }}
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
