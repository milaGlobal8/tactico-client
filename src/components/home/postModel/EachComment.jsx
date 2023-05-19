import React, { useState, useEffect, useContext } from "react";
import { Divider, Avatar, Grid, Paper, Button } from "@mui/material";
import { Tooltip, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import sampleIcon from "../../../images/sampleIcon.png";
import { formatDistance, format } from "date-fns";
import { ja } from "date-fns/locale";
import axios from "axios";
import ReplyForm from "./ReplyForm";
import { AuthContext } from "./../../../state/AuthContext";
import Snackbar from "@mui/material/Snackbar";
import { useComment } from "../../../hooks/useComment";
import { useNavigate } from "react-router-dom";

const EachComment = ({ comment, postId }) => {
  // navigate
  const navigate = useNavigate();
  // ユーザーがいるかどうか
  const { user } = useContext(AuthContext);
  const currentUser = user ? user : "";

  // 返信関連
  const [isPushedIcon, setIsPushedIcon] = useState(false);
  const [commentUserProfilePicture, setCommentUserProfilePicture] =
    useState("");
  const [isPushedReply, setIsPushedReply] = useState(false);
  // いいねの数
  const [like, setLike] = useState(comment.likes.length);
  // いいねが押されたか否か
  const [isLiked, setIsLiked] = useState(
    comment.likes.includes(currentUser ? currentUser._id : false)
  );
  // 手の色
  const [isPushed, setIsPushed] = useState(
    comment.likes.includes(currentUser ? currentUser._id : false)
  );

  // いいねを押す関数
  const { handleGoodComment } = useComment();

  // スナックバーの表示
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleIcon = () => {
    setIsPushedIcon(true);
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // コメントしたユーザー写真の取得
  useEffect(() => {
    const fetchCommentUser = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/users?userId=${comment.userId}`
      );
      setCommentUserProfilePicture(response.data.profilePicture);
    };
    fetchCommentUser();
  }, [comment.userId]);

  // 返信関数(ログインされていたら返信フォームを開く)
  const handleReply = () => {
    if (currentUser) {
      setIsPushedReply(!isPushedReply);
    } else {
      // ログインしていなかったら、スナックバー表示
      setState({ ...state, open: true });
    }
  };

  // 時間
  let time = formatDistance(new Date(), Date.parse(comment.createdAt), {
    locale: ja,
  });
  if (time.indexOf("未満") !== -1) {
    time = "たった今";
  } else if (time.indexOf("か月") !== -1 || time.indexOf("年") !== -1) {
    time = format(Date.parse(comment.createdAt), "yyyy年M月d日", {
      locale: ja,
    });
  } else {
    time = time + "前";
  }
  return (
    <>
      <Paper key={comment._id} style={{ padding: "40px 20px" }}>
        {/* スナックバー */}
        {isPushedIcon ? (
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={() => handleClose()}
            message="ログインされた方のみプロフィールを閲覧することができます。"
            key={vertical + horizontal}
          />
        ) : (
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={() => handleClose()}
            message="ログインされた方のみ返信することができます。"
            key={vertical + horizontal}
          />
        )}
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            {currentUser ? (
              <Button
                onClick={() =>
                  navigate(`/profile/${comment.username}`, {
                    state: comment,
                  })
                }
              >
                <Avatar
                  alt="comment_author_picture"
                  src={
                    commentUserProfilePicture
                      ? process.env.REACT_APP_API_URL +
                        `/users/profilePicture/${commentUserProfilePicture}`
                      : sampleIcon
                  }
                  className="comment_author_picture border border-dark"
                />
              </Button>
            ) : (
              <Button onClick={() => handleIcon()}>
                <Avatar
                  alt="comment_author_picture"
                  src={
                    commentUserProfilePicture
                      ? process.env.REACT_APP_API_URL +
                        `/users/profilePicture/${commentUserProfilePicture}`
                      : sampleIcon
                  }
                  className="comment_author_picture border border-dark"
                />
              </Button>
            )}
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{comment.username}</h4>
            <p style={{ textAlign: "left" }}>{comment.content}</p>
            <p style={{ textAlign: "left", color: "gray" }}>{time}</p>
            {/* ユーザーリアクション */}
            <div className="good_comment_box d-flex">
              {currentUser ? (
                <div className="goodIcon_box me-3">
                  <Tooltip title="Good">
                    <IconButton
                      onClick={() =>
                        handleGoodComment(
                          currentUser._id,
                          comment._id,
                          like,
                          setLike,
                          isLiked,
                          setIsLiked,
                          isPushed,
                          setIsPushed
                        )
                      }
                    >
                      <ThumbUpOffAltIcon color={isPushed ? "error" : ""} />
                    </IconButton>
                  </Tooltip>
                  <span>{like}</span>
                </div>
              ) : (
                <></>
              )}
              {currentUser ? (
                <Button onClick={() => handleReply()}>返信</Button>
              ) : (
                <></>
              )}
            </div>
            {isPushedReply ? (
              <ReplyForm
                postId={postId}
                isPushedReply={isPushedReply}
                setIsPushedReply={setIsPushedReply}
                commentUsername={comment.username}
              />
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Paper>
      <Divider variant="fullWidth" style={{ margin: "3px 0" }} />
    </>
  );
};

export default EachComment;
