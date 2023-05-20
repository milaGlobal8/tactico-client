import React, { memo } from "react";
import { Tooltip, Button } from "@mui/material";
import { usePostGoodUserColor } from "../../hooks/usePostGoodUserColor";
import MyPosts from "./MyPosts";
import LikedPosts from "./LikedPosts";
import "../../css/button.css";

const ProfileNavBar = memo(() => {
  //カスタムフックの使用
  const { isPost, isGood, styleSelected, onClickChangeColor } =
    usePostGoodUserColor();

  return (
    <div className="container-fluid p-0 border-bottom border-dark">
      <nav
        style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
        className="navbar border border-dark d-flex justify-content-evenly align-items-center"
      >
        <div className="post_btn">
          <Tooltip title="投稿">
            <Button
              className="button_for_mobile"
              type="button"
              sx={isPost ? styleSelected : { color: "black" }}
              variant="text"
              onClick={(e) => onClickChangeColor(e)}
            >
              投稿
            </Button>
          </Tooltip>
        </div>

        <div className="good_post_btn">
          <Tooltip title="いいね">
            <Button
              className="button_for_mobile"
              type="button"
              sx={isGood ? styleSelected : { color: "black" }}
              variant="text"
              onClick={(e) => onClickChangeColor(e)}
            >
              いいね
            </Button>
          </Tooltip>
        </div>
      </nav>
      {/* 投稿したものかそのユーザーがいいねした投稿の切替をここで行う */}
      {isPost ? <MyPosts /> : <LikedPosts />}
    </div>
  );
});

export default ProfileNavBar;
