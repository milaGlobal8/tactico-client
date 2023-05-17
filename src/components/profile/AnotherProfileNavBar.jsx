import React, { memo } from "react";
import { Tooltip, IconButton } from "@mui/material";
import { usePostGoodUserColor } from "../../hooks/usePostGoodUserColor";
import AnotherUserPosts from "./AnotherUserPosts";
import AnotherUserLikedPosts from "./AnotherUserLikedPosts";

const AnotherProfileNavBar = memo(({ user }) => {
  //カスタムフックの使用
  const { isPost, isGood, styleSelected, onClickChangeColor } =
    usePostGoodUserColor();

  return (
    <div className="container-fluid p-0 border-bottom border-dark">
      <nav
        style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
        className="navbar border border-dark d-flex justify-content-evenly align-items-center"
      >
        <div>
          <Tooltip title="投稿">
            <IconButton
              sx={isPost ? styleSelected : { color: "dark" }}
              edge="start"
              onClick={(e) => onClickChangeColor(e)}
            >
              投稿
            </IconButton>
          </Tooltip>
        </div>

        <div>
          <Tooltip title="いいね">
            <IconButton
              sx={isGood ? styleSelected : { color: "dark" }}
              edge="start"
              onClick={(e) => onClickChangeColor(e)}
            >
              いいね
            </IconButton>
          </Tooltip>
        </div>
      </nav>
      {/* 投稿したものかそのユーザーがいいねした投稿の切替をここで行う */}
      {isPost ? (
        <AnotherUserPosts user={user} />
      ) : (
        <AnotherUserLikedPosts user={user} />
      )}
    </div>
  );
});

export default AnotherProfileNavBar;
