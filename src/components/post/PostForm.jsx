import React, { useState, useContext } from "react";
import SelectLeague from "./SelectLeague";
import EnterPostTitle from "./EnterPostTitle";
import EnterYourTeam from "./EnterYourTeam";
import EnterGoodPlayer from "./EnterGoodPlayer";
import EnterOffenseSystem from "./EnterOffenseSystem";
import EnterDefenseSystem from "./EnterDefenseSystem";
import SelectFormation from "./SelectFormation";
import Court from "./Court";
import PostBtn from "./PostBtn";
import { PlayersNameContext } from "./../providers/PlayersName";
import { AuthContext } from "./../../state/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AxiosLoading from "./../../pages/AxiosLoading";

const PostForm = () => {
  // ログインしているユーザー情報を取得
  const { user: currentUser } = useContext(AuthContext);
  // ローディング
  const [isPostLoading, setIsPostLoading] = useState(false);
  //選手名
  // Context内のplayer11人分を取得
  const {
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
    player7,
    player8,
    player9,
    player10,
    player11,
  } = useContext(PlayersNameContext);

  // 選択されたリーグ名を格納する変数 State
  const [selectedLeague, setSelectedLeague] = useState("");
  // 投稿タイトルを格納する変数 State
  const [postTitle, setPostTitle] = useState("");
  // 投稿者のチームを格納する変数 State
  const [team, setTeam] = useState("");
  // 注目選手を格納する変数 State
  const [goodPlayer, setGoodPlayer] = useState("");
  // 攻撃戦術を格納する変数 State
  const [offenseSystem, setOffenseSystem] = useState("");
  // 守備戦術を格納する変数 State
  const [defenseSystem, setDefenseSystem] = useState("");
  // 選択されたフォーメーションを格納する変数 State
  const [selectedFormation, setSelectedFormation] = useState("");

  // ボタン trueが押せない
  const [isDisabled, setIsDisabled] = useState(true);

  // navigate
  const navigate = useNavigate();

  if (selectedLeague === "リーグ名を選択してください") {
    setIsDisabled(true);
  } else if (selectedFormation === "フォーメーションを選択してください") {
    setIsDisabled(true);
  }

  // 送信処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(false);

    const newPost = {
      userId: currentUser._id,
      username: currentUser.username,
      profilePicture: currentUser.profilePicture,
      desc: currentUser.desc,
      followers: currentUser.followers,
      followings: currentUser.followings,
      isAdmin: currentUser.isAdmin,
      leagueName: selectedLeague,
      postTitle: postTitle,
      favoredTeam: team,
      goodPlayer: goodPlayer,
      offense: offenseSystem,
      defense: defenseSystem,
      formation: selectedFormation,
      player1: player1,
      player2: player2,
      player3: player3,
      player4: player4,
      player5: player5,
      player6: player6,
      player7: player7,
      player8: player8,
      player9: player9,
      player10: player10,
      player11: player11,
    };

    // descとprofilePictureは空でもOK
    const { desc, profilePicture, ...other } = newPost;

    const isEmpty = Object.values(other).filter(
      (value) =>
        value === "" ||
        typeof value === "undefined" ||
        value === null ||
        value === "リーグ名を選択してください" ||
        value === "フォーメーションを選択してください"
    );
    if (Object.keys(isEmpty).length !== 0) {
      alert("未入力の箇所があります。すべて入力してから投稿してください。");
      return;
    }

    try {
      setIsPostLoading(true);
      await axios
        .post(process.env.REACT_APP_API_URL + "/posts", newPost)
        .then(() => {
          setIsPostLoading(false);
        })
        .catch((err) => {
          setIsPostLoading(false);
          console.log(err);
          navigate("*");
        })
        .finally(() => {
          navigate("/");
        });
    } catch (err) {
      setIsPostLoading(false);
      console.log(err);
      navigate("*");
    }
  };

  return (
    <>
      {isPostLoading ? (
        <AxiosLoading loadingMsg="投稿を送信中です" />
      ) : (
        <>
          <div className="post_form">
            <form action="POST" onSubmit={(e) => handleSubmit(e)}>
              <SelectLeague
                setSelectedLeague={setSelectedLeague}
                setIsDisabled={setIsDisabled}
              />
              <EnterPostTitle setPostTitle={setPostTitle} />
              <EnterYourTeam setTeam={setTeam} />
              <EnterGoodPlayer setGoodPlayer={setGoodPlayer} />
              <EnterOffenseSystem
                offenseSystem={offenseSystem}
                setOffenseSystem={setOffenseSystem}
              />
              <EnterDefenseSystem
                defenseSystem={defenseSystem}
                setDefenseSystem={setDefenseSystem}
              />
              <SelectFormation
                setSelectedFormation={setSelectedFormation}
                setIsDisabled={setIsDisabled}
              />
              <Court selectedFormation={selectedFormation} />
              {/* ボタン */}
              <PostBtn isDisabled={isDisabled} />
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default PostForm;
