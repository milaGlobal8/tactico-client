import { useState } from "react";

export const usePostGoodUserColor = () => {
  //「投稿」「いいね」の選択されているときの色の切替
  const [isPost, setIsPost] = useState(true);
  const [isGood, setIsGood] = useState(false);
  const [isSearchUser, setIsSearchUser] = useState(false);

  //選択時のstyle
  const styleSelected = {
    color: "#1976d2",
  };

  //選択されたらbooleanを切り替える
  const onClickChangeColor = (e) => {
    switch (e.target.innerText) {
      case "投稿":
        setIsPost(true);
        setIsGood(false);
        setIsSearchUser(false);
        break;

      case "いいね":
        setIsPost(false);
        setIsGood(true);
        break;

      case "ユーザー":
        setIsPost(false);
        setIsSearchUser(true);
        break;
      default:
        break;
    }
  };

  return { isPost, isGood, isSearchUser, styleSelected, onClickChangeColor };
};
