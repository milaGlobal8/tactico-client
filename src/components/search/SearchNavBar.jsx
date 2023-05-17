import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import { usePostGoodUserColor } from "../../hooks/usePostGoodUserColor";
import SearchPost from "./SearchPost";

const SearchNavBar = () => {
  //カスタムフックの使用
  const { isPost, styleSelected, onClickChangeColor } = usePostGoodUserColor();

  return (
    <div
      className="search_navbar container-fluid p-0 m-0 border-bottom border-dark"
      style={{ flex: 1 }}
    >
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
      </nav>

      <SearchPost />
    </div>
  );
};

export default SearchNavBar;
