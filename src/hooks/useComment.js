import { useState } from "react";
import axios from "axios";

export const useComment = () => {
  // コメントフォームの表示・非表示
  const [isVisible, setIsVisible] = useState(false);
  // コメントの中身
  const [comment, setComment] = useState("");
  // 取得するグループ毎のコメント
  const [commentGroup, setCommentGroup] = useState([]);

  // 投稿ごとのコメントを取得してくる
  const fetchCommentGroup = async (postId, setCommentGroup) => {
    await axios
      .get(process.env.REACT_APP_API_URL + `/comments/${postId}`)
      .then((res) => {
        setCommentGroup(res.data);
      })
      .catch((err) => console.log(err));
  };

  // コメントのgood処理
  const handleGoodComment = async (
    userId,
    commentId,
    like,
    setLike,
    isLiked,
    setIsLiked,
    isPushed,
    setIsPushed
  ) => {
    try {
      await axios.put(
        process.env.REACT_APP_API_URL + `/comments/${commentId}/like`,
        { userId: userId }
      );
    } catch (err) {
      console.log(err);
    }

    // いいねの数が変動
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    // 手の色の変化
    setIsPushed(!isPushed);
  };

  // コメントの中身を監視する
  const handleChangeComment = (value) => {
    setComment(value);
  };

  // コメントを送信する関数
  const handleSubmit = async (
    e,
    userId,
    username,
    postId,
    comment,
    setDone
  ) => {
    e.preventDefault();

    const newComment = {
      userId: userId,
      username: username,
      postId: postId,
      content: comment,
    };

    try {
      await axios
        .post(process.env.REACT_APP_API_URL + "/comments", newComment)
        .then((res) => {
          setDone(res);
        })
        .catch((err) => console.log(err))
        .finally(() => window.location.reload());
    } catch (err) {
      console.log(err);
    }
  };
  // 返信を送信する関数
  const handleReply = async (e, userId, username, postId, reply) => {
    e.preventDefault();

    const newComment = {
      userId: userId,
      username: username,
      postId: postId,
      content: reply,
    };

    try {
      await axios
        .post(process.env.REACT_APP_API_URL + "/comments", newComment)
        .catch((err) => console.log(err))
        .finally(() => window.location.reload());
    } catch (err) {
      console.log(err);
    }
  };

  return {
    isVisible,
    setIsVisible,
    comment,
    setComment,
    commentGroup,
    setCommentGroup,
    fetchCommentGroup,
    handleGoodComment,
    handleChangeComment,
    handleSubmit,
    handleReply,
  };
};
