import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePostSettings = () => {
  // navigate
  const navigate = useNavigate();

  // 表示している投稿が自分の投稿かどうか
  const [isCurrentUserPost, setIsCurrentUserPost] = useState(false);

  // 自分の投稿かどうか確認する関数
  const handleCheckMyPost = (authorId, userId) => {
    if (authorId === userId) {
      setIsCurrentUserPost(true);
    } else {
      return;
    }
  };

  // 投稿を削除する関数
  const handleDeletePost = async (postId, userId) => {
    try {
      await axios.delete(`/posts/${postId}/${userId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return {
    isCurrentUserPost,
    setIsCurrentUserPost,
    handleCheckMyPost,
    handleDeletePost,
  };
};
