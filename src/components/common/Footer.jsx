import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";

const Footer = () => {
  //navigateインスタンス化
  const navigate = useNavigate();

  return (
    <footer className="container-fluid p-0 border border-dark bg-light w-100 position-sticky">
      {/* コピーライト */}
      <div className="copyRight bg-dark d-flex justify-content-around py-3">
        <div className="sns border-bottom border-dark d-flex align-items-center">
          <p className="m-0 p-2">
            <strong className="text-white">公式SNS</strong>
          </p>
          <div className="snsBox">
            <Tooltip title="Twitter">
              <IconButton
                edge="end"
                href="https://twitter.com/TacticoJP"
                target="_blank"
              >
                <TwitterIcon color="info" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Tooltip title="©Tactico" className="text-light">
          <Button onClick={() => navigate("/")}>©Tactico</Button>
        </Tooltip>
        <Tooltip title="お問い合わせ" className="text-light">
          <Button onClick={() => navigate("/question")}>お問い合わせ</Button>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;
