import * as React from "react";
import { useState } from "react";
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
import Snackbar from "@mui/material/Snackbar";

export default function NoUserPostTitleGrid({ post }) {
  const [isPushedIcon, setIsPushedIcon] = useState(false);

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
  const handleLike = () => {
    setIsPushedIcon(false);
    setState({ ...state, open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

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
          message="ログインされた方のみいいねを押すことができます。"
          key={vertical + horizontal}
        />
      )}

      <Grid container spacing={0}>
        <Grid item>
          <ButtonBase
            sx={{ width: "auto", height: "auto" }}
            className="m-2"
            onClick={() => handleIcon()}
          >
            <Grid item container>
              <Avatar
                alt="complex"
                src={
                  post.profilePicture
                    ? process.env.REACT_APP_API_URL +
                      `/users/profilePicture/${post.profilePicture}`
                    : sampleIcon
                }
                className="border border-dark"
              />
            </Grid>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
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
              <Typography variant="body2">
                注目選手:{post.goodPlayer}
              </Typography>
              <Typography variant="body2">
                応援チーム:{post.favoredTeam}
              </Typography>
              <Typography variant="body2">
                基本フォーメーション:{post.formation}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {time}
            </Typography>
          </Grid>
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
          <IconButton onClick={() => handleLike()}>
            <FavoriteIcon />
          </IconButton>
          <span>{post.likes.length}人がいいねを押しました</span>
        </div>
        {/* 閲覧数 */}
        <div className="views_container">
          <RemoveRedEyeIcon color="info" sx={{ mr: 1 }} />
          <span>{post.views}人が訪れました</span>
        </div>
      </div>
    </Paper>
  );
}
