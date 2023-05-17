import * as React from "react";
import { useState, useContext, useEffect, memo } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import sampleIcon from "../../../images/sampleIcon.png";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import OffenseTacticsModal from "./OffenseTacticsModal";
import DefenseTacticsModal from "./DefenseTacticsModal";
import { formatDistance, format } from "date-fns";
import { ja } from "date-fns/locale";
import { AuthContext } from "./../../../state/AuthContext";
import axios from "axios";
import { useHandleViews } from "../../../hooks/useHandleViews.js";
import { usePostSettings } from "../../../hooks/usePostSettings";
import CustomizedMenus from "./CustomizedMenus";
import { useNavigate } from "react-router-dom";

export const PostTitleGrid = memo(({ post }) => {
  const { user: currentUser } = useContext(AuthContext);

  // navigate
  const navigate = useNavigate();

  // ハートの色
  const [isPushed, setIsPushed] = useState(
    post.likes.includes(currentUser._id)
  );
  // いいねの数
  const [like, setLike] = useState(post.likes.length);
  // いいねが押されたか否か
  const [isLiked, setIsLiked] = useState(post.likes.includes(currentUser._id));

  const handleLike = async () => {
    try {
      // いいねのAPIを叩く
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }

    // いいねの数が変動
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    // ハートの色が変動
    setIsPushed(!isPushed);
  };

  // 自分の投稿なら編集できるようにする
  const { isCurrentUserPost, handleCheckMyPost } = usePostSettings();
  // 閲覧数
  const { handleViews } = useHandleViews();
  useEffect(() => {
    if (currentUser) {
      handleCheckMyPost(post.userId, currentUser._id);
      handleViews(post._id);
    } else {
      return;
    }
  }, []);

  // 時間
  let time = formatDistance(new Date(), Date.parse(post.createdAt), {
    locale: ja,
  });
  if (time.indexOf("未満") !== -1) {
    time = "たった今";
  } else if (time.indexOf("か月") !== -1 || time.indexOf("年") !== -1) {
    time = format(Date.parse(post.createdAt), "yyyy年M月d日", {
      locale: ja,
    });
  } else {
    time = time + "前";
  }

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "auto",
        flexGrow: 1,
        backgroundColor: "#FFFFFE",
      }}
    >
      <Grid
        container
        spacing={0}
        className="post_title d-flex justify-content-between"
      >
        <Grid item className="avatar_box">
          <ButtonBase
            className="avatar_btn m-2"
            sx={{ width: "auto", height: "auto" }}
            onClick={() =>
              navigate(`/profile/${post.username}`, { state: post })
            }
          >
            <Grid item container>
              <Avatar
                className="border border-dark"
                alt="complex"
                src={
                  post.profilePicture
                    ? `/users/profilePicture/${post.profilePicture}`
                    : sampleIcon
                }
              />
            </Grid>
          </ButtonBase>
        </Grid>

        {/* 自分の投稿ならいろいろいじることができる */}
        {isCurrentUserPost ? <CustomizedMenus post={post} /> : <></>}
      </Grid>

      <Grid item xs={12} sm container className="user_info_box">
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              fontWeight="Bold"
              textTransform="none"
            >
              {post.username}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {post.postTitle}
            </Typography>
            <Typography variant="body2">注目選手:{post.goodPlayer}</Typography>
            <Typography variant="body2">
              応援チーム:{post.favoredTeam}
            </Typography>
            <Typography variant="body2">
              基本フォーメーション:{post.formation}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div" className="time_box">
            {time}
          </Typography>
        </Grid>
      </Grid>
      {/* 戦術確認モーダル */}
      <div className="tactics_btn_container w-100 pt-3 d-flex justify-content-end">
        {/* 攻撃 */}
        <OffenseTacticsModal offenseTactics={post.offense} />
        {/* 守備 */}
        <DefenseTacticsModal defenseTactics={post.defense} />
      </div>
      <div className="likes_views_set_box d-flex flex-column justify-content-start align-items-end">
        {/* いいね数 */}
        <div className="likes_container">
          <IconButton variant="outlined" onClick={() => handleLike()}>
            <FavoriteIcon color={isPushed ? "error" : ""} />
          </IconButton>
          <span>{like}人がいいねを押しました</span>
        </div>
        {/* 閲覧数 */}
        <div className="views_container">
          <RemoveRedEyeIcon color="info" sx={{ mr: 1 }} />
          <span>{post.views}人が訪れました</span>
        </div>
      </div>
    </Paper>
  );
});

export default PostTitleGrid;
