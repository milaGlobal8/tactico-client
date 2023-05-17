import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { AuthContext } from "./../../state/AuthContext";

// ログイン中を表示するためのアイコン ↓
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  // ログインしているか
  const { user } = useContext(AuthContext);

  //navigateのインスタンス化
  const navigate = useNavigate();

  const checkSignIn = () => {
    if (user) {
      navigate(`/profile`);
    } else {
      navigate("/signIn");
    }
  };

  return (
    <div className="container-fluid p-0 border border-dark">
      <nav
        style={{ backgroundColor: "rgba(239,246,255,0.7)" }}
        className="navbar border border-dark d-flex justify-content-evenly"
      >
        <div>
          <Tooltip title="Home">
            <IconButton edge="end" onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Post">
            <IconButton edge="end" onClick={() => navigate("/post")}>
              <ArticleIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Search">
            <IconButton edge="end" onClick={() => navigate("/search")}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Profile">
            <IconButton edge="end" onClick={checkSignIn}>
              <PersonIcon />
            </IconButton>
          </Tooltip>
        </div>
      </nav>
      {/* {loginState ? (
        <></>
      ) : (
        <div className="d-flex bg-success bg-gradient border border-dark">
          <AccountCircleIcon className="ms-auto" />
          {adminUsers.admin_name}
        </div>
      )} */}
    </div>
  );
};

export default Header;
