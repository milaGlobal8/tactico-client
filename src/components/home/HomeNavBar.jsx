import React, { memo } from "react";
import { Tooltip, Button } from "@mui/material";
import { useChangeComponent } from "../../hooks/useChangeComponent";
import EUL from "./postList/EUL";
import JL from "./postList/JL";
import National from "./postList/National";

const HomeNavBar = memo(() => {
  //カスタムフックの使用
  const { euSelected, japSelected, nationalSelected, onClickChangeComponent } =
    useChangeComponent();

  return (
    <div className="home_navbar container-fluid p-0">
      <nav
        style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
        className="navbar border-start border-bottom border-end border-dark d-flex justify-content-evenly p-0"
      >
        <div>
          <Tooltip title="European">
            <Button
              className="button_for_mobile"
              type="button"
              sx={euSelected ? { color: "purple" } : { color: "black" }}
              onPointerEnter={(e) => onClickChangeComponent(e)}
            >
              European
            </Button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="J-league">
            <Button
              className="button_for_mobile"
              type="button"
              sx={japSelected ? { color: "red" } : { color: "black" }}
              onPointerEnter={(e) => onClickChangeComponent(e)}
            >
              J-league
            </Button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="National">
            <Button
              className="button_for_mobile"
              type="button"
              sx={nationalSelected ? { color: "primary" } : { color: "black" }}
              onPointerEnter={(e) => onClickChangeComponent(e)}
            >
              National
            </Button>
          </Tooltip>
        </div>
      </nav>
      {/* ボタンに応じてリーグ種を変更する デフォルトは"European" */}
      {euSelected ? <EUL /> : <></>}
      {japSelected ? <JL /> : <></>}
      {nationalSelected ? <National /> : <></>}
    </div>
  );
});

export default HomeNavBar;
